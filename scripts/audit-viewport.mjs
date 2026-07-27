/**
 * Auditoria de layout em larguras reais, via Chrome DevTools Protocol.
 * O --window-size do Chrome no macOS não desce abaixo da largura mínima da
 * janela, então emulação de dispositivo é a única forma de testar 320px.
 *
 * Uso: node scripts/audit-viewport.mjs [baseUrl]
 */
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://localhost:4173';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const ROUTES = [
  '/',
  '/cliente',
  '/cliente/antes',
  '/cliente/dia-da-sessao',
  '/cliente/cuidados-depois',
  '/cliente/cicatrizacao',
  '/sinais-de-alerta',
  '/emergencias',
  '/tatuador',
  '/tatuador/triagem',
  '/estilos',
  '/fontes',
  '/sobre',
  '/rota-inexistente',
];

const WIDTHS = [320, 375, 768, 1280];

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--no-first-run',
  '--user-data-dir=/tmp/tt-audit-profile',
  'about:blank',
]);

let ws;
let messageId = 0;
const pending = new Map();

function send(method, params = {}, sessionId) {
  const id = ++messageId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
}

async function connect() {
  for (let attempt = 0; attempt < 40; attempt++) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const { webSocketDebuggerUrl } = await response.json();
      ws = new WebSocket(webSocketDebuggerUrl);
      await new Promise((resolve, reject) => {
        ws.onopen = resolve;
        ws.onerror = reject;
      });
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (!message.id) return;
        const entry = pending.get(message.id);
        if (!entry) return;
        pending.delete(message.id);
        if (message.error) entry.reject(new Error(message.error.message));
        else entry.resolve(message.result);
      };
      return;
    } catch {
      await sleep(250);
    }
  }
  throw new Error('não foi possível conectar ao Chrome');
}

const PROBE = `(() => {
  const de = document.documentElement;
  const overflow = de.scrollWidth - de.clientWidth;
  const offenders = [];
  if (overflow > 0) {
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      if (r.right > de.clientWidth + 1 || r.left < -1) {
        offenders.push(
          el.tagName.toLowerCase() +
            (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '') +
            ' [' + Math.round(r.left) + '→' + Math.round(r.right) + ']'
        );
      }
      if (offenders.length >= 6) break;
    }
  }
  // WCAG 2.5.8 isenta link inline dentro de um bloco de texto. Só medimos
  // alvos que se comportam como controle: bloco, flex ou grid.
  const tiny = [];
  for (const el of document.querySelectorAll('a, button, input, [tabindex]')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    // Input 1x1 escondido cujo alvo real é o <label> que o envolve.
    if (r.width <= 1 && r.height <= 1 && el.closest('label')) continue;
    const display = getComputedStyle(el).display;
    if (display === 'inline') continue;
    if (r.height < 24 || r.width < 24) {
      tiny.push(el.tagName.toLowerCase() + '"' + (el.textContent || '').trim().slice(0, 24) + '" ' + Math.round(r.width) + 'x' + Math.round(r.height));
    }
    if (tiny.length >= 4) break;
  }
  const h1 = document.querySelectorAll('main h1').length;
  const hidden = document.querySelectorAll('[data-reveal]:not([data-revealed])').length;
  return JSON.stringify({ overflow, offenders, tiny, h1, hidden });
})()`;

await connect();
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);

let failures = 0;

for (const width of WIDTHS) {
  console.log(`\n=== ${width}px ===`);
  await send(
    'Emulation.setDeviceMetricsOverride',
    { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 },
    sessionId,
  );

  for (const route of ROUTES) {
    await send('Page.navigate', { url: BASE + route }, sessionId);
    await sleep(700);
    // Rolagem em passos, como um leitor real. De uma vez só não funciona:
    // `content-visibility: auto` só materializa a altura real das seções
    // conforme elas se aproximam, então a página cresce durante a descida.
    for (let step = 0; step < 12; step++) {
      await send(
        'Runtime.evaluate',
        { expression: 'window.scrollBy(0, window.innerHeight * 0.9)' },
        sessionId,
      );
      await sleep(120);
    }
    await sleep(400);

    const { result } = await send(
      'Runtime.evaluate',
      { expression: PROBE, returnByValue: true },
      sessionId,
    );
    const data = JSON.parse(result.value);

    const problems = [];
    if (data.overflow > 0) problems.push(`overflow-x ${data.overflow}px → ${data.offenders.join(' | ')}`);
    if (data.h1 !== 1) problems.push(`${data.h1} <h1> em main (esperado 1)`);
    if (data.tiny.length) problems.push(`alvo pequeno: ${data.tiny.join(', ')}`);
    if (data.hidden > 0) problems.push(`${data.hidden} bloco(s) ainda invisível(is) após scroll`);

    if (problems.length) {
      failures++;
      console.log(`  FALHA ${route}`);
      for (const problem of problems) console.log(`        ${problem}`);
    } else {
      console.log(`  ok    ${route}`);
    }
  }
}

ws.close();
chrome.kill();

console.log(failures === 0 ? '\nTudo ok.' : `\n${failures} rota(s) com problema.`);
process.exit(failures === 0 ? 0 : 1);

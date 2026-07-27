/**
 * Contraste real de texto contra o fundo efetivamente pintado atrás dele,
 * em todas as rotas. Criado quando a UI passou do tema escuro para o papel:
 * inverter superfície é onde contraste quebra silenciosamente.
 *
 * Limites do WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande
 * (>= 24px, ou >= 18.66px em negrito).
 *
 * Uso: node scripts/audit-contrast.mjs [baseUrl]
 */
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://localhost:4173';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9336;

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

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--no-first-run',
  '--user-data-dir=/tmp/tt-contrast-profile',
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
  const parse = (c) => {
    const n = c.match(/[\\d.]+/g);
    if (!n) return null;
    return { r: +n[0], g: +n[1], b: +n[2], a: n.length > 3 ? +n[3] : 1 };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  // Compõe todos os fundos da cadeia de ancestrais até achar um opaco.
  const effectiveBg = (el) => {
    const layers = [];
    let node = el;
    while (node && node !== document.documentElement) {
      const bg = parse(getComputedStyle(node).backgroundColor);
      if (bg && bg.a > 0) {
        layers.push(bg);
        if (bg.a === 1) break;
      }
      node = node.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
    return base;
  };
  const ratio = (a, b) => {
    const l1 = lum(a);
    const l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };

  const problems = [];
  for (const el of document.querySelectorAll('body *')) {
    // Só nós que realmente pintam texto próprio.
    const text = [...el.childNodes]
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent.trim())
      .join(' ')
      .trim();
    if (!text) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 2 || rect.height <= 2) continue; // visually-hidden e afins

    const style = getComputedStyle(el);
    if (style.visibility === 'hidden' || +style.opacity === 0) continue;

    const fgRaw = parse(style.color);
    if (!fgRaw) continue;
    const bg = effectiveBg(el);
    const fg = over(fgRaw, bg);
    const r = ratio(fg, bg);

    const size = parseFloat(style.fontSize);
    const weight = +style.fontWeight || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const min = large ? 3 : 4.5;

    if (r < min) {
      problems.push({
        text: text.slice(0, 42),
        cls: (typeof el.className === 'string' ? el.className : '') || el.tagName,
        ratio: Math.round(r * 100) / 100,
        min,
        size: Math.round(size),
      });
    }
  }
  return JSON.stringify(problems.slice(0, 8));
})()`;

await connect();
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send(
  'Emulation.setDeviceMetricsOverride',
  { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false },
  sessionId,
);

let failures = 0;

for (const route of ROUTES) {
  await send('Page.navigate', { url: BASE + route }, sessionId);
  await sleep(800);
  for (let step = 0; step < 12; step++) {
    await send(
      'Runtime.evaluate',
      { expression: 'window.scrollBy(0, window.innerHeight * 0.9)' },
      sessionId,
    );
    await sleep(110);
  }
  await sleep(350);

  const { result } = await send(
    'Runtime.evaluate',
    { expression: PROBE, returnByValue: true },
    sessionId,
  );
  const problems = JSON.parse(result.value);

  if (problems.length === 0) {
    console.log(`  ok    ${route}`);
  } else {
    failures++;
    console.log(`  FALHA ${route}`);
    for (const p of problems) {
      console.log(`        ${p.ratio}:1 (mín ${p.min}) ${p.size}px .${p.cls} — "${p.text}"`);
    }
  }
}

ws.close();
chrome.kill();

console.log(
  failures === 0 ? '\nContraste AA em todas as rotas.' : `\n${failures} rota(s) com contraste baixo.`,
);
process.exit(failures === 0 ? 0 : 1);

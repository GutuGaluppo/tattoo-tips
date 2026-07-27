/**
 * Estados que não aparecem em uma captura simples: menu móvel aberto,
 * prefers-reduced-motion, folha de impressão e navegação por teclado.
 *
 * Uso: node scripts/audit-states.mjs [baseUrl]
 */
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://localhost:4173';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9334;

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--no-first-run',
  '--user-data-dir=/tmp/tt-states-profile',
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

await connect();
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send('Emulation.setTouchEmulationEnabled', { enabled: false }, sessionId);

async function evaluate(expression) {
  const { result } = await send('Runtime.evaluate', { expression, returnByValue: true }, sessionId);
  return result.value;
}

async function go(route, width = 1280, height = 900) {
  await send(
    'Emulation.setDeviceMetricsOverride',
    { width, height, deviceScaleFactor: 1, mobile: width < 768 },
    sessionId,
  );
  await send('Page.navigate', { url: BASE + route }, sessionId);
  await sleep(900);
}

async function shot(name, captureBeyondViewport = false) {
  const { data } = await send(
    'Page.captureScreenshot',
    { format: 'png', captureBeyondViewport },
    sessionId,
  );
  writeFileSync(`/tmp/tt-${name}.png`, Buffer.from(data, 'base64'));
  console.log(`  captura /tmp/tt-${name}.png`);
}

const results = [];
function check(label, passed, detail = '') {
  results.push({ label, passed, detail });
  console.log(`  ${passed ? 'ok   ' : 'FALHA'} ${label}${detail ? ` — ${detail}` : ''}`);
}

// --------------------------------------------------------- menu móvel
console.log('\n=== menu móvel (375px) ===');
await go('/cliente/cuidados-depois', 375, 800);

const toggleFound = await evaluate(`!!document.querySelector('.mobile-nav-toggle')`);
check('botão de menu presente no mobile', toggleFound);

await evaluate(`document.querySelector('.mobile-nav-toggle').click()`);
await sleep(400);

check(
  'aria-expanded vira true ao abrir',
  (await evaluate(`document.querySelector('.mobile-nav-toggle').getAttribute('aria-expanded')`)) ===
    'true',
);
check('drawer renderizado', await evaluate(`!!document.getElementById('menu-principal')`));
// Um drawer colapsado renderiza no DOM e mesmo assim não mostra nada:
// medir a altura real é o que pega esse tipo de falha.
const drawerHeight = await evaluate(
  `Math.round(document.getElementById('menu-principal').getBoundingClientRect().height)`,
);
check('drawer com altura utilizável', drawerHeight > 240, `${drawerHeight}px`);
check(
  'drawer cobre o conteúdo da página',
  await evaluate(`(() => {
    const d = document.getElementById('menu-principal').getBoundingClientRect();
    const point = document.elementFromPoint(d.left + d.width / 2, d.top + d.height / 2);
    return !!point && !!point.closest('#menu-principal');
  })()`),
);
check(
  'scroll do corpo travado com o drawer aberto',
  (await evaluate(`getComputedStyle(document.body).overflow`)) === 'hidden',
);
check(
  'foco move para dentro do drawer',
  await evaluate(`!!document.activeElement.closest('#menu-principal')`),
);
await shot('mobile-menu');

// Esc fecha
await send(
  'Input.dispatchKeyEvent',
  { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 },
  sessionId,
);
await sleep(300);
check('Esc fecha o drawer', !(await evaluate(`!!document.getElementById('menu-principal')`)));
check(
  'foco volta para o botão de menu',
  await evaluate(`document.activeElement.classList.contains('mobile-nav-toggle')`),
);
check(
  'scroll do corpo liberado',
  (await evaluate(`getComputedStyle(document.body).overflow`)) !== 'hidden',
);

// ------------------------------------------------- prefers-reduced-motion
console.log('\n=== prefers-reduced-motion ===');
await send(
  'Emulation.setEmulatedMedia',
  { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] },
  sessionId,
);
await go('/', 1280, 900);

check(
  'nenhum bloco escondido sem scroll',
  (await evaluate(
    `[...document.querySelectorAll('[data-reveal]')].filter(el => getComputedStyle(el).opacity !== '1').length`,
  )) === 0,
);
check(
  'camadas de parallax sem transform',
  (await evaluate(
    `[...document.querySelectorAll('.parallax-layer')].every(el => !el.style.transform || el.style.transform === '')`,
  )) === true,
);
await shot('reduced-motion');

// ------------------------------------------------------------ impressão
console.log('\n=== impressão ===');
await send('Emulation.setEmulatedMedia', { media: 'print', features: [] }, sessionId);
await go('/cliente/cuidados-depois', 1280, 1200);
await send('Emulation.setEmulatedMedia', { media: 'print', features: [] }, sessionId);
await sleep(400);

const printState = await evaluate(`JSON.stringify({
  header: getComputedStyle(document.querySelector('.app-header')).display,
  toc: document.querySelector('.guide-toc') ? getComputedStyle(document.querySelector('.guide-toc')).display : 'ausente',
  video: document.querySelector('.video-embed') ? getComputedStyle(document.querySelector('.video-embed')).display : 'ausente',
  sources: getComputedStyle(document.querySelector('.source-list')).display,
  reviewed: !!document.querySelector('.last-reviewed'),
  checklistItems: document.querySelectorAll('.checklist-item').length,
  photos: [...document.querySelectorAll('.picture')].filter(el => getComputedStyle(el).display !== 'none').length,
  diagrams: [...document.querySelectorAll('.illustration')].filter(el => getComputedStyle(el).display !== 'none').length,
  lightText: [...document.querySelectorAll('main p, main li, main span, main h1, main h2, main h3, main h4, main td, main th')]
    .filter(el => {
      // Só interessa o que realmente vai para o papel.
      if (el.getClientRects().length === 0) return false;
      const c = getComputedStyle(el).color.match(/\\d+/g);
      return c && (Number(c[0]) + Number(c[1]) + Number(c[2])) / 3 > 140;
    })
    .slice(0, 4)
    .map(el => el.className || el.tagName),
  hiddenReveals: [...document.querySelectorAll('[data-reveal]')].filter(el => getComputedStyle(el).opacity !== '1').length
})`);
const print = JSON.parse(printState);
check('cabeçalho some na impressão', print.header === 'none');
check('sumário lateral some', print.toc === 'none');
check('vídeo some', print.video === 'none' || print.video === 'ausente');
check('fontes permanecem', print.sources !== 'none');
check('data de revisão permanece', print.reviewed);
check('itens do checklist permanecem', print.checklistItems > 0, `${print.checklistItems} itens`);
check('nada fica invisível no papel', print.hiddenReveals === 0);
check('fotos saem da impressão', print.photos === 0, `${print.photos} visíveis`);
check(
  'nenhum texto claro demais para o papel',
  print.lightText.length === 0,
  print.lightText.join(', '),
);

const { data: pdf } = await send(
  'Page.printToPDF',
  { printBackground: false, preferCSSPageSize: false },
  sessionId,
);
writeFileSync('/tmp/tt-print.pdf', Buffer.from(pdf, 'base64'));
console.log('  arquivo /tmp/tt-print.pdf');

ws.close();
chrome.kill();

const failed = results.filter((entry) => !entry.passed);
console.log(failed.length === 0 ? '\nTudo ok.' : `\n${failed.length} verificação(ões) falhou(aram).`);
process.exit(failed.length === 0 ? 0 : 1);

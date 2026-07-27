/**
 * Métricas de carregamento na build de produção, sem dependências extras.
 * Mede LCP, CLS, requisições e bytes por rota, com CPU e rede desacelerados
 * para aproximar de um celular mediano.
 *
 * Uso: node scripts/audit-perf.mjs [baseUrl]
 */
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://localhost:4173';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9335;
const ROUTES = ['/', '/cliente/cuidados-depois', '/emergencias', '/tatuador/triagem', '/estilos'];

// Orçamentos: acima disso a página deixa de servir a quem abre no estúdio
// com sinal ruim.
const BUDGET = { lcp: 2500, cls: 0.1, requests: 30, kb: 400 };

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--no-first-run',
  '--user-data-dir=/tmp/tt-perf-profile',
  'about:blank',
]);

let ws;
let messageId = 0;
const pending = new Map();
const events = [];

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
        if (message.method) {
          events.push(message);
          return;
        }
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
await send('Network.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send(
  'Emulation.setDeviceMetricsOverride',
  { width: 390, height: 844, deviceScaleFactor: 2, mobile: true },
  sessionId,
);

let failures = 0;
console.log('Celular emulado · CPU 4x mais lenta · rede 4G rápido\n');

for (const route of ROUTES) {
  await send('Network.clearBrowserCache', {}, sessionId);
  await send('Emulation.setCPUThrottlingRate', { rate: 4 }, sessionId);
  await send(
    'Network.emulateNetworkConditions',
    {
      offline: false,
      latency: 40,
      downloadThroughput: (9 * 1024 * 1024) / 8,
      uploadThroughput: (1.5 * 1024 * 1024) / 8,
    },
    sessionId,
  );

  events.length = 0;
  await send('Page.navigate', { url: BASE + route }, sessionId);
  await sleep(4500);

  const { result } = await send(
    'Runtime.evaluate',
    {
      expression: `new Promise((resolve) => {
        let lcp = 0;
        let cls = 0;
        for (const entry of performance.getEntriesByType('largest-contentful-paint')) {
          lcp = Math.max(lcp, entry.startTime);
        }
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) lcp = Math.max(lcp, entry.startTime);
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) if (!entry.hadRecentInput) cls += entry.value;
        }).observe({ type: 'layout-shift', buffered: true });
        const nav = performance.getEntriesByType('navigation')[0];
        const resources = performance.getEntriesByType('resource');
        setTimeout(() => resolve(JSON.stringify({
          lcp: Math.round(lcp),
          cls: Number(cls.toFixed(4)),
          domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
          requests: resources.length + 1,
          kb: Math.round((resources.reduce((sum, r) => sum + (r.transferSize || 0), 0) + (nav.transferSize || 0)) / 1024),
          thirdParty: resources.filter(r => !r.name.startsWith(location.origin)).map(r => new URL(r.name).host),
        })), 600);
      })`,
      awaitPromise: true,
      returnByValue: true,
    },
    sessionId,
  );

  const metrics = JSON.parse(result.value);
  const problems = [];
  if (metrics.lcp > BUDGET.lcp) problems.push(`LCP ${metrics.lcp}ms > ${BUDGET.lcp}ms`);
  if (metrics.cls > BUDGET.cls) problems.push(`CLS ${metrics.cls} > ${BUDGET.cls}`);
  if (metrics.requests > BUDGET.requests) problems.push(`${metrics.requests} requisições`);
  if (metrics.kb > BUDGET.kb) problems.push(`${metrics.kb} KB transferidos`);
  // Um manual de saúde não pode chamar terceiros sem ação do usuário.
  if (metrics.thirdParty.length > 0) {
    problems.push(`terceiros no carregamento: ${[...new Set(metrics.thirdParty)].join(', ')}`);
  }

  const status = problems.length === 0 ? 'ok   ' : 'FALHA';
  if (problems.length) failures++;
  console.log(
    `  ${status} ${route.padEnd(26)} LCP ${String(metrics.lcp).padStart(4)}ms · CLS ${String(metrics.cls).padEnd(6)} · ${String(metrics.requests).padStart(2)} req · ${String(metrics.kb).padStart(3)} KB`,
  );
  for (const problem of problems) console.log(`        ${problem}`);
}

ws.close();
chrome.kill();

console.log(failures === 0 ? '\nDentro do orçamento.' : `\n${failures} rota(s) fora do orçamento.`);
process.exit(failures === 0 ? 0 : 1);

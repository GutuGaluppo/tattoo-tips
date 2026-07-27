/**
 * Verifica se todas as URLs do registry ainda respondem. Rodar periodicamente:
 * conteúdo de saúde perde valor quando a fonte citada some.
 *
 * Sites que bloqueiam acesso automatizado (403/429) são reportados como
 * "conferir manualmente" e não derrubam a execução — o que derruba é link
 * morto de verdade.
 */
import { allSources } from '../src/content/references';

const TIMEOUT_MS = 20_000;
const USER_AGENT = 'Mozilla/5.0 (compatible; tattoo-tips-linkcheck/1.0)';

type Result = { status: 'ok' | 'manual' | 'falha'; code: number | string; url: string; id: string };

async function check(url: string, id: string): Promise<Result> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    // Alguns servidores rejeitam HEAD; GET com corpo descartado é mais confiável.
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': USER_AGENT, accept: '*/*' },
    });

    if (response.ok) return { status: 'ok', code: response.status, url, id };
    if (response.status === 403 || response.status === 429) {
      return { status: 'manual', code: response.status, url, id };
    }
    return { status: 'falha', code: response.status, url, id };
  } catch (error) {
    return { status: 'falha', code: (error as Error).name, url, id };
  } finally {
    clearTimeout(timer);
  }
}

const results = await Promise.all(allSources.map((source) => check(source.url, source.id)));

const failures = results.filter((result) => result.status === 'falha');
const manual = results.filter((result) => result.status === 'manual');

for (const result of results.filter((entry) => entry.status === 'ok')) {
  console.log(`  ok       ${result.id}`);
}
for (const result of manual) {
  console.warn(
    `  manual   ${result.id} (HTTP ${result.code}) — bloqueia bots, conferir no browser`,
  );
}
for (const result of failures) {
  console.error(`  falha    ${result.id} (HTTP ${result.code}) ${result.url}`);
}

console.log(
  `\n${results.length - failures.length - manual.length} ok · ${manual.length} manual · ${failures.length} falha`,
);

if (failures.length > 0) process.exit(1);

import { useEffect } from 'react';
import type { Locale } from '@/i18n/locale';

const GUIDE_ROUTE_IDS = new Set([
  'clientBefore',
  'clientSessionDay',
  'clientAftercare',
  'clientHealing',
  'warningSigns',
  'emergency',
  'artistScreening',
]);

const PORTUGUESE_TEXT = /[ãõáàâéêíóôúç]|\b(não|para|com|uma|que|este|esta|sobre|cuidados|tatuagem|fonte|emergências|sinais)\b/i;

async function translate(text: string, locale: Locale) {
  const key = `translation:${locale}:${text}`;
  const cached = sessionStorage.getItem(key);
  if (cached) return cached;

  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.search = new URLSearchParams({ client: 'gtx', sl: 'pt', tl: locale, dt: 't', q: text }).toString();
  const response = await fetch(url);
  if (!response.ok) throw new Error('Translation request failed');
  const payload = (await response.json()) as [Array<[string]>];
  const result = payload[0].map(([part]) => part).join('');
  sessionStorage.setItem(key, result);
  return result;
}

/**
 * Versão provisória para páginas editoriais que ainda não têm arquivos de
 * conteúdo por idioma. Os guias clínicos continuam usando seus textos
 * traduzidos e revisáveis, sem chamadas a serviço externo.
 */
export function AutomaticPageTranslation({ locale, routeId }: { locale: Locale; routeId?: string }) {
  useEffect(() => {
    if (locale === 'pt' || !routeId || GUIDE_ROUTE_IDS.has(routeId)) return;

    const root = document.querySelector('main');
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('[data-no-auto-translate], script, style, svg, code, pre')) {
          return NodeFilter.FILTER_REJECT;
        }
        const value = node.nodeValue?.trim() ?? '';
        return value.length > 2 && PORTUGUESE_TEXT.test(value)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);

    let cancelled = false;
    void Promise.all(
      nodes.map(async (node) => {
        const original = node.nodeValue ?? '';
        try {
          const translated = await translate(original, locale);
          if (!cancelled && node.isConnected) node.nodeValue = translated;
        } catch {
          // A página continua legível em português caso o serviço esteja indisponível.
        }
      }),
    );

    return () => {
      cancelled = true;
    };
  }, [locale, routeId]);

  return null;
}

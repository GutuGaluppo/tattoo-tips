import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { useLocale } from '@/i18n/useLocale';
import { htmlLangTags, locales, ogLocaleTags, defaultLocale } from '@/i18n/locale';
import { pathFor, routeIdForPath } from '@/i18n/routes';

interface DocumentMeta {
  title: string;
  description: string;
  /** Dados estruturados schema.org já montados. */
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

const JSON_LD_ID = 'route-structured-data';
const ALT_LINK_ATTR = 'data-i18n-alt';

function clearAlternateLinks() {
  document.head.querySelectorAll(`link[${ALT_LINK_ATTR}]`).forEach((el) => el.remove());
}

/**
 * Metadados por rota sem react-helmet: title, description, canonical, Open
 * Graph, JSON-LD e — porque as rotas agora existem em quatro idiomas —
 * `lang`, `og:locale` e os `hreflang` que apontam para as variantes de
 * idioma da mesma página, sempre a partir da URL real (nunca de um `path`
 * fixo passado pela página, que divergiria assim que o guia ganhasse
 * prefixo de locale).
 */
export function useDocumentMeta({ title, description, jsonLd, noIndex }: DocumentMeta) {
  const { pathname } = useLocation();
  const { locale } = useLocale();

  useEffect(() => {
    const routeId = routeIdForPath(locale, pathname);
    const isHome = routeId === 'home';
    const fullTitle = isHome ? `${site.name} — ${site.tagline}` : `${title} — ${site.name}`;
    const canonical = `${site.url}${pathname}`;

    document.documentElement.lang = htmlLangTags[locale];
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', ogLocaleTags[locale]);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noIndex) {
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex, follow');
    } else if (robots) {
      robots.remove();
    }

    clearAlternateLinks();
    if (routeId) {
      for (const altLocale of locales) {
        const altLink = document.createElement('link');
        altLink.rel = 'alternate';
        altLink.hreflang = htmlLangTags[altLocale];
        altLink.href = `${site.url}${pathFor(routeId, altLocale)}`;
        altLink.setAttribute(ALT_LINK_ATTR, 'true');
        document.head.appendChild(altLink);
      }
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      defaultLink.href = `${site.url}${pathFor(routeId, defaultLocale)}`;
      defaultLink.setAttribute(ALT_LINK_ATTR, 'true');
      document.head.appendChild(defaultLink);
    }

    document.getElementById(JSON_LD_ID)?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSON_LD_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(JSON_LD_ID)?.remove();
      clearAlternateLinks();
    };
  }, [title, description, jsonLd, noIndex, pathname, locale]);
}

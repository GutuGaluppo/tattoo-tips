import { useEffect } from 'react';
import { site } from '@/config/site';

interface DocumentMeta {
  title: string;
  description: string;
  /** Caminho da rota, com barra inicial. */
  path: string;
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

/**
 * Metadados por rota sem react-helmet: o suficiente para title, description,
 * canonical, Open Graph e JSON-LD em uma SPA.
 */
export function useDocumentMeta({ title, description, path, jsonLd, noIndex }: DocumentMeta) {
  useEffect(() => {
    const fullTitle = path === '/' ? `${site.name} — ${site.tagline}` : `${title} — ${site.name}`;
    const canonical = `${site.url}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
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
    };
  }, [title, description, path, jsonLd, noIndex]);
}

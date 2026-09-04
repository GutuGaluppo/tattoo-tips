/**
 * Gera sitemap.xml e robots.txt em public/ a partir das rotas declaradas —
 * uma lista só, sem risco de o sitemap divergir da navegação real. Cada
 * página publicada entra uma vez por idioma, com `xhtml:link` apontando
 * para as variantes irmãs (o corpo do guia pode continuar em português,
 * mas a URL e o idioma declarado batem com o que o visitante vê).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { site } from '../src/config/site';
import { locales, defaultLocale, htmlLangTags } from '../src/i18n/locale';
import { routeIds, pathFor } from '../src/i18n/routes';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const alternates = (id: (typeof routeIds)[number]) =>
  locales
    .map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${htmlLangTags[loc]}" href="${site.url}${pathFor(id, loc)}" />`,
    )
    .join('\n');

const urls = routeIds
  .flatMap((id) =>
    locales.map((loc) => {
      const path = pathFor(id, loc);
      const isHome = id === 'home' && loc === defaultLocale;
      return `  <url>
    <loc>${site.url}${path}</loc>
    <lastmod>${site.lastReviewed}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${isHome ? '1.0' : path.split('/').filter(Boolean).length > 1 ? '0.7' : '0.8'}</priority>
${alternates(id)}
  </url>`;
    }),
  )
  .join('\n');

writeFileSync(
  join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);

writeFileSync(
  join(publicDir, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`,
);

console.log(`sitemap.xml gerado com ${routeIds.length * locales.length} URLs (${routeIds.length} páginas × ${locales.length} idiomas).`);

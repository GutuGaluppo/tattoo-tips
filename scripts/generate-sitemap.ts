/**
 * Gera sitemap.xml e robots.txt em public/ a partir das rotas declaradas —
 * uma lista só, sem risco de o sitemap divergir da navegação real.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { publishedRoutes } from '../src/navigation';
import { site } from '../src/config/site';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const urls = publishedRoutes
  .map(
    (route) => `  <url>
    <loc>${site.url}${route === '/' ? '' : route}</loc>
    <lastmod>${site.lastReviewed}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : route.split('/').length > 2 ? '0.7' : '0.8'}</priority>
  </url>`,
  )
  .join('\n');

writeFileSync(
  join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

console.log(`sitemap.xml gerado com ${publishedRoutes.length} rotas.`);

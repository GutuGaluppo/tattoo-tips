import type { Guide } from '@/content/types';
import { site } from '@/config/site';
import { GuideLayout } from '@/components/content/GuideLayout';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

/**
 * Casca comum de qualquer guia: metadados, dados estruturados e layout.
 * Cada rota vira um arquivo de duas linhas.
 */
export function GuidePage({ guide }: { guide: Guide }) {
  useDocumentMeta({
    title: guide.title,
    description: guide.description,
    path: guide.slug,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: guide.title,
      description: guide.description,
      inLanguage: site.locale,
      dateModified: guide.lastReviewed,
      url: `${site.url}${guide.slug}`,
      audience: {
        '@type': 'Audience',
        audienceType: guide.audience === 'tatuador' ? 'Tattoo artists' : 'Tattoo clients',
      },
      isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
    },
  });

  return (
    <div className="container">
      <GuideLayout guide={guide} />
    </div>
  );
}

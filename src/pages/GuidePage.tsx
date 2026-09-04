import { useLocation } from 'react-router-dom';
import type { Guide } from '@/content/types';
import { site } from '@/config/site';
import { GuideLayout } from '@/components/content/GuideLayout';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLocale } from '@/i18n/useLocale';
import { htmlLangTags } from '@/i18n/locale';

/**
 * Casca comum de qualquer guia: metadados, dados estruturados e layout.
 * Cada rota vira um arquivo de duas linhas.
 */
export function GuidePage({ guide }: { guide: Guide }) {
  const { pathname } = useLocation();
  const { locale } = useLocale();

  useDocumentMeta({
    title: guide.title,
    description: guide.description,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: guide.title,
      description: guide.description,
      inLanguage: htmlLangTags[locale],
      dateModified: guide.lastReviewed,
      url: `${site.url}${pathname}`,
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

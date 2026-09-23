import { getSources, type SourceId } from '@/content/references';
import { shortOrg } from '@/content/org';
import type { Source } from '@/content/types';
import { useLocale } from '@/i18n/useLocale';
import { dateFormatLocales } from '@/i18n/locale';
import './content.css';

interface SourceRefsProps {
  ids?: readonly SourceId[];
  /** Exibe como linha própria em vez de citação inline. */
  block?: boolean;
}

/**
 * Citação inline. Diferente de um número solto, mostra a organização — o leitor
 * sabe se está lendo norma dos EUA, orientação clínica europeia ou material
 * educacional comercial antes de clicar.
 */
export function SourceRefs({ ids, block }: SourceRefsProps) {
  const { dict } = useLocale();
  if (!ids || ids.length === 0) return null;
  const sources = getSources(ids);

  return (
    <span className={block ? 'source-refs source-refs-block' : 'source-refs'}>
      <span className="visually-hidden">{dict.content.sourceLabel}: </span>
      {sources.map((source) => (
        <a
          key={source.id}
          className="source-ref"
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${source.title} — ${source.org}`}
        >
          {shortOrg(source.org)}
          {source.jurisdiction && source.jurisdiction !== 'global' && (
            <span className="source-ref-jur">{source.jurisdiction}</span>
          )}
        </a>
      ))}
    </span>
  );
}

/** Lista completa e verificável, no fim de cada guia e na página de fontes. */
export function SourceList({
  ids,
  title,
}: {
  ids: readonly SourceId[];
  title?: string;
}) {
  const { locale, dict } = useLocale();
  const sources = getSources(ids);
  if (sources.length === 0) return null;
  const displayedTitle = title ?? dict.content.sources;
  const kindLabels: Record<Source['kind'], string> = {
    norma: dict.content.sourceKinds.norma,
    'orientacao-clinica': dict.content.sourceKinds.clinicalGuidance,
    'orgao-regulador': dict.content.sourceKinds.regulator,
    educacional: dict.content.sourceKinds.educational,
    fabricante: dict.content.sourceKinds.manufacturer,
    video: dict.content.sourceKinds.video,
  };

  return (
    <section className="source-list" aria-label={displayedTitle}>
      <h2>{displayedTitle}</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            <p className="source-meta">
              {source.org} · {kindLabels[source.kind]}
              {source.jurisdiction && source.jurisdiction !== 'global'
                ? ` · ${dict.content.jurisdiction}: ${source.jurisdiction}`
                : ''}{' '}
              · {dict.content.checkedOn}{' '}
              <time dateTime={source.accessedAt}>
                {new Date(`${source.accessedAt}T12:00:00`).toLocaleDateString(dateFormatLocales[locale])}
              </time>
            </p>
            {source.note && <p className="source-note">{source.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

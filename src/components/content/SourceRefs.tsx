import { getSources, type SourceId } from '@/content/references';
import { shortOrg } from '@/content/org';
import type { Source } from '@/content/types';
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
  if (!ids || ids.length === 0) return null;
  const sources = getSources(ids);

  return (
    <span className={block ? 'source-refs source-refs-block' : 'source-refs'}>
      <span className="visually-hidden">Fontes: </span>
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

const KIND_LABEL: Record<Source['kind'], string> = {
  norma: 'Norma',
  'orientacao-clinica': 'Orientação clínica',
  'orgao-regulador': 'Órgão regulador',
  educacional: 'Material educacional',
  video: 'Vídeo',
};

/** Lista completa e verificável, no fim de cada guia e na página de fontes. */
export function SourceList({
  ids,
  title = 'Fontes',
}: {
  ids: readonly SourceId[];
  title?: string;
}) {
  const sources = getSources(ids);
  if (sources.length === 0) return null;

  return (
    <section className="source-list" aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            <p className="source-meta">
              {source.org} · {KIND_LABEL[source.kind]}
              {source.jurisdiction && source.jurisdiction !== 'global'
                ? ` · Jurisdição: ${source.jurisdiction}`
                : ''}{' '}
              · Verificado em{' '}
              <time dateTime={source.accessedAt}>
                {new Date(`${source.accessedAt}T12:00:00`).toLocaleDateString('pt-BR')}
              </time>
            </p>
            {source.note && <p className="source-note">{source.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

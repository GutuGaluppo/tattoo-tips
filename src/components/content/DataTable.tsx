import { useId, useMemo, useState } from 'react';
import type { TableBlock } from '@/content/types';
import { SourceRefs } from './SourceRefs';
import './content.css';

type DataTableProps = Omit<TableBlock, 'type'>;

type SortDirection = 'asc' | 'desc';

/**
 * Tabela real (`<table>` com caption e th/scope), com ordenação e busca
 * opcionais. Abaixo de 640px cada linha vira um card rotulado por CSS —
 * sem duplicar markup e sem depender de JS para caber em 320px.
 */
export function DataTable({
  title,
  caption,
  columns,
  rows,
  searchable,
  cardTitleKey,
  sources,
}: DataTableProps) {
  const searchId = useId();
  const captionId = useId();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<{ key: string; direction: SortDirection } | null>(null);

  const visibleRows = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = term
      ? rows.filter((row) =>
          columns.some((column) => (row[column.key] ?? '').toLowerCase().includes(term)),
        )
      : rows;

    if (!sort) return filtered;

    return [...filtered].sort((a, b) => {
      const result = (a[sort.key] ?? '').localeCompare(b[sort.key] ?? '', 'pt-BR', {
        numeric: true,
        sensitivity: 'base',
      });
      return sort.direction === 'asc' ? result : -result;
    });
  }, [columns, rows, query, sort]);

  function toggleSort(key: string) {
    setSort((previous) => {
      if (previous?.key !== key) return { key, direction: 'asc' };
      if (previous.direction === 'asc') return { key, direction: 'desc' };
      return null; // terceiro clique volta à ordem original do conteúdo
    });
  }

  const titleKey = cardTitleKey ?? columns[0]?.key;

  return (
    <section className="data-table" aria-labelledby={title ? captionId : undefined}>
      {(title || searchable) && (
        <header className="data-table-header no-print">
          {title && <h3 id={captionId}>{title}</h3>}
          {searchable && (
            <div className="data-table-search">
              <label htmlFor={searchId}>Filtrar</label>
              <input
                id={searchId}
                className="input"
                type="search"
                value={query}
                placeholder="Buscar na tabela"
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
              />
            </div>
          )}
        </header>
      )}

      {/* A região rolável precisa de nome próprio: repetir o título do bloco
          criaria dois landmarks com o mesmo nome para o leitor de tela. */}
      <div
        className="data-table-wrapper"
        role="region"
        aria-label={title ? `Tabela: ${title}` : 'Tabela'}
        tabIndex={0}
      >
        <table>
          {caption && <caption>{caption}</caption>}
          <thead>
            <tr>
              {columns.map((column) => {
                const isSorted = sort?.key === column.key;
                const ariaSort = isSorted
                  ? sort.direction === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : 'none';

                return (
                  <th
                    key={column.key}
                    scope="col"
                    aria-sort={column.sortable ? ariaSort : undefined}
                    data-align={column.align}
                  >
                    {column.sortable ? (
                      <button
                        type="button"
                        className="th-sort"
                        onClick={() => toggleSort(column.key)}
                      >
                        {column.label}
                        <span className="th-sort-icon" aria-hidden="true">
                          {isSorted ? (sort.direction === 'asc' ? '↑' : '↓') : '↕'}
                        </span>
                      </button>
                    ) : (
                      column.label
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row, index) => (
              <tr key={`${row[titleKey] ?? 'row'}-${index}`}>
                {columns.map((column) => (
                  <td key={column.key} data-label={column.label} data-align={column.align}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {visibleRows.length === 0 && (
          <p className="data-table-empty" role="status">
            Nenhuma linha corresponde a “{query}”.
          </p>
        )}
      </div>

      <SourceRefs ids={sources} block />
    </section>
  );
}

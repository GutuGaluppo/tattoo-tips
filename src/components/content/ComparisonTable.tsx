import type { ComparisonBlock } from '@/content/types';
import { SourceRefs } from './SourceRefs';
import './content.css';

type ComparisonTableProps = Omit<ComparisonBlock, 'type'>;

/**
 * "Esperado x sinal de alerta" — a pergunta mais frequente de quem acabou de
 * tatuar. Duas colunas semânticas, com rótulo textual além da cor, e leitura
 * empilhada no mobile sem perder o pareamento entre as duas respostas.
 */
export function ComparisonTable({
  title,
  expectedLabel,
  alarmingLabel,
  rows,
  sources,
}: ComparisonTableProps) {
  return (
    <section className="comparison-table">
      {title && <h3>{title}</h3>}

      <div
        className="comparison-wrapper"
        role="region"
        aria-label={title ? `Tabela: ${title}` : 'Tabela comparativa'}
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Situação</th>
              <th scope="col" className="col-expected">
                <span className="comparison-flag comparison-flag-ok" aria-hidden="true">
                  ✓
                </span>
                {expectedLabel}
              </th>
              <th scope="col" className="col-alarming">
                <span className="comparison-flag comparison-flag-alert" aria-hidden="true">
                  !
                </span>
                {alarmingLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.context}>
                <th scope="row">{row.context}</th>
                <td data-label={expectedLabel} className="col-expected">
                  {row.expected}
                </td>
                <td data-label={alarmingLabel} className="col-alarming">
                  {row.alarming}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SourceRefs ids={sources} block />
    </section>
  );
}

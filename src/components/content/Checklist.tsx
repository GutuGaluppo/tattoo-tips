import { useId } from 'react';
import { isStringArray, usePersistentState } from '@/hooks/usePersistentState';
import type { ChecklistBlock } from '@/content/types';
import { SourceRefs } from './SourceRefs';
import './content.css';

type ChecklistProps = Omit<ChecklistBlock, 'type'>;

/**
 * Checklist com progresso salvo em localStorage. O usuário abre a página no
 * estúdio, marca os itens e pode fechar o navegador sem perder o que já fez.
 */
export function Checklist({ id, title, description, items, sources }: ChecklistProps) {
  const headingId = useId();
  const [checked, setChecked, reset] = usePersistentState<string[]>(
    `checklist:${id}`,
    [],
    isStringArray,
  );

  const validIds = new Set(items.map((item) => item.id));
  // Itens removidos do conteúdo não devem contar no progresso de quem
  // já tinha marcado a versão anterior.
  const active = checked.filter((itemId) => validIds.has(itemId));
  const done = active.length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  function toggle(itemId: string) {
    setChecked((previous) =>
      previous.includes(itemId)
        ? previous.filter((entry) => entry !== itemId)
        : [...previous, itemId],
    );
  }

  return (
    <section className="checklist" aria-labelledby={headingId}>
      <header className="checklist-header">
        <div>
          <h3 id={headingId}>{title}</h3>
          {description && <p className="text-muted">{description}</p>}
        </div>
        <button
          type="button"
          className="btn btn-ghost checklist-reset no-print"
          onClick={reset}
          disabled={done === 0}
        >
          Reiniciar
        </button>
      </header>

      <div className="checklist-progress no-print">
        <div
          className="checklist-bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-labelledby={headingId}
        >
          <span style={{ width: `${percent}%` }} />
        </div>
        <p className="checklist-count" aria-live="polite">
          {done} de {total} concluídos
        </p>
      </div>

      <ul className="checklist-items">
        {items.map((item) => {
          const isChecked = active.includes(item.id);
          return (
            <li key={item.id} className="checklist-item" data-checked={isChecked || undefined}>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  name={`${id}-${item.id}`}
                />
                <span className="checklist-box" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" focusable="false">
                    <path
                      d="M3 8.5l3.2 3.2L13 4.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="checklist-text">
                  {item.label}
                  {item.detail && <span className="checklist-detail">{item.detail}</span>}
                  <SourceRefs ids={item.sources} />
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <SourceRefs ids={sources} block />
    </section>
  );
}

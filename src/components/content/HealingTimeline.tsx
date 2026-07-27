import { useEffect, useRef, useState } from 'react';
import type { TimelineBlock } from '@/content/types';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SourceRefs } from './SourceRefs';
import './content.css';

type HealingTimelineProps = Omit<TimelineBlock, 'type'>;

/**
 * Linha do tempo da cicatrização. A trilha vertical se preenche conforme os
 * marcos entram na viewport — um único IntersectionObserver local, encerrado
 * junto com o componente.
 */
export function HealingTimeline({ title, entries, sources }: HealingTimelineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list || reducedMotion || typeof IntersectionObserver === 'undefined') return;

    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-timeline-index]'));
    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          if (!record.isIntersecting) continue;
          const index = Number(record.target.getAttribute('data-timeline-index'));
          setReached((previous) => Math.max(previous, index + 1));
        }
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [entries.length, reducedMotion]);

  // Sem animação de scroll, a trilha nasce completa em vez de vazia.
  const visibleReached = reducedMotion ? entries.length : reached;
  const progress = entries.length === 0 ? 0 : (visibleReached / entries.length) * 100;

  return (
    <section className="timeline">
      {title && <h3>{title}</h3>}

      <ol className="timeline-list" ref={listRef}>
        <span
          className="timeline-track"
          aria-hidden="true"
          style={{ '--timeline-progress': `${progress}%` } as React.CSSProperties}
        />
        {entries.map((entry, index) => (
          <li
            key={entry.period}
            className="timeline-item"
            data-timeline-index={index}
            data-reached={index < visibleReached || undefined}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-period">{entry.period}</p>
              <h4>{entry.title}</h4>
              <p className="text-muted">{entry.text}</p>
              {entry.watchFor && (
                <p className="timeline-watch">
                  <strong>Ficar de olho:</strong> {entry.watchFor}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <SourceRefs ids={sources} block />
    </section>
  );
}

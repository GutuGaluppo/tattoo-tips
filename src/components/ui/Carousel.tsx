import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import './ui.css';

interface CarouselProps {
  children: ReactNode;
  /** Nome acessível da região rolável. */
  label: string;
  /** Conteúdo fixo à esquerda (o card de título da referência). */
  lead?: ReactNode;
}

/**
 * Trilha horizontal com scroll-snap e setas, como as fileiras da referência.
 * O scroll nativo continua funcionando: as setas são um atalho para mouse,
 * não o único caminho — no toque se arrasta, no teclado se tabula pelos
 * links, e cada item continua sendo um card completo.
 */
export function Carousel({ children, label, lead }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setScrollable(max > 8);
    setAtStart(track.scrollLeft <= 8);
    setAtEnd(track.scrollLeft >= max - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener('scroll', sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    return () => {
      track.removeEventListener('scroll', sync);
      observer.disconnect();
    };
  }, [sync]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(':scope > *');
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  }

  return (
    <div className="carousel">
      {lead && <div className="carousel-lead">{lead}</div>}

      <div className="carousel-body">
        <div className="carousel-track" ref={trackRef} role="group" aria-label={label} tabIndex={0}>
          {children}
        </div>

        {/* Só aparecem quando há o que rolar: seta desabilitada permanente
            é ruído visual e alvo de foco inútil. */}
        {scrollable && (
          <div className="carousel-controls no-print">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label={`${label}: item anterior`}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label={`${label}: próximo item`}
            >
              <Arrow direction="right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path
        d={direction === 'right' ? 'M5 12h13m-5-6 6 6-6 6' : 'M19 12H6m5-6-6 6 6 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

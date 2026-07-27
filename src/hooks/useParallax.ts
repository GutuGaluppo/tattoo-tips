import { useEffect, useRef, type RefObject } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface ParallaxEntry {
  /** Elemento não transformado — é dele que lemos a posição. */
  container: HTMLElement;
  /** Elemento transformado. Nunca é medido, para não realimentar a leitura. */
  layer: HTMLElement;
  speed: number;
  visible: boolean;
}

/**
 * Um único listener de scroll e um único rAF para todos os elementos com
 * parallax na página, independentemente de quantos existam. Cada frame faz
 * todas as leituras de layout antes de qualquer escrita, evitando reflow
 * forçado, e só escreve `transform` (propriedade de compositor).
 */
const entries = new Set<ParallaxEntry>();
let frame = 0;
let listening = false;
let visibilityObserver: IntersectionObserver | null = null;

function getVisibilityObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null;
  if (!visibilityObserver) {
    visibilityObserver = new IntersectionObserver(
      (observed) => {
        for (const record of observed) {
          for (const entry of entries) {
            if (entry.container !== record.target) continue;
            entry.visible = record.isIntersecting;
            // `will-change` só enquanto o elemento está em cena: mantê-lo
            // sempre ligado desperdiça memória de GPU.
            entry.layer.style.willChange = record.isIntersecting ? 'transform' : '';
            if (!record.isIntersecting) entry.layer.style.transform = '';
          }
        }
        schedule();
      },
      { rootMargin: '25% 0px 25% 0px' },
    );
  }
  return visibilityObserver;
}

function render() {
  frame = 0;
  const viewportHeight = window.innerHeight;
  const measured: { entry: ParallaxEntry; offset: number }[] = [];

  // 1) leituras
  for (const entry of entries) {
    if (!entry.visible) continue;
    const rect = entry.container.getBoundingClientRect();
    const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
    measured.push({ entry, offset: distanceFromCenter * entry.speed * -1 });
  }

  // 2) escritas
  for (const { entry, offset } of measured) {
    entry.layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  }
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(render);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
}

function stopListening() {
  if (!listening || entries.size > 0) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
  if (frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
}

export interface UseParallaxResult<C extends HTMLElement, L extends HTMLElement> {
  containerRef: RefObject<C>;
  layerRef: RefObject<L>;
}

/**
 * @param speed Fração do deslocamento do scroll. 0.1 = sutil, 0.4 = intenso.
 *              Valores negativos invertem o sentido.
 */
export function useParallax<C extends HTMLElement, L extends HTMLElement>(
  speed = 0.15,
): UseParallaxResult<C, L> {
  const containerRef = useRef<C>(null);
  const layerRef = useRef<L>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer || reducedMotion) return;

    const entry: ParallaxEntry = { container, layer, speed, visible: true };
    entries.add(entry);
    startListening();

    const observer = getVisibilityObserver();
    observer?.observe(container);
    schedule();

    return () => {
      observer?.unobserve(container);
      entries.delete(entry);
      layer.style.transform = '';
      layer.style.willChange = '';
      stopListening();
    };
  }, [speed, reducedMotion]);

  return { containerRef, layerRef };
}

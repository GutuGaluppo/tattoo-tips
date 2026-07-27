import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Um único IntersectionObserver para toda a aplicação, compartilhado por todos
 * os elementos reveláveis. Depois de revelar, o elemento é desobservado — não
 * há custo residual de scroll.
 */
let sharedObserver: IntersectionObserver | null = null;

function reveal(element: HTMLElement) {
  element.setAttribute('data-revealed', 'true');
}

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      // threshold 0: uma seção mais alta que a viewport nunca alcançaria uma
      // fração mínima visível e ficaria escondida para sempre. Quem atrasa a
      // entrada é o rootMargin, não o threshold.
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    );
  }
  return sharedObserver;
}

/**
 * Revela o elemento quando ele entra na viewport. O movimento em si é CSS
 * (`[data-reveal]` → `[data-revealed='true']`); aqui só há o gatilho.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getObserver();

    // Sem suporte a IO ou com movimento reduzido: o conteúdo nasce visível.
    if (reducedMotion || !observer) {
      reveal(element);
      return;
    }

    // O que já está na viewport no primeiro paint não pode ficar refém do
    // observer: um callback que não dispara esconderia o conteúdo principal.
    // Um rAF garante que o estado inicial seja pintado antes, então a
    // transição ainda acontece.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const frame = requestAnimationFrame(() => reveal(element));
      return () => cancelAnimationFrame(frame);
    }

    observer.observe(element);

    // Rede de segurança: se o observer não entregar nada (browser antigo,
    // aba em segundo plano, ferramenta de captura), o conteúdo aparece assim
    // mesmo. Nenhuma orientação de segurança pode depender de animação.
    const safety = window.setTimeout(() => reveal(element), 2500);

    return () => {
      observer.unobserve(element);
      window.clearTimeout(safety);
    };
  }, [reducedMotion]);

  return ref;
}

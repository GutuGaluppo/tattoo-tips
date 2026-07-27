import type { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';
import './motion.css';

interface ParallaxProps {
  children: ReactNode;
  /** 0.05 (quase imperceptível) a 0.4 (intenso). Negativo inverte o sentido. */
  speed?: number;
  className?: string;
  /** Camada puramente decorativa: some para leitores de tela. */
  decorative?: boolean;
}

/**
 * O container fica parado e é o único elemento medido; só a camada interna
 * recebe `transform`. Medir o container evita a realimentação de ler um
 * elemento que acabamos de deslocar.
 */
export function Parallax({ children, speed = 0.15, className, decorative }: ParallaxProps) {
  const { containerRef, layerRef } = useParallax<HTMLDivElement, HTMLDivElement>(speed);

  return (
    <div
      ref={containerRef}
      className={['parallax', className].filter(Boolean).join(' ')}
      aria-hidden={decorative || undefined}
    >
      <div ref={layerRef} className="parallax-layer">
        {children}
      </div>
    </div>
  );
}

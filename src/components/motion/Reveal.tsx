import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import './motion.css';

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms — usado para escalonar itens de uma mesma lista. */
  delay?: number;
  /** Direção de entrada. */
  from?: 'bottom' | 'left' | 'right' | 'none';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'header';
}

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Sem JS ou com `prefers-reduced-motion`, o conteúdo simplesmente aparece.
 */
export function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  className,
  as = 'div',
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  // ElementType afrouxa a checagem de props para a tag escolhida — sem isso,
  // um único ref não serve para div, li e section ao mesmo tempo.
  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal={from}
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

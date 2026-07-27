import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './ui.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Torna o card inteiro clicável, com a área de toque estendida. */
  to?: string;
  /** Realce visual para cards de destaque (escolha de público, emergência). */
  tone?: 'default' | 'accent' | 'danger';
  as?: 'article' | 'div' | 'li';
}

export function Card({
  children,
  className,
  to,
  tone = 'default',
  as: Tag = 'article',
}: CardProps) {
  const cls = ['card', tone !== 'default' && `card-${tone}`, to && 'card-linked', className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={cls}>{children}</Tag>;
}

interface CardLinkProps {
  to: string;
  children: ReactNode;
}

/**
 * Link que expande a área clicável para todo o card (via ::after), mantendo
 * um único alvo focável e um nome acessível legível.
 */
export function CardLink({ to, children }: CardLinkProps) {
  return (
    <Link to={to} className="card-link">
      {children}
    </Link>
  );
}

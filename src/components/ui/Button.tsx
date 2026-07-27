import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './ui.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'md' | 'lg';

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Ícone opcional à direita (decorativo). */
  trailing?: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  href?: never;
}

interface ExternalButtonProps extends CommonProps {
  href: string;
  to?: never;
}

interface ActionButtonProps
  extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | ExternalButtonProps | ActionButtonProps;

function classes(variant: Variant, size: Size, className?: string) {
  return ['btn', `btn-${variant}`, size === 'lg' && 'btn-lg', className].filter(Boolean).join(' ');
}

/**
 * Um só componente para os três destinos possíveis: rota interna (Link, nunca
 * <a href> — que recarregaria a SPA), link externo e ação.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className, trailing } = props;
  const cls = classes(variant, size, className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
        {trailing && <span aria-hidden="true">{trailing}</span>}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a className={cls} href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (abre em nova aba)</span>
      </a>
    );
  }

  const { children: _c, variant: _v, size: _s, className: _cl, trailing: _t, ...rest } = props;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
      {trailing && <span aria-hidden="true">{trailing}</span>}
    </button>
  );
}

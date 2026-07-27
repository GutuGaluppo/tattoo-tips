import type { ReactNode } from 'react';
import type { AlertLevel } from '@/content/types';
import './content.css';

interface AlertBoxProps {
  level: AlertLevel;
  title: string;
  children: ReactNode;
  /** Torna o alerta anunciado por leitores de tela ao aparecer. */
  live?: boolean;
}

/**
 * Cor nunca é o único sinal: cada nível tem rótulo textual e ícone próprio,
 * para funcionar em daltonismo, impressão em preto e branco e leitor de tela.
 */
const LEVELS: Record<AlertLevel, { label: string; icon: ReactNode }> = {
  ok: {
    label: 'Esperado',
    icon: (
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
        <path
          d="M4 10.5l4 4 8-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  info: {
    label: 'Informação',
    icon: (
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="10" cy="6" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  atencao: {
    label: 'Atenção',
    icon: (
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
        <path
          d="M10 2.5l8 14.5H2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M10 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="14.6" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  urgencia: {
    label: 'Urgente',
    icon: (
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 5.5v5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="10" cy="14.4" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
};

export function AlertBox({ level, title, children, live }: AlertBoxProps) {
  const { label, icon } = LEVELS[level];

  return (
    <div
      className={`alert-box alert-${level}`}
      role={live ? 'alert' : 'note'}
      aria-label={`${label}: ${title}`}
    >
      <p className="alert-heading">
        <span className="alert-icon">{icon}</span>
        <span className="alert-label">{label}</span>
        <span className="alert-title">{title}</span>
      </p>
      <div className="alert-body">{children}</div>
    </div>
  );
}

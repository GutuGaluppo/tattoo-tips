import type { ReactNode } from 'react';
import { medicalDisclaimer, technicalDisclaimer } from '@/config/site';
import './ui.css';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'info' | 'atencao' | 'urgencia' | 'ok';
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

/** Data de revisão editorial — obrigatória em todo guia sensível. */
export function LastReviewed({ date, jurisdiction }: { date: string; jurisdiction?: string }) {
  const formatted = new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <p className="last-reviewed">
      <span>
        Última revisão: <time dateTime={date}>{formatted}</time>
      </span>
      {jurisdiction && <span> · Referência regulatória: {jurisdiction}</span>}
    </p>
  );
}

export function Disclaimer({ technical }: { technical?: boolean }) {
  return (
    <aside className="disclaimer" aria-label="Aviso de escopo">
      <p>
        <strong>Aviso.</strong> {medicalDisclaimer}
      </p>
      {technical && (
        <p>
          <strong>Sobre as recomendações técnicas.</strong> {technicalDisclaimer}
        </p>
      )}
    </aside>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <header className="section-header">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id}>{title}</h2>
      {description && <p className="text-muted">{description}</p>}
    </header>
  );
}

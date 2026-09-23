import type { ReactNode } from 'react';
import { useLocale } from '@/i18n/useLocale';
import { dateFormatLocales } from '@/i18n/locale';
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
  const { locale, dict } = useLocale();
  const formatted = new Date(`${date}T12:00:00`).toLocaleDateString(dateFormatLocales[locale], {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <p className="last-reviewed">
      <span>
        {dict.content.lastReviewed}: <time dateTime={date}>{formatted}</time>
      </span>
      {jurisdiction && <span> · {dict.content.regulatoryReference}: {jurisdiction}</span>}
    </p>
  );
}

export function Disclaimer({ technical }: { technical?: boolean }) {
  const { dict } = useLocale();
  return (
    <aside className="disclaimer" aria-label={dict.content.scopeNotice}>
      <p>
        <strong>{dict.content.scopeNotice}.</strong> {dict.content.medicalDisclaimer}
      </p>
      {technical && (
        <p>
          <strong>{dict.content.technicalRecommendations}.</strong> {dict.content.technicalDisclaimer}
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

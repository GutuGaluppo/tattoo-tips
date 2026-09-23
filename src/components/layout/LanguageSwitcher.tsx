import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/i18n/useLocale';
import { locales, localeNames } from '@/i18n/locale';
import { pathFor, routeIdForPath } from '@/i18n/routes';

interface LanguageSwitcherProps {
  /** Caminho atual (com prefixo de locale), para achar a página equivalente. */
  currentPathname: string;
  className?: string;
}

/**
 * Troca de idioma sem perder a página: acha o routeId da URL atual no
 * idioma corrente e monta o link equivalente em cada idioma — cai na home
 * daquele idioma só se a rota atual não for reconhecida (ex.: 404).
 */
export function LanguageSwitcher({ currentPathname, className }: LanguageSwitcherProps) {
  const { locale, dict } = useLocale();
  const currentRouteId = routeIdForPath(locale, currentPathname);
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <nav
      ref={switcherRef}
      className={['language-switcher', className].filter(Boolean).join(' ')}
      aria-label={dict.languageSwitcherLabel}
    >
      <button
        type="button"
        className="language-switcher-trigger"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg className="language-switcher-globe" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.25 2.3 3.5 5.25 3.5 8.5S14.25 18.2 12 20.5C9.75 18.2 8.5 15.25 8.5 12S9.75 5.8 12 3.5Z" />
        </svg>
        <span>{locale.toUpperCase()}</span>
        <svg className="language-switcher-chevron" viewBox="0 0 16 16" aria-hidden="true">
          <path d="m4 6 4 4 4-4" />
        </svg>
        <span className="visually-hidden">{dict.languageSwitcherLabel}</span>
      </button>

      {isOpen && (
        <ul id={menuId} className="language-switcher-menu">
          {locales.map((loc) => {
            const href = pathFor(currentRouteId ?? 'home', loc);
            const isCurrent = loc === locale;
            return (
              <li key={loc}>
                {isCurrent ? (
                  <span aria-current="true">
                    <strong>{loc.toUpperCase()}</strong>
                    {localeNames[loc]}
                  </span>
                ) : (
                  <Link to={href} lang={loc} onClick={() => setIsOpen(false)}>
                    <strong>{loc.toUpperCase()}</strong>
                    {localeNames[loc]}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

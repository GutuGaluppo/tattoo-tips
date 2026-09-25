import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocale } from '@/i18n/useLocale';
import { pathFor, topNavItems } from '@/i18n/routes';
import './layout.css';

const DESKTOP_QUERY = '(min-width: 940px)';

/**
 * Navegação principal no desktop. Começa como faixa horizontal logo abaixo da
 * barra superior; quando a rolagem alcança o fundo do header, a mesma `<nav>`
 * (sem remontar, então o foco não se perde) passa a ser uma sidebar fixa à
 * esquerda. O espaço da faixa continua reservado para a página não pular.
 */
export function SiteNav({
  docked,
  onDockedChange,
}: {
  docked: boolean;
  onDockedChange: (docked: boolean) => void;
}) {
  const { locale, dict } = useLocale();
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    let frame = 0;

    const measure = () => {
      frame = 0;
      const header = document.querySelector<HTMLElement>('.app-header');
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      onDockedChange(desktop.matches && slot.getBoundingClientRect().bottom <= headerBottom);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    desktop.addEventListener('change', schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      desktop.removeEventListener('change', schedule);
    };
  }, [onDockedChange]);

  return (
    <div className="site-nav-slot band-dark" ref={slotRef}>
      <nav
        className="site-nav band-dark"
        data-docked={docked || undefined}
        aria-label={dict.mainNavLabel}
      >
        <ul>
          {topNavItems.map(({ id, navKey }) => (
            <li key={id}>
              <NavLink
                to={pathFor(id, locale)}
                className={id === 'warningSigns' ? 'nav-alert' : undefined}
              >
                {dict.nav[navKey]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

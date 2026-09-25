import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav } from '@/navigation';
import { site } from '@/config/site';
import { useLocale } from '@/i18n/useLocale';
import { pathFor, routeIdForPath, topNavItems } from '@/i18n/routes';
import { LanguageSwitcher } from './LanguageSwitcher';
import './layout.css';

/**
 * Barra superior: marca à esquerda, nome da página no centro e ações à
 * direita. A navegação principal no desktop fica em `SiteNav`, logo abaixo.
 */
export function Header() {
  const { pathname } = useLocation();
  const { locale, dict } = useLocale();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // O drawer guarda em qual rota foi aberto. Qualquer navegação — clique,
  // voltar ou avançar — muda o pathname e o fecha, sem precisar de efeito.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const setOpen = (next: boolean) => setOpenedAt(next ? pathname : null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenedAt(null);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      // Foco preso dentro do drawer enquanto ele está aberto.
      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    drawerRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const emergencyHref = pathFor('emergency', locale);
  const routeId = routeIdForPath(locale, pathname);
  const sectionTitle = routeId && routeId !== 'home' ? dict.pageTitles[routeId] : null;

  return (
    <header className="app-header band-dark">
      <div className="app-header-inner container">
        <Link to={pathFor('home', locale)} className="brand">
          <span className="brand-name">{site.name}.</span>
        </Link>

        <p className="header-section">
          {sectionTitle && (
            <>
              <span className="visually-hidden">{dict.currentSectionLabel}: </span>
              {sectionTitle}
            </>
          )}
        </p>

        <div className="header-actions">
          <LanguageSwitcher currentPathname={pathname} className="language-switcher-desktop" />

          <Link to={emergencyHref} className="btn btn-danger header-emergency">
            {dict.emergency}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen(!open)}
          >
            <span className="visually-hidden">{open ? dict.closeMenu : dict.openMenu}</span>
            <span className="burger" data-open={open || undefined} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav" id="menu-principal" ref={drawerRef}>
          <nav aria-label={dict.mobileNavLabel}>
            <ul>
              {topNavItems.map(({ id, navKey }, index) => {
                const children = primaryNav[index]?.children;
                return (
                  <li key={id}>
                    <NavLink to={pathFor(id, locale)}>{dict.nav[navKey]}</NavLink>
                    {children && (
                      <ul className="mobile-subnav">
                        {children
                          .filter((child) => !child.upcoming)
                          .map((child) => {
                            const childRouteId = routeIdForPath('pt', child.to);
                            const childHref = childRouteId
                              ? pathFor(childRouteId, locale)
                              : child.to;
                            return (
                              <li key={child.to}>
                                <NavLink to={childHref}>{child.label}</NavLink>
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li>
                <Link to={emergencyHref} className="mobile-nav-emergency">
                  {dict.emergency}
                </Link>
              </li>
            </ul>
          </nav>

          <LanguageSwitcher currentPathname={pathname} className="language-switcher-mobile" />
        </div>
      )}
    </header>
  );
}

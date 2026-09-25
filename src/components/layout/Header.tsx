import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav } from '@/navigation';
import { site } from '@/config/site';
import { useLocale } from '@/i18n/useLocale';
import { navGroups, pathFor, routeIdForPath, topNavItems, type NavGroup } from '@/i18n/routes';
import { LanguageSwitcher } from './LanguageSwitcher';
import './layout.css';

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

  return (
    <header className="app-header band-dark">
      <div className="app-header-inner container">
        <Link to={pathFor('home', locale)} className="brand">
          <span className="brand-name">{site.name}.</span>
        </Link>

        <DesktopNav />

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

/**
 * Barra do desktop: um menu por público e poucos links soltos. Cada menu é
 * um disclosure (botão + painel), não `role="menu"`: o conteúdo são links
 * comuns, navegáveis com Tab.
 */
function DesktopNav() {
  const { pathname } = useLocation();
  const { locale, dict } = useLocale();
  const navRef = useRef<HTMLElement>(null);

  // Como o drawer: o menu lembra em que rota foi aberto e fecha ao navegar.
  const [opened, setOpened] = useState<{ key: string; at: string } | null>(null);
  const openKey = opened?.at === pathname ? opened.key : null;

  useEffect(() => {
    if (!openKey) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpened(null);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpened(null);
      navRef.current?.querySelector<HTMLElement>(`[data-menu-toggle="${openKey}"]`)?.focus();
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openKey]);

  const currentRoute = routeIdForPath(locale, pathname);
  const isCurrent = (group: NavGroup) =>
    group.kind === 'link'
      ? currentRoute === group.id
      : currentRoute === group.hub ||
        group.sections.some((section) => currentRoute && section.items.includes(currentRoute));

  return (
    <nav className="nav-desktop" aria-label={dict.mainNavLabel} ref={navRef}>
      <ul>
        {navGroups.map((group) => {
          if (group.kind === 'link') {
            return (
              <li key={group.navKey}>
                <NavLink to={pathFor(group.id, locale)}>{dict.nav[group.navKey]}</NavLink>
              </li>
            );
          }

          const open = openKey === group.navKey;
          const panelId = `nav-menu-${group.navKey}`;

          return (
            <li
              key={group.navKey}
              className="nav-menu"
              onBlur={(event) => {
                // Tab para fora do painel fecha o menu.
                if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setOpened(null);
                }
              }}
            >
              <button
                type="button"
                className={isCurrent(group) ? 'nav-menu-toggle active' : 'nav-menu-toggle'}
                aria-expanded={open}
                aria-controls={panelId}
                data-menu-toggle={group.navKey}
                onClick={() => setOpened(open ? null : { key: group.navKey, at: pathname })}
              >
                {dict.nav[group.navKey]}
                <svg className="nav-menu-chevron" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2.5 4.5 6 8l3.5-3.5" />
                </svg>
              </button>

              <div
                className="nav-menu-panel"
                id={panelId}
                hidden={!open}
                data-columns={group.sections.length}
              >
                {group.sections.map((section, index) => (
                  <div className="nav-menu-section" key={section.titleKey ?? index}>
                    {section.titleKey && (
                      <p className="nav-menu-heading">{dict.navMenu[section.titleKey]}</p>
                    )}
                    <ul>
                      {section.items.map((id) => (
                        <li key={id}>
                          <NavLink
                            to={pathFor(id, locale)}
                            className={id === 'warningSigns' ? 'nav-alert' : undefined}
                            end
                          >
                            {dict.pageTitles[id]}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Link to={pathFor(group.hub, locale)} className="nav-menu-hub">
                  {dict.navMenu.seeJourney} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

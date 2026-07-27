import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav } from '@/navigation';
import { site } from '@/config/site';
import './layout.css';

export function Header() {
  const { pathname } = useLocation();
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

  return (
    <header className="app-header band-dark">
      <div className="app-header-inner container">
        <Link to="/" className="brand">
          <span className="brand-name">{site.name}.</span>
        </Link>

        <nav className="nav-desktop" aria-label="Navegação principal">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={item.to === '/sinais-de-alerta' ? 'nav-alert' : undefined}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/emergencias" className="btn btn-danger header-emergency">
          Emergências
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen(!open)}
        >
          <span className="visually-hidden">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="burger" data-open={open || undefined} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <div className="mobile-nav" id="menu-principal" ref={drawerRef}>
          <nav aria-label="Navegação principal (móvel)">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                  {item.children && (
                    <ul className="mobile-subnav">
                      {item.children
                        .filter((child) => !child.upcoming)
                        .map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to}>{child.label}</NavLink>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link to="/emergencias" className="mobile-nav-emergency">
                  Emergências
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

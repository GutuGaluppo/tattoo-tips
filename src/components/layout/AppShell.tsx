import { useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { useLocale } from '@/i18n/useLocale';
import { dateFormatLocales } from '@/i18n/locale';
import { pathFor, topNavItems } from '@/i18n/routes';
import { Header } from './Header';
import './layout.css';

/**
 * Em uma SPA a troca de rota não move o foco nem o scroll sozinha: quem navega
 * por teclado ou leitor de tela continuaria no rodapé da página anterior.
 */
function useRouteFocus() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // âncora interna: deixa o browser resolver

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const heading = document.querySelector<HTMLElement>('main h1');
    if (!heading) return;
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }, [pathname, hash]);
}

export function AppShell({ children }: { children: ReactNode }) {
  useRouteFocus();
  const { dict } = useLocale();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        {dict.skipToContent}
      </a>

      <Header />

      <main id="conteudo" className="band-paper" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  const { locale, dict } = useLocale();

  return (
    <footer className="app-footer band-dark">
      <div className="container">
        {/* Assinatura editorial: o nome ocupa a largura da página, como na
            abertura, fechando a leitura no mesmo tom em que ela começou. */}
        <div className="footer-signature">
          <p className="wordmark wordmark-muted" aria-hidden="true">
            {site.name}
          </p>
          <p className="footer-tagline">
            {dict.footerTaglineLines[0]}
            <br />
            {dict.footerTaglineLines[1]}
            <br />
            {dict.footerTaglineLines[2]}
          </p>
        </div>

        <div className="footer-bar">
          <nav aria-label={dict.footerNavLabel}>
            <ul>
              {topNavItems.map(({ id, navKey }) => (
                <li key={id}>
                  <Link to={pathFor(id, locale)}>{dict.nav[navKey]}</Link>
                </li>
              ))}
              <li>
                <Link to={pathFor('emergency', locale)}>{dict.emergency}</Link>
              </li>
              <li>
                <a href={`mailto:${site.editorialContact}?subject=Feedback%20${site.name}`}>
                  {dict.sendCorrection}
                </a>
              </li>
            </ul>
          </nav>

          <p className="footer-legal">
            {dict.footerLegal(
              site.jurisdiction,
              new Date(`${site.lastReviewed}T12:00:00`).toLocaleDateString(
                dateFormatLocales[locale],
              ),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

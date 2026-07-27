import { useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { primaryNav } from '@/navigation';
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

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
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
            Manual de
            <br />
            segurança e
            <br />
            cuidados.
          </p>
        </div>

        <div className="footer-bar">
          <nav aria-label="Navegação do rodapé">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/emergencias">Emergências</Link>
              </li>
              <li>
                <a href={`mailto:${site.editorialContact}?subject=Feedback%20${site.name}`}>
                  Enviar correção
                </a>
              </li>
            </ul>
          </nav>

          <p className="footer-legal">
            Conteúdo educacional independente. Não substitui avaliação médica nem a legislação
            sanitária local. Referência regulatória: {site.jurisdiction}. Última revisão:{' '}
            <time dateTime={site.lastReviewed}>
              {new Date(`${site.lastReviewed}T12:00:00`).toLocaleDateString('pt-BR')}
            </time>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

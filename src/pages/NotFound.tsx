import { Link, useLocation } from 'react-router-dom';
import { clientJourney, primaryNav } from '@/navigation';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Meta';
import './pages.css';

export default function NotFound() {
  const { pathname } = useLocation();

  useDocumentMeta({
    title: 'Página não encontrada',
    description:
      'A página que você procurou não existe neste manual. Veja os caminhos disponíveis.',
    path: pathname,
    noIndex: true,
  });

  return (
    <div className="container page not-found">
      <header className="page-header">
        <Eyebrow>Erro 404</Eyebrow>
        <h1>Esta página não existe</h1>
        <p className="page-description">
          O endereço <code>{pathname}</code> não corresponde a nenhum conteúdo publicado. Talvez o
          que você procura esteja em uma das jornadas abaixo.
        </p>
      </header>

      <nav aria-label="Caminhos disponíveis" className="not-found-nav">
        <h2>Jornada do cliente</h2>
        <ul>
          {clientJourney.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
              <span className="text-muted">{item.description}</span>
            </li>
          ))}
        </ul>

        <h2>Seções principais</h2>
        <ul>
          {primaryNav.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="not-found-actions">
        <Button to="/">Voltar ao início</Button>
        <Button to="/emergencias" variant="danger">
          Ir para emergências
        </Button>
      </div>
    </div>
  );
}

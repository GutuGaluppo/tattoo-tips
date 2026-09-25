import { describe, expect, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('navegação', () => {
  it('leva o cliente da home até a jornada correta sem recarregar a página', async () => {
    const user = userEvent.setup();
    renderApp('/');

    const clientLink = await screen.findByRole('link', { name: /vou fazer uma tatuagem/i });
    // Rota interna precisa ser Link do router — <a href> recarregaria a SPA.
    expect(clientLink).toHaveAttribute('href', '/cliente');

    await user.click(clientLink);

    expect(
      await screen.findByRole('heading', { level: 1, name: /jornada do cliente/i }),
    ).toBeInTheDocument();
  });

  it('mostra uma 404 útil em rota inexistente', async () => {
    renderApp('/rota-que-nao-existe');

    expect(
      await screen.findByRole('heading', { level: 1, name: /esta página não existe/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /voltar ao início/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ir para emergências/i })).toBeInTheDocument();
  });

  it('mantém emergências acessível a partir de qualquer página', async () => {
    renderApp('/cliente/cuidados-depois');

    await screen.findByRole('heading', { level: 1 });
    const emergencyLinks = screen.getAllByRole('link', { name: /emergências/i });
    expect(emergencyLinks.length).toBeGreaterThan(0);
    expect(emergencyLinks[0]).toHaveAttribute('href', '/emergencias');
  });

  it('oferece o skip link como primeiro alvo de tabulação', async () => {
    renderApp('/');

    const skip = screen.getByRole('link', { name: /pular para o conteúdo/i });
    expect(skip).toHaveAttribute('href', '#conteudo');
  });

  it('publica título e descrição reais por rota', async () => {
    renderApp('/emergencias');

    await waitFor(() => {
      expect(document.title).toBe('Emergências — Tattoo Tips');
    });
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://tattoo-tips.example/emergencias',
    );
  });

  it('publica a página de prática com o painel de desenho', async () => {
    renderApp('/en/test-your-skills');

    expect(
      await screen.findByRole('heading', { level: 1, name: /test your skills/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /drawing panel/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /test your skills/i })[0]).toHaveAttribute(
      'href',
      '/en/test-your-skills',
    );
  });

  it('agrupa a navegação do desktop em menus por público', async () => {
    const user = userEvent.setup();
    renderApp('/');

    const nav = screen.getByRole('navigation', { name: 'Navegação principal' });
    const toggle = within(nav).getByRole('button', { name: /para clientes/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(within(nav).getByRole('link', { name: 'Sinais de alerta' })).toHaveAttribute(
      'href',
      '/sinais-de-alerta',
    );

    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('organiza o menu do celular por público, traduzido e com Emergências no topo', async () => {
    const user = userEvent.setup();
    renderApp('/en/client/aftercare');

    await screen.findByRole('heading', { level: 1 });
    await user.click(screen.getByRole('button', { name: /open menu/i }));

    const drawer = screen.getByRole('navigation', { name: 'Main navigation (mobile)' });
    const links = within(drawer).getAllByRole('link');
    expect(links[0]).toHaveAccessibleName('Emergency');

    // A seção da página atual abre expandida; as outras começam recolhidas.
    const clients = within(drawer).getByRole('button', { name: /for clients/i });
    const artists = within(drawer).getByRole('button', { name: /for tattoo artists/i });
    expect(clients).toHaveAttribute('aria-expanded', 'true');
    expect(artists).toHaveAttribute('aria-expanded', 'false');
    expect(within(drawer).getByRole('link', { name: 'Aftercare' })).toHaveAttribute(
      'href',
      '/en/client/aftercare',
    );

    await user.click(artists);
    expect(within(drawer).getByRole('link', { name: 'Test your skills' })).toHaveAttribute(
      'href',
      '/en/test-your-skills',
    );
  });
});

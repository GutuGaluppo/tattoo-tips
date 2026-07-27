import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
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
});

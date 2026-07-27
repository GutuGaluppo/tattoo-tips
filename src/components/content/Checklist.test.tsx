import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checklist } from './Checklist';

const items = [
  { id: 'maos', label: 'Lavei as mãos antes de tocar na tatuagem.' },
  { id: 'camada-fina', label: 'Apliquei uma camada fina de emoliente.' },
  { id: 'sol', label: 'Mantive a área fora do sol.' },
];

function renderChecklist() {
  return render(<Checklist id="teste-aftercare" title="Checklist de pós-cuidado" items={items} />);
}

describe('Checklist', () => {
  it('persiste o progresso em localStorage e restaura ao remontar', async () => {
    const user = userEvent.setup();
    const { unmount } = renderChecklist();

    await user.click(screen.getByLabelText(/lavei as mãos/i));
    expect(screen.getByText('1 de 3 concluídos')).toBeInTheDocument();

    unmount();
    renderChecklist();

    expect(screen.getByLabelText(/lavei as mãos/i)).toBeChecked();
    expect(screen.getByText('1 de 3 concluídos')).toBeInTheDocument();
  });

  it('reinicia o progresso e desabilita o botão quando nada está marcado', async () => {
    const user = userEvent.setup();
    renderChecklist();

    const reset = screen.getByRole('button', { name: /reiniciar/i });
    expect(reset).toBeDisabled();

    await user.click(screen.getByLabelText(/camada fina/i));
    expect(reset).toBeEnabled();

    await user.click(reset);
    expect(screen.getByLabelText(/camada fina/i)).not.toBeChecked();
    expect(screen.getByText('0 de 3 concluídos')).toBeInTheDocument();
  });

  it('ignora itens salvos que não existem mais no conteúdo', () => {
    window.localStorage.setItem(
      'tattoo-tips:checklist:teste-aftercare',
      JSON.stringify(['maos', 'item-que-foi-removido']),
    );

    renderChecklist();

    // O item removido não pode inflar o contador para 2 de 3.
    expect(screen.getByText('1 de 3 concluídos')).toBeInTheDocument();
  });

  it('sobrevive a dados corrompidos no storage', () => {
    window.localStorage.setItem('tattoo-tips:checklist:teste-aftercare', '{"nao":"e-um-array"}');

    renderChecklist();

    expect(screen.getByText('0 de 3 concluídos')).toBeInTheDocument();
  });

  it('expõe o progresso como progressbar acessível', async () => {
    const user = userEvent.setup();
    renderChecklist();

    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '0');

    await user.click(screen.getByLabelText(/fora do sol/i));
    expect(progress).toHaveAttribute('aria-valuenow', '33');
  });
});

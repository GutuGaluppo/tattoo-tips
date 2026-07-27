import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataTable } from './DataTable';

const columns = [
  { key: 'situacao', label: 'Situação', sortable: true },
  { key: 'tempo', label: 'Tempo', sortable: true },
];

const rows = [
  { situacao: 'Mãos visivelmente sujas', tempo: '40–60 s' },
  { situacao: 'Mãos sem sujeira visível', tempo: '20–30 s' },
  { situacao: 'Após retirar as luvas', tempo: 'Conforme o método' },
];

function renderTable() {
  return render(
    <DataTable
      title="Higiene das mãos"
      columns={columns}
      rows={rows}
      searchable
      cardTitleKey="situacao"
    />,
  );
}

function bodyRowTexts() {
  const table = screen.getByRole('table');
  const body = table.querySelectorAll('tbody tr');
  return Array.from(body).map((row) => row.querySelector('td')?.textContent);
}

describe('DataTable', () => {
  it('filtra as linhas pela busca', async () => {
    const user = userEvent.setup();
    renderTable();

    await user.type(screen.getByLabelText('Filtrar'), 'luvas');

    expect(bodyRowTexts()).toEqual(['Após retirar as luvas']);
  });

  it('avisa quando nada corresponde à busca', async () => {
    const user = userEvent.setup();
    renderTable();

    await user.type(screen.getByLabelText('Filtrar'), 'blowout');

    expect(screen.getByRole('status')).toHaveTextContent('Nenhuma linha corresponde');
  });

  it('ordena, inverte e volta à ordem original em três cliques', async () => {
    const user = userEvent.setup();
    renderTable();

    const header = screen.getByRole('columnheader', { name: /situação/i });
    const sortButton = within(header).getByRole('button');
    const original = bodyRowTexts();

    await user.click(sortButton);
    expect(header).toHaveAttribute('aria-sort', 'ascending');
    expect(bodyRowTexts()).toEqual([
      'Após retirar as luvas',
      'Mãos sem sujeira visível',
      'Mãos visivelmente sujas',
    ]);

    await user.click(sortButton);
    expect(header).toHaveAttribute('aria-sort', 'descending');
    expect(bodyRowTexts()).toEqual([
      'Mãos visivelmente sujas',
      'Mãos sem sujeira visível',
      'Após retirar as luvas',
    ]);

    await user.click(sortButton);
    expect(header).toHaveAttribute('aria-sort', 'none');
    expect(bodyRowTexts()).toEqual(original);
  });

  it('rotula cada célula para o modo card do mobile', () => {
    renderTable();

    const firstCell = screen.getByRole('table').querySelector('tbody td');
    expect(firstCell).toHaveAttribute('data-label', 'Situação');
  });

  it('expõe a área rolável como região focável por teclado', () => {
    renderTable();

    const region = screen.getByRole('region', { name: 'Tabela: Higiene das mãos' });
    expect(region).toHaveAttribute('tabindex', '0');
  });
});

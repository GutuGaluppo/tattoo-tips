import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

/**
 * Formulário controlado dentro do Modal, com um `onClose` recriado a cada
 * render — exatamente o formato do CorrectionModal. Reproduz o bug em que
 * digitar movia o foco para o botão de fechar.
 */
function ControlledForm() {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');

  return (
    <Modal open={open} onClose={() => setOpen(false)} titleId="t">
      <h2 id="t">Título</h2>
      <button className="modal-close" aria-label="Fechar">
        ×
      </button>
      <input aria-label="Campo" value={text} onChange={(event) => setText(event.target.value)} />
    </Modal>
  );
}

describe('Modal', () => {
  it('não rouba o foco do campo a cada tecla quando onClose muda de referência a cada render', async () => {
    const user = userEvent.setup();
    render(<ControlledForm />);

    const field = screen.getByLabelText('Campo');
    field.focus();
    await user.keyboard('abc');

    expect(field).toHaveValue('abc');
    expect(document.activeElement).toBe(field);
  });
});

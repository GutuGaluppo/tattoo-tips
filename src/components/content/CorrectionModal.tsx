import { useId, useState, type FormEvent } from 'react';
import { site } from '@/config/site';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { buildCorrectionMailto } from './correctionEmail';
import './content.css';

interface CorrectionModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * O site não tem backend nem envia e-mail sozinho — de propósito, é a mesma
 * decisão de "zero requisição a terceiros" que vale para o resto do projeto.
 * O formulário só organiza os campos e monta um `mailto:` para o cliente de
 * e-mail de quem está preenchendo, que sai com tudo pronto para revisar e
 * enviar.
 */
export function CorrectionModal({ open, onClose }: CorrectionModalProps) {
  const titleId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [page, setPage] = useState('');
  const [message, setMessage] = useState('');

  function handleClose() {
    onClose();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    window.location.href = buildCorrectionMailto(site.editorialContact, site.name, {
      page,
      message,
      name,
      email,
    });

    setName('');
    setEmail('');
    setPage('');
    setMessage('');
    onClose();
  }

  return (
    <Modal open={open} onClose={handleClose} titleId={titleId}>
      <form className="correction-form" onSubmit={handleSubmit}>
        <header className="correction-form-header">
          <h2 id={titleId}>Enviar correção</h2>
          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
            aria-label="Fechar"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <p className="text-muted">
          Isso abre seu aplicativo de e-mail com a mensagem pronta, endereçada a{' '}
          {site.editorialContact} — o site não envia nada sozinho.
        </p>

        <div className="correction-field">
          <label htmlFor={`${titleId}-page`}>Página ou trecho (opcional)</label>
          <input
            id={`${titleId}-page`}
            className="input"
            type="text"
            value={page}
            onChange={(event) => setPage(event.target.value)}
            placeholder="Ex.: /cliente/cuidados-depois, terceiro parágrafo"
          />
        </div>

        <div className="correction-field">
          <label htmlFor={`${titleId}-message`}>O que está errado ou incompleto</label>
          <textarea
            id={`${titleId}-message`}
            className="input correction-textarea"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows={5}
          />
        </div>

        <div className="correction-field-row">
          <div className="correction-field">
            <label htmlFor={`${titleId}-name`}>Nome (opcional)</label>
            <input
              id={`${titleId}-name`}
              className="input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="correction-field">
            <label htmlFor={`${titleId}-email`}>Seu e-mail, para retorno (opcional)</label>
            <input
              id={`${titleId}-email`}
              className="input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="correction-form-actions">
          <Button type="submit">Abrir e-mail com a correção</Button>
          <Button variant="ghost" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
}

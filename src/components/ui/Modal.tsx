import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './ui.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Id do elemento que dá nome acessível ao diálogo (normalmente o `<h2>`). */
  titleId: string;
  children: ReactNode;
}

/**
 * Diálogo genérico: trava o foco e o scroll, fecha em Escape ou clique no
 * fundo, e devolve o foco a quem abriu — mesmo contrato do drawer do menu
 * mobile, só que reutilizável fora do Header. Renderizado via portal para
 * não herdar nenhum `transform` de ancestral (Parallax, Reveal), que
 * quebraria o `position: fixed`.
 */
export function Modal({ open, onClose, titleId, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;

    triggerRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current
      ?.querySelector<HTMLElement>('input, textarea, select, button, a[href]')
      ?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])',
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

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    // Fechar clicando fora é um atalho de mouse/toque sobre o que já é
    // totalmente acessível por teclado (Escape e o botão de fechar visível).
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
        {children}
      </div>
    </div>,
    document.body,
  );
}

import { useEffect, useRef } from 'react';
import './machine-cursor.css';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

const CLICKABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'summary',
  'label[for]',
  '[role="button"]',
  '[role="link"]',
  '[contenteditable="true"]',
  // Painel de desenho enquanto o traço está ativo.
  '[data-cursor-running]',
].join(',');

/**
 * Cursor visual da máquina. O cursor nativo só é ocultado depois que este
 * componente confirma que há um mouse/trackpad e está pronto para acompanhá-lo.
 */
export function MachineCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia(FINE_POINTER_QUERY);
    let animationFrame = 0;

    const hide = () => {
      cursor.classList.remove('machine-cursor-visible', 'machine-cursor-running');
    };

    const updateAvailability = () => {
      const enabled = finePointer.matches;
      document.documentElement.classList.toggle('machine-cursor-enabled', enabled);
      if (!enabled) hide();
    };

    const move = (event: PointerEvent) => {
      if (!finePointer.matches || (event.pointerType && event.pointerType !== 'mouse')) return;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        cursor.classList.add('machine-cursor-visible');
        cursor.classList.toggle(
          'machine-cursor-running',
          event.target instanceof Element && Boolean(event.target.closest(CLICKABLE_SELECTOR)),
        );
      });
    };

    const leaveViewport = (event: PointerEvent) => {
      if (event.relatedTarget === null) hide();
    };

    updateAvailability();
    finePointer.addEventListener('change', updateAvailability);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', leaveViewport, { passive: true });
    window.addEventListener('blur', hide);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove('machine-cursor-enabled');
      finePointer.removeEventListener('change', updateAvailability);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leaveViewport);
      window.removeEventListener('blur', hide);
    };
  }, []);

  return (
    <span ref={cursorRef} className="machine-cursor" aria-hidden="true">
      <span className="machine-cursor-art">
        <svg className="machine-cursor-layer" viewBox="0 0 1254 1254" focusable="false">
          <use href="/images/mouse_cursor.svg#machine-body" />
        </svg>
        <svg
          className="machine-cursor-layer machine-cursor-needle"
          viewBox="0 0 1254 1254"
          focusable="false"
        >
          <use href="/images/mouse_cursor.svg#machine-needle" />
        </svg>
      </span>
    </span>
  );
}

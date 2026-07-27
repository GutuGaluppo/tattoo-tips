import { useCallback, useState } from 'react';

const PREFIX = 'tattoo-tips:';

function read<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): T {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    // Modo privado, storage cheio ou JSON corrompido: seguimos sem persistir.
    return fallback;
  }
}

/**
 * Estado espelhado em localStorage, com validação do que foi lido — dados
 * antigos ou corrompidos não podem quebrar um checklist.
 */
export function usePersistentState<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
): [T, (value: T | ((previous: T) => T)) => void, () => void] {
  // Leitura preguiçosa: acontece uma vez, na inicialização, sem efeito e sem
  // render extra. A chave de um checklist é estável, então não há releitura.
  const [state, setState] = useState<T>(() => read(key, fallback, isValid));

  const update = useCallback(
    (value: T | ((previous: T) => T)) => {
      setState((previous) => {
        const next = typeof value === 'function' ? (value as (p: T) => T)(previous) : value;
        try {
          window.localStorage.setItem(PREFIX + key, JSON.stringify(next));
        } catch {
          /* persistência é um bônus, não um requisito */
        }
        return next;
      });
    },
    [key],
  );

  const clear = useCallback(() => {
    try {
      window.localStorage.removeItem(PREFIX + key);
    } catch {
      /* idem */
    }
    setState(fallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [state, update, clear];
}

export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

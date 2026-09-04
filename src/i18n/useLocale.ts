import { createContext, useContext } from 'react';
import { dictionaries, type Dictionary } from './dictionaries';
import { defaultLocale, type Locale } from './locale';

export interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  dict: dictionaries[defaultLocale],
});

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

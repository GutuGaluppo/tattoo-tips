import { useMemo, type ReactNode } from 'react';
import { dictionaries } from './dictionaries';
import type { Locale } from './locale';
import { LocaleContext } from './useLocale';

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo(() => ({ locale, dict: dictionaries[locale] }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

/**
 * Idiomas suportados. O português é a língua de origem de todo o conteúdo
 * clínico — os demais têm rota e navegação prontas, mas o corpo dos guias
 * ainda é exibido em PT com um aviso, até passar por tradução e revisão.
 */
export const locales = ['pt', 'en', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

/** Para o atributo `lang` do documento e os links `hreflang`. */
export const htmlLangTags: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
  de: 'de',
};

/** Para `og:locale`, que usa o formato `idioma_REGIÃO`. */
export const ogLocaleTags: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
};

/** Para `Date#toLocaleDateString`. */
export const dateFormatLocales: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
};

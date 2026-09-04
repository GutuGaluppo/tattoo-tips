import { useLocale } from '@/i18n/useLocale';
import { defaultLocale } from '@/i18n/locale';
import './content.css';

/**
 * O corpo dos guias é clínico e revisado com fonte — traduzir sem o mesmo
 * cuidado seria pior do que deixar em português. Enquanto a tradução não
 * chega, este aviso substitui o silêncio por transparência.
 */
export function UntranslatedNotice() {
  const { locale, dict } = useLocale();
  if (locale === defaultLocale) return null;

  return (
    <p className="untranslated-notice" role="note">
      {dict.untranslatedNotice}
    </p>
  );
}

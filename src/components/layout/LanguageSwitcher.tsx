import { Link } from 'react-router-dom';
import { useLocale } from '@/i18n/useLocale';
import { locales, localeNames } from '@/i18n/locale';
import { pathFor, routeIdForPath } from '@/i18n/routes';

interface LanguageSwitcherProps {
  /** Caminho atual (com prefixo de locale), para achar a página equivalente. */
  currentPathname: string;
  className?: string;
}

/**
 * Troca de idioma sem perder a página: acha o routeId da URL atual no
 * idioma corrente e monta o link equivalente em cada idioma — cai na home
 * daquele idioma só se a rota atual não for reconhecida (ex.: 404).
 */
export function LanguageSwitcher({ currentPathname, className }: LanguageSwitcherProps) {
  const { locale, dict } = useLocale();
  const currentRouteId = routeIdForPath(locale, currentPathname);

  return (
    <nav
      className={['language-switcher', className].filter(Boolean).join(' ')}
      aria-label={dict.languageSwitcherLabel}
    >
      <ul>
        {locales.map((loc) => {
          const href = pathFor(currentRouteId ?? 'home', loc);
          const isCurrent = loc === locale;
          return (
            <li key={loc}>
              {isCurrent ? (
                <span aria-current="true">{loc.toUpperCase()}</span>
              ) : (
                <Link to={href} lang={loc} aria-label={localeNames[loc]}>
                  {loc.toUpperCase()}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

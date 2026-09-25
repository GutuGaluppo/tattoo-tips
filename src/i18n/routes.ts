import { defaultLocale, locales, type Locale } from './locale';
import type { Dictionary } from './dictionaries';

/**
 * Um id por página com rota publicada. Estável mesmo que o slug mude em
 * algum idioma — é o que liga navegação, sitemap e o seletor de idioma.
 */
export const routeIds = [
  'home',
  'clientHub',
  'clientBefore',
  'clientSessionDay',
  'clientAftercare',
  'clientHealing',
  'warningSigns',
  'emergency',
  'artistHub',
  'artistScreening',
  'artistWorkstation',
  'artistDuringSession',
  'artistClosing',
  'artistMachineSetup',
  'artistBeginnerLimits',
  'styles',
  'equipmentHub',
  'equipmentPro',
  'sources',
  'about',
  'skillsTest',
] as const;

export type RouteId = (typeof routeIds)[number];

/**
 * Segmento de caminho por idioma (sem barra inicial, sem prefixo de locale).
 * O português é a fonte: os mesmos slugs já publicados em `navigation.ts`.
 * Os demais idiomas têm slug próprio — só a rota é traduzida, o conteúdo do
 * guia continua em português até ser revisado.
 */
const segments: Record<Locale, Record<RouteId, string>> = {
  pt: {
    home: '',
    clientHub: 'cliente',
    clientBefore: 'cliente/antes',
    clientSessionDay: 'cliente/dia-da-sessao',
    clientAftercare: 'cliente/cuidados-depois',
    clientHealing: 'cliente/cicatrizacao',
    warningSigns: 'sinais-de-alerta',
    emergency: 'emergencias',
    artistHub: 'tatuador',
    artistScreening: 'tatuador/triagem',
    artistWorkstation: 'tatuador/bancada',
    artistDuringSession: 'tatuador/durante-a-sessao',
    artistClosing: 'tatuador/encerramento',
    artistMachineSetup: 'tatuador/regulagem',
    artistBeginnerLimits: 'tatuador/limites',
    styles: 'estilos',
    equipmentHub: 'equipamento',
    equipmentPro: 'equipamento/pro',
    sources: 'fontes',
    about: 'sobre',
    skillsTest: 'teste-suas-habilidades',
  },
  en: {
    home: '',
    clientHub: 'client',
    clientBefore: 'client/before',
    clientSessionDay: 'client/session-day',
    clientAftercare: 'client/aftercare',
    clientHealing: 'client/healing',
    warningSigns: 'warning-signs',
    emergency: 'emergency',
    artistHub: 'artist',
    artistScreening: 'artist/screening',
    artistWorkstation: 'artist/workstation',
    artistDuringSession: 'artist/during-session',
    artistClosing: 'artist/closing-and-disposal',
    artistMachineSetup: 'artist/machine-setup',
    artistBeginnerLimits: 'artist/beginner-limits',
    styles: 'styles',
    equipmentHub: 'equipment',
    equipmentPro: 'equipment/pro',
    sources: 'sources',
    about: 'about',
    skillsTest: 'test-your-skills',
  },
  es: {
    home: '',
    clientHub: 'cliente',
    clientBefore: 'cliente/antes',
    clientSessionDay: 'cliente/dia-de-la-sesion',
    clientAftercare: 'cliente/cuidados-posteriores',
    clientHealing: 'cliente/cicatrizacion',
    warningSigns: 'senales-de-alerta',
    emergency: 'emergencias',
    artistHub: 'tatuador',
    artistScreening: 'tatuador/evaluacion',
    artistWorkstation: 'tatuador/estacion-de-trabajo',
    artistDuringSession: 'tatuador/durante-la-sesion',
    artistClosing: 'tatuador/cierre-y-descarte',
    artistMachineSetup: 'tatuador/ajuste-inicial',
    artistBeginnerLimits: 'tatuador/limites-para-principiantes',
    styles: 'estilos',
    equipmentHub: 'equipo',
    equipmentPro: 'equipo/pro',
    sources: 'fuentes',
    about: 'sobre',
    skillsTest: 'pon-a-prueba-tus-habilidades',
  },
  de: {
    home: '',
    clientHub: 'kunde',
    clientBefore: 'kunde/vorher',
    clientSessionDay: 'kunde/sitzungstag',
    clientAftercare: 'kunde/nachsorge',
    clientHealing: 'kunde/heilung',
    warningSigns: 'warnzeichen',
    emergency: 'notfall',
    artistHub: 'taetowierer',
    artistScreening: 'taetowierer/erstgespraech',
    artistWorkstation: 'taetowierer/arbeitsplatz-vorbereitung',
    artistDuringSession: 'taetowierer/waehrend-der-sitzung',
    artistClosing: 'taetowierer/abschluss-und-entsorgung',
    artistMachineSetup: 'taetowierer/grundeinstellung',
    artistBeginnerLimits: 'taetowierer/grenzen-fuer-einsteiger',
    styles: 'stile',
    equipmentHub: 'ausruestung',
    equipmentPro: 'ausruestung/pro',
    sources: 'quellen',
    about: 'ueber-uns',
    skillsTest: 'teste-deine-faehigkeiten',
  },
};

/** '' para o idioma padrão (sem prefixo na URL), '/en' etc. para os demais. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Caminho absoluto de uma página em um idioma, ex.: pathFor('clientBefore', 'en') → '/en/client/before'. */
export function pathFor(routeId: RouteId, locale: Locale): string {
  const segment = segments[locale][routeId];
  return segment ? `${localePrefix(locale)}/${segment}` : localePrefix(locale) || '/';
}

/** Caminho (com ou sem prefixo) → routeId, para o seletor de idioma e os links `hreflang`. */
export function routeIdForPath(locale: Locale, pathname: string): RouteId | undefined {
  const prefix = localePrefix(locale);
  const rest = prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname;
  const clean = rest.replace(/^\/|\/$/g, '');
  return routeIds.find((id) => segments[locale][id] === clean);
}

/** Primeiro segmento da URL é um idioma não padrão? Senão, é o idioma padrão. */
export function detectLocale(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');
  return (locales as readonly string[]).includes(maybeLocale) && maybeLocale !== defaultLocale
    ? (maybeLocale as Locale)
    : defaultLocale;
}

/** Reaponta um caminho em português (o de `navigation.ts`) para o idioma alvo. */
export function localizeHref(ptPath: string, locale: Locale): string {
  const routeId = routeIdForPath(defaultLocale, ptPath);
  return routeId ? pathFor(routeId, locale) : ptPath;
}

/**
 * Os itens do topo (header e rodapé) — únicos com rótulo traduzido no
 * dicionário. `navKey` bate com as chaves de `Dictionary['nav']`.
 */
export const topNavItems: readonly { id: RouteId; navKey: keyof Dictionary['nav'] }[] = [
  { id: 'clientHub', navKey: 'clients' },
  { id: 'artistHub', navKey: 'artists' },
  { id: 'warningSigns', navKey: 'warningSigns' },
  { id: 'styles', navKey: 'styles' },
  { id: 'equipmentHub', navKey: 'equipment' },
  { id: 'about', navKey: 'about' },
  { id: 'skillsTest', navKey: 'skillsTest' },
];

export interface NavMenuSection {
  /** Título da coluna no painel; sem título, a coluna é a única do menu. */
  titleKey?: 'guides' | 'tools';
  items: readonly RouteId[];
}

export type NavGroup =
  | {
      kind: 'menu';
      navKey: keyof Dictionary['nav'];
      hub: RouteId;
      sections: readonly NavMenuSection[];
    }
  | { kind: 'link'; navKey: keyof Dictionary['nav']; id: RouteId };

/**
 * Navegação do desktop agrupada por público: poucos itens na barra, e cada
 * jornada abre um painel com as páginas dela. "Sobre" fica só no rodapé;
 * Emergências continua sempre visível como botão.
 */
export const navGroups: readonly NavGroup[] = [
  {
    kind: 'menu',
    navKey: 'clients',
    hub: 'clientHub',
    sections: [
      {
        items: [
          'warningSigns',
          'clientBefore',
          'clientSessionDay',
          'clientAftercare',
          'clientHealing',
        ],
      },
    ],
  },
  {
    kind: 'menu',
    navKey: 'artists',
    hub: 'artistHub',
    sections: [
      {
        titleKey: 'guides',
        items: [
          'artistScreening',
          'artistWorkstation',
          'artistDuringSession',
          'artistClosing',
          'artistMachineSetup',
          'artistBeginnerLimits',
        ],
      },
      { titleKey: 'tools', items: ['equipmentHub', 'equipmentPro', 'skillsTest'] },
    ],
  },
  { kind: 'link', navKey: 'styles', id: 'styles' },
];

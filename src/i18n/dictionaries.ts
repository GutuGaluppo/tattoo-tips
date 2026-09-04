import type { Locale } from './locale';

/**
 * Só o que forra o site (nav, rodapé, botões, avisos). O corpo dos guias —
 * clínico, revisado com fonte — não entra aqui: continua em português até
 * ser traduzido e revisado, e o `UntranslatedNotice` avisa disso.
 */
export interface Dictionary {
  skipToContent: string;
  nav: {
    clients: string;
    artists: string;
    warningSigns: string;
    styles: string;
    equipment: string;
    about: string;
  };
  emergency: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  mobileNavFooterLabel: string;
  openMenu: string;
  closeMenu: string;
  footerNavLabel: string;
  sendCorrection: string;
  footerTaglineLines: readonly [string, string, string];
  footerLegal: (jurisdiction: string, reviewedDate: string) => string;
  languageSwitcherLabel: string;
  untranslatedNotice: string;
  routeFallback: string;
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    skipToContent: 'Pular para o conteúdo',
    nav: {
      clients: 'Para clientes',
      artists: 'Para tatuadores',
      warningSigns: 'Sinais de alerta',
      styles: 'Estilos',
      equipment: 'Equipamento',
      about: 'Sobre',
    },
    emergency: 'Emergências',
    mainNavLabel: 'Navegação principal',
    mobileNavLabel: 'Navegação principal (móvel)',
    mobileNavFooterLabel: 'Navegação do rodapé',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    footerNavLabel: 'Navegação do rodapé',
    sendCorrection: 'Enviar correção',
    footerTaglineLines: ['Manual de', 'segurança e', 'cuidados.'],
    footerLegal: (jurisdiction, date) =>
      `Conteúdo educacional independente. Não substitui avaliação médica nem a legislação sanitária local. Referência regulatória: ${jurisdiction}. Última revisão: ${date}.`,
    languageSwitcherLabel: 'Idioma',
    untranslatedNotice: '',
    routeFallback: 'Carregando conteúdo',
  },
  en: {
    skipToContent: 'Skip to content',
    nav: {
      clients: 'For clients',
      artists: 'For tattoo artists',
      warningSigns: 'Warning signs',
      styles: 'Styles',
      equipment: 'Gear',
      about: 'About',
    },
    emergency: 'Emergency',
    mainNavLabel: 'Main navigation',
    mobileNavLabel: 'Main navigation (mobile)',
    mobileNavFooterLabel: 'Footer navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    footerNavLabel: 'Footer navigation',
    sendCorrection: 'Send a correction',
    footerTaglineLines: ['Safety and', 'aftercare', 'handbook.'],
    footerLegal: (jurisdiction, date) =>
      `Independent educational content. It does not replace medical evaluation or local health regulation. Default regulatory reference: ${jurisdiction}. Last reviewed: ${date}.`,
    languageSwitcherLabel: 'Language',
    untranslatedNotice:
      "This page hasn't been translated yet. You're reading the original Portuguese content below.",
    routeFallback: 'Loading content',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    nav: {
      clients: 'Para clientes',
      artists: 'Para tatuadores',
      warningSigns: 'Señales de alerta',
      styles: 'Estilos',
      equipment: 'Equipo',
      about: 'Acerca de',
    },
    emergency: 'Emergencias',
    mainNavLabel: 'Navegación principal',
    mobileNavLabel: 'Navegación principal (móvil)',
    mobileNavFooterLabel: 'Navegación del pie de página',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    footerNavLabel: 'Navegación del pie de página',
    sendCorrection: 'Enviar una corrección',
    footerTaglineLines: ['Manual de', 'seguridad y', 'cuidados.'],
    footerLegal: (jurisdiction, date) =>
      `Contenido educativo independiente. No sustituye la evaluación médica ni la legislación sanitaria local. Referencia regulatoria por defecto: ${jurisdiction}. Última revisión: ${date}.`,
    languageSwitcherLabel: 'Idioma',
    untranslatedNotice:
      'Esta página todavía no fue traducida. A continuación se muestra el contenido original en portugués.',
    routeFallback: 'Cargando contenido',
  },
  de: {
    skipToContent: 'Zum Inhalt springen',
    nav: {
      clients: 'Für Kund:innen',
      artists: 'Für Tätowierer:innen',
      warningSigns: 'Warnzeichen',
      styles: 'Stile',
      equipment: 'Ausrüstung',
      about: 'Über uns',
    },
    emergency: 'Notfall',
    mainNavLabel: 'Hauptnavigation',
    mobileNavLabel: 'Hauptnavigation (mobil)',
    mobileNavFooterLabel: 'Fußzeilen-Navigation',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    footerNavLabel: 'Fußzeilen-Navigation',
    sendCorrection: 'Korrektur senden',
    footerTaglineLines: ['Handbuch für', 'Sicherheit und', 'Nachsorge.'],
    footerLegal: (jurisdiction, date) =>
      `Unabhängiger Bildungsinhalt. Ersetzt keine ärztliche Beurteilung oder lokale Gesundheitsvorschriften. Standardmäßige regulatorische Referenz: ${jurisdiction}. Zuletzt überprüft: ${date}.`,
    languageSwitcherLabel: 'Sprache',
    untranslatedNotice:
      'Diese Seite wurde noch nicht übersetzt. Unten sehen Sie den ursprünglichen Inhalt auf Portugiesisch.',
    routeFallback: 'Inhalt wird geladen',
  },
};

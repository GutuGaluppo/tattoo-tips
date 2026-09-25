import type { Locale } from './locale';
import type { RouteId } from './routes';

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
    skillsTest: string;
  };
  /** Nome curto de cada página, usado nos menus da navegação. */
  pageTitles: Record<RouteId, string>;
  navMenu: {
    guides: string;
    tools: string;
    seeJourney: string;
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
  content: {
    audience: { client: string; artist: string; both: string };
    lastReviewed: string;
    regulatoryReference: string;
    medicalDisclaimer: string;
    technicalDisclaimer: string;
    scopeNotice: string;
    technicalRecommendations: string;
    guideTocLabel: string;
    onThisPage: string;
    directSectionLink: (title: string) => string;
    sources: string;
    sourceLabel: string;
    jurisdiction: string;
    checkedOn: string;
    sourceKinds: {
      norma: string;
      clinicalGuidance: string;
      regulator: string;
      educational: string;
      manufacturer: string;
      video: string;
    };
    restart: string;
    completed: (done: number, total: number) => string;
    filter: string;
    searchTable: string;
    table: string;
    noTableResults: (query: string) => string;
    expected: string;
    information: string;
    attention: string;
    urgent: string;
    playVideo: (title: string, organization: string) => string;
    loadFromYoutube: string;
    watchOnYoutube: string;
    situation: string;
    keepAnEyeOn: string;
    openPlaylist: string;
    playlistPlayerNotice: string;
    listenOnSpotify: string;
  };
  skillsTest: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    canvasLabel: string;
    toolbarLabel: string;
    needle: string;
    stencil: string;
    clear: string;
    hint: string;
    scoreLabel: string;
    coverage: string;
    precision: string;
    scoreEmpty: string;
    scoreDisclaimer: string;
    /** Do maior para o menor: vale o primeiro cujo `min` a pontuação alcança. */
    ranks: readonly { min: number; label: string }[];
  };
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
      skillsTest: 'Teste suas habilidades',
    },
    pageTitles: {
      home: 'Início',
      clientHub: 'Para clientes',
      clientBefore: 'Antes da tatuagem',
      clientSessionDay: 'Dia da sessão',
      clientAftercare: 'Cuidados depois',
      clientHealing: 'Cicatrização',
      warningSigns: 'Sinais de alerta',
      emergency: 'Emergências',
      artistHub: 'Para tatuadores',
      artistScreening: 'Triagem e higiene',
      artistWorkstation: 'Preparação da bancada',
      artistDuringSession: 'Durante a sessão',
      artistClosing: 'Encerramento e descarte',
      artistMachineSetup: 'Regulagem inicial',
      artistBeginnerLimits: 'Limites para iniciantes',
      styles: 'Estilos',
      equipmentHub: 'Equipamento',
      equipmentPro: 'Equipamento pro',
      sources: 'Fontes',
      about: 'Sobre',
      skillsTest: 'Teste suas habilidades',
    },
    navMenu: {
      guides: 'Guias',
      tools: 'Ferramentas',
      seeJourney: 'Ver jornada completa',
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
    content: {
      audience: { client: 'Para quem vai tatuar', artist: 'Para quem tatua', both: 'Para clientes e tatuadores' },
      lastReviewed: 'Última revisão', regulatoryReference: 'Referência regulatória',
      medicalDisclaimer: 'Conteúdo educacional. Não substitui avaliação médica presencial nem a legislação sanitária do seu município, estado ou país. Diante de sinais de infecção ou reação, procure atendimento de saúde.',
      technicalDisclaimer: 'Faixas de regulagem, materiais e produtos citados são pontos de partida. O ajuste correto depende da sua máquina, do cartucho, da pele do cliente, da sua velocidade de mão e das normas locais.',
      scopeNotice: 'Aviso', technicalRecommendations: 'Sobre as recomendações técnicas',
      guideTocLabel: 'Sumário deste guia', onThisPage: 'Nesta página', directSectionLink: (title) => `Link direto para a seção ${title}`,
      sources: 'Fontes', sourceLabel: 'Fontes', jurisdiction: 'Jurisdição', checkedOn: 'Verificado em',
      sourceKinds: { norma: 'Norma', clinicalGuidance: 'Orientação clínica', regulator: 'Órgão regulador', educational: 'Material educacional', manufacturer: 'Fabricante', video: 'Vídeo' },
      restart: 'Reiniciar', completed: (done, total) => `${done} de ${total} concluídos`,
      filter: 'Filtrar', searchTable: 'Buscar na tabela', table: 'Tabela', noTableResults: (query) => `Nenhuma linha corresponde a “${query}”.`,
      expected: 'Esperado', information: 'Informação', attention: 'Atenção', urgent: 'Urgente',
      playVideo: (title, organization) => `Reproduzir o vídeo “${title}”, de ${organization}. Carrega conteúdo do YouTube.`,
      loadFromYoutube: 'Clique para carregar do YouTube', watchOnYoutube: 'Ver no YouTube',
      situation: 'Situação', keepAnEyeOn: 'Ficar de olho', openPlaylist: 'Abrir playlist',
      playlistPlayerNotice: 'O player é do Spotify e só carrega quando você abre.', listenOnSpotify: 'Ouvir no Spotify',
    },
    skillsTest: {
      metaTitle: 'Teste suas habilidades',
      metaDescription: 'Um painel de pele virtual para treinar linhas com o mouse: agulhas de espessuras diferentes e stencil opcional.',
      eyebrow: 'Prática',
      title: 'Teste suas habilidades',
      description: 'Pratique linhas contínuas antes de encostar a agulha em alguém. Pressione e arraste dentro do painel: o traço só é riscado ali dentro.',
      canvasLabel: 'Painel de desenho. Pressione e arraste com o mouse para riscar linhas.',
      toolbarLabel: 'Ferramentas do painel',
      needle: 'Agulha',
      stencil: 'Mostrar stencil',
      clear: 'Limpar painel',
      hint: 'Dica: linhas rápidas saem mais finas, como na pele. Tente cobrir o stencil sem tremer.',
      scoreLabel: 'Pontuação',
      coverage: 'Cobertura',
      precision: 'Precisão',
      scoreEmpty: 'Risque sobre o stencil para ganhar pontos.',
      scoreDisclaimer: 'Só por diversão: não mede aptidão para tatuar.',
      ranks: [
        { min: 90, label: 'Mão de ouro' },
        { min: 70, label: 'Linha firme' },
        { min: 40, label: 'Pegando o jeito' },
        { min: 0, label: 'Continue treinando' },
      ],
    },
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
      skillsTest: 'Test your skills',
    },
    pageTitles: {
      home: 'Home',
      clientHub: 'For clients',
      clientBefore: 'Before your tattoo',
      clientSessionDay: 'Session day',
      clientAftercare: 'Aftercare',
      clientHealing: 'Healing',
      warningSigns: 'Warning signs',
      emergency: 'Emergency',
      artistHub: 'For tattoo artists',
      artistScreening: 'Screening and hygiene',
      artistWorkstation: 'Workstation setup',
      artistDuringSession: 'During the session',
      artistClosing: 'Closing and disposal',
      artistMachineSetup: 'Machine setup',
      artistBeginnerLimits: 'Beginner limits',
      styles: 'Styles',
      equipmentHub: 'Gear',
      equipmentPro: 'Pro gear',
      sources: 'Sources',
      about: 'About',
      skillsTest: 'Test your skills',
    },
    navMenu: {
      guides: 'Guides',
      tools: 'Tools',
      seeJourney: 'See the full journey',
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
      'This page is automatically translated from the original Portuguese content. Please verify critical information against the cited sources.',
    routeFallback: 'Loading content',
    content: {
      audience: { client: 'For tattoo clients', artist: 'For tattoo artists', both: 'For clients and tattoo artists' },
      lastReviewed: 'Last reviewed', regulatoryReference: 'Regulatory reference',
      medicalDisclaimer: 'Educational content. It does not replace an in-person medical assessment or the health regulations of your city, state, or country. Seek medical care if there are signs of infection or a reaction.',
      technicalDisclaimer: 'The settings, materials, and products mentioned are starting points. The right adjustment depends on your machine, cartridge, the client’s skin, your hand speed, and local regulations.',
      scopeNotice: 'Notice', technicalRecommendations: 'About technical recommendations',
      guideTocLabel: 'Table of contents for this guide', onThisPage: 'On this page', directSectionLink: (title) => `Direct link to the ${title} section`,
      sources: 'Sources', sourceLabel: 'Sources', jurisdiction: 'Jurisdiction', checkedOn: 'Checked on',
      sourceKinds: { norma: 'Standard', clinicalGuidance: 'Clinical guidance', regulator: 'Regulatory body', educational: 'Educational material', manufacturer: 'Manufacturer', video: 'Video' },
      restart: 'Reset', completed: (done, total) => `${done} of ${total} completed`,
      filter: 'Filter', searchTable: 'Search this table', table: 'Table', noTableResults: (query) => `No rows match “${query}”.`,
      expected: 'Expected', information: 'Information', attention: 'Attention', urgent: 'Urgent',
      playVideo: (title, organization) => `Play “${title}” by ${organization}. Loads content from YouTube.`,
      loadFromYoutube: 'Click to load from YouTube', watchOnYoutube: 'Watch on YouTube',
      situation: 'Situation', keepAnEyeOn: 'Keep an eye on', openPlaylist: 'Open playlist',
      playlistPlayerNotice: 'The Spotify player only loads when you open it.', listenOnSpotify: 'Listen on Spotify',
    },
    skillsTest: {
      metaTitle: 'Test your skills',
      metaDescription: 'A virtual skin panel to practise lines with your mouse: needles of different widths and an optional stencil.',
      eyebrow: 'Practice',
      title: 'Test your skills',
      description: 'Practise steady lines before your needle touches anyone. Press and drag inside the panel: the stroke is only drawn in there.',
      canvasLabel: 'Drawing panel. Press and drag with the mouse to draw lines.',
      toolbarLabel: 'Panel tools',
      needle: 'Needle',
      stencil: 'Show stencil',
      clear: 'Clear panel',
      hint: 'Tip: fast lines come out thinner, just like on skin. Try to follow the stencil without shaking.',
      scoreLabel: 'Score',
      coverage: 'Coverage',
      precision: 'Precision',
      scoreEmpty: 'Trace over the stencil to score points.',
      scoreDisclaimer: 'Just for fun: it does not measure whether you can tattoo.',
      ranks: [
        { min: 90, label: 'Golden hand' },
        { min: 70, label: 'Steady line' },
        { min: 40, label: 'Getting the hang of it' },
        { min: 0, label: 'Keep practising' },
      ],
    },
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
      skillsTest: 'Pon a prueba tus habilidades',
    },
    pageTitles: {
      home: 'Inicio',
      clientHub: 'Para clientes',
      clientBefore: 'Antes del tatuaje',
      clientSessionDay: 'Día de la sesión',
      clientAftercare: 'Cuidados posteriores',
      clientHealing: 'Cicatrización',
      warningSigns: 'Señales de alerta',
      emergency: 'Emergencias',
      artistHub: 'Para tatuadores',
      artistScreening: 'Evaluación e higiene',
      artistWorkstation: 'Estación de trabajo',
      artistDuringSession: 'Durante la sesión',
      artistClosing: 'Cierre y descarte',
      artistMachineSetup: 'Ajuste inicial',
      artistBeginnerLimits: 'Límites para principiantes',
      styles: 'Estilos',
      equipmentHub: 'Equipo',
      equipmentPro: 'Equipo pro',
      sources: 'Fuentes',
      about: 'Acerca de',
      skillsTest: 'Pon a prueba tus habilidades',
    },
    navMenu: {
      guides: 'Guías',
      tools: 'Herramientas',
      seeJourney: 'Ver el recorrido completo',
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
      'Esta página se traduce automáticamente del contenido original en portugués. Verifica la información crítica con las fuentes citadas.',
    routeFallback: 'Cargando contenido',
    content: {
      audience: { client: 'Para quienes se van a tatuar', artist: 'Para tatuadores', both: 'Para clientes y tatuadores' },
      lastReviewed: 'Última revisión', regulatoryReference: 'Referencia regulatoria',
      medicalDisclaimer: 'Contenido educativo. No sustituye una evaluación médica presencial ni la normativa sanitaria de tu municipio, estado o país. Busca atención médica ante signos de infección o reacción.',
      technicalDisclaimer: 'Los ajustes, materiales y productos citados son puntos de partida. El ajuste correcto depende de tu máquina, el cartucho, la piel del cliente, tu velocidad de mano y las normas locales.',
      scopeNotice: 'Aviso', technicalRecommendations: 'Sobre las recomendaciones técnicas',
      guideTocLabel: 'Índice de esta guía', onThisPage: 'En esta página', directSectionLink: (title) => `Enlace directo a la sección ${title}`,
      sources: 'Fuentes', sourceLabel: 'Fuentes', jurisdiction: 'Jurisdicción', checkedOn: 'Verificado el',
      sourceKinds: { norma: 'Norma', clinicalGuidance: 'Orientación clínica', regulator: 'Organismo regulador', educational: 'Material educativo', manufacturer: 'Fabricante', video: 'Vídeo' },
      restart: 'Reiniciar', completed: (done, total) => `${done} de ${total} completados`,
      filter: 'Filtrar', searchTable: 'Buscar en la tabla', table: 'Tabla', noTableResults: (query) => `Ninguna fila coincide con “${query}”.`,
      expected: 'Esperado', information: 'Información', attention: 'Atención', urgent: 'Urgente',
      playVideo: (title, organization) => `Reproducir «${title}», de ${organization}. Carga contenido de YouTube.`,
      loadFromYoutube: 'Haz clic para cargar desde YouTube', watchOnYoutube: 'Ver en YouTube',
      situation: 'Situación', keepAnEyeOn: 'Vigila', openPlaylist: 'Abrir playlist',
      playlistPlayerNotice: 'El reproductor de Spotify solo se carga cuando lo abres.', listenOnSpotify: 'Escuchar en Spotify',
    },
    skillsTest: {
      metaTitle: 'Pon a prueba tus habilidades',
      metaDescription: 'Un panel de piel virtual para practicar líneas con el ratón: agujas de distintos grosores y stencil opcional.',
      eyebrow: 'Práctica',
      title: 'Pon a prueba tus habilidades',
      description: 'Practica líneas continuas antes de que la aguja toque a alguien. Pulsa y arrastra dentro del panel: el trazo solo se dibuja ahí dentro.',
      canvasLabel: 'Panel de dibujo. Pulsa y arrastra con el ratón para trazar líneas.',
      toolbarLabel: 'Herramientas del panel',
      needle: 'Aguja',
      stencil: 'Mostrar stencil',
      clear: 'Limpiar panel',
      hint: 'Consejo: las líneas rápidas salen más finas, como en la piel. Intenta seguir el stencil sin temblar.',
      scoreLabel: 'Puntuación',
      coverage: 'Cobertura',
      precision: 'Precisión',
      scoreEmpty: 'Traza sobre el stencil para sumar puntos.',
      scoreDisclaimer: 'Solo por diversión: no mide la aptitud para tatuar.',
      ranks: [
        { min: 90, label: 'Mano de oro' },
        { min: 70, label: 'Línea firme' },
        { min: 40, label: 'Agarrando el truco' },
        { min: 0, label: 'Sigue practicando' },
      ],
    },
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
      skillsTest: 'Teste deine Fähigkeiten',
    },
    pageTitles: {
      home: 'Start',
      clientHub: 'Für Kund:innen',
      clientBefore: 'Vor dem Tattoo',
      clientSessionDay: 'Sitzungstag',
      clientAftercare: 'Nachsorge',
      clientHealing: 'Heilung',
      warningSigns: 'Warnzeichen',
      emergency: 'Notfall',
      artistHub: 'Für Tätowierer:innen',
      artistScreening: 'Erstgespräch und Hygiene',
      artistWorkstation: 'Arbeitsplatz-Vorbereitung',
      artistDuringSession: 'Während der Sitzung',
      artistClosing: 'Abschluss und Entsorgung',
      artistMachineSetup: 'Grundeinstellung',
      artistBeginnerLimits: 'Grenzen für Einsteiger',
      styles: 'Stile',
      equipmentHub: 'Ausrüstung',
      equipmentPro: 'Profi-Ausrüstung',
      sources: 'Quellen',
      about: 'Über uns',
      skillsTest: 'Teste deine Fähigkeiten',
    },
    navMenu: {
      guides: 'Leitfäden',
      tools: 'Werkzeuge',
      seeJourney: 'Gesamten Weg ansehen',
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
      'Diese Seite wird automatisch aus dem portugiesischen Originalinhalt übersetzt. Prüfen Sie wichtige Informationen anhand der angegebenen Quellen.',
    routeFallback: 'Inhalt wird geladen',
    content: {
      audience: { client: 'Für Tattoo-Kund:innen', artist: 'Für Tätowierer:innen', both: 'Für Kund:innen und Tätowierer:innen' },
      lastReviewed: 'Zuletzt überprüft', regulatoryReference: 'Regulatorische Referenz',
      medicalDisclaimer: 'Bildungsinhalt. Ersetzt weder eine ärztliche Untersuchung noch die Gesundheitsvorschriften deiner Gemeinde, deines Bundeslands oder deines Landes. Bei Anzeichen einer Infektion oder Reaktion medizinische Hilfe suchen.',
      technicalDisclaimer: 'Die genannten Einstellungen, Materialien und Produkte sind Ausgangspunkte. Die richtige Anpassung hängt von deiner Maschine, der Cartridge, der Haut der Kundschaft, deiner Handgeschwindigkeit und den lokalen Vorschriften ab.',
      scopeNotice: 'Hinweis', technicalRecommendations: 'Zu technischen Empfehlungen',
      guideTocLabel: 'Inhaltsverzeichnis dieses Leitfadens', onThisPage: 'Auf dieser Seite', directSectionLink: (title) => `Direktlink zum Abschnitt ${title}`,
      sources: 'Quellen', sourceLabel: 'Quellen', jurisdiction: 'Rechtsraum', checkedOn: 'Geprüft am',
      sourceKinds: { norma: 'Norm', clinicalGuidance: 'Klinische Leitlinie', regulator: 'Regulierungsbehörde', educational: 'Schulungsmaterial', manufacturer: 'Hersteller', video: 'Video' },
      restart: 'Zurücksetzen', completed: (done, total) => `${done} von ${total} erledigt`,
      filter: 'Filtern', searchTable: 'Tabelle durchsuchen', table: 'Tabelle', noTableResults: (query) => `Keine Zeilen entsprechen „${query}“.`,
      expected: 'Erwartet', information: 'Information', attention: 'Achtung', urgent: 'Dringend',
      playVideo: (title, organization) => `„${title}“ von ${organization} abspielen. Lädt Inhalte von YouTube.`,
      loadFromYoutube: 'Klicken, um von YouTube zu laden', watchOnYoutube: 'Auf YouTube ansehen',
      situation: 'Situation', keepAnEyeOn: 'Darauf achten', openPlaylist: 'Playlist öffnen',
      playlistPlayerNotice: 'Der Spotify-Player wird erst geladen, wenn du ihn öffnest.', listenOnSpotify: 'Auf Spotify hören',
    },
    skillsTest: {
      metaTitle: 'Teste deine Fähigkeiten',
      metaDescription: 'Eine virtuelle Hautfläche zum Üben von Linien mit der Maus: Nadeln in verschiedenen Stärken und optionale Schablone.',
      eyebrow: 'Übung',
      title: 'Teste deine Fähigkeiten',
      description: 'Übe saubere Linien, bevor deine Nadel jemanden berührt. Drücken und ziehen im Feld: Der Strich wird nur dort gezeichnet.',
      canvasLabel: 'Zeichenfeld. Mit gedrückter Maustaste ziehen, um Linien zu zeichnen.',
      toolbarLabel: 'Werkzeuge des Zeichenfelds',
      needle: 'Nadel',
      stencil: 'Schablone zeigen',
      clear: 'Feld leeren',
      hint: 'Tipp: Schnelle Linien werden dünner, wie auf der Haut. Versuche, der Schablone ohne Zittern zu folgen.',
      scoreLabel: 'Punktzahl',
      coverage: 'Abdeckung',
      precision: 'Präzision',
      scoreEmpty: 'Fahre die Schablone nach, um Punkte zu sammeln.',
      scoreDisclaimer: 'Nur zum Spaß: Es misst nicht, ob du tätowieren kannst.',
      ranks: [
        { min: 90, label: 'Goldene Hand' },
        { min: 70, label: 'Ruhige Linie' },
        { min: 40, label: 'Du kommst rein' },
        { min: 0, label: 'Weiter üben' },
      ],
    },
  },
};

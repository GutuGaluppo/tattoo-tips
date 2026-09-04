export interface NavItem {
  label: string;
  to: string;
  description?: string;
  children?: NavItem[];
  /** Item ainda sem conteúdo publicado. */
  upcoming?: boolean;
}

/**
 * Estrutura de navegação declarada uma única vez: alimenta o cabeçalho, o
 * menu mobile, os hubs de jornada, a página 404 e o sitemap.
 */
export const clientJourney: NavItem[] = [
  {
    label: 'Antes da tatuagem',
    to: '/cliente/antes',
    description: 'O que resolver, informar e evitar antes de sentar na maca.',
  },
  {
    label: 'Dia da sessão',
    to: '/cliente/dia-da-sessao',
    description: 'O que esperar e o que observar no estúdio, na hora.',
  },
  {
    label: 'Cuidados depois',
    to: '/cliente/cuidados-depois',
    description: 'Filme ou cuidado tradicional, lavagem, hidratação e o que não usar.',
  },
  {
    label: 'Cicatrização',
    to: '/cliente/cicatrizacao',
    description: 'O que é normal em cada fase, do dia 0 aos meses seguintes.',
  },
];

export const artistJourney: NavItem[] = [
  {
    label: 'Triagem e higiene',
    to: '/tatuador/triagem',
    description: 'Consentimento, contraindicações e higiene das mãos.',
  },
  {
    label: 'Preparação da bancada',
    to: '/tatuador/bancada',
    description: 'Barreiras, materiais de uso único e campo limpo.',
    upcoming: true,
  },
  {
    label: 'Durante a sessão',
    to: '/tatuador/durante-a-sessao',
    description: 'Troca de luvas, perfurocortantes e limpeza.',
    upcoming: true,
  },
  {
    label: 'Encerramento e descarte',
    to: '/tatuador/encerramento',
    description: 'Curativo, descarte imediato e descontaminação.',
    upcoming: true,
  },
  {
    label: 'Regulagem inicial',
    to: '/tatuador/regulagem',
    description: 'Stroke, voltagem e agulhas como ponto de partida.',
    upcoming: true,
  },
  {
    label: 'Limites para iniciantes',
    to: '/tatuador/limites',
    description: 'O que adiar até a mão estar calibrada.',
    upcoming: true,
  },
];

export const primaryNav: NavItem[] = [
  { label: 'Para clientes', to: '/cliente', children: clientJourney },
  { label: 'Para tatuadores', to: '/tatuador', children: artistJourney },
  { label: 'Sinais de alerta', to: '/sinais-de-alerta' },
  { label: 'Estilos', to: '/estilos' },
  { label: 'Sobre', to: '/sobre' },
];

/** Rotas publicadas — base do sitemap e dos atalhos da página 404. */
export const publishedRoutes: string[] = [
  '/',
  '/cliente',
  ...clientJourney.map((item) => item.to),
  '/sinais-de-alerta',
  '/emergencias',
  '/tatuador',
  ...artistJourney.filter((item) => !item.upcoming).map((item) => item.to),
  '/estilos',
  '/fontes',
  '/sobre',
];

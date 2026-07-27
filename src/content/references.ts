import type { Source } from './types';

/**
 * Registry central de fontes. Toda orientação sensível cita um id daqui.
 *
 * Os identificadores internos do relatório de pesquisa (`turn28view0`, etc.)
 * não são publicáveis: foram substituídos pelas URLs públicas reais,
 * verificadas em 2026-07-26.
 */
export const references = {
  'eadv-aftercare': {
    id: 'eadv-aftercare',
    title: 'Tattoo Aftercare — Information Leaflet for Patients',
    org: 'European Academy of Dermatology and Venereology (EADV)',
    url: 'https://eadv.org/wp-content/uploads/2023/04/EADV-TATTOO-Tattoo-Aftercare.pdf',
    accessedAt: '2026-07-26',
    jurisdiction: 'EU',
    kind: 'orientacao-clinica',
    note: 'Base clínica principal do aftercare, da cicatrização normal e da distinção normal x anormal.',
  },
  'who-hand-hygiene': {
    id: 'who-hand-hygiene',
    title: 'Hand hygiene — Infection prevention and control',
    org: 'Organização Mundial da Saúde (OMS/WHO)',
    url: 'https://www.who.int/teams/integrated-health-services/infection-prevention-control/hand-hygiene',
    accessedAt: '2026-07-26',
    jurisdiction: 'global',
    kind: 'orientacao-clinica',
  },
  'who-handrub-poster': {
    id: 'who-handrub-poster',
    title: 'How to Handrub / How to Handwash (pôster oficial)',
    org: 'Organização Mundial da Saúde (OMS/WHO)',
    url: 'https://cdn.who.int/media/docs/default-source/integrated-health-services-(ihs)/infection-prevention-and-control/hand-hygiene/gpsc-handrub-wash.pdf?sfvrsn=124563d4_5',
    accessedAt: '2026-07-26',
    jurisdiction: 'global',
    kind: 'orientacao-clinica',
    note: 'Fricção alcoólica 20–30s; lavagem com água e sabão 40–60s.',
  },
  'osha-bbp': {
    id: 'osha-bbp',
    title: '29 CFR 1910.1030 — Bloodborne pathogens',
    org: 'Occupational Safety and Health Administration (OSHA)',
    url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'norma',
    note: 'Norma dos Estados Unidos. NÃO se aplica automaticamente ao Brasil — serve como referência de boa prática.',
  },
  'osha-tattoo-2002': {
    id: 'osha-tattoo-2002',
    title:
      'Applicability of the Bloodborne Pathogens standard to the tattoo and body piercing industries',
    org: 'Occupational Safety and Health Administration (OSHA)',
    url: 'https://www.osha.gov/laws-regs/standardinterpretations/2002-07-29',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'norma',
    note: 'Descarte imediato de perfurocortantes de uso único; EPI; vacinação contra hepatite B; avaliação pós-exposição.',
  },
  'osha-tattoo-2016': {
    id: 'osha-tattoo-2016',
    title:
      'Obligations of establishments that provide tattoos and body piercing under OSHA’s Bloodborne Pathogens Standard',
    org: 'Occupational Safety and Health Administration (OSHA)',
    url: 'https://www.osha.gov/laws-regs/standardinterpretations/2016-06-20-0',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'norma',
  },
  'fda-tattoo-safety': {
    id: 'fda-tattoo-safety',
    title: 'Think Before You Ink: Tattoo Safety',
    org: 'U.S. Food and Drug Administration (FDA)',
    url: 'https://www.fda.gov/consumers/consumer-updates/think-you-ink-tattoo-safety',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orgao-regulador',
    note: 'Tintas lacradas também já foram encontradas contaminadas; reações podem surgir anos depois.',
  },
  'echa-tattoo-inks': {
    id: 'echa-tattoo-inks',
    title: 'Tattoo inks and permanent make-up — restrição REACH',
    org: 'European Chemicals Agency (ECHA)',
    url: 'https://echa.europa.eu/hot-topics/tattoo-inks',
    accessedAt: '2026-07-26',
    jurisdiction: 'EU',
    kind: 'orgao-regulador',
    note: 'Restringe milhares de substâncias em tintas na União Europeia. O site bloqueia acesso automatizado; verificar manualmente.',
    botProtected: true,
  },
  'cdc-ntm-tattoo': {
    id: 'cdc-ntm-tattoo',
    title:
      'Tattoo-associated nontuberculous mycobacterial skin infections — multiple states, 2011–2012 (MMWR)',
    org: 'Centers for Disease Control and Prevention (CDC)',
    url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6133a3.htm',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orientacao-clinica',
    note: 'Surtos ligados a tinta contaminada e a diluição com água de torneira. O site bloqueia acesso automatizado; verificar manualmente.',
    botProtected: true,
  },
  'aad-tattoo-reactions': {
    id: 'aad-tattoo-reactions',
    title: 'Tattoos: 7 unexpected skin reactions and what to do about them',
    org: 'American Academy of Dermatology (AAD)',
    url: 'https://www.aad.org/public/everyday-care/skin-care-basics/tattoos/tattoo-skin-reactions',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orientacao-clinica',
  },
  'aad-tattoo-care': {
    id: 'aad-tattoo-care',
    title: 'Caring for tattooed skin',
    org: 'American Academy of Dermatology (AAD)',
    url: 'https://www.aad.org/public/everyday-care/skin-care-basics/tattoos/caring-for-tattooed-skin',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orientacao-clinica',
  },
  'aad-wound-care': {
    id: 'aad-wound-care',
    title: 'Proper wound care: how to minimize a scar',
    org: 'American Academy of Dermatology (AAD)',
    url: 'https://www.aad.org/public/everyday-care/injured-skin/burns/wound-care-minimize-scars',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orientacao-clinica',
    note: 'Desaconselha peróxido de hidrogênio e álcool sobre ferida em cicatrização.',
  },
  'cleveland-aftercare': {
    id: 'cleveland-aftercare',
    title: 'Tattoo Aftercare: Instructions and Healing Tips',
    org: 'Cleveland Clinic',
    url: 'https://health.clevelandclinic.org/tattoo-aftercare',
    accessedAt: '2026-07-26',
    jurisdiction: 'US',
    kind: 'orientacao-clinica',
  },
  'anvisa-tintas': {
    id: 'anvisa-tintas',
    title: 'Conheça as tintas de tatuagem autorizadas',
    org: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
    url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2016/conheca-as-tintas-de-tatuagem-autorizadas',
    accessedAt: '2026-07-26',
    jurisdiction: 'BR',
    kind: 'orgao-regulador',
    note: 'No Brasil, tintas precisam de regularização na Anvisa. A lista de produtos autorizados muda — confira sempre a versão atual.',
  },
  'anvisa-registro-tintas': {
    id: 'anvisa-registro-tintas',
    title: 'Aberta consulta para aperfeiçoar regras de registro de tintas de tatuagem',
    org: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
    url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2016/aberta-consulta-para-aperfeicoar-regras-de-registro-de-tintas-de-tatuagem',
    accessedAt: '2026-07-26',
    jurisdiction: 'BR',
    kind: 'orgao-regulador',
  },
  'who-handwash-video': {
    id: 'who-handwash-video',
    title: 'WHO: How to handwash? With soap and water',
    org: 'Organização Mundial da Saúde (OMS/WHO)',
    url: 'https://www.youtube.com/watch?v=3PmVJQUCm4E',
    accessedAt: '2026-07-26',
    jurisdiction: 'global',
    kind: 'video',
  },
  'jhm-handrub-video': {
    id: 'jhm-handrub-video',
    title: 'Hand Rubbing Steps Using the WHO Technique',
    org: 'Johns Hopkins Medicine',
    url: 'https://www.youtube.com/watch?v=B3eq5fLzAOo',
    accessedAt: '2026-07-26',
    jurisdiction: 'global',
    kind: 'video',
  },
  't101-beginners-video': {
    id: 't101-beginners-video',
    title: 'New to Tattooing? Watch This Before You Begin',
    org: 'Tattooing 101',
    url: 'https://www.youtube.com/watch?v=0DMM6L4VcJA',
    accessedAt: '2026-07-26',
    jurisdiction: 'global',
    kind: 'educacional',
    note: 'Material educacional comercial. Útil para técnica, sem valor normativo.',
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof references;

export const allSources: Source[] = Object.values(references);

export function getSource(id: SourceId): Source {
  return references[id];
}

/** Resolve ids preservando a ordem informada e ignorando duplicatas. */
export function getSources(ids: readonly SourceId[]): Source[] {
  return Array.from(new Set(ids)).map(getSource);
}

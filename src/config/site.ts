/**
 * Configuração central do produto. Nome, escopo e jurisdição vivem aqui —
 * trocar o posicionamento não deve exigir varredura por JSX.
 */
export const site = {
  name: 'Tattoo Tips',
  tagline: 'Manual prático de segurança e cuidados com tatuagem',
  description:
    'Guia independente sobre o que fazer antes, durante e depois de uma tatuagem: aftercare, cicatrização, sinais de alerta e biossegurança — com fontes públicas e data de revisão.',
  locale: 'pt-BR',
  jurisdiction: 'BR' as const,
  url: 'https://tattoo-tips.example',
  lastReviewed: '2026-07-26',
  editorialContact: 'galuppodev@gmail.com',
} as const;

/** Aviso obrigatório em todo guia com orientação sensível. */
export const medicalDisclaimer =
  'Conteúdo educacional. Não substitui avaliação médica presencial nem a legislação sanitária do seu município, estado ou país. Diante de sinais de infecção ou reação, procure atendimento de saúde.';

/** Aviso específico das páginas técnicas voltadas a tatuadores. */
export const technicalDisclaimer =
  'Faixas de regulagem, materiais e produtos citados são pontos de partida. O ajuste correto depende da sua máquina, do cartucho, da pele do cliente, da sua velocidade de mão e das normas locais.';

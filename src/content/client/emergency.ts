import type { Guide } from '../types';

export const emergencyGuide: Guide = {
  slug: '/emergencias',
  audience: 'ambos',
  title: 'Emergências',
  navTitle: 'Emergências',
  description: 'Situações que exigem conduta imediata. Texto curto, uma ação por vez.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  sections: [
    {
      id: 'infeccao-grave',
      title: 'Suspeita de infecção grave',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Febre alta, linhas vermelhas ou mal-estar sistêmico',
          text: 'Vá a um serviço de urgência agora. Não é caso de tratar em casa nem de esperar o horário comercial.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Procure atendimento de urgência',
              text: 'Leve a lista de tintas, curativos e produtos usados na área.',
              level: 'urgencia',
            },
            {
              title: 'Não aplique nada novo na área',
              text: 'Pomada, antisséptico ou remédio por conta própria atrapalham o diagnóstico.',
            },
            {
              title: 'Avise o tatuador',
              text: 'Ele precisa registrar o lote dos materiais e verificar se outros clientes tiveram o mesmo problema.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'infeccao-local',
      title: 'Suspeita de infecção local',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Pus amarelo ou esverdeado, odor, dor e vermelhidão em progressão',
          text: 'Interrompa o automanejo caseiro e busque avaliação médica rápida. Registre os materiais e lotes usados.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'reacao-cutanea',
      title: 'Reação cutânea importante ao pós-cuidado',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Rash intenso, bolhas ou secreção clara persistente',
          text: 'Suspenda o produto e procure avaliação médica. Revise adesivos, pomadas e antissépticos usados — um deles costuma ser o responsável.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
      ],
    },
    {
      id: 'sangramento',
      title: 'Sangramento anormal',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Compressão firme e contínua',
              text: 'Com material limpo, direto sobre a área, sem ficar levantando para conferir.',
              level: 'urgencia',
            },
            {
              title: 'Interrompa a sessão',
              text: 'Se estiver em atendimento, o procedimento para.',
            },
            {
              title: 'Encaminhe para avaliação médica',
              text: 'Sangramento que não cessa ou que encharca o curativo repetidamente precisa ser avaliado.',
              level: 'urgencia',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'acidente-perfurocortante',
      title: 'Acidente com perfurocortante (tatuador)',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Lave a área imediatamente',
              text: 'Corte ou punção: água e sabão. Mucosa: irrigue com água. Olhos: irrigue abundantemente.',
              level: 'urgencia',
            },
            {
              title: 'Comunique o responsável',
              text: 'O acidente precisa ser registrado, com identificação do material e da situação.',
            },
            {
              title: 'Busque avaliação médica imediata',
              text: 'A avaliação pós-exposição é urgente, porque profilaxia, quando indicada, é sensível ao tempo.',
              level: 'urgencia',
            },
          ],
          sources: ['osha-bbp', 'osha-tattoo-2002'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Sobre a jurisdição desta orientação',
          text: 'A estrutura de plano de exposição, vacinação contra hepatite B e avaliação pós-exposição descrita aqui vem da norma norte-americana da OSHA. No Brasil, siga também as normas de saúde do trabalho e a vigilância sanitária local.',
          sources: ['osha-bbp', 'osha-tattoo-2016'],
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'cleveland-aftercare',
    'aad-tattoo-reactions',
    'osha-bbp',
    'osha-tattoo-2002',
    'osha-tattoo-2016',
  ],
};

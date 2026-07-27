import type { Guide } from '../types';

export const sessionDayGuide: Guide = {
  slug: '/cliente/dia-da-sessao',
  audience: 'cliente',
  title: 'Dia da sessão',
  navTitle: 'Dia da sessão',
  description:
    'O que acontece do momento em que você senta até sair do estúdio — e o que observar enquanto acontece.',
  intro:
    'Você não precisa fiscalizar o trabalho de ninguém. Mas saber a sequência esperada ajuda a perceber quando algo foi pulado.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'session',
  sections: [
    {
      id: 'sequencia',
      title: 'A sequência esperada',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Triagem e consentimento',
              text: 'Revisão da ficha de saúde, das alergias e do que você informou. Assinatura do termo.',
            },
            {
              title: 'Higiene das mãos',
              text: 'Antes de montar a bancada e antes de calçar as luvas. As mãos precisam estar secas antes das luvas.',
              level: 'atencao',
            },
            {
              title: 'Montagem da bancada',
              text: 'Superfícies já descontaminadas, barreiras novas em cabos, máquina e borrifadores, material de uso único separado e coletor de perfurocortantes ao alcance.',
            },
            {
              title: 'Preparo da pele e stencil',
              text: 'Avaliação da região, tricotomia com lâmina descartável se necessário, limpeza da pele, secagem e transferência do stencil em pele íntegra.',
            },
            {
              title: 'Procedimento',
              text: 'Durante a sessão, troca de luvas sempre que houver contato com superfície não protegida ou mudança entre etapa contaminada e etapa limpa.',
            },
            {
              title: 'Curativo inicial e orientação escrita',
              text: 'Você sai sabendo qual curativo foi usado, por quanto tempo mantê-lo e o que fazer se houver vazamento.',
            },
            {
              title: 'Descarte e descontaminação',
              text: 'Agulha e cartucho descartados imediatamente no coletor; superfícies descontaminadas depois do atendimento.',
            },
          ],
          sources: [
            'who-hand-hygiene',
            'who-handrub-poster',
            'osha-bbp',
            'osha-tattoo-2002',
            'eadv-aftercare',
          ],
        },
      ],
    },
    {
      id: 'o-que-observar',
      title: 'O que observar durante a sessão',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-dia-da-sessao',
          title: 'Checklist do dia',
          description:
            'Marque conforme for acontecendo. Serve também para lembrar do que perguntar.',
          items: [
            {
              id: 'lacre',
              label: 'A agulha ou cartucho foi aberto na sua frente, com a embalagem íntegra.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'luvas',
              label:
                'O tatuador trocou de luvas depois de tocar celular, maçaneta ou qualquer superfície sem barreira.',
              detail:
                'Higiene das mãos continua necessária mesmo com uso de luvas; luva não substitui lavagem.',
              sources: ['who-hand-hygiene', 'osha-bbp'],
            },
            {
              id: 'descarte',
              label: 'A agulha usada foi descartada de imediato no coletor rígido.',
              detail: 'Nada de dobrar, quebrar, recapear ou reaproveitar material de uso único.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'A tinta usada tem rótulo, lote e validade visíveis.',
              sources: ['anvisa-tintas', 'fda-tattoo-safety'],
            },
            {
              id: 'diluicao',
              label: 'Se houve diluição de tinta, não foi feita com água de torneira.',
              sources: ['cdc-ntm-tattoo'],
            },
            {
              id: 'orientacao',
              label: 'Você recebeu a orientação de pós-cuidado por escrito antes de sair.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
      ],
    },
    {
      id: 'durante',
      title: 'Se algo acontecer com você durante a sessão',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Avise na hora — não espere terminar',
          text: 'Tontura, náusea, suor frio, formigamento nas mãos ou visão escurecendo pedem pausa imediata. Coceira intensa, ardência fora do comum ou vermelhidão que se espalha longe da área tatuada também precisam ser ditos na hora.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Anote (ou fotografe) o nome e o lote das tintas, o tipo de curativo aplicado e os produtos usados na sua pele. Se aparecer alguma reação depois, essa lista é a primeira coisa que a avaliação médica vai pedir.',
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
        {
          type: 'playlist',
          spotifyId: '6MlFKYieMeFCXyWrWYcsCZ',
          title: 'Para a cadeira',
          description:
            'Distração ajuda a atravessar as horas paradas. Combine o fone antes: você precisa continuar conseguindo avisar se sentir algo errado.',
          compact: true,
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'who-hand-hygiene',
    'who-handrub-poster',
    'osha-bbp',
    'osha-tattoo-2002',
    'cdc-ntm-tattoo',
    'anvisa-tintas',
    'fda-tattoo-safety',
    'aad-tattoo-reactions',
  ],
};

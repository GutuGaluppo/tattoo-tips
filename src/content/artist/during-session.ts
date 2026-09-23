import type { Guide } from '../types';

export const duringSessionGuide: Guide = {
  slug: '/tatuador/durante-a-sessao',
  audience: 'tatuador',
  title: 'Durante a sessão',
  navTitle: 'Durante a sessão',
  description:
    'Contaminação cruzada por toque acontece com luvas limpas encostando em superfícies sujas. O que observar enquanto o procedimento está em andamento.',
  intro:
    'A bancada bem montada perde o sentido se a luva enluvada circular livremente entre o cliente e qualquer superfície sem barreira. O risco maior durante a sessão não é a agulha — é a mão.',
  jurisdiction: 'BR',
  lastReviewed: '2026-09-22',
  technical: true,
  image: 'session',
  sections: [
    {
      id: 'contaminacao-por-toque',
      title: 'Contaminação cruzada por toque',
      summary: 'O que costuma ser esquecido durante o procedimento.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Qualquer objeto tocado com a luva que também tocou o cliente carrega o mesmo risco que a pele em procedimento. Isso vale mesmo para superfícies que parecem "só equipamento".',
          sources: ['osha-bbp'],
        },
        {
          type: 'list',
          title: 'Superfícies frequentemente esquecidas',
          items: [
            'Fonte e bateria da máquina',
            'Cabo (clip cord ou wireless)',
            'Luminária e o próprio braço articulado',
            'Frasco de água/wash',
            'Gavetas e puxadores',
            'Celular ou tablet usado para referência',
            'Apoio de braço e cadeira fora da área já protegida',
            'Maçaneta da porta',
            'Botões e tela da máquina',
          ],
          sources: ['cieh-toolkit'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Regra prática: barreira, fluxo ou descontaminação — sempre uma das três',
          text: 'Todo objeto que pode ser tocado com luva contaminada precisa de pelo menos uma solução: (1) estar protegido por barreira adequada; (2) ser manipulado por um fluxo que evite o toque direto (por exemplo, pedir para um assistente ajustar); ou (3) ser limpo e desinfetado corretamente depois do atendimento, conforme o material.',
          sources: ['cieh-toolkit', 'osha-bbp'],
        },
      ],
    },
    {
      id: 'troca-de-luvas',
      title: 'Troca de luvas e higiene das mãos',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Trocar de luva não substitui higienizar a mão',
          text: 'A indicação de higiene das mãos existe independentemente do uso de luvas. Sempre que a rotina pedir higienização — por exemplo depois de tocar uma superfície fora da barreira, antes de recalçar luva nova — as mãos precisam ser higienizadas e secas antes de vestir o próximo par.',
          sources: ['who-hand-hygiene'],
        },
        {
          type: 'steps',
          title: 'Quando trocar de luva',
          steps: [
            {
              title: 'Luva rasgada, furada ou visivelmente suja',
              text: 'Troca imediata, sem esperar uma pausa natural do trabalho.',
              level: 'atencao',
            },
            {
              title: 'Depois de tocar qualquer superfície sem barreira',
              text: 'Celular, gaveta, maçaneta — mesmo um toque rápido conta.',
            },
            {
              title: 'Ao trocar de tarefa',
              text: 'Por exemplo, sair de limpar excesso de tinta para ajustar a máquina sem barreira.',
            },
            {
              title: 'Em pausas prolongadas',
              text: 'Retomar o procedimento depois de um intervalo é o mesmo que recomeçar a etapa de higiene.',
            },
          ],
          sources: ['who-hand-hygiene', 'osha-bbp'],
        },
      ],
    },
    {
      id: 'limpeza-durante-o-trabalho',
      title: 'Limpando excesso de tinta e sangue durante o trabalho',
      blocks: [
        {
          type: 'list',
          items: [
            'Use gaze ou papel descartável de uso único por passada — não reutilize o mesmo pedaço em áreas diferentes da pele.',
            'Descarte o material usado no recipiente de resíduo contaminado, não na lixeira comum.',
            'Se houver respingo de sangue fora da área prevista, siga o protocolo de derramamento de sangue do seu estúdio antes de continuar.',
            'Mantenha o frasco de água/wash fechado quando não estiver em uso direto.',
          ],
          sources: ['cieh-toolkit', 'osha-bbp'],
        },
      ],
    },
    {
      id: 'checklist-durante',
      title: 'Checklist durante o procedimento',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-durante-sessao',
          title: 'Enquanto a sessão está em andamento',
          description: 'Não é para preencher de uma vez — é para revisar mentalmente ao longo da sessão.',
          items: [
            {
              id: 'toque-fora-da-barreira',
              label: 'Nenhum toque de luva contaminada em superfície sem barreira, sem descontaminar depois.',
              sources: ['cieh-toolkit'],
            },
            {
              id: 'troca-luva',
              label: 'Luva trocada a cada situação que pedir troca — rasgo, sujidade, mudança de tarefa, pausa.',
              sources: ['who-hand-hygiene'],
            },
            {
              id: 'descartaveis-uso-unico',
              label: 'Gaze e papel de limpeza usados uma vez e descartados, sem reaproveitar entre áreas.',
              sources: ['osha-bbp'],
            },
            {
              id: 'wash-fechado',
              label: 'Frasco de água/wash fechado quando não está em uso direto.',
            },
          ],
        },
      ],
    },
  ],
  sources: ['cieh-toolkit', 'osha-bbp', 'who-hand-hygiene'],
};

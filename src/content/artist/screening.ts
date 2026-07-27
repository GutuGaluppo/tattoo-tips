import type { Guide } from '../types';

export const screeningGuide: Guide = {
  slug: '/tatuador/triagem',
  audience: 'tatuador',
  title: 'Triagem, consentimento e higiene das mãos',
  navTitle: 'Triagem e higiene',
  description:
    'O primeiro bloco da jornada de biossegurança: o que perguntar antes do desenho tocar a pele e como higienizar as mãos de forma correta.',
  intro:
    'Trabalhe como se todo sangue e fluido corporal fosse potencialmente infeccioso. Isso não é pessimismo — é o que sustenta a precaução universal.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  technical: true,
  image: 'workstation',
  sections: [
    {
      id: 'triagem',
      title: 'Triagem antes do desenho',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Consentimento informado assinado',
              text: 'Documento que descreve riscos, cuidados posteriores e o que fazer se algo fugir do esperado.',
            },
            {
              title: 'Ficha de triagem preenchida',
              text: 'Medicações, alergias, reações prévias a tatuagem, adesivos e antissépticos, tendência a queloide e condições que pioram cicatrização ou infecção.',
              level: 'atencao',
            },
            {
              title: 'Avaliação visual da região',
              text: 'Pele com infecção, dermatite ativa, queimadura solar ou lesão não recebe procedimento. Remarque.',
              level: 'atencao',
            },
            {
              title: 'Confirmação de documentação local',
              text: 'Idade mínima, documentos e exigências variam por município e estado. Confirme a regra da sua vigilância sanitária.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'anvisa-tintas'],
        },
      ],
    },
    {
      id: 'higiene-das-maos',
      title: 'Higiene das mãos',
      summary: 'Não é opcional e não é substituída por luvas.',
      blocks: [
        {
          type: 'table',
          title: 'Quando e por quanto tempo',
          caption:
            'Tempos e indicações conforme a orientação da OMS. Mãos secas antes de calçar as luvas; unhas naturais curtas.',
          columns: [
            { key: 'situacao', label: 'Situação', sortable: true },
            { key: 'metodo', label: 'Método' },
            { key: 'tempo', label: 'Tempo', align: 'end', sortable: true },
          ],
          cardTitleKey: 'situacao',
          searchable: true,
          rows: [
            {
              situacao: 'Mãos sem sujeira visível',
              metodo: 'Fricção com preparação alcoólica',
              tempo: '20–30 s',
            },
            {
              situacao: 'Mãos visivelmente sujas',
              metodo: 'Água e sabão',
              tempo: '40–60 s',
            },
            {
              situacao: 'Contato com sangue ou fluidos',
              metodo: 'Água e sabão',
              tempo: '40–60 s',
            },
            {
              situacao: 'Após retirar as luvas',
              metodo: 'Higienizar imediatamente ou assim que possível',
              tempo: 'Conforme o método',
            },
            {
              situacao: 'Antes de calçar as luvas',
              metodo: 'Higienizar e secar completamente',
              tempo: 'Conforme o método',
            },
          ],
          sources: ['who-hand-hygiene', 'who-handrub-poster', 'osha-bbp'],
        },
        {
          type: 'video',
          youtubeId: 'B3eq5fLzAOo',
          title: 'Fricção alcoólica pela técnica da OMS',
          description:
            'A sequência completa dos movimentos. Vale repetir até virar automático — meia técnica não cobre todas as superfícies da mão.',
          sourceId: 'jhm-handrub-video',
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Luva não substitui higiene das mãos',
          text: 'A indicação de higienizar as mãos existe independentemente do uso de luvas. E as mãos precisam estar secas antes de calçá-las.',
          sources: ['who-hand-hygiene'],
        },
      ],
    },
    {
      id: 'checklist-pre-sessao',
      title: 'Checklist pré-sessão',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-pre-sessao',
          title: 'Antes de começar',
          description:
            'Progresso salvo no navegador. Dá para imprimir e deixar plastificado na bancada.',
          items: [
            {
              id: 'consentimento',
              label: 'Consentimento e ficha de triagem preenchidos e conferidos.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'pele',
              label: 'Área sem infecção, dermatite ativa ou queimadura solar.',
              sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
            },
            {
              id: 'maos',
              label: 'Mãos higienizadas corretamente e secas antes das luvas.',
              sources: ['who-hand-hygiene', 'who-handrub-poster'],
            },
            {
              id: 'bancada',
              label: 'Bancada descontaminada e superfícies de toque com barreira nova.',
              detail:
                'Cabos, fonte, borrifadores e qualquer ponto que a mão enluvada vai encostar durante a sessão.',
              sources: ['osha-bbp'],
            },
            {
              id: 'cartucho',
              label: 'Cartucho ou agulha estéril, com a embalagem íntegra e conferida.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'Tinta com lote, validade e documentação técnica disponível.',
              detail: 'No Brasil, tinta regularizada na Anvisa. Diluição apenas com água estéril.',
              sources: ['anvisa-tintas', 'cdc-ntm-tattoo', 'echa-tattoo-inks'],
            },
            {
              id: 'coletor',
              label: 'Coletor de perfurocortantes ao alcance, em pé e sem excesso de enchimento.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'stencil',
              label: 'Stencil seco e estável antes de iniciar.',
            },
          ],
        },
      ],
    },
    {
      id: 'jurisdicao',
      title: 'Sobre a origem destas regras',
      blocks: [
        {
          type: 'alert',
          level: 'info',
          title: 'Norma dos EUA não é norma do Brasil',
          text: 'A estrutura de plano escrito de controle de exposição, EPI, descarte de perfurocortantes, vacinação contra hepatite B e avaliação pós-exposição vem da OSHA, dos Estados Unidos. Ela é uma boa referência de prática — mas a exigência legal que se aplica a você é a da vigilância sanitária do seu município e estado.',
          sources: ['osha-bbp', 'osha-tattoo-2002', 'osha-tattoo-2016', 'anvisa-tintas'],
        },
        {
          type: 'paragraph',
          text: 'O mesmo vale para tintas: a União Europeia restringe milhares de substâncias sob o REACH, os Estados Unidos tratam tintas como cosmético sob a FDA, e o Brasil exige regularização na Anvisa. Compre conforme o mercado em que você atua, com lote rastreável e documentação técnica.',
          sources: ['echa-tattoo-inks', 'fda-tattoo-safety', 'anvisa-tintas'],
        },
      ],
    },
  ],
  sources: [
    'who-hand-hygiene',
    'who-handrub-poster',
    'jhm-handrub-video',
    'osha-bbp',
    'osha-tattoo-2002',
    'osha-tattoo-2016',
    'eadv-aftercare',
    'aad-tattoo-reactions',
    'anvisa-tintas',
    'cdc-ntm-tattoo',
    'echa-tattoo-inks',
    'fda-tattoo-safety',
  ],
};

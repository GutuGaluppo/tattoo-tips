import type { Guide } from '../types';

export const beforeGuide: Guide = {
  slug: '/cliente/antes',
  audience: 'cliente',
  title: 'Antes da tatuagem',
  navTitle: 'Antes',
  description:
    'Uma tatuagem é um procedimento artístico que também cria uma ferida aberta. O que você resolve antes de sentar na maca reduz a maior parte do risco.',
  intro:
    'Nada aqui é sobre o desenho. É sobre chegar com a pele em condição de receber o procedimento, informar o que o tatuador precisa saber e conseguir avaliar se o estúdio trabalha com segurança.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'studio',
  sections: [
    {
      id: 'o-que-informar',
      title: 'O que você precisa informar',
      summary:
        'A triagem começa antes de a agulha tocar a pele. Omitir informação por vergonha ou medo de perder o horário é o que mais atrapalha.',
      blocks: [
        {
          type: 'list',
          title: 'Conte ao tatuador, sem exceção',
          items: [
            'Medicações em uso, incluindo anticoagulantes, imunossupressores e isotretinoína.',
            'Alergias conhecidas — em especial a adesivos e curativos, antissépticos, látex, lanolina e pomadas.',
            'Reações anteriores a tatuagens, piercings, adesivos ou produtos de pós-cuidado.',
            'Tendência a queloide ou cicatrizes hipertróficas.',
            'Condições que dificultam cicatrização ou aumentam risco de infecção (diabetes descompensado, imunossupressão, doenças de pele em atividade).',
            'Gravidez ou amamentação — converse antes com quem acompanha sua saúde.',
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Consentimento informado não é burocracia',
          text: 'Você deve receber e assinar um termo que explique riscos, cuidados e o que fazer se algo sair do esperado. Se o estúdio não tem esse documento, isso já é uma informação sobre o estúdio.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'quando-adiar',
      title: 'Quando adiar a sessão',
      summary: 'A pele precisa estar íntegra e saudável no local que vai ser tatuado.',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Remarque se algum destes for o seu caso hoje',
          text: 'Pele lesionada, ferida ou machucada na região; dermatite, psoríase ou eczema em atividade no local; queimadura de sol recente; qualquer infecção de pele ativa; ou um quadro clínico descompensado que mereça avaliação médica antes.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Remarcar custa um horário. Tatuar sobre pele inflamada custa cicatrização ruim, risco de infecção e, com frequência, retoque.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'escolher-o-estudio',
      title: 'Como avaliar o estúdio',
      summary:
        'Você não precisa entender de técnica para reconhecer um posto de trabalho seguro. Precisa saber o que procurar.',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-escolha-estudio',
          title: 'Checklist de avaliação do estúdio',
          description:
            'Dá para conferir tudo isso em uma visita antes de fechar o orçamento. Marque o que você já verificou.',
          items: [
            {
              id: 'licenca',
              label: 'O estúdio tem licença sanitária visível e atualizada.',
              detail:
                'No Brasil, o funcionamento é fiscalizado pela vigilância sanitária do município ou estado.',
              sources: ['anvisa-tintas'],
            },
            {
              id: 'tinta-regularizada',
              label: 'As tintas são regularizadas para uso no país.',
              detail:
                'No Brasil, tintas de tatuagem precisam de regularização na Anvisa. A lista de produtos autorizados muda — vale conferir a versão atual.',
              sources: ['anvisa-tintas', 'anvisa-registro-tintas'],
            },
            {
              id: 'material-lacrado',
              label: 'Agulhas e cartuchos são abertos na sua frente, lacrados.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'coletor',
              label: 'Existe um coletor rígido de perfurocortantes ao alcance da bancada.',
              detail: 'Deve estar em pé, identificado e sem estar cheio demais.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'barreiras',
              label: 'Superfícies, máquina, cabos e borrifadores têm barreiras descartáveis.',
              sources: ['osha-bbp'],
            },
            {
              id: 'higiene-maos',
              label: 'O tatuador higieniza as mãos e troca de luvas na sua frente.',
              sources: ['who-hand-hygiene'],
            },
            {
              id: 'instrucoes-escritas',
              label: 'Você recebe instruções de pós-cuidado por escrito, não só faladas.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Tinta diluída com água de torneira é motivo para interromper',
          text: 'Investigações de surto ligaram infecções por micobactérias não tuberculosas a tinta contaminada e a gray wash preparado com água de torneira. A diluição deve usar água estéril ou diluente próprio.',
          sources: ['cdc-ntm-tattoo'],
        },
      ],
    },
    {
      id: 'no-dia',
      title: 'No dia, antes de sair de casa',
      blocks: [
        {
          type: 'list',
          items: [
            'Vá alimentado e descansado. Sessão longa em jejum aumenta mal-estar e tontura.',
            'Use roupa confortável que exponha a região sem apertar depois — a área tatuada não pode ficar sob tecido justo.',
            'Chegue com a pele limpa, sem creme, óleo ou maquiagem na região.',
            'Evite queimadura de sol na área nos dias anteriores.',
            'Leve suas dúvidas por escrito. Perguntar durante o procedimento é mais difícil.',
          ],
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Reações à tinta podem aparecer depois',
          text: 'Órgãos reguladores registram reações que surgem logo após a sessão e também meses ou anos depois. Guarde o nome e o lote das tintas usadas — se algo acontecer, essa informação acelera muito a investigação.',
          sources: ['fda-tattoo-safety', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'aad-tattoo-reactions',
    'anvisa-tintas',
    'anvisa-registro-tintas',
    'cdc-ntm-tattoo',
    'fda-tattoo-safety',
    'osha-tattoo-2002',
    'osha-bbp',
    'who-hand-hygiene',
    'cleveland-aftercare',
  ],
};

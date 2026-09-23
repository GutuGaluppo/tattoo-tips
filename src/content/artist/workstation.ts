import type { Guide } from '../types';

export const workstationGuide: Guide = {
  slug: '/tatuador/bancada',
  audience: 'tatuador',
  title: 'Preparação da bancada',
  navTitle: 'Preparação da bancada',
  description:
    'Como organizar a estação antes do cliente entrar: área limpa e suja, barreiras, material estéril e o que nunca fazer com a tinta.',
  intro:
    'A bancada é montada uma vez, para cada cliente, do zero. Reaproveitar organização da sessão anterior é a origem mais comum de contaminação cruzada por descuido.',
  jurisdiction: 'BR',
  lastReviewed: '2026-09-22',
  technical: true,
  image: 'supplies',
  sections: [
    {
      id: 'area-limpa-e-suja',
      title: 'Área limpa e área suja',
      summary: 'A base de toda a organização da bancada.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Defina antes de abrir qualquer embalagem: um lado da bancada recebe só material estéril ainda fechado, o outro recebe tudo que já foi usado ou tocado. Uma vez que o procedimento começa, nada volta do lado sujo para o lado limpo.',
          sources: ['cieh-toolkit', 'ukhsa-tattoo-ipc', 'osha-bbp'],
        },
        {
          type: 'steps',
          title: 'Antes do cliente sentar',
          steps: [
            {
              title: 'Superfícies laváveis e descontaminadas',
              text: 'Limpe removendo sujeira visível e depois desinfete a bancada, o braço de apoio e a cadeira com produto compatível com a superfície, respeitando o tempo de contato do rótulo.',
            },
            {
              title: 'Barreira descartável nova',
              text: 'Filme ou papel de barreira em tudo que será tocado durante a sessão: bancada, cabo, fonte, braço de apoio, cadeira, luminária.',
            },
            {
              title: 'Material estéril inspecionado, não aberto',
              text: 'Confira integridade da embalagem, validade e indicador de esterilização antes de abrir. Embalagem violada, molhada ou vencida vai para o descarte, não para a bancada.',
              level: 'atencao',
            },
            {
              title: 'Tinta separada em ink caps de uso único',
              text: 'Cada cor em um copinho novo, na quantidade que será usada. Nada volta ao frasco depois de aberto.',
            },
            {
              title: 'Coletor de perfurocortantes posicionado',
              text: 'Em pé, ao alcance da mão dominante, sem estar cheio acima da marca de enchimento.',
            },
          ],
          sources: ['cieh-toolkit', 'osha-bbp', 'osha-tattoo-2002'],
        },
      ],
    },
    {
      id: 'limpeza-desinfeccao-esterilizacao',
      title: 'Limpeza, desinfecção e esterilização não são a mesma coisa',
      summary: 'Confundir os três é o erro mais comum em biossegurança de estúdio.',
      blocks: [
        {
          type: 'table',
          title: 'O que cada processo faz — e o que ele não substitui',
          caption:
            'Cada etapa depende da anterior: sem limpeza prévia, desinfecção e esterilização perdem eficácia.',
          columns: [
            { key: 'processo', label: 'Processo', sortable: true },
            { key: 'faz', label: 'O que faz' },
            { key: 'naoConfundir', label: 'Não confundir com' },
          ],
          cardTitleKey: 'processo',
          rows: [
            {
              processo: 'Limpeza',
              faz: 'Remove sujeira e matéria orgânica visível.',
              naoConfundir: 'Não esteriliza nem desinfeta sozinha.',
            },
            {
              processo: 'Desinfecção',
              faz: 'Reduz ou inativa microrganismos em superfícies, conforme o produto e o tempo de contato do rótulo.',
              naoConfundir: 'Não garante esterilidade.',
            },
            {
              processo: 'Esterilização',
              faz: 'Processo validado (autoclave) que elimina formas viáveis de microrganismo, incluindo esporos.',
              naoConfundir: 'Álcool e ultrassom não substituem.',
            },
            {
              processo: 'Ultrassom',
              faz: 'Auxilia a limpeza de peças compatíveis, soltando resíduo antes da esterilização.',
              naoConfundir: 'Não é esterilização.',
            },
          ],
          sources: ['cieh-toolkit'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Álcool e ultrassom não esterilizam nada',
          text: 'Ambos ajudam a limpar ou reduzir carga microbiana em superfície, mas nenhum dos dois é um processo de esterilização validado. Item que precisa ser estéril passa por autoclave — ou é de uso único.',
          sources: ['cieh-toolkit'],
        },
      ],
    },
    {
      id: 'tinta-e-diluicao',
      title: 'Tinta: procedência e diluição segura',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Se precisar diluir, use só água estéril própria para tatuagem',
          text: 'Água da torneira, água filtrada, água destilada comum e água deionizada não podem ser presumidas estéreis. O CDC já documentou infecção por micobactéria não tuberculosa associada a diluição com água não estéril. Diluir apenas com água estéril ou solução de mixing/shading feita para esse fim.',
          sources: ['cdc-ntm-tattoo'],
        },
        {
          type: 'list',
          title: 'Antes de abrir o frasco',
          items: [
            'Confirme lote, validade e regularização do produto na Anvisa.',
            'Inspecione a embalagem: lacre íntegro, sem sinal de reabertura.',
            'Separe a quantidade prevista em ink cap de uso único.',
            'Nunca devolva sobra ao frasco original — descarte o que não foi usado.',
          ],
          sources: ['anvisa-tintas', 'cdc-ntm-tattoo', 'fda-tattoo-safety'],
        },
      ],
    },
    {
      id: 'checklist-da-bancada',
      title: 'Checklist da bancada',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-bancada',
          title: 'Antes de chamar o cliente',
          description: 'Progresso salvo no navegador. Bom para plastificar e deixar fixo no estúdio.',
          items: [
            {
              id: 'limpeza-previa',
              label: 'Bancada, braço de apoio e cadeira limpos e depois desinfetados.',
              sources: ['cieh-toolkit'],
            },
            {
              id: 'barreiras',
              label: 'Barreira nova em tudo que será tocado com luva durante a sessão.',
              sources: ['osha-bbp'],
            },
            {
              id: 'material-estéril',
              label: 'Cartucho, agulha e demais itens estéreis com embalagem íntegra e validade conferida.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'ink-caps',
              label: 'Tinta separada em ink caps de uso único, na quantidade prevista.',
              sources: ['anvisa-tintas'],
            },
            {
              id: 'coletor-perfurocortante',
              label: 'Coletor de perfurocortantes em pé, ao alcance, sem excesso de enchimento.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'stencil-pronto',
              label: 'Stencil posicionado, aprovado pelo cliente e seco.',
            },
          ],
        },
      ],
    },
  ],
  sources: [
    'cieh-toolkit',
    'ukhsa-tattoo-ipc',
    'osha-bbp',
    'osha-tattoo-2002',
    'cdc-ntm-tattoo',
    'anvisa-tintas',
    'fda-tattoo-safety',
  ],
};

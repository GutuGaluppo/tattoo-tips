import type { Guide } from '../types';

export const machineSetupGuide: Guide = {
  slug: '/tatuador/regulagem',
  audience: 'tatuador',
  title: 'Regulagem inicial',
  navTitle: 'Regulagem inicial',
  description:
    'Stroke, needle hang e voltagem não são a mesma coisa, e não existe um número universal para nenhum dos três. Como pensar o ajuste de partida em vez de copiar uma tabela pronta.',
  intro:
    'Se você está procurando "quantos volts para linha", a resposta curta é: depende da sua máquina, do seu cartucho e da sua mão — e qualquer site que responda com um número fixo, sem citar equipamento, está simplificando demais.',
  jurisdiction: 'BR',
  lastReviewed: '2026-09-22',
  technical: true,
  image: 'machine',
  sections: [
    {
      id: 'tres-grandezas-diferentes',
      title: 'Três grandezas que não são a mesma coisa',
      summary: 'Confundir essas três ideias é a origem da maioria dos erros de profundidade.',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Needle protrusion / needle hang — quanto a agulha fica exposta para fora do cartucho ou tip.',
            'Stroke — o curso mecânico da máquina, ou seja, a distância que o motor movimenta a agulha para frente e para trás.',
            'Piercing depth / profundidade efetiva — quanto a agulha realmente penetra na pele durante o trabalho.',
          ],
          sources: ['pubmed-skin-thickness'],
        },
        {
          type: 'paragraph',
          text: 'Nenhuma das três determina sozinha o resultado. A profundidade efetiva na pele depende também da pressão da mão, do ângulo, do agrupamento de agulhas e da elasticidade da região — por isso a pesquisa científica não sustenta uma "profundidade universal em milímetros".',
          sources: ['pubmed-pigment-localization', 'pubmed-skin-thickness'],
        },
        {
          type: 'comparison',
          title: 'Consequência prática da profundidade',
          expectedLabel: 'Profundidade adequada',
          alarmingLabel: 'Fora do adequado',
          rows: [
            {
              context: 'Muito superficial',
              expected: '—',
              alarming: 'Pigmentação inconsistente, falhas, perda precoce de tinta, linha que cicatriza fraca.',
            },
            {
              context: 'Adequada',
              expected: 'Pigmento entregue na camada correta, menor trauma, resultado consistente após a cicatrização.',
              alarming: '—',
            },
            {
              context: 'Profunda demais',
              expected: '—',
              alarming: 'Mais trauma e sangramento, risco de atingir tecido subcutâneo, pigment spread/blowout, cicatrização mais problemática.',
            },
          ],
          sources: ['pubmed-pigment-localization'],
        },
      ],
    },
    {
      id: 'nao-existe-voltagem-universal',
      title: 'Não existe voltagem universal para lining, shading ou packing',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Desconfie de qualquer "8 V para linha, 6 V para sombra"',
          text: 'O ajuste depende do motor, do fabricante, da eletrônica, do stroke, do agrupamento e diâmetro da agulha, da técnica, da resistência da própria pele, da mão do artista e da frequência real do equipamento. Um número sem essas variáveis não é regra — é o ponto de partida de uma máquina específica.',
          sources: ['cheyenne-sol-nova-manual', 'fk-irons-machine-settings'],
        },
        {
          type: 'paragraph',
          text: 'O manual da Cheyenne SOL Nova Unlimited, por exemplo, orienta começar em frequência baixa e ajustar conforme as características da pele, a needle depth e a velocidade operacional — não fornece uma tabela fixa de voltagem por técnica. Trate qualquer valor de fabricante como ponto de partida da máquina dele, nunca como padrão do mercado.',
          sources: ['cheyenne-sol-nova-manual'],
        },
        {
          type: 'list',
          title: 'O que muda o ajuste correto',
          items: [
            'Motor e eletrônica da máquina',
            'Stroke configurado',
            'Agrupamento e diâmetro da agulha',
            'Técnica e velocidade da mão',
            'Resistência e região da pele do cliente',
            'Frequência real de operação do equipamento',
          ],
          sources: ['fk-irons-machine-settings'],
        },
      ],
    },
    {
      id: 'familias-de-maquina',
      title: 'Coil, rotary e pen — o que muda entre as famílias',
      blocks: [
        {
          type: 'table',
          title: 'Panorama das famílias de máquina',
          columns: [
            { key: 'familia', label: 'Família', sortable: true },
            { key: 'principio', label: 'Princípio' },
            { key: 'pontosDeAtencao', label: 'Pontos de atenção' },
          ],
          cardTitleKey: 'familia',
          rows: [
            {
              familia: 'Coil',
              principio: 'Sistema eletromagnético — bobinas, armature bar, mola frontal/traseira e parafuso de contato.',
              pontosDeAtencao: 'Ajuste de spring, contact gap e duty ficam para a trilha avançada, revisados por profissional experiente.',
            },
            {
              familia: 'Rotary',
              principio: 'Motor rotativo converte rotação em movimento linear.',
              pontosDeAtencao: 'Stroke, give e comportamento sob carga variam por modelo — siga a manutenção do fabricante.',
            },
            {
              familia: 'Pen',
              principio: 'Formato ergonômico de rotary, normalmente compatível com cartuchos.',
              pontosDeAtencao: 'Stroke fixo ou ajustável, needle protrusion, frequência/voltagem e bateria variam por modelo.',
            },
          ],
        },
      ],
    },
    {
      id: 'agulhas-nomenclatura',
      title: 'Nomenclatura essencial de agulha',
      blocks: [
        {
          type: 'table',
          title: 'Agrupamentos mais comuns',
          caption: 'Confirme a sigla e o agrupamento exato com o fabricante do cartucho que você usa — a nomenclatura varia entre marcas.',
          columns: [
            { key: 'sigla', label: 'Sigla', sortable: true },
            { key: 'nome', label: 'Nome' },
            { key: 'uso', label: 'Uso típico' },
          ],
          cardTitleKey: 'nome',
          searchable: true,
          rows: [
            { sigla: 'RL', nome: 'Round Liner', uso: 'Agulhas agrupadas de forma compacta, usadas para linha.' },
            { sigla: 'RS', nome: 'Round Shader', uso: 'Agrupamento circular mais aberto, para shading pequeno, preenchimento e linhas mais suaves.' },
            { sigla: 'F', nome: 'Flat', uso: 'Agulhas em linha reta.' },
            { sigla: 'M1 / MG', nome: 'Magnum Weaved', uso: 'Duas fileiras com espaçamento, comum para shading e color packing.' },
            { sigla: 'M2 / MG2', nome: 'Stacked Magnum', uso: 'Fileiras mais compactas que o magnum weaved.' },
            { sigla: 'CM / RM', nome: 'Curved / Round / Soft Edge Magnum', uso: 'Extremidade arqueada, útil para transições e shading de borda suave.' },
          ],
          sources: ['barber-dts-needle-guide', 'cheyenne-safety-cartridges'],
        },
        {
          type: 'list',
          title: 'Diâmetro (gauge) — nomenclaturas comuns',
          items: [
            '#08 ≈ 0,25 mm — chamado de "bugpin".',
            '#10 ≈ 0,30 mm.',
            '#12 ≈ 0,35 mm.',
            'Outros diâmetros existem e variam por fabricante.',
          ],
          sources: ['barber-dts-needle-guide'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Agulha mais fina não é sinônimo de menos trauma',
          text: 'O resultado depende também da técnica, do agrupamento, do número de passadas e da configuração da máquina — não apenas do diâmetro da agulha.',
          sources: ['barber-dts-needle-guide'],
        },
      ],
    },
  ],
  sources: [
    'cheyenne-sol-nova-manual',
    'fk-irons-machine-settings',
    'barber-dts-needle-guide',
    'cheyenne-safety-cartridges',
    'pubmed-pigment-localization',
    'pubmed-skin-thickness',
  ],
};

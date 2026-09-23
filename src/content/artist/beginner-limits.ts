import type { Guide } from '../types';

export const beginnerLimitsGuide: Guide = {
  slug: '/tatuador/limites',
  audience: 'tatuador',
  title: 'Limites para iniciantes',
  navTitle: 'Limites para iniciantes',
  description:
    'O que treinar antes da máquina tocar pele, em que ordem, e por que este site não trata a passagem para pele humana como algo automático.',
  intro:
    'Nada aqui substitui legislação local, treinamento formal e mentoria presencial. O objetivo desta página é só um: deixar claro o que ainda falta antes de tatuar alguém, para que "já sei ligar a máquina" não vire "estou pronto".',
  jurisdiction: 'BR',
  lastReviewed: '2026-09-22',
  technical: true,
  image: 'practiceSkin',
  sections: [
    {
      id: 'antes-de-qualquer-tecnica',
      title: 'Antes de qualquer técnica',
      summary: 'A ordem existe para reduzir trauma desnecessário enquanto a mão ainda não está calibrada.',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Treino em papel — traço, pressão e consistência sem qualquer risco.',
            'Treino de movimento sem máquina — repetir o gesto até ele ficar automático.',
            'Treino em pele sintética — primeira vez que a máquina entra em contato com uma superfície.',
            'Controle de postura, estiramento da pele e velocidade de mão.',
            'Configuração de máquina e escolha de agrupamento de agulha, revisados por quem já domina a técnica.',
            'Controle de trauma: reconhecer visualmente quando uma passada já foi suficiente.',
          ],
          sources: ['t101-beginners-video'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Este manual não incentiva treinar em outra pessoa',
          text: 'O conteúdo gratuito deste site cobre até a prática em pele sintética. A passagem para pele humana depende de legislação local, treinamento formal, consentimento e — na maioria das situações — supervisão de alguém experiente. Nenhuma leitura substitui isso.',
          sources: ['anvisa-tintas'],
        },
      ],
    },
    {
      id: 'progressao',
      title: 'Progressão: do papel à primeira sessão supervisionada',
      blocks: [
        {
          type: 'steps',
          title: 'Fases',
          steps: [
            {
              title: 'Fase 0 — Segurança antes da máquina',
              text: 'Contaminação cruzada, higiene das mãos, perfurocortantes, segurança de tinta, barreiras, descarte, limpeza/desinfecção/esterilização e sinais de alerta. Sem isso, não há fase seguinte.',
            },
            {
              title: 'Fase 1 — Coordenação sem pele',
              text: 'Desenho, linhas, elipses, curvas, linhas paralelas, controle de pressão, stencil, leitura de valores.',
            },
            {
              title: 'Fase 2 — Pele sintética',
              text: 'Montagem, postura, linhas, curvas, whip shading, stipple, magnum, packing, limpeza sem destruir o stencil, fotografia e autoavaliação do resultado.',
            },
            {
              title: 'Fase 3 — Avaliação',
              text: 'Linhas consistentes, ausência de cortes, shading controlável, saturação sem destruir a superfície, domínio de contaminação cruzada em simulação, setup e teardown completos, capacidade de explicar por que escolheu agulha, stroke e ritmo.',
            },
            {
              title: 'Fase 4 — Pele humana',
              text: 'Exige legislação local, treinamento adequado, supervisão ou mentoria quando aplicável, consentimento, ambiente profissional, protocolo de higiene e competência já demonstrada nas fases anteriores.',
              level: 'atencao',
            },
          ],
        },
      ],
    },
    {
      id: 'afirmacoes-para-desconfiar',
      title: 'Afirmações para desconfiar',
      summary: 'Frases comuns em conteúdo de tatuagem que este manual evita propositalmente.',
      blocks: [
        {
          type: 'list',
          items: [
            '"Esta é a profundidade correta para qualquer tatuagem."',
            '"Use sempre X volts para linha / Y volts para sombra."',
            '"Se não doeu, a profundidade está correta."',
            '"Quanto mais sangue, melhor a saturação."',
            '"É normal repassar até a pele aceitar."',
            '"Água destilada é estéril."',
            '"Álcool esteriliza equipamento."',
            '"Ultrassom esteriliza."',
          ],
          sources: ['pubmed-skin-thickness', 'cdc-ntm-tattoo', 'cieh-toolkit'],
        },
        {
          type: 'paragraph',
          text: 'Cada uma dessas frases aparece com frequência em blogs e vídeos, mas nenhuma resiste à fonte técnica que cobre o assunto — profundidade, voltagem, esterilização e reconhecimento de trauma variam por equipamento, pele e situação, não por regra fixa.',
        },
      ],
    },
    {
      id: 'checklist-de-prontidao',
      title: 'Checklist de prontidão',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-limites-prontidao',
          title: 'Antes de considerar tatuar uma pessoa',
          description: 'Se qualquer item aqui não estiver marcado, a resposta é continuar treinando em pele sintética.',
          items: [
            {
              id: 'seguranca-completa',
              label: 'Fase 0 completa: contaminação cruzada, higiene, descarte e sinais de alerta dominados, não só lidos.',
            },
            {
              id: 'linhas-consistentes',
              label: 'Linhas consistentes em pele sintética, sem cortes nem repasses desnecessários.',
            },
            {
              id: 'shading-controlavel',
              label: 'Shading controlável, com saturação sem destruir a superfície de treino.',
            },
            {
              id: 'setup-teardown',
              label: 'Setup e teardown completos, sem checar a checklist a cada passo.',
            },
            {
              id: 'justificativa-tecnica',
              label: 'Capacidade de explicar por que escolheu aquela agulha, aquele stroke e aquele ritmo — não só copiar um ajuste de vídeo.',
            },
            {
              id: 'requisitos-legais',
              label: 'Legislação local, consentimento, ambiente profissional e, quando aplicável, supervisão confirmados.',
              sources: ['anvisa-tintas'],
            },
          ],
        },
      ],
    },
  ],
  sources: ['t101-beginners-video', 'anvisa-tintas', 'pubmed-skin-thickness', 'cdc-ntm-tattoo', 'cieh-toolkit'],
};

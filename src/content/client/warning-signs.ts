import type { Guide } from '../types';

export const warningSignsGuide: Guide = {
  slug: '/sinais-de-alerta',
  audience: 'ambos',
  title: 'Normal ou sinal de alerta',
  navTitle: 'Sinais de alerta',
  description:
    'A comparação direta entre o que é esperado na cicatrização e o que pede avaliação médica.',
  intro:
    'Quase tudo que assusta nos primeiros dias é esperado. O que diferencia não é o sintoma isolado, e sim se ele está melhorando ou piorando.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'stencil',
  sections: [
    {
      id: 'comparacao',
      title: 'Esperado x sinal de alerta',
      blocks: [
        {
          type: 'comparison',
          expectedLabel: 'Esperado',
          alarmingLabel: 'Sinal de alerta',
          rows: [
            {
              context: 'Vermelhidão',
              expected: 'Leve, restrita à área tatuada e diminuindo dia após dia.',
              alarming: 'Se espalhando para fora da tatuagem ou aumentando depois do terceiro dia.',
            },
            {
              context: 'Secreção',
              expected: 'Líquido claro ou rosado nos primeiros dias, em quantidade decrescente.',
              alarming: 'Secreção espessa, amarela ou esverdeada, com mau cheiro.',
            },
            {
              context: 'Dor',
              expected: 'Sensibilidade e ardência que melhoram progressivamente.',
              alarming: 'Dor crescente, pulsátil ou desproporcional ao tamanho da tatuagem.',
            },
            {
              context: 'Inchaço',
              expected: 'Edema discreto nos primeiros dias.',
              alarming: 'Inchaço que piora depois de começar a melhorar.',
            },
            {
              context: 'Temperatura',
              expected: 'Calor local nas primeiras horas.',
              alarming: 'Febre alta ou persistente, calafrios, mal-estar tipo gripe.',
            },
            {
              context: 'Aspecto da pele',
              expected: 'Crosta fina e descamação entre a primeira e a terceira semana.',
              alarming: 'Pápulas, pústulas, nódulos, bolhas ou rash com coceira intensa.',
            },
            {
              context: 'Trajeto',
              expected: 'A alteração fica na área tatuada.',
              alarming: 'Linhas vermelhas subindo pela pele a partir da tatuagem.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'quando-procurar',
      title: 'Quando procurar atendimento',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Procure atendimento de urgência agora',
          text: 'Febre alta ou persistente, linhas vermelhas subindo a partir da tatuagem, mal-estar sistêmico, dor intensa e crescente ou área que piora rapidamente. Não espere “ver como fica amanhã”.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Procure avaliação médica em breve',
          text: 'Pus, mau cheiro, vermelhidão em progressão, rash com bolhas, ou qualquer sintoma que já dura mais do que deveria. Interrompa os produtos de pós-cuidado e leve a lista do que foi usado.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'list',
          title: 'Leve com você',
          items: [
            'O nome e o lote das tintas usadas.',
            'O tipo de curativo aplicado (filme, marca e tempo de uso).',
            'Todos os produtos que encostaram na área: antisséptico, sabonete, pomada, adesivo.',
            'Fotos da evolução, se você tiver.',
          ],
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
      ],
    },
    {
      id: 'reacao-alergica',
      title: 'Quando não é infecção, é reação',
      blocks: [
        {
          type: 'paragraph',
          text: 'Reação alérgica pode vir da tinta, do adesivo do curativo, do antisséptico, de conservantes ou de um produto de pós-cuidado. O quadro costuma aparecer como vermelhidão com coceira, às vezes com pequenas bolhas e secreção clara.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Suspenda o produto e procure avaliação',
          text: 'Se isso acontecer nos primeiros dias, pare o produto de pós-cuidado e busque avaliação médica, informando ao tatuador tudo o que foi usado — é assim que se identifica o responsável.',
          sources: ['eadv-aftercare'],
        },
        {
          type: 'paragraph',
          text: 'Reações também podem surgir muito depois da cicatrização, inclusive meses ou anos depois. Isso não significa que a tatuagem foi malfeita — significa que a pele reagiu a um componente.',
          sources: ['fda-tattoo-safety', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare', 'fda-tattoo-safety'],
};

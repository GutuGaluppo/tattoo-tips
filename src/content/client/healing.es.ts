import type { Guide } from '../types';

export const healingGuide: Guide = {
  slug: '/cliente/cicatrizacao',
  audience: 'cliente',
  title: 'Línea de tiempo de la cicatrización',
  navTitle: 'Cicatrización',
  description:
    'Qué es esperable en cada fase — y cuál es el único patrón que realmente importa seguir.',
  intro:
    'La regla que lo resume todo: lo esperado es una mejora progresiva. Un empeoramiento progresivo, en cualquier fase, es motivo de evaluación.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'healed',
  sections: [
    {
      id: 'linha-do-tempo',
      title: 'Fase a fase',
      blocks: [
        {
          type: 'timeline',
          entries: [
            {
              period: 'Día 0',
              title: 'Justo después de la sesión',
              text: 'Calor local, sensibilidad y algo de sangrado o plasma son esperables. La zona se ve irritada porque acaba de ser herida.',
              watchFor: 'Sangrado que empapa el vendaje y no cede con compresión.',
            },
            {
              period: 'Días 1 a 3',
              title: 'Enrojecimiento e hinchazón discretos',
              text: 'Enrojecimiento leve alrededor del trazo, edema discreto y exudado claro o rosado. Suele ser el período de mayor molestia.',
              watchFor: 'Enrojecimiento que se extiende lejos del tatuaje en vez de disminuir.',
            },
            {
              period: 'Días 3 a 7',
              title: 'Menos exudado, comienzo de la costra',
              text: 'La salida de líquido disminuye y comienza a formarse una costra fina y descamación.',
              watchFor: 'Secreción amarilla o verdosa, mal olor, dolor en aumento.',
            },
            {
              period: 'Semanas 1 a 3',
              title: 'Descamación y picazón',
              text: 'La piel descama, pica un poco y el tatuaje se ve más opaco y "difuminado". Esto es normal y pasa.',
              watchFor: 'Picazón intensa con ampollas o sarpullido — puede ser una reacción, no cicatrización.',
            },
            {
              period: 'Semanas 3 a 6',
              title: 'Superficie estable',
              text: 'La superficie parece cicatrizada y el diseño vuelve a verse nítido. La barrera de la piel todavía está madurando por debajo.',
            },
            {
              period: 'Meses siguientes',
              title: 'Maduración y protección solar',
              text: 'Con la cicatrización completa, la protección solar pasa a ser el cuidado principal para preservar el color y el contraste.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'figure',
          illustration: 'healing-stages',
          caption:
            'Aspecto esperado a lo largo de las fases: enrojecimiento inicial, exudado disminuyendo, descamación y superficie estable.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'o-que-nao-fazer',
      title: 'Qué retrasa la cicatrización',
      blocks: [
        {
          type: 'list',
          items: [
            'Arrancar costras o tirar de la piel que se está descamando — así es como se pierde pigmento y se gana cicatriz.',
            'Aplicar producto en exceso, pensando que hidrata más.',
            'Dejar la zona en inmersión: piscina, bañera, sauna, mar.',
            'Usar ropa ajustada que roce la zona.',
            'Exponerla al sol mientras todavía está cicatrizando.',
            'Usar antiséptico, alcohol o peróxido "por precaución".',
          ],
          sources: ['eadv-aftercare', 'aad-wound-care'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'La regla única: la dirección importa más que el síntoma',
          text: 'Un enrojecimiento en el día 2 es esperable. Ese mismo enrojecimiento, mayor en el día 5 que en el día 3, no lo es. Compara con ayer, no con la foto de otra persona.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-care', 'aad-wound-care', 'cleveland-aftercare'],
};

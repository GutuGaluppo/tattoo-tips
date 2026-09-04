import type { Guide } from '../types';

export const warningSignsGuide: Guide = {
  slug: '/sinais-de-alerta',
  audience: 'ambos',
  title: 'Normal o señal de alerta',
  navTitle: 'Señales de alerta',
  description:
    'La comparación directa entre lo que se espera en la cicatrización y lo que exige evaluación médica.',
  intro:
    'Casi todo lo que asusta en los primeros días es esperable. Lo que marca la diferencia no es el síntoma aislado, sino si está mejorando o empeorando.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'stencil',
  sections: [
    {
      id: 'comparacao',
      title: 'Esperado vs. señal de alerta',
      blocks: [
        {
          type: 'comparison',
          expectedLabel: 'Esperado',
          alarmingLabel: 'Señal de alerta',
          rows: [
            {
              context: 'Enrojecimiento',
              expected: 'Leve, restringido a la zona tatuada y disminuyendo día a día.',
              alarming: 'Extendiéndose fuera del tatuaje o aumentando después del tercer día.',
            },
            {
              context: 'Secreción',
              expected: 'Líquido claro o rosado en los primeros días, en cantidad decreciente.',
              alarming: 'Secreción espesa, amarilla o verdosa, con mal olor.',
            },
            {
              context: 'Dolor',
              expected: 'Sensibilidad y ardor que mejoran progresivamente.',
              alarming: 'Dolor creciente, pulsátil o desproporcionado al tamaño del tatuaje.',
            },
            {
              context: 'Hinchazón',
              expected: 'Edema discreto en los primeros días.',
              alarming: 'Hinchazón que empeora después de haber empezado a mejorar.',
            },
            {
              context: 'Temperatura',
              expected: 'Calor local en las primeras horas.',
              alarming: 'Fiebre alta o persistente, escalofríos, malestar tipo gripe.',
            },
            {
              context: 'Aspecto de la piel',
              expected: 'Costra fina y descamación entre la primera y la tercera semana.',
              alarming: 'Pápulas, pústulas, nódulos, ampollas o sarpullido con picazón intensa.',
            },
            {
              context: 'Trayecto',
              expected: 'La alteración se queda en la zona tatuada.',
              alarming: 'Líneas rojas que suben por la piel desde el tatuaje.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'quando-procurar',
      title: 'Cuándo buscar atención',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Busca atención de urgencia ahora',
          text: 'Fiebre alta o persistente, líneas rojas que suben desde el tatuaje, malestar sistémico, dolor intenso y creciente o una zona que empeora rápidamente. No esperes a "ver cómo sigue mañana".',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Busca evaluación médica pronto',
          text: 'Pus, mal olor, enrojecimiento en progresión, sarpullido con ampollas, o cualquier síntoma que ya dure más de lo debido. Suspende los productos de cuidado posterior y lleva la lista de lo que se usó.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'list',
          title: 'Lleva contigo',
          items: [
            'El nombre y el lote de las tintas usadas.',
            'El tipo de vendaje aplicado (film, marca y tiempo de uso).',
            'Todos los productos que tocaron la zona: antiséptico, jabón, pomada, adhesivo.',
            'Fotos de la evolución, si las tienes.',
          ],
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
      ],
    },
    {
      id: 'reacao-alergica',
      title: 'Cuando no es infección, es reacción',
      blocks: [
        {
          type: 'paragraph',
          text: 'Una reacción alérgica puede venir de la tinta, del adhesivo del vendaje, del antiséptico, de conservantes o de un producto de cuidado posterior. El cuadro suele aparecer como enrojecimiento con picazón, a veces con pequeñas ampollas y secreción clara.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Suspende el producto y busca evaluación',
          text: 'Si esto ocurre en los primeros días, suspende el producto de cuidado posterior y busca evaluación médica, informando al tatuador todo lo que se usó — así se identifica al responsable.',
          sources: ['eadv-aftercare'],
        },
        {
          type: 'paragraph',
          text: 'Las reacciones también pueden aparecer mucho después de la cicatrización, incluso meses o años más tarde. Esto no significa que el tatuaje esté mal hecho — significa que la piel reaccionó a un componente.',
          sources: ['fda-tattoo-safety', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare', 'fda-tattoo-safety'],
};

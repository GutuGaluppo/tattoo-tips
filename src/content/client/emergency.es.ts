import type { Guide } from '../types';

export const emergencyGuide: Guide = {
  slug: '/emergencias',
  audience: 'ambos',
  title: 'Emergencias',
  navTitle: 'Emergencias',
  description: 'Situaciones que exigen conducta inmediata. Texto corto, una acción a la vez.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  sections: [
    {
      id: 'infeccao-grave',
      title: 'Sospecha de infección grave',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Fiebre alta, líneas rojas o malestar sistémico',
          text: 'Ve a un servicio de urgencias ahora. No es caso de tratar en casa ni de esperar el horario comercial.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Busca atención de urgencia',
              text: 'Lleva la lista de tintas, vendajes y productos usados en la zona.',
              level: 'urgencia',
            },
            {
              title: 'No apliques nada nuevo en la zona',
              text: 'Pomada, antiséptico o medicamento por cuenta propia entorpecen el diagnóstico.',
            },
            {
              title: 'Avisa al tatuador',
              text: 'Necesita registrar el lote de los materiales y verificar si otros clientes tuvieron el mismo problema.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'infeccao-local',
      title: 'Sospecha de infección local',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Pus amarillo o verdoso, olor, dolor y enrojecimiento en progresión',
          text: 'Interrumpe el automanejo casero y busca evaluación médica rápida. Registra los materiales y lotes usados.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'reacao-cutanea',
      title: 'Reacción cutánea importante al cuidado posterior',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Sarpullido intenso, ampollas o secreción clara persistente',
          text: 'Suspende el producto y busca evaluación médica. Revisa los adhesivos, pomadas y antisépticos usados — uno de ellos suele ser el responsable.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
      ],
    },
    {
      id: 'sangramento',
      title: 'Sangrado anormal',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Compresión firme y continua',
              text: 'Con material limpio, directo sobre la zona, sin levantarlo para revisar.',
              level: 'urgencia',
            },
            {
              title: 'Interrumpe la sesión',
              text: 'Si está en curso la atención, el procedimiento se detiene.',
            },
            {
              title: 'Deriva a evaluación médica',
              text: 'El sangrado que no cesa o que empapa el vendaje repetidamente necesita ser evaluado.',
              level: 'urgencia',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'acidente-perfurocortante',
      title: 'Accidente con punzocortante (tatuador)',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Lava la zona de inmediato',
              text: 'Corte o punción: agua y jabón. Mucosa: irriga con agua. Ojos: irriga abundantemente.',
              level: 'urgencia',
            },
            {
              title: 'Comunica al responsable',
              text: 'El accidente debe registrarse, identificando el material y la situación.',
            },
            {
              title: 'Busca evaluación médica inmediata',
              text: 'La evaluación posterior a la exposición es urgente, porque la profilaxis, cuando está indicada, depende del tiempo.',
              level: 'urgencia',
            },
          ],
          sources: ['osha-bbp', 'osha-tattoo-2002'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Sobre el origen de esta orientación',
          text: 'La estructura del plan de exposición, la vacunación contra la hepatitis B y la evaluación posterior a la exposición descritas aquí provienen de la norma estadounidense de la OSHA. En Brasil, sigue también las normas de salud ocupacional y la vigilancia sanitaria local.',
          sources: ['osha-bbp', 'osha-tattoo-2016'],
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'cleveland-aftercare',
    'aad-tattoo-reactions',
    'osha-bbp',
    'osha-tattoo-2002',
    'osha-tattoo-2016',
  ],
};

import type { Guide } from '../types';

export const sessionDayGuide: Guide = {
  slug: '/cliente/dia-da-sessao',
  audience: 'cliente',
  title: 'El día de la sesión',
  navTitle: 'Día de la sesión',
  description:
    'Qué sucede desde el momento en que te sientas hasta que sales del estudio — y qué observar mientras ocurre.',
  intro:
    'No necesitas fiscalizar el trabajo de nadie. Pero conocer la secuencia esperada ayuda a notar cuándo se saltó algo.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'session',
  sections: [
    {
      id: 'sequencia',
      title: 'La secuencia esperada',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Evaluación previa y consentimiento',
              text: 'Revisión de tu ficha de salud, de las alergias y de lo que informaste. Firma del consentimiento.',
            },
            {
              title: 'Higiene de manos',
              text: 'Antes de montar la mesa y antes de ponerse los guantes. Las manos deben estar secas antes de los guantes.',
              level: 'atencao',
            },
            {
              title: 'Montaje de la mesa',
              text: 'Superficies ya descontaminadas, barreras nuevas en cables, máquina y frascos pulverizadores, material de un solo uso separado y contenedor de punzocortantes al alcance.',
            },
            {
              title: 'Preparación de la piel y plantilla',
              text: 'Evaluación de la zona, rasurado con cuchilla desechable si es necesario, limpieza de la piel, secado y transferencia de la plantilla sobre piel íntegra.',
            },
            {
              title: 'El procedimiento',
              text: 'Durante la sesión, cambio de guantes siempre que haya contacto con una superficie sin protección o cambio entre una etapa contaminada y una limpia.',
            },
            {
              title: 'Apósito inicial e indicaciones por escrito',
              text: 'Sales sabiendo qué apósito se usó, cuánto tiempo mantenerlo y qué hacer si hay filtración.',
            },
            {
              title: 'Descarte y descontaminación',
              text: 'Aguja y cartucho descartados de inmediato en el contenedor; superficies descontaminadas después de la atención.',
            },
          ],
          sources: [
            'who-hand-hygiene',
            'who-handrub-poster',
            'osha-bbp',
            'osha-tattoo-2002',
            'eadv-aftercare',
          ],
        },
      ],
    },
    {
      id: 'o-que-observar',
      title: 'Qué observar durante la sesión',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-dia-da-sessao',
          title: 'Lista de verificación del día',
          description:
            'Márcalo a medida que vaya sucediendo. También sirve para recordar qué preguntar.',
          items: [
            {
              id: 'lacre',
              label: 'La aguja o el cartucho se abrieron delante de ti, con el envase íntegro.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'luvas',
              label:
                'El tatuador se cambió de guantes después de tocar el celular, una manija o cualquier superficie sin barrera.',
              detail:
                'La higiene de manos sigue siendo necesaria aunque se usen guantes; los guantes no sustituyen el lavado.',
              sources: ['who-hand-hygiene', 'osha-bbp'],
            },
            {
              id: 'descarte',
              label: 'La aguja usada se descartó de inmediato en el contenedor rígido.',
              detail: 'Nada de doblar, romper, reencapuchar o reutilizar material de un solo uso.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'La tinta usada tiene etiqueta, lote y fecha de vencimiento visibles.',
              sources: ['anvisa-tintas', 'fda-tattoo-safety'],
            },
            {
              id: 'diluicao',
              label: 'Si hubo dilución de tinta, no se hizo con agua del grifo.',
              sources: ['cdc-ntm-tattoo'],
            },
            {
              id: 'orientacao',
              label: 'Recibiste las indicaciones de cuidado posterior por escrito antes de salir.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
      ],
    },
    {
      id: 'durante',
      title: 'Si te pasa algo durante la sesión',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Avisa en el momento — no esperes a que termine',
          text: 'Mareo, náuseas, sudor frío, hormigueo en las manos o visión que se oscurece piden una pausa inmediata. Picazón intensa, ardor fuera de lo común o enrojecimiento que se extiende lejos del área tatuada también deben decirse de inmediato.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Anota (o fotografía) el nombre y el lote de las tintas, el tipo de apósito aplicado y los productos usados en tu piel. Si aparece alguna reacción después, esa lista es lo primero que pedirá la evaluación médica.',
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
        {
          type: 'playlist',
          spotifyId: '6MlFKYieMeFCXyWrWYcsCZ',
          title: 'Para la silla',
          description:
            'La distracción ayuda a atravesar las horas quieto. Acuerda los auriculares antes: necesitas seguir pudiendo avisar si sientes algo raro.',
          compact: true,
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'who-hand-hygiene',
    'who-handrub-poster',
    'osha-bbp',
    'osha-tattoo-2002',
    'cdc-ntm-tattoo',
    'anvisa-tintas',
    'fda-tattoo-safety',
    'aad-tattoo-reactions',
  ],
};

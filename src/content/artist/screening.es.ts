import type { Guide } from '../types';

export const screeningGuide: Guide = {
  slug: '/tatuador/triagem',
  audience: 'tatuador',
  title: 'Evaluación previa, consentimiento e higiene de manos',
  navTitle: 'Evaluación e higiene',
  description:
    'El primer bloque del recorrido de bioseguridad: qué preguntar antes de que el diseño toque la piel y cómo higienizar las manos correctamente.',
  intro:
    'Trabaja como si toda sangre y fluido corporal fuera potencialmente infeccioso. Esto no es pesimismo — es lo que sostiene la precaución universal.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  technical: true,
  image: 'workstation',
  sections: [
    {
      id: 'triagem',
      title: 'Evaluación previa al diseño',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Consentimiento informado firmado',
              text: 'Documento que describe riesgos, cuidados posteriores y qué hacer si algo se sale de lo esperado.',
            },
            {
              title: 'Ficha de evaluación completada',
              text: 'Medicamentos, alergias, reacciones previas a tatuajes, adhesivos y antisépticos, tendencia a queloides y condiciones que empeoran la cicatrización o el riesgo de infección.',
              level: 'atencao',
            },
            {
              title: 'Evaluación visual de la zona',
              text: 'Piel con infección, dermatitis activa, quemadura solar o lesión no recibe el procedimiento. Reprograma.',
              level: 'atencao',
            },
            {
              title: 'Confirmación de la documentación local',
              text: 'La edad mínima, los documentos y las exigencias varían según el municipio y el estado. Confirma la norma de tu vigilancia sanitaria.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'anvisa-tintas'],
        },
      ],
    },
    {
      id: 'higiene-das-maos',
      title: 'Higiene de manos',
      summary: 'No es opcional y no se sustituye con guantes.',
      blocks: [
        {
          type: 'table',
          title: 'Cuándo y por cuánto tiempo',
          caption:
            'Tiempos e indicaciones según la orientación de la OMS. Manos secas antes de ponerse los guantes; uñas naturales cortas.',
          columns: [
            { key: 'situacao', label: 'Situación', sortable: true },
            { key: 'metodo', label: 'Método' },
            { key: 'tempo', label: 'Tiempo', align: 'end', sortable: true },
          ],
          cardTitleKey: 'situacao',
          searchable: true,
          rows: [
            {
              situacao: 'Manos sin suciedad visible',
              metodo: 'Fricción con preparación alcohólica',
              tempo: '20–30 s',
            },
            {
              situacao: 'Manos visiblemente sucias',
              metodo: 'Agua y jabón',
              tempo: '40–60 s',
            },
            {
              situacao: 'Contacto con sangre o fluidos',
              metodo: 'Agua y jabón',
              tempo: '40–60 s',
            },
            {
              situacao: 'Después de quitarse los guantes',
              metodo: 'Higienizar de inmediato o tan pronto como sea posible',
              tempo: 'Según el método',
            },
            {
              situacao: 'Antes de ponerse los guantes',
              metodo: 'Higienizar y secar por completo',
              tempo: 'Según el método',
            },
          ],
          sources: ['who-hand-hygiene', 'who-handrub-poster', 'osha-bbp'],
        },
        {
          type: 'video',
          youtubeId: 'B3eq5fLzAOo',
          title: 'Fricción alcohólica según la técnica de la OMS',
          description:
            'La secuencia completa de movimientos. Vale la pena repetirla hasta que sea automática — una técnica a medias no cubre todas las superficies de la mano.',
          sourceId: 'jhm-handrub-video',
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Los guantes no sustituyen la higiene de manos',
          text: 'La indicación de higienizar las manos existe independientemente del uso de guantes. Y las manos deben estar secas antes de ponérselos.',
          sources: ['who-hand-hygiene'],
        },
      ],
    },
    {
      id: 'checklist-pre-sessao',
      title: 'Lista de verificación previa a la sesión',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-pre-sessao',
          title: 'Antes de empezar',
          description:
            'Progreso guardado en el navegador. Se puede imprimir y dejar plastificado en la mesa.',
          items: [
            {
              id: 'consentimento',
              label: 'Consentimiento y ficha de evaluación completados y revisados.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'pele',
              label: 'Zona sin infección, dermatitis activa o quemadura solar.',
              sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
            },
            {
              id: 'maos',
              label: 'Manos higienizadas correctamente y secas antes de los guantes.',
              sources: ['who-hand-hygiene', 'who-handrub-poster'],
            },
            {
              id: 'bancada',
              label: 'Mesa descontaminada y superficies de contacto con barrera nueva.',
              detail:
                'Cables, fuente, frascos pulverizadores y cualquier punto que la mano enguantada vaya a tocar durante la sesión.',
              sources: ['osha-bbp'],
            },
            {
              id: 'cartucho',
              label: 'Cartucho o aguja estéril, con el envase íntegro y verificado.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'Tinta con lote, fecha de vencimiento y documentación técnica disponible.',
              detail: 'En Brasil, tinta regularizada ante Anvisa. Dilución solo con agua estéril.',
              sources: ['anvisa-tintas', 'cdc-ntm-tattoo', 'echa-tattoo-inks'],
            },
            {
              id: 'coletor',
              label: 'Contenedor de punzocortantes al alcance, de pie y sin llenado excesivo.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'stencil',
              label: 'Plantilla seca y estable antes de empezar.',
            },
          ],
        },
      ],
    },
    {
      id: 'jurisdicao',
      title: 'Sobre el origen de estas reglas',
      blocks: [
        {
          type: 'alert',
          level: 'info',
          title: 'Una norma de Estados Unidos no es una norma de Brasil',
          text: 'La estructura de plan escrito de control de exposición, EPI, descarte de punzocortantes, vacunación contra la hepatitis B y evaluación posterior a la exposición proviene de la OSHA, de Estados Unidos. Es una buena referencia de práctica — pero la exigencia legal que se te aplica es la de la vigilancia sanitaria de tu municipio y estado.',
          sources: ['osha-bbp', 'osha-tattoo-2002', 'osha-tattoo-2016', 'anvisa-tintas'],
        },
        {
          type: 'paragraph',
          text: 'Lo mismo vale para las tintas: la Unión Europea restringe miles de sustancias bajo el REACH, Estados Unidos trata las tintas como cosmético bajo la FDA, y Brasil exige regularización ante Anvisa. Compra según el mercado en el que trabajes, con lote rastreable y documentación técnica.',
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

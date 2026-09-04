import type { Guide } from '../types';

export const beforeGuide: Guide = {
  slug: '/cliente/antes',
  audience: 'cliente',
  title: 'Antes del tatuaje',
  navTitle: 'Antes',
  description:
    'Un tatuaje es un procedimiento artístico que también crea una herida abierta. Lo que resuelvas antes de sentarte en la camilla reduce la mayor parte del riesgo.',
  intro:
    'Nada de esto trata sobre el diseño. Se trata de llegar con la piel en condiciones de recibir el procedimiento, informar lo que el tatuador necesita saber y poder evaluar si el estudio trabaja con seguridad.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'studio',
  sections: [
    {
      id: 'o-que-informar',
      title: 'Qué necesitas informar',
      summary:
        'La evaluación previa empieza antes de que la aguja toque la piel. Omitir información por vergüenza o miedo a perder el turno es lo que más perjudica.',
      blocks: [
        {
          type: 'list',
          title: 'Cuéntaselo al tatuador, sin excepción',
          items: [
            'Medicamentos en uso, incluyendo anticoagulantes, inmunosupresores e isotretinoína.',
            'Alergias conocidas — en especial a adhesivos y apósitos, antisépticos, látex, lanolina y pomadas.',
            'Reacciones anteriores a tatuajes, piercings, adhesivos o productos de cuidado posterior.',
            'Tendencia a queloides o cicatrices hipertróficas.',
            'Condiciones que dificultan la cicatrización o aumentan el riesgo de infección (diabetes descompensada, inmunosupresión, enfermedades de la piel activas).',
            'Embarazo o lactancia — habla antes con quien controla tu salud.',
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'El consentimiento informado no es un trámite',
          text: 'Debes recibir y firmar un documento que explique los riesgos, los cuidados y qué hacer si algo se sale de lo esperado. Si el estudio no tiene ese documento, eso ya te dice algo sobre el estudio.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'quando-adiar',
      title: 'Cuándo posponer la sesión',
      summary: 'La piel debe estar íntegra y sana en la zona que se va a tatuar.',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Reprograma si hoy te encuentras en alguno de estos casos',
          text: 'Piel lesionada, herida o golpeada en la zona; dermatitis, psoriasis o eczema activos en el lugar; quemadura solar reciente; cualquier infección de piel activa; o un cuadro clínico descompensado que merezca evaluación médica antes.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Reprogramar cuesta un turno. Tatuar sobre piel inflamada cuesta una mala cicatrización, riesgo de infección y, con frecuencia, un retoque.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'escolher-o-estudio',
      title: 'Cómo evaluar el estudio',
      summary:
        'No necesitas entender de técnica para reconocer un puesto de trabajo seguro. Necesitas saber qué buscar.',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-escolha-estudio',
          title: 'Lista de verificación del estudio',
          description:
            'Puedes revisar todo esto en una visita antes de reservar. Marca lo que ya hayas verificado.',
          items: [
            {
              id: 'licenca',
              label: 'El estudio tiene licencia sanitaria visible y actualizada.',
              detail:
                'En Brasil, el funcionamiento es fiscalizado por la vigilancia sanitaria del municipio o del estado.',
              sources: ['anvisa-tintas'],
            },
            {
              id: 'tinta-regularizada',
              label: 'Las tintas están regularizadas para uso en el país.',
              detail:
                'En Brasil, las tintas de tatuaje necesitan regularización ante Anvisa. La lista de productos autorizados cambia — conviene revisar la versión vigente.',
              sources: ['anvisa-tintas', 'anvisa-registro-tintas'],
            },
            {
              id: 'material-lacrado',
              label: 'Las agujas y cartuchos se abren delante de ti, sellados.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'coletor',
              label: 'Hay un contenedor rígido de objetos punzocortantes al alcance de la mesa.',
              detail: 'Debe estar de pie, identificado y sin estar demasiado lleno.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'barreiras',
              label: 'Superficies, máquina, cables y frascos pulverizadores tienen barreras desechables.',
              sources: ['osha-bbp'],
            },
            {
              id: 'higiene-maos',
              label: 'El tatuador higieniza sus manos y se cambia de guantes delante de ti.',
              sources: ['who-hand-hygiene'],
            },
            {
              id: 'instrucoes-escritas',
              label: 'Recibes las instrucciones de cuidado posterior por escrito, no solo de palabra.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Tinta diluida con agua del grifo es motivo para interrumpir',
          text: 'Investigaciones de brotes vincularon infecciones por micobacterias no tuberculosas a tinta contaminada y a "gray wash" preparado con agua del grifo. La dilución debe hacerse con agua estéril o con diluyente propio.',
          sources: ['cdc-ntm-tattoo'],
        },
      ],
    },
    {
      id: 'no-dia',
      title: 'El día, antes de salir de casa',
      blocks: [
        {
          type: 'list',
          items: [
            'Ve alimentado y descansado. Una sesión larga en ayunas aumenta el malestar y el mareo.',
            'Usa ropa cómoda que deje al descubierto la zona sin apretarla después — el área tatuada no puede quedar bajo tela ajustada.',
            'Llega con la piel limpia, sin crema, aceite o maquillaje en la zona.',
            'Evita quemaduras solares en la zona los días anteriores.',
            'Lleva tus dudas por escrito. Preguntar durante el procedimiento es más difícil.',
          ],
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Las reacciones a la tinta pueden aparecer después',
          text: 'Los organismos reguladores registran reacciones que surgen justo después de la sesión y también meses o años más tarde. Guarda el nombre y el lote de las tintas usadas — si algo ocurre, esa información acelera mucho la investigación.',
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

import type { Guide } from '../types';

export const screeningGuide: Guide = {
  slug: '/tatuador/triagem',
  audience: 'tatuador',
  title: 'Screening, consent, and hand hygiene',
  navTitle: 'Screening & hygiene',
  description:
    'The first block of the biosafety journey: what to ask before the needle touches the skin, and how to properly sanitize your hands.',
  intro:
    "Work as if all blood and body fluid were potentially infectious. That isn't pessimism — it's what standard precautions are built on.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  technical: true,
  image: 'workstation',
  sections: [
    {
      id: 'triagem',
      title: 'Screening before the design',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Signed informed consent',
              text: 'A document describing risks, aftercare, and what to do if something goes outside the expected.',
            },
            {
              title: 'Completed screening form',
              text: 'Medications, allergies, previous tattoo reactions, adhesives and antiseptics, keloid tendency, and conditions that worsen healing or infection risk.',
              level: 'atencao',
            },
            {
              title: 'Visual assessment of the area',
              text: "Skin with infection, active dermatitis, sunburn, or a lesion doesn't get the procedure. Reschedule.",
              level: 'atencao',
            },
            {
              title: 'Confirmation of local documentation',
              text: 'Minimum age, IDs, and requirements vary by municipality and state. Confirm the rule for your local health authority.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'anvisa-tintas'],
        },
      ],
    },
    {
      id: 'higiene-das-maos',
      title: 'Hand hygiene',
      summary: "It's not optional, and gloves don't replace it.",
      blocks: [
        {
          type: 'table',
          title: 'When and for how long',
          caption:
            "Timings and indications following WHO guidance. Hands dry before gloves go on; natural nails kept short.",
          columns: [
            { key: 'situacao', label: 'Situation', sortable: true },
            { key: 'metodo', label: 'Method' },
            { key: 'tempo', label: 'Time', align: 'end', sortable: true },
          ],
          cardTitleKey: 'situacao',
          searchable: true,
          rows: [
            {
              situacao: 'Hands with no visible dirt',
              metodo: 'Alcohol-based handrub',
              tempo: '20–30 s',
            },
            {
              situacao: 'Visibly dirty hands',
              metodo: 'Soap and water',
              tempo: '40–60 s',
            },
            {
              situacao: 'Contact with blood or body fluids',
              metodo: 'Soap and water',
              tempo: '40–60 s',
            },
            {
              situacao: 'After removing gloves',
              metodo: 'Sanitize immediately or as soon as possible',
              tempo: 'Per method',
            },
            {
              situacao: 'Before putting on gloves',
              metodo: 'Sanitize and dry completely',
              tempo: 'Per method',
            },
          ],
          sources: ['who-hand-hygiene', 'who-handrub-poster', 'osha-bbp'],
        },
        {
          type: 'video',
          youtubeId: 'B3eq5fLzAOo',
          title: "Alcohol-based handrub using the WHO technique",
          description:
            "The full sequence of movements. Worth repeating until it becomes automatic — a half-done technique doesn't cover every surface of the hand.",
          sourceId: 'jhm-handrub-video',
        },
        {
          type: 'alert',
          level: 'atencao',
          title: "Gloves don't replace hand hygiene",
          text: "The need to sanitize your hands exists regardless of glove use. And hands need to be dry before gloves go on.",
          sources: ['who-hand-hygiene'],
        },
      ],
    },
    {
      id: 'checklist-pre-sessao',
      title: 'Pre-session checklist',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-pre-sessao',
          title: 'Before you start',
          description: 'Progress saved in your browser. Can be printed and laminated at the station.',
          items: [
            {
              id: 'consentimento',
              label: 'Consent and screening form completed and reviewed.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'pele',
              label: 'Area free of infection, active dermatitis, or sunburn.',
              sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
            },
            {
              id: 'maos',
              label: 'Hands properly sanitized and dry before gloves.',
              sources: ['who-hand-hygiene', 'who-handrub-poster'],
            },
            {
              id: 'bancada',
              label: 'Station decontaminated and touch surfaces have a fresh barrier.',
              detail:
                'Cords, power supply, spray bottles, and any point a gloved hand will touch during the session.',
              sources: ['osha-bbp'],
            },
            {
              id: 'cartucho',
              label: 'Sterile cartridge or needle, with an intact, checked seal.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'Ink with batch number, expiration date, and technical documentation available.',
              detail: 'In Brazil, ink approved by Anvisa. Dilution only with sterile water.',
              sources: ['anvisa-tintas', 'cdc-ntm-tattoo', 'echa-tattoo-inks'],
            },
            {
              id: 'coletor',
              label: 'Sharps container within reach, upright, and not overfilled.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'stencil',
              label: 'Stencil dry and stable before starting.',
            },
          ],
        },
      ],
    },
    {
      id: 'jurisdicao',
      title: 'About the origin of these rules',
      blocks: [
        {
          type: 'alert',
          level: 'info',
          title: "A US standard isn't a Brazilian standard",
          text: "The written exposure-control-plan framework, PPE, sharps disposal, hepatitis B vaccination, and post-exposure evaluation come from OSHA, in the United States. It's a good practice reference — but the legal requirement that applies to you is your municipal and state health authority's.",
          sources: ['osha-bbp', 'osha-tattoo-2002', 'osha-tattoo-2016', 'anvisa-tintas'],
        },
        {
          type: 'paragraph',
          text: 'The same goes for inks: the European Union restricts thousands of substances under REACH, the United States treats inks as a cosmetic under the FDA, and Brazil requires Anvisa approval. Buy according to the market you work in, with traceable batches and technical documentation.',
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

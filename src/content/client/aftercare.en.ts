import type { Guide } from '../types';

export const aftercareGuide: Guide = {
  slug: '/cliente/cuidados-depois',
  audience: 'cliente',
  title: 'Aftercare',
  navTitle: 'Aftercare',
  description:
    'The goal of aftercare is to restore the skin barrier, prevent infection, and preserve the result. The principles are stable; the products vary.',
  intro:
    "There's no single valid protocol for every tattoo. There are principles that don't change: clean hands, gentle washing, a thin layer, never picking at scabs, and staying alert to anything outside the expected.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'aftercare',
  sections: [
    {
      id: 'filme-ou-tradicional',
      title: 'Film dressing or traditional care',
      summary:
        "There are two reasonable paths for the initial dressing. Whoever did the work decides which one you'll follow — stick to the instructions that came with it.",
      blocks: [
        {
          type: 'table',
          title: 'Comparing the two paths',
          caption:
            "Both are acceptable. The mistake isn't choosing one of the two — it's mixing the two halfway.",
          columns: [
            { key: 'aspecto', label: 'Aspect', sortable: true },
            { key: 'filme', label: 'Film / second skin' },
            { key: 'tradicional', label: 'Traditional care' },
          ],
          cardTitleKey: 'aspecto',
          rows: [
            {
              aspecto: 'Dressing duration',
              filme: 'Can stay on from 24 hours to several days, if comfortable and not leaking.',
              tradicional:
                'Initial dressing for a few hours, as instructed; afterward the skin stays exposed between washes.',
            },
            {
              aspecto: 'When to change it',
              filme: 'If exudate leaks out, the film needs to be changed.',
              tradicional: "Doesn't apply — the routine becomes washing and moisturizing.",
            },
            {
              aspecto: 'Daily routine',
              filme: 'Less handling of the area while the film stays intact.',
              tradicional:
                'Gentle washing and a thin layer of hypoallergenic emollient or ointment, 2 to 3 times a day, for 2 to 3 days; plain emollient afterward.',
            },
            {
              aspecto: 'Most common risk',
              filme: 'Keeping a leaking or poorly adhered film on.',
              tradicional: 'Overdoing the amount of product and smothering the area.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: "Antibiotic and antiseptic aren't routine",
          text: "Disinfectants and antibiotic creams aren't routinely needed during healing. They should only be used if there's an infection and a medical evaluation.",
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'como-lavar',
      title: 'How to wash it',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Wash your hands first',
              text: 'Always, before any contact with the tattoo. Visibly dirty hands call for soap and water for 40 to 60 seconds.',
              level: 'atencao',
            },
            {
              title: 'Lukewarm running water and a little mild soap',
              text: 'No scrubbing, no loofah, no sponge. A clean hand is enough.',
            },
            {
              title: 'Pat dry, no friction',
              text: "Clean paper towel, patting it, or let it air-dry. A regular cloth towel doesn't belong here.",
            },
            {
              title: 'A thin layer of emollient',
              text: 'Thin, really thin: the skin should look slightly damp, not shiny or sticky. Too much product gets in the way of healing.',
            },
          ],
          sources: ['eadv-aftercare', 'who-handrub-poster', 'aad-tattoo-care'],
        },
        {
          type: 'video',
          youtubeId: '3PmVJQUCm4E',
          title: 'How to wash your hands with soap and water',
          description:
            "The WHO's official technique, in 40 to 60 seconds. It's the step that protects your tattoo the most in the first weeks.",
          sourceId: 'who-handwash-video',
        },
        {
          type: 'alert',
          level: 'urgencia',
          title: "Don't use hydrogen peroxide, alcohol, or iodine on the area",
          text: "On healing tissue, these products dry it out and irritate it, doing more harm than good. Water, mild soap, and a plain emollient are enough.",
          sources: ['aad-wound-care', 'eadv-aftercare'],
        },
      ],
    },
    {
      id: 'rotina',
      title: 'Your day-to-day routine',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-aftercare',
          title: 'Aftercare checklist',
          description:
            'Saved in your browser — you can close the page and come back later. It also works printed out and left in the bathroom.',
          items: [
            {
              id: 'maos',
              label: 'I washed my hands before touching the tattoo.',
              sources: ['eadv-aftercare', 'who-hand-hygiene'],
            },
            {
              id: 'filme',
              label: "If I'm using a film, it's still intact and not leaking.",
              detail: 'Significant exudate leakage calls for a change.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'lavagem',
              label: 'I washed gently and dried without rubbing.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'camada-fina',
              label: 'I applied a thin layer of emollient, not a thick one.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
            {
              id: 'nao-cocei',
              label: "I didn't scratch, pick at scabs, or rub the area.",
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sem-imersao',
              label: 'I avoided pools, bathtubs, saunas, the sea, and any soaking.',
              detail: "A shower is fine; soaking isn't — not until fully healed.",
              sources: ['eadv-aftercare'],
            },
            {
              id: 'roupa',
              label: 'I wore clean, loose clothing over the area.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sol',
              label: 'I kept the area out of the sun.',
              detail:
                "High-SPF sunscreen only after full healing — not on skin that's still healing.",
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
          ],
        },
      ],
    },
    {
      id: 'sol-e-longo-prazo',
      title: 'Sun and the long term',
      blocks: [
        {
          type: 'paragraph',
          text: "While healing, the area stays out of the sun — covered by clothing, not sunscreen. Once fully healed, high-SPF sun protection becomes the main measure for preserving color and contrast over the years.",
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Tattooed skin is still skin',
          text: 'A change in a mole, a lump, an area that itches persistently, or any change within the tattoo deserves a dermatology evaluation — the ink doesn\'t prevent, and can make harder, the observation of the skin.',
          sources: ['aad-tattoo-care', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'aad-wound-care',
    'aad-tattoo-care',
    'aad-tattoo-reactions',
    'who-hand-hygiene',
    'who-handrub-poster',
    'who-handwash-video',
    'cleveland-aftercare',
  ],
};

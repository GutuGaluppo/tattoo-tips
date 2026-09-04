import type { Guide } from '../types';

export const warningSignsGuide: Guide = {
  slug: '/sinais-de-alerta',
  audience: 'ambos',
  title: 'Normal or warning sign',
  navTitle: 'Warning signs',
  description:
    "A direct comparison between what's expected during healing and what calls for a medical evaluation.",
  intro:
    "Almost everything that's alarming in the first few days is expected. What sets things apart isn't the isolated symptom, but whether it's improving or getting worse.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'stencil',
  sections: [
    {
      id: 'comparacao',
      title: 'Expected vs. warning sign',
      blocks: [
        {
          type: 'comparison',
          expectedLabel: 'Expected',
          alarmingLabel: 'Warning sign',
          rows: [
            {
              context: 'Redness',
              expected: 'Mild, confined to the tattooed area, and decreasing day by day.',
              alarming: 'Spreading beyond the tattoo or increasing after the third day.',
            },
            {
              context: 'Discharge',
              expected: 'Clear or pinkish fluid in the first few days, in decreasing amounts.',
              alarming: 'Thick, yellow or greenish discharge, with a bad smell.',
            },
            {
              context: 'Pain',
              expected: 'Tenderness and burning that progressively improve.',
              alarming: 'Increasing, throbbing pain, or pain out of proportion to the size of the tattoo.',
            },
            {
              context: 'Swelling',
              expected: 'Mild swelling in the first few days.',
              alarming: 'Swelling that gets worse after starting to improve.',
            },
            {
              context: 'Temperature',
              expected: 'Local warmth in the first few hours.',
              alarming: 'High or persistent fever, chills, flu-like malaise.',
            },
            {
              context: 'Skin appearance',
              expected: 'Thin scabbing and flaking between the first and third week.',
              alarming: 'Papules, pustules, nodules, blisters, or a rash with intense itching.',
            },
            {
              context: 'Spread',
              expected: 'The change stays within the tattooed area.',
              alarming: 'Red streaks moving up the skin away from the tattoo.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'quando-procurar',
      title: 'When to seek care',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Seek urgent care now',
          text: 'High or persistent fever, red streaks moving up from the tattoo, systemic malaise, intense and increasing pain, or an area that\'s worsening rapidly. Don\'t wait to "see how it looks tomorrow."',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Seek medical evaluation soon',
          text: "Pus, a bad smell, progressing redness, a blistering rash, or any symptom that's already lasted longer than it should. Stop aftercare products and bring the list of what was used.",
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'list',
          title: 'Bring with you',
          items: [
            'The name and batch number of the inks used.',
            'The type of dressing applied (film, brand, and how long it was worn).',
            'Every product that touched the area: antiseptic, soap, ointment, adhesive.',
            "Photos of how it's progressed, if you have them.",
          ],
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
      ],
    },
    {
      id: 'reacao-alergica',
      title: "When it isn't infection, it's a reaction",
      blocks: [
        {
          type: 'paragraph',
          text: 'An allergic reaction can come from the ink, the dressing adhesive, the antiseptic, preservatives, or an aftercare product. It usually shows up as itchy redness, sometimes with small blisters and clear discharge.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Stop the product and get it checked',
          text: "If this happens in the first few days, stop the aftercare product and seek medical evaluation, telling the artist everything that was used — that's how the culprit gets identified.",
          sources: ['eadv-aftercare'],
        },
        {
          type: 'paragraph',
          text: "Reactions can also appear long after healing, including months or years later. That doesn't mean the tattoo was done poorly — it means the skin reacted to a component.",
          sources: ['fda-tattoo-safety', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare', 'fda-tattoo-safety'],
};

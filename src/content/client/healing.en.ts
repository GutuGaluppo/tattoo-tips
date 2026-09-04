import type { Guide } from '../types';

export const healingGuide: Guide = {
  slug: '/cliente/cicatrizacao',
  audience: 'cliente',
  title: 'Healing timeline',
  navTitle: 'Healing',
  description:
    "What's expected at each stage — and the one pattern that really matters to track.",
  intro:
    'The rule that sums it all up: progressive improvement is expected. Progressive worsening, at any stage, is a reason for evaluation.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'healed',
  sections: [
    {
      id: 'linha-do-tempo',
      title: 'Stage by stage',
      blocks: [
        {
          type: 'timeline',
          entries: [
            {
              period: 'Day 0',
              title: 'Right after the session',
              text: 'Local warmth, tenderness, and a bit of bleeding or plasma are expected. The area looks irritated because it was just wounded.',
              watchFor: "Bleeding that soaks through the dressing and doesn't stop with pressure.",
            },
            {
              period: 'Days 1 to 3',
              title: 'Mild redness and swelling',
              text: 'Slight redness around the design, mild swelling, and clear or pinkish exudate. Usually the period of most discomfort.',
              watchFor: 'Redness spreading further away from the tattoo instead of shrinking.',
            },
            {
              period: 'Days 3 to 7',
              title: 'Less exudate, scabbing begins',
              text: 'Fluid output decreases and thin scabbing and flaking start to form.',
              watchFor: 'Yellow or greenish discharge, bad smell, increasing pain.',
            },
            {
              period: 'Weeks 1 to 3',
              title: 'Flaking and itching',
              text: 'The skin flakes, itches a bit, and the tattoo looks duller and "hazy." This is normal and passes.',
              watchFor: 'Intense itching with blisters or a rash — could be a reaction, not healing.',
            },
            {
              period: 'Weeks 3 to 6',
              title: 'Stable surface',
              text: 'The surface looks healed and the design gets sharp again. The skin barrier is still maturing underneath.',
            },
            {
              period: 'Following months',
              title: 'Maturation and sun protection',
              text: 'Once fully healed, sun protection becomes the main measure to preserve color and contrast.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'figure',
          illustration: 'healing-stages',
          caption:
            'Expected look across the stages: initial redness, decreasing exudate, flaking, and a stable surface.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'o-que-nao-fazer',
      title: 'What slows healing down',
      blocks: [
        {
          type: 'list',
          items: [
            "Picking at scabs or pulling flaking skin — that's how you lose pigment and gain a scar.",
            "Applying excess product, thinking it moisturizes more.",
            'Soaking the area: pool, bathtub, sauna, sea.',
            'Wearing tight clothing that rubs against the area.',
            "Exposing it to the sun while it's still healing.",
            'Using antiseptic, alcohol, or peroxide "just in case."',
          ],
          sources: ['eadv-aftercare', 'aad-wound-care'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'The one rule: direction matters more than the symptom',
          text: "Redness on day 2 is expected. That same redness being worse on day 5 than it was on day 3 isn't. Compare with yesterday, not with someone else's photo.",
          sources: ['eadv-aftercare'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-care', 'aad-wound-care', 'cleveland-aftercare'],
};

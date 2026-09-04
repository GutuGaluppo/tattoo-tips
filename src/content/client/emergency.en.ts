import type { Guide } from '../types';

export const emergencyGuide: Guide = {
  slug: '/emergencias',
  audience: 'ambos',
  title: 'Emergencies',
  navTitle: 'Emergencies',
  description: 'Situations that call for immediate action. Short text, one action at a time.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  sections: [
    {
      id: 'infeccao-grave',
      title: 'Suspected severe infection',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'High fever, red streaks, or systemic malaise',
          text: "Go to an urgent care service now. This isn't something to treat at home or wait for business hours.",
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Seek urgent care',
              text: 'Bring the list of inks, dressings, and products used on the area.',
              level: 'urgencia',
            },
            {
              title: "Don't apply anything new to the area",
              text: 'Ointment, antiseptic, or self-prescribed medication get in the way of diagnosis.',
            },
            {
              title: 'Notify the artist',
              text: 'They need to record the batch of materials and check whether other clients had the same problem.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'infeccao-local',
      title: 'Suspected local infection',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Yellow or greenish pus, odor, pain, and progressing redness',
          text: 'Stop self-treating at home and seek prompt medical evaluation. Record the materials and batches used.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'reacao-cutanea',
      title: 'Significant skin reaction to aftercare',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Intense rash, blisters, or persistent clear discharge',
          text: 'Stop the product and seek medical evaluation. Review the adhesives, ointments, and antiseptics used — one of them is usually the culprit.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
      ],
    },
    {
      id: 'sangramento',
      title: 'Abnormal bleeding',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Firm, continuous pressure',
              text: "With clean material, directly on the area, without lifting it to check.",
              level: 'urgencia',
            },
            {
              title: 'Stop the session',
              text: 'If you\'re in the middle of the procedure, it stops.',
            },
            {
              title: 'Get it evaluated',
              text: "Bleeding that doesn't stop or repeatedly soaks through the dressing needs to be evaluated.",
              level: 'urgencia',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'acidente-perfurocortante',
      title: 'Sharps injury (tattoo artist)',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Wash the area immediately',
              text: 'Cut or puncture: soap and water. Mucosa: flush with water. Eyes: flush thoroughly.',
              level: 'urgencia',
            },
            {
              title: 'Notify whoever is in charge',
              text: 'The incident needs to be recorded, identifying the material and the situation.',
            },
            {
              title: 'Get immediate medical evaluation',
              text: "Post-exposure evaluation is urgent, because prophylaxis, when indicated, is time-sensitive.",
              level: 'urgencia',
            },
          ],
          sources: ['osha-bbp', 'osha-tattoo-2002'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'About the jurisdiction behind this guidance',
          text: "The exposure-plan framework, hepatitis B vaccination, and post-exposure evaluation described here come from the US OSHA standard. In Brazil, also follow occupational health regulations and your local health authority.",
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

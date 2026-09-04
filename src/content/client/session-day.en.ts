import type { Guide } from '../types';

export const sessionDayGuide: Guide = {
  slug: '/cliente/dia-da-sessao',
  audience: 'cliente',
  title: 'Session day',
  navTitle: 'Session day',
  description:
    "What happens from the moment you sit down to when you leave the studio — and what to watch for while it happens.",
  intro:
    "You don't need to police anyone's work. But knowing the expected sequence helps you notice when a step got skipped.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'session',
  sections: [
    {
      id: 'sequencia',
      title: 'The expected sequence',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Screening and consent',
              text: 'Review of your health form, allergies, and what you disclosed. Signing the consent form.',
            },
            {
              title: 'Hand hygiene',
              text: 'Before setting up the station and before putting on gloves. Hands need to be dry before gloves go on.',
              level: 'atencao',
            },
            {
              title: 'Setting up the station',
              text: 'Already-decontaminated surfaces, fresh barriers on cords, machine and spray bottles, single-use material set apart, and a sharps container within reach.',
            },
            {
              title: 'Skin prep and stencil',
              text: 'Assessment of the area, shaving with a disposable razor if needed, cleaning the skin, drying, and transferring the stencil onto intact skin.',
            },
            {
              title: 'The procedure',
              text: 'During the session, gloves are changed any time there is contact with an unprotected surface or a switch between a contaminated step and a clean one.',
            },
            {
              title: 'Initial dressing and written instructions',
              text: "You leave knowing which dressing was used, how long to keep it on, and what to do if there's leakage.",
            },
            {
              title: 'Disposal and decontamination',
              text: 'Needle and cartridge discarded immediately into the sharps container; surfaces decontaminated after the session.',
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
      title: 'What to watch for during the session',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-dia-da-sessao',
          title: "Day-of checklist",
          description:
            'Check items off as they happen. It also works as a reminder of what to ask about.',
          items: [
            {
              id: 'lacre',
              label: 'The needle or cartridge was opened in front of you, with an intact seal.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'luvas',
              label:
                'The artist changed gloves after touching a phone, door handle, or any unprotected surface.',
              detail:
                'Hand hygiene is still required even with gloves on; gloves are not a substitute for washing.',
              sources: ['who-hand-hygiene', 'osha-bbp'],
            },
            {
              id: 'descarte',
              label: 'The used needle was discarded immediately into the rigid sharps container.',
              detail: 'No bending, breaking, recapping, or reusing single-use material.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'The ink used has a visible label, batch number, and expiration date.',
              sources: ['anvisa-tintas', 'fda-tattoo-safety'],
            },
            {
              id: 'diluicao',
              label: 'If the ink was diluted, it wasn\'t done with tap water.',
              sources: ['cdc-ntm-tattoo'],
            },
            {
              id: 'orientacao',
              label: 'You received written aftercare instructions before leaving.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
      ],
    },
    {
      id: 'durante',
      title: 'If something happens to you during the session',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: "Say something right away — don't wait until it's over",
          text: 'Dizziness, nausea, cold sweat, tingling in your hands, or dimming vision call for an immediate pause. Intense itching, unusual burning, or redness spreading far from the tattooed area also need to be flagged right away.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: "Write down (or photograph) the name and batch of the inks, the type of dressing applied, and the products used on your skin. If a reaction shows up later, this list is the first thing a medical evaluation will ask for.",
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
        {
          type: 'playlist',
          spotifyId: '6MlFKYieMeFCXyWrWYcsCZ',
          title: 'For the chair',
          description:
            "Distraction helps you get through the stationary hours. Agree on headphones beforehand: you still need to be able to speak up if something feels wrong.",
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

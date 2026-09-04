import type { Guide } from '../types';

export const beforeGuide: Guide = {
  slug: '/cliente/antes',
  audience: 'cliente',
  title: 'Before the tattoo',
  navTitle: 'Before',
  description:
    'A tattoo is an artistic procedure that also creates an open wound. What you sort out before you sit in the chair removes most of the risk.',
  intro:
    "None of this is about the design. It's about arriving with skin fit for the procedure, telling the artist what they need to know, and being able to judge whether the studio works safely.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'studio',
  sections: [
    {
      id: 'o-que-informar',
      title: 'What you need to disclose',
      summary:
        'Screening starts before the needle touches skin. Leaving something out of embarrassment or fear of losing your slot is what causes the most harm.',
      blocks: [
        {
          type: 'list',
          title: 'Tell your artist, no exceptions',
          items: [
            'Medications you take, including blood thinners, immunosuppressants, and isotretinoin.',
            'Known allergies — especially to adhesives and dressings, antiseptics, latex, lanolin, and ointments.',
            'Previous reactions to tattoos, piercings, adhesives, or aftercare products.',
            'A tendency toward keloid or hypertrophic scarring.',
            'Conditions that impair healing or raise infection risk (uncontrolled diabetes, immunosuppression, active skin disease).',
            'Pregnancy or breastfeeding — talk to your healthcare provider first.',
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'info',
          title: "Informed consent isn't paperwork for its own sake",
          text: "You should receive and sign a form explaining the risks, aftercare, and what to do if something goes outside the expected. If the studio doesn't have this document, that alone tells you something about the studio.",
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'quando-adiar',
      title: 'When to postpone the session',
      summary: 'The skin at the site needs to be intact and healthy.',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Reschedule if any of these apply to you today',
          text: 'Injured, wounded, or bruised skin in the area; active dermatitis, psoriasis, or eczema at the site; a recent sunburn; any active skin infection; or an uncontrolled medical condition that deserves evaluation first.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Rescheduling costs you a time slot. Tattooing over inflamed skin costs poor healing, infection risk, and often a touch-up.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'escolher-o-estudio',
      title: 'How to assess the studio',
      summary:
        "You don't need to understand technique to recognize a safe workstation. You need to know what to look for.",
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-escolha-estudio',
          title: 'Studio assessment checklist',
          description:
            "You can check all of this in one visit before booking. Tick off what you've already verified.",
          items: [
            {
              id: 'licenca',
              label: 'The studio has a visible, up-to-date health permit.',
              detail:
                "In Brazil, operation is overseen by the municipal or state health authority ('vigilância sanitária').",
              sources: ['anvisa-tintas'],
            },
            {
              id: 'tinta-regularizada',
              label: 'The inks are approved for use in the country.',
              detail:
                "In Brazil, tattoo inks need approval from Anvisa. The list of authorized products changes — it's worth checking the current version.",
              sources: ['anvisa-tintas', 'anvisa-registro-tintas'],
            },
            {
              id: 'material-lacrado',
              label: 'Needles and cartridges are opened in front of you, sealed.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'coletor',
              label: 'A rigid sharps container is within reach of the workstation.',
              detail: 'It should stand upright, be labeled, and not be overfilled.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'barreiras',
              label: 'Surfaces, machine, cords, and spray bottles have disposable barriers.',
              sources: ['osha-bbp'],
            },
            {
              id: 'higiene-maos',
              label: 'The artist sanitizes their hands and changes gloves in front of you.',
              sources: ['who-hand-hygiene'],
            },
            {
              id: 'instrucoes-escritas',
              label: 'You get aftercare instructions in writing, not just spoken.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Ink diluted with tap water is a reason to walk away',
          text: 'Outbreak investigations have linked nontuberculous mycobacteria infections to contaminated ink and to gray wash mixed with tap water. Dilution should use sterile water or a proper diluent.',
          sources: ['cdc-ntm-tattoo'],
        },
      ],
    },
    {
      id: 'no-dia',
      title: 'On the day, before you leave home',
      blocks: [
        {
          type: 'list',
          items: [
            'Go fed and rested. A long session on an empty stomach increases nausea and light-headedness.',
            "Wear comfortable clothing that exposes the area without pressing on it afterward — the tattooed area can't sit under tight fabric.",
            'Arrive with clean skin, with no cream, oil, or makeup on the area.',
            'Avoid sunburn on the area in the days before.',
            'Bring your questions written down. Asking during the procedure is harder.',
          ],
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Ink reactions can show up later',
          text: 'Regulatory agencies record reactions that appear right after the session as well as months or years later. Keep the name and batch number of the inks used — if something happens, that information speeds up the investigation considerably.',
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

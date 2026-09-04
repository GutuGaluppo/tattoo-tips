import type { Guide } from '../types';

export const sessionDayGuide: Guide = {
  slug: '/cliente/dia-da-sessao',
  audience: 'cliente',
  title: 'Der Tag der Sitzung',
  navTitle: 'Sitzungstag',
  description:
    'Was ab dem Moment passiert, in dem Sie Platz nehmen, bis Sie das Studio verlassen — und worauf währenddessen zu achten ist.',
  intro:
    "Sie müssen niemandes Arbeit kontrollieren. Aber den erwarteten Ablauf zu kennen hilft zu erkennen, wenn ein Schritt übersprungen wurde.",
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'session',
  sections: [
    {
      id: 'sequencia',
      title: 'Der erwartete Ablauf',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Anamnese und Einwilligung',
              text: 'Durchsicht Ihres Gesundheitsbogens, der Allergien und dessen, was Sie angegeben haben. Unterschrift der Einwilligungserklärung.',
            },
            {
              title: 'Handhygiene',
              text: 'Vor dem Aufbau des Arbeitsplatzes und vor dem Anziehen der Handschuhe. Die Hände müssen vor den Handschuhen trocken sein.',
              level: 'atencao',
            },
            {
              title: 'Aufbau des Arbeitsplatzes',
              text: 'Bereits desinfizierte Flächen, neue Barrieren an Kabeln, Maschine und Sprühflaschen, getrennt aufbewahrtes Einwegmaterial und ein Behälter für spitze/scharfe Gegenstände in Reichweite.',
            },
            {
              title: 'Hautvorbereitung und Schablone',
              text: 'Beurteilung der Stelle, bei Bedarf Rasur mit Einwegrasierer, Reinigung der Haut, Trocknen und Übertragung der Schablone auf intakte Haut.',
            },
            {
              title: 'Der Eingriff',
              text: 'Während der Sitzung wird bei jedem Kontakt mit einer ungeschützten Fläche oder beim Wechsel von einem kontaminierten zu einem sauberen Schritt der Handschuh gewechselt.',
            },
            {
              title: 'Erstverband und schriftliche Anleitung',
              text: 'Sie verlassen den Termin im Wissen, welcher Verband verwendet wurde, wie lange er bleiben soll und was bei Austreten von Wundsekret zu tun ist.',
            },
            {
              title: 'Entsorgung und Dekontamination',
              text: 'Nadel und Cartridge werden sofort im Behälter entsorgt; Flächen werden nach dem Termin dekontaminiert.',
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
      title: 'Worauf während der Sitzung zu achten ist',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-dia-da-sessao',
          title: 'Checkliste für den Tag',
          description:
            'Haken Sie ab, sobald es passiert. Dient auch als Erinnerung, wonach Sie fragen können.',
          items: [
            {
              id: 'lacre',
              label: 'Nadel oder Cartridge wurden vor Ihren Augen geöffnet, mit intakter Versiegelung.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'luvas',
              label:
                'Der/die Tätowierer:in hat die Handschuhe gewechselt, nachdem er/sie ein Handy, eine Türklinke oder eine ungeschützte Fläche berührt hat.',
              detail:
                'Handhygiene bleibt auch mit Handschuhen erforderlich; Handschuhe ersetzen kein Händewaschen.',
              sources: ['who-hand-hygiene', 'osha-bbp'],
            },
            {
              id: 'descarte',
              label: 'Die benutzte Nadel wurde sofort im starren Behälter entsorgt.',
              detail: 'Kein Verbiegen, Brechen, Wiederverschließen oder Wiederverwenden von Einwegmaterial.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'Die verwendete Tinte hat ein sichtbares Etikett, eine Chargennummer und ein Verfallsdatum.',
              sources: ['anvisa-tintas', 'fda-tattoo-safety'],
            },
            {
              id: 'diluicao',
              label: 'Falls Tinte verdünnt wurde, geschah dies nicht mit Leitungswasser.',
              sources: ['cdc-ntm-tattoo'],
            },
            {
              id: 'orientacao',
              label: 'Sie haben die Nachsorgeanweisungen schriftlich erhalten, bevor Sie gegangen sind.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
      ],
    },
    {
      id: 'durante',
      title: 'Wenn während der Sitzung etwas mit Ihnen passiert',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Sagen Sie es sofort — warten Sie nicht bis zum Ende',
          text: 'Schwindel, Übelkeit, kalter Schweiß, Kribbeln in den Händen oder verdunkeltes Sehen erfordern eine sofortige Pause. Starker Juckreiz, ungewöhnliches Brennen oder eine Rötung, die sich weit von der tätowierten Stelle ausbreitet, müssen ebenfalls sofort gemeldet werden.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Notieren (oder fotografieren) Sie Name und Charge der Tinten, die Art des angelegten Verbands und die Produkte, die auf Ihrer Haut verwendet wurden. Zeigt sich später eine Reaktion, ist diese Liste das Erste, wonach eine ärztliche Beurteilung fragt.',
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
        {
          type: 'playlist',
          spotifyId: '6MlFKYieMeFCXyWrWYcsCZ',
          title: 'Für den Stuhl',
          description:
            'Ablenkung hilft, die reglosen Stunden zu überstehen. Klären Sie Kopfhörer vorher ab: Sie müssen weiterhin Bescheid geben können, falls sich etwas falsch anfühlt.',
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

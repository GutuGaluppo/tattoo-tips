import type { Guide } from '../types';

export const screeningGuide: Guide = {
  slug: '/tatuador/triagem',
  audience: 'tatuador',
  title: 'Anamnese, Einwilligung und Handhygiene',
  navTitle: 'Anamnese & Hygiene',
  description:
    'Der erste Baustein der Biosicherheits-Reihe: was Sie fragen müssen, bevor das Motiv die Haut berührt, und wie Sie die Hände richtig desinfizieren.',
  intro:
    'Arbeiten Sie so, als wäre jedes Blut und jede Körperflüssigkeit potenziell infektiös. Das ist kein Pessimismus — darauf beruhen die Standardvorsichtsmaßnahmen.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  technical: true,
  image: 'workstation',
  sections: [
    {
      id: 'triagem',
      title: 'Anamnese vor dem Motiv',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Unterschriebene Einwilligungserklärung',
              text: 'Ein Dokument, das Risiken, Nachsorge und das Vorgehen bei unerwarteten Verläufen beschreibt.',
            },
            {
              title: 'Ausgefüllter Anamnesebogen',
              text: 'Medikamente, Allergien, frühere Reaktionen auf Tätowierungen, Pflaster und Antiseptika, Neigung zu Keloiden und Erkrankungen, die die Heilung verschlechtern oder das Infektionsrisiko erhöhen.',
              level: 'atencao',
            },
            {
              title: 'Visuelle Beurteilung der Stelle',
              text: 'Haut mit Infektion, aktiver Dermatitis, Sonnenbrand oder Läsion erhält keinen Eingriff. Termin verschieben.',
              level: 'atencao',
            },
            {
              title: 'Bestätigung der lokalen Dokumentation',
              text: 'Mindestalter, Ausweispflicht und Anforderungen variieren je nach Gemeinde und Bundesstaat. Prüfen Sie die Regel Ihrer örtlichen Gesundheitsaufsicht.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'anvisa-tintas'],
        },
      ],
    },
    {
      id: 'higiene-das-maos',
      title: 'Handhygiene',
      summary: 'Sie ist nicht optional und wird nicht durch Handschuhe ersetzt.',
      blocks: [
        {
          type: 'table',
          title: 'Wann und wie lange',
          caption:
            'Zeiten und Anlässe gemäß WHO-Empfehlung. Hände trocken, bevor Handschuhe angezogen werden; natürliche Nägel kurz halten.',
          columns: [
            { key: 'situacao', label: 'Situation', sortable: true },
            { key: 'metodo', label: 'Methode' },
            { key: 'tempo', label: 'Dauer', align: 'end', sortable: true },
          ],
          cardTitleKey: 'situacao',
          searchable: true,
          rows: [
            {
              situacao: 'Hände ohne sichtbare Verschmutzung',
              metodo: 'Alkoholische Einreibung',
              tempo: '20–30 s',
            },
            {
              situacao: 'Sichtbar verschmutzte Hände',
              metodo: 'Wasser und Seife',
              tempo: '40–60 s',
            },
            {
              situacao: 'Kontakt mit Blut oder Körperflüssigkeiten',
              metodo: 'Wasser und Seife',
              tempo: '40–60 s',
            },
            {
              situacao: 'Nach dem Ausziehen der Handschuhe',
              metodo: 'Sofort oder so bald wie möglich desinfizieren',
              tempo: 'Je nach Methode',
            },
            {
              situacao: 'Vor dem Anziehen der Handschuhe',
              metodo: 'Desinfizieren und vollständig trocknen',
              tempo: 'Je nach Methode',
            },
          ],
          sources: ['who-hand-hygiene', 'who-handrub-poster', 'osha-bbp'],
        },
        {
          type: 'video',
          youtubeId: 'B3eq5fLzAOo',
          title: 'Alkoholische Händedesinfektion nach der WHO-Technik',
          description:
            'Die vollständige Bewegungsabfolge. Lohnt sich zu wiederholen, bis sie automatisch sitzt — eine halbe Technik deckt nicht alle Handflächen ab.',
          sourceId: 'jhm-handrub-video',
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Handschuhe ersetzen keine Handhygiene',
          text: 'Die Handdesinfektion ist unabhängig vom Tragen von Handschuhen erforderlich. Und die Hände müssen trocken sein, bevor die Handschuhe angezogen werden.',
          sources: ['who-hand-hygiene'],
        },
      ],
    },
    {
      id: 'checklist-pre-sessao',
      title: 'Checkliste vor der Sitzung',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-pre-sessao',
          title: 'Bevor Sie beginnen',
          description:
            'Fortschritt im Browser gespeichert. Lässt sich ausdrucken und laminiert am Arbeitsplatz aufbewahren.',
          items: [
            {
              id: 'consentimento',
              label: 'Einwilligung und Anamnesebogen ausgefüllt und geprüft.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'pele',
              label: 'Stelle frei von Infektion, aktiver Dermatitis oder Sonnenbrand.',
              sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
            },
            {
              id: 'maos',
              label: 'Hände korrekt desinfiziert und trocken vor den Handschuhen.',
              sources: ['who-hand-hygiene', 'who-handrub-poster'],
            },
            {
              id: 'bancada',
              label: 'Arbeitsplatz dekontaminiert und Kontaktflächen mit neuer Barriere.',
              detail:
                'Kabel, Netzteil, Sprühflaschen und jede Stelle, die die behandschuhte Hand während der Sitzung berühren wird.',
              sources: ['osha-bbp'],
            },
            {
              id: 'cartucho',
              label: 'Sterile Cartridge oder Nadel, mit intakter, geprüfter Versiegelung.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'tinta',
              label: 'Tinte mit Charge, Verfallsdatum und verfügbarer technischer Dokumentation.',
              detail: 'In Brasilien bei Anvisa zugelassene Tinte. Verdünnung nur mit sterilem Wasser.',
              sources: ['anvisa-tintas', 'cdc-ntm-tattoo', 'echa-tattoo-inks'],
            },
            {
              id: 'coletor',
              label: 'Behälter für spitze/scharfe Gegenstände in Reichweite, aufrecht und nicht überfüllt.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'stencil',
              label: 'Schablone trocken und stabil, bevor Sie beginnen.',
            },
          ],
        },
      ],
    },
    {
      id: 'jurisdicao',
      title: 'Zur Herkunft dieser Regeln',
      blocks: [
        {
          type: 'alert',
          level: 'info',
          title: 'Eine US-Norm ist keine brasilianische Norm',
          text: 'Der Rahmen für einen schriftlichen Expositionskontrollplan, PSA, Entsorgung spitzer/scharfer Gegenstände, Hepatitis-B-Impfung und Beurteilung nach Exposition stammt von der OSHA aus den Vereinigten Staaten. Sie ist eine gute Praxisreferenz — aber die für Sie geltende gesetzliche Anforderung ist die der Gesundheitsaufsicht Ihrer Gemeinde und Ihres Bundesstaates.',
          sources: ['osha-bbp', 'osha-tattoo-2002', 'osha-tattoo-2016', 'anvisa-tintas'],
        },
        {
          type: 'paragraph',
          text: 'Dasselbe gilt für Tinten: Die Europäische Union schränkt Tausende Substanzen unter REACH ein, die Vereinigten Staaten behandeln Tinten unter der FDA als Kosmetikum, und Brasilien verlangt eine Zulassung bei Anvisa. Kaufen Sie entsprechend dem Markt, in dem Sie tätig sind, mit rückverfolgbarer Charge und technischer Dokumentation.',
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

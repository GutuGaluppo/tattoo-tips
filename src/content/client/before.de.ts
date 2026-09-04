import type { Guide } from '../types';

export const beforeGuide: Guide = {
  slug: '/cliente/antes',
  audience: 'cliente',
  title: 'Vor dem Tätowieren',
  navTitle: 'Vorher',
  description:
    'Eine Tätowierung ist ein künstlerischer Eingriff, der zugleich eine offene Wunde erzeugt. Was Sie vor dem Platznehmen auf der Liege klären, nimmt dem Risiko den größten Teil.',
  intro:
    'Hier geht es nicht um das Motiv. Es geht darum, mit einer Haut zu erscheinen, die für den Eingriff bereit ist, dem/der Tätowierer:in zu sagen, was er/sie wissen muss, und beurteilen zu können, ob das Studio sicher arbeitet.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'studio',
  sections: [
    {
      id: 'o-que-informar',
      title: 'Was Sie mitteilen müssen',
      summary:
        'Die Anamnese beginnt, bevor die Nadel die Haut berührt. Etwas aus Scham oder aus Angst, den Termin zu verlieren, zu verschweigen, richtet den größten Schaden an.',
      blocks: [
        {
          type: 'list',
          title: 'Sagen Sie es Ihrem/Ihrer Tätowierer:in, ohne Ausnahme',
          items: [
            'Eingenommene Medikamente, einschließlich Blutverdünner, Immunsuppressiva und Isotretinoin.',
            'Bekannte Allergien — insbesondere gegen Pflaster und Verbände, Antiseptika, Latex, Lanolin und Salben.',
            'Frühere Reaktionen auf Tätowierungen, Piercings, Pflaster oder Nachsorgeprodukte.',
            'Neigung zu Keloiden oder hypertrophen Narben.',
            'Erkrankungen, die die Wundheilung erschweren oder das Infektionsrisiko erhöhen (unkontrollierter Diabetes, Immunsuppression, aktive Hauterkrankungen).',
            'Schwangerschaft oder Stillzeit — sprechen Sie vorher mit Ihrer Ärztin oder Ihrem Arzt.',
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Die Einwilligungserklärung ist keine Formalität',
          text: 'Sie sollten ein Formular erhalten und unterschreiben, das Risiken, Nachsorge und das Vorgehen bei unerwarteten Verläufen erklärt. Hat das Studio dieses Dokument nicht, sagt das bereits etwas über das Studio aus.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'quando-adiar',
      title: 'Wann die Sitzung verschoben werden sollte',
      summary: 'Die Haut an der Stelle muss intakt und gesund sein.',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Verschieben Sie, wenn heute eines davon auf Sie zutrifft',
          text: 'Verletzte, wunde oder geschädigte Haut an der Stelle; aktive Dermatitis, Psoriasis oder Ekzem an der Stelle; frischer Sonnenbrand; jede aktive Hautinfektion; oder ein unkontrolliertes Krankheitsbild, das vorher ärztlich beurteilt werden sollte.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'paragraph',
          text: 'Ein Verschieben kostet einen Termin. Das Tätowieren über entzündeter Haut kostet schlechte Heilung, Infektionsrisiko und häufig eine Nachbesserung.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'escolher-o-estudio',
      title: 'Wie Sie das Studio beurteilen',
      summary:
        'Sie müssen die Technik nicht verstehen, um einen sicheren Arbeitsplatz zu erkennen. Sie müssen wissen, worauf zu achten ist.',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-escolha-estudio',
          title: 'Checkliste zur Studiobewertung',
          description:
            'All das lässt sich bei einem Besuch vor der Terminbuchung prüfen. Haken Sie ab, was Sie schon überprüft haben.',
          items: [
            {
              id: 'licenca',
              label: 'Das Studio hat eine sichtbare, aktuelle Gesundheitszulassung.',
              detail:
                'In Brasilien wird der Betrieb von der Gesundheitsaufsicht der Gemeinde oder des Bundesstaates kontrolliert.',
              sources: ['anvisa-tintas'],
            },
            {
              id: 'tinta-regularizada',
              label: 'Die Tinten sind für den Gebrauch im Land zugelassen.',
              detail:
                'In Brasilien benötigen Tätowierfarben eine Zulassung bei Anvisa. Die Liste zugelassener Produkte ändert sich — es lohnt sich, die aktuelle Version zu prüfen.',
              sources: ['anvisa-tintas', 'anvisa-registro-tintas'],
            },
            {
              id: 'material-lacrado',
              label: 'Nadeln und Cartridges werden versiegelt vor Ihren Augen geöffnet.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'coletor',
              label: 'Ein starrer Behälter für spitze/scharfe Gegenstände ist in Reichweite des Arbeitsplatzes.',
              detail: 'Er sollte aufrecht stehen, beschriftet und nicht überfüllt sein.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'barreiras',
              label: 'Oberflächen, Maschine, Kabel und Sprühflaschen haben Einwegbarrieren.',
              sources: ['osha-bbp'],
            },
            {
              id: 'higiene-maos',
              label: 'Der/die Tätowierer:in desinfiziert die Hände und wechselt die Handschuhe vor Ihnen.',
              sources: ['who-hand-hygiene'],
            },
            {
              id: 'instrucoes-escritas',
              label: 'Sie erhalten die Nachsorgeanweisungen schriftlich, nicht nur mündlich.',
              sources: ['eadv-aftercare'],
            },
          ],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Mit Leitungswasser verdünnte Tinte ist ein Abbruchgrund',
          text: 'Ausbruchsuntersuchungen haben Infektionen durch nichttuberkulöse Mykobakterien mit kontaminierter Tinte und mit "Gray Wash" in Verbindung gebracht, das mit Leitungswasser angesetzt wurde. Zum Verdünnen sollte steriles Wasser oder ein passendes Verdünnungsmittel verwendet werden.',
          sources: ['cdc-ntm-tattoo'],
        },
      ],
    },
    {
      id: 'no-dia',
      title: 'Am Tag selbst, bevor Sie das Haus verlassen',
      blocks: [
        {
          type: 'list',
          items: [
            'Kommen Sie satt und ausgeruht. Eine lange Sitzung auf nüchternen Magen verstärkt Unwohlsein und Schwindel.',
            'Tragen Sie bequeme Kleidung, die die Stelle freilegt, ohne später darauf zu drücken — die tätowierte Fläche darf nicht unter enger Kleidung liegen.',
            'Kommen Sie mit sauberer Haut, ohne Creme, Öl oder Make-up an der Stelle.',
            'Vermeiden Sie Sonnenbrand an der Stelle in den Tagen davor.',
            'Bringen Sie Ihre Fragen schriftlich mit. Während des Eingriffs zu fragen ist schwieriger.',
          ],
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Reaktionen auf die Tinte können auch später auftreten',
          text: 'Zulassungsbehörden dokumentieren Reaktionen, die kurz nach der Sitzung auftreten, aber auch Monate oder Jahre später. Notieren Sie sich Name und Chargennummer der verwendeten Tinten — falls etwas passiert, beschleunigt diese Information die Untersuchung erheblich.',
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

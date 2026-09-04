import type { Guide } from '../types';

export const aftercareGuide: Guide = {
  slug: '/cliente/cuidados-depois',
  audience: 'cliente',
  title: 'Nachsorge nach der Tätowierung',
  navTitle: 'Nachsorge',
  description:
    'Ziel der Nachsorge ist es, die Hautbarriere wiederherzustellen, Infektionen zu vermeiden und das Ergebnis zu bewahren. Die Prinzipien sind stabil; die Produkte variieren.',
  intro:
    'Es gibt kein einziges gültiges Protokoll für jede Tätowierung. Es gibt Prinzipien, die sich nicht ändern: saubere Hände, sanftes Waschen, eine dünne Schicht, kein Abkratzen von Krusten und Aufmerksamkeit für alles außerhalb des Erwarteten.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'aftercare',
  sections: [
    {
      id: 'filme-ou-tradicional',
      title: 'Folie oder klassische Pflege',
      summary:
        'Es gibt zwei vertretbare Wege für den ersten Verband. Wer entscheidet, welchem Sie folgen, ist der/die Tätowierer:in, der/die die Arbeit gemacht hat — folgen Sie der Anweisung, die Sie erhalten haben.',
      blocks: [
        {
          type: 'table',
          title: 'Vergleich der beiden Wege',
          caption:
            'Beide sind vertretbar. Der Fehler liegt nicht darin, sich für einen der beiden zu entscheiden — sondern beide halbherzig zu mischen.',
          columns: [
            { key: 'aspecto', label: 'Aspekt', sortable: true },
            { key: 'filme', label: 'Folie / Second Skin' },
            { key: 'tradicional', label: 'Klassische Pflege' },
          ],
          cardTitleKey: 'aspecto',
          rows: [
            {
              aspecto: 'Dauer des Verbands',
              filme:
                'Kann 24 Stunden bis mehrere Tage bleiben, solange sie bequem sitzt und nicht ausläuft.',
              tradicional:
                'Erstverband für wenige Stunden, wie angewiesen; danach bleibt die Haut zwischen den Waschgängen frei.',
            },
            {
              aspecto: 'Wann wechseln',
              filme: 'Bei austretendem Wundsekret muss die Folie gewechselt werden.',
              tradicional: 'Nicht zutreffend — die Routine wird zu waschen und eincremen.',
            },
            {
              aspecto: 'Tägliche Routine',
              filme: 'Weniger Berührung der Stelle, solange die Folie intakt bleibt.',
              tradicional:
                'Sanftes Waschen und eine dünne Schicht hypoallergenes Pflegemittel oder Salbe, 2 bis 3 Mal täglich, für 2 bis 3 Tage; danach einfaches Pflegemittel.',
            },
            {
              aspecto: 'Häufigstes Risiko',
              filme: 'Eine auslaufende oder schlecht haftende Folie zu belassen.',
              tradicional: 'Es mit der Produktmenge zu übertreiben und die Stelle zu ersticken.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Antibiotikum und Antiseptikum gehören nicht zur Routine',
          text: 'Desinfektionsmittel und antibiotische Cremes sind während der Heilung nicht routinemäßig nötig. Sie sollten nur bei einer Infektion und nach ärztlicher Beurteilung verwendet werden.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'como-lavar',
      title: 'Wie man wäscht',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Waschen Sie zuerst die Hände',
              text: 'Immer, vor jedem Kontakt mit der Tätowierung. Sichtbar schmutzige Hände brauchen Wasser und Seife für 40 bis 60 Sekunden.',
              level: 'atencao',
            },
            {
              title: 'Lauwarmes fließendes Wasser und wenig milde Seife',
              text: 'Kein Reiben, kein Schwamm, kein Peeling. Die saubere Hand reicht.',
            },
            {
              title: 'Trocken tupfen, ohne Reibung',
              text: 'Sauberes Papiertuch, tupfend, oder an der Luft trocknen lassen. Ein normales Stoffhandtuch gehört hier nicht hin.',
            },
            {
              title: 'Dünne Schicht Pflegemittel',
              text: 'Wirklich dünn: Die Haut sollte leicht feucht wirken, nicht glänzend oder klebrig. Zu viel Produkt behindert die Heilung.',
            },
          ],
          sources: ['eadv-aftercare', 'who-handrub-poster', 'aad-tattoo-care'],
        },
        {
          type: 'video',
          youtubeId: '3PmVJQUCm4E',
          title: 'Richtiges Händewaschen mit Wasser und Seife',
          description:
            'Die offizielle WHO-Technik, in 40 bis 60 Sekunden. Das ist der Schritt, der Ihre Tätowierung in den ersten Wochen am meisten schützt.',
          sourceId: 'who-handwash-video',
        },
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Kein Wasserstoffperoxid, Alkohol oder Jod auf der Stelle',
          text: 'Auf heilendem Gewebe trocknen und reizen diese Produkte und schaden mehr, als sie helfen. Wasser, milde Seife und ein einfaches Pflegemittel genügen.',
          sources: ['aad-wound-care', 'eadv-aftercare'],
        },
      ],
    },
    {
      id: 'rotina',
      title: 'Ihre tägliche Routine',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-aftercare',
          title: 'Nachsorge-Checkliste',
          description:
            'Im Browser gespeichert — Sie können die Seite schließen und später zurückkommen. Lässt sich auch ausdrucken und im Bad aufbewahren.',
          items: [
            {
              id: 'maos',
              label: 'Ich habe mir die Hände gewaschen, bevor ich die Tätowierung berührt habe.',
              sources: ['eadv-aftercare', 'who-hand-hygiene'],
            },
            {
              id: 'filme',
              label: 'Falls ich Folie verwende, ist sie noch intakt und läuft nicht aus.',
              detail: 'Deutlich austretendes Wundsekret erfordert einen Wechsel.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'lavagem',
              label: 'Ich habe sanft gewaschen und ohne Reiben abgetrocknet.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'camada-fina',
              label: 'Ich habe eine dünne Schicht Pflegemittel aufgetragen, keine dicke.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
            {
              id: 'nao-cocei',
              label: 'Ich habe nicht gekratzt, keine Krusten abgezogen und die Stelle nicht gerieben.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sem-imersao',
              label: 'Ich habe Schwimmbad, Badewanne, Sauna, Meer und jedes Einweichen vermieden.',
              detail: 'Duschen ist erlaubt; Einweichen nicht — bis zur vollständigen Heilung.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'roupa',
              label: 'Ich habe saubere, lockere Kleidung über der Stelle getragen.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sol',
              label: 'Ich habe die Stelle von der Sonne ferngehalten.',
              detail:
                'Sonnenschutz mit hohem LSF erst nach vollständiger Heilung — nicht auf noch heilender Haut.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
          ],
        },
      ],
    },
    {
      id: 'sol-e-longo-prazo',
      title: 'Sonne und die langfristige Pflege',
      blocks: [
        {
          type: 'paragraph',
          text: 'Während der Heilung bleibt die Stelle von der Sonne fern — bedeckt durch Kleidung, nicht durch Sonnenschutz. Nach vollständiger Heilung wird Sonnenschutz mit hohem LSF zur wichtigsten Maßnahme, um Farbe und Kontrast über die Jahre zu bewahren.',
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Tätowierte Haut bleibt Haut',
          text: 'Eine Veränderung an einem Muttermal, ein Knoten, eine anhaltend juckende Stelle oder jede Veränderung innerhalb der Tätowierung verdient eine dermatologische Beurteilung — die Tinte verhindert die Beobachtung der Haut nicht, kann sie aber erschweren.',
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

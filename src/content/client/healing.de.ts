import type { Guide } from '../types';

export const healingGuide: Guide = {
  slug: '/cliente/cicatrizacao',
  audience: 'cliente',
  title: 'Zeitverlauf der Heilung',
  navTitle: 'Heilung',
  description:
    'Was in jeder Phase zu erwarten ist — und welches einzige Muster wirklich zu beobachten ist.',
  intro:
    'Die Regel, die alles zusammenfasst: erwartet wird eine fortschreitende Besserung. Eine fortschreitende Verschlechterung, in jeder Phase, ist ein Grund zur Beurteilung.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'healed',
  sections: [
    {
      id: 'linha-do-tempo',
      title: 'Phase für Phase',
      blocks: [
        {
          type: 'timeline',
          entries: [
            {
              period: 'Tag 0',
              title: 'Direkt nach der Sitzung',
              text: 'Lokale Wärme, Empfindlichkeit und etwas Blutung oder Plasma sind zu erwarten. Die Stelle wirkt gereizt, weil sie gerade verletzt wurde.',
              watchFor: 'Blutung, die den Verband durchtränkt und sich mit Druck nicht stillen lässt.',
            },
            {
              period: 'Tage 1 bis 3',
              title: 'Leichte Rötung und Schwellung',
              text: 'Leichte Rötung um den Umriss, diskretes Ödem und klares oder rosafarbenes Wundsekret. Meist die Phase mit dem größten Unbehagen.',
              watchFor: 'Rötung, die sich von der Tätowierung weg ausbreitet, statt zurückzugehen.',
            },
            {
              period: 'Tage 3 bis 7',
              title: 'Weniger Wundsekret, beginnende Krustenbildung',
              text: 'Der Flüssigkeitsaustritt nimmt ab, und es beginnt sich eine dünne Kruste mit Schuppung zu bilden.',
              watchFor: 'Gelbliches oder grünliches Sekret, übler Geruch, zunehmender Schmerz.',
            },
            {
              period: 'Wochen 1 bis 3',
              title: 'Schuppung und Juckreiz',
              text: 'Die Haut schuppt, juckt etwas, und die Tätowierung wirkt matter und "verschwommen". Das ist normal und geht vorüber.',
              watchFor: 'Starker Juckreiz mit Blasen oder Ausschlag — kann eine Reaktion sein, keine Heilung.',
            },
            {
              period: 'Wochen 3 bis 6',
              title: 'Stabile Oberfläche',
              text: 'Die Oberfläche wirkt verheilt, und das Motiv wird wieder scharf. Die Hautbarriere reift darunter noch weiter aus.',
            },
            {
              period: 'Folgende Monate',
              title: 'Ausreifung und Sonnenschutz',
              text: 'Ist die Heilung abgeschlossen, wird Sonnenschutz zur wichtigsten Pflege, um Farbe und Kontrast zu bewahren.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'figure',
          illustration: 'healing-stages',
          caption:
            'Erwartetes Erscheinungsbild über die Phasen hinweg: anfängliche Rötung, abnehmendes Wundsekret, Schuppung und stabile Oberfläche.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'o-que-nao-fazer',
      title: 'Was die Heilung verzögert',
      blocks: [
        {
          type: 'list',
          items: [
            'Krusten abkratzen oder schuppende Haut abziehen — so verliert man Pigment und bekommt eine Narbe.',
            'Zu viel Produkt auftragen, in der Annahme, das würde mehr pflegen.',
            'Die Stelle einweichen lassen: Schwimmbad, Badewanne, Sauna, Meer.',
            'Enge Kleidung tragen, die an der Stelle reibt.',
            'Sie der Sonne aussetzen, während sie noch heilt.',
            'Antiseptikum, Alkohol oder Peroxid "zur Vorsicht" verwenden.',
          ],
          sources: ['eadv-aftercare', 'aad-wound-care'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Die eine Regel: Die Richtung zählt mehr als das Symptom',
          text: 'Rötung an Tag 2 ist zu erwarten. Dieselbe Rötung, die an Tag 5 stärker ist als an Tag 3, ist es nicht. Vergleichen Sie mit gestern, nicht mit dem Foto einer anderen Person.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-care', 'aad-wound-care', 'cleveland-aftercare'],
};

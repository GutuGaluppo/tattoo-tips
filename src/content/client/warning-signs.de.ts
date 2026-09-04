import type { Guide } from '../types';

export const warningSignsGuide: Guide = {
  slug: '/sinais-de-alerta',
  audience: 'ambos',
  title: 'Normal oder Warnzeichen',
  navTitle: 'Warnzeichen',
  description:
    'Der direkte Vergleich zwischen dem, was bei der Heilung zu erwarten ist, und dem, was eine ärztliche Beurteilung erfordert.',
  intro:
    'Fast alles, was in den ersten Tagen beunruhigt, ist zu erwarten. Was den Unterschied macht, ist nicht das einzelne Symptom, sondern ob es sich bessert oder verschlechtert.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'stencil',
  sections: [
    {
      id: 'comparacao',
      title: 'Erwartet vs. Warnzeichen',
      blocks: [
        {
          type: 'comparison',
          expectedLabel: 'Erwartet',
          alarmingLabel: 'Warnzeichen',
          rows: [
            {
              context: 'Rötung',
              expected: 'Leicht, auf die tätowierte Fläche begrenzt und Tag für Tag abnehmend.',
              alarming: 'Breitet sich über die Tätowierung hinaus aus oder nimmt nach dem dritten Tag zu.',
            },
            {
              context: 'Sekret',
              expected: 'Klare oder rosafarbene Flüssigkeit in den ersten Tagen, in abnehmender Menge.',
              alarming: 'Dickflüssiges, gelbliches oder grünliches Sekret, mit üblem Geruch.',
            },
            {
              context: 'Schmerz',
              expected: 'Empfindlichkeit und Brennen, die sich fortschreitend bessern.',
              alarming: 'Zunehmender, pochender Schmerz oder Schmerz, der zur Größe der Tätowierung unverhältnismäßig ist.',
            },
            {
              context: 'Schwellung',
              expected: 'Diskrete Schwellung in den ersten Tagen.',
              alarming: 'Schwellung, die sich verschlechtert, nachdem sie sich schon gebessert hatte.',
            },
            {
              context: 'Temperatur',
              expected: 'Lokale Wärme in den ersten Stunden.',
              alarming: 'Hohes oder anhaltendes Fieber, Schüttelfrost, grippeähnliches Unwohlsein.',
            },
            {
              context: 'Hautbild',
              expected: 'Dünne Kruste und Schuppung zwischen der ersten und dritten Woche.',
              alarming: 'Papeln, Pusteln, Knötchen, Blasen oder Ausschlag mit starkem Juckreiz.',
            },
            {
              context: 'Ausbreitung',
              expected: 'Die Veränderung bleibt auf die tätowierte Fläche begrenzt.',
              alarming: 'Rote Streifen, die von der Tätowierung ausgehend die Haut hinaufziehen.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'quando-procurar',
      title: 'Wann Sie Hilfe suchen sollten',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Suchen Sie jetzt sofort ärztliche Hilfe',
          text: 'Hohes oder anhaltendes Fieber, rote Streifen, die von der Tätowierung aufwärtsziehen, systemisches Unwohlsein, starker und zunehmender Schmerz oder eine Stelle, die sich rasch verschlechtert. Warten Sie nicht ab, "wie es morgen aussieht".',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Suchen Sie bald ärztliche Beurteilung',
          text: 'Eiter, übler Geruch, fortschreitende Rötung, Ausschlag mit Blasen oder jedes Symptom, das schon länger andauert, als es sollte. Setzen Sie die Nachsorgeprodukte ab und bringen Sie die Liste dessen mit, was verwendet wurde.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'list',
          title: 'Bringen Sie mit',
          items: [
            'Name und Chargennummer der verwendeten Tinten.',
            'Die Art des angelegten Verbands (Folie, Marke und Tragedauer).',
            'Alle Produkte, die die Stelle berührt haben: Antiseptikum, Seife, Salbe, Pflaster.',
            'Fotos des Verlaufs, falls vorhanden.',
          ],
          sources: ['eadv-aftercare', 'fda-tattoo-safety'],
        },
      ],
    },
    {
      id: 'reacao-alergica',
      title: 'Wenn es keine Infektion, sondern eine Reaktion ist',
      blocks: [
        {
          type: 'paragraph',
          text: 'Eine allergische Reaktion kann von der Tinte, dem Pflasterklebstoff, dem Antiseptikum, Konservierungsstoffen oder einem Nachsorgeprodukt kommen. Sie zeigt sich meist als juckende Rötung, manchmal mit kleinen Blasen und klarem Sekret.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Produkt absetzen und beurteilen lassen',
          text: 'Passiert das in den ersten Tagen, setzen Sie das Nachsorgeprodukt ab und suchen Sie ärztliche Beurteilung, wobei Sie dem/der Tätowierer:in alles mitteilen, was verwendet wurde — so lässt sich der Auslöser identifizieren.',
          sources: ['eadv-aftercare'],
        },
        {
          type: 'paragraph',
          text: 'Reaktionen können auch lange nach der Heilung auftreten, sogar Monate oder Jahre später. Das bedeutet nicht, dass die Tätowierung schlecht gemacht wurde — es bedeutet, dass die Haut auf einen Bestandteil reagiert hat.',
          sources: ['fda-tattoo-safety', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-reactions', 'cleveland-aftercare', 'fda-tattoo-safety'],
};

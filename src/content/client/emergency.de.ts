import type { Guide } from '../types';

export const emergencyGuide: Guide = {
  slug: '/emergencias',
  audience: 'ambos',
  title: 'Notfälle',
  navTitle: 'Notfall',
  description: 'Situationen, die sofortiges Handeln erfordern. Kurzer Text, ein Schritt nach dem anderen.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  sections: [
    {
      id: 'infeccao-grave',
      title: 'Verdacht auf schwere Infektion',
      level: 'urgencia',
      blocks: [
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Hohes Fieber, rote Streifen oder systemisches Unwohlsein',
          text: 'Gehen Sie jetzt in eine Notaufnahme. Das ist kein Fall für die Selbstbehandlung zu Hause oder zum Abwarten der Geschäftszeiten.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
        {
          type: 'steps',
          steps: [
            {
              title: 'Suchen Sie sofortige ärztliche Hilfe',
              text: 'Bringen Sie die Liste der Tinten, Verbände und auf der Stelle verwendeten Produkte mit.',
              level: 'urgencia',
            },
            {
              title: 'Tragen Sie nichts Neues auf die Stelle auf',
              text: 'Salbe, Antiseptikum oder eigenmächtig eingenommene Medikamente erschweren die Diagnose.',
            },
            {
              title: 'Informieren Sie den/die Tätowierer:in',
              text: 'Er/sie muss die Charge des Materials dokumentieren und prüfen, ob andere Kund:innen das gleiche Problem hatten.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'infeccao-local',
      title: 'Verdacht auf lokale Infektion',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Gelber oder grünlicher Eiter, Geruch, Schmerz und fortschreitende Rötung',
          text: 'Beenden Sie die Selbstbehandlung zu Hause und suchen Sie rasch eine ärztliche Beurteilung. Notieren Sie die verwendeten Materialien und Chargen.',
          sources: ['eadv-aftercare', 'cleveland-aftercare'],
        },
      ],
    },
    {
      id: 'reacao-cutanea',
      title: 'Deutliche Hautreaktion auf die Nachsorge',
      level: 'atencao',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Starker Ausschlag, Blasen oder anhaltendes klares Sekret',
          text: 'Setzen Sie das Produkt ab und suchen Sie eine ärztliche Beurteilung. Überprüfen Sie die verwendeten Pflaster, Salben und Antiseptika — meist ist eines davon der Auslöser.',
          sources: ['eadv-aftercare', 'aad-tattoo-reactions'],
        },
      ],
    },
    {
      id: 'sangramento',
      title: 'Ungewöhnliche Blutung',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Fester, durchgehender Druck',
              text: 'Mit sauberem Material, direkt auf die Stelle, ohne zwischendurch zum Nachschauen abzuheben.',
              level: 'urgencia',
            },
            {
              title: 'Sitzung unterbrechen',
              text: 'Findet gerade eine Behandlung statt, wird der Eingriff gestoppt.',
            },
            {
              title: 'Zur ärztlichen Beurteilung schicken',
              text: 'Eine Blutung, die nicht aufhört oder den Verband wiederholt durchtränkt, muss beurteilt werden.',
              level: 'urgencia',
            },
          ],
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'acidente-perfurocortante',
      title: 'Nadelstichverletzung (Tätowierer:in)',
      level: 'urgencia',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Waschen Sie die Stelle sofort',
              text: 'Schnitt oder Stich: Wasser und Seife. Schleimhaut: mit Wasser spülen. Augen: reichlich spülen.',
              level: 'urgencia',
            },
            {
              title: 'Informieren Sie die verantwortliche Person',
              text: 'Der Vorfall muss dokumentiert werden, mit Angabe des Materials und der Situation.',
            },
            {
              title: 'Suchen Sie sofort ärztliche Beurteilung',
              text: 'Die Beurteilung nach Exposition ist dringend, da eine Prophylaxe, wenn angezeigt, zeitkritisch ist.',
              level: 'urgencia',
            },
          ],
          sources: ['osha-bbp', 'osha-tattoo-2002'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Zur Herkunft dieser Empfehlung',
          text: 'Der hier beschriebene Rahmen für den Expositionsplan, die Hepatitis-B-Impfung und die Beurteilung nach Exposition stammt aus dem US-amerikanischen OSHA-Standard. Befolgen Sie in Brasilien zusätzlich die Arbeitsschutzvorschriften und die örtliche Gesundheitsaufsicht.',
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

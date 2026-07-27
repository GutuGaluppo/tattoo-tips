import type { Guide } from '../types';

export const healingGuide: Guide = {
  slug: '/cliente/cicatrizacao',
  audience: 'cliente',
  title: 'Linha do tempo da cicatrização',
  navTitle: 'Cicatrização',
  description:
    'O que é esperado em cada fase — e qual é o único padrão que realmente importa acompanhar.',
  intro:
    'A regra que resume tudo: o esperado é melhora progressiva. Piora progressiva, em qualquer fase, é motivo para avaliação.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'healed',
  sections: [
    {
      id: 'linha-do-tempo',
      title: 'Fase a fase',
      blocks: [
        {
          type: 'timeline',
          entries: [
            {
              period: 'Dia 0',
              title: 'Logo depois da sessão',
              text: 'Calor local, sensibilidade e um pouco de sangramento ou plasma são esperados. A área parece irritada porque acabou de ser ferida.',
              watchFor: 'Sangramento que encharca o curativo e não cede com compressão.',
            },
            {
              period: 'Dias 1 a 3',
              title: 'Vermelhidão e inchaço discretos',
              text: 'Vermelhidão leve ao redor do traço, edema discreto e exsudato claro ou rosado. Costuma ser o período de maior desconforto.',
              watchFor: 'Vermelhidão que se espalha para longe da tatuagem em vez de diminuir.',
            },
            {
              period: 'Dias 3 a 7',
              title: 'Menos exsudato, começo da crosta',
              text: 'A saída de líquido diminui e começa a formação de crosta fina e descamação.',
              watchFor: 'Secreção amarela ou esverdeada, mau cheiro, dor aumentando.',
            },
            {
              period: 'Semanas 1 a 3',
              title: 'Descamação e coceira',
              text: 'A pele descama, coça um pouco e a tatuagem fica com aparência mais opaca e “embaçada”. Isso é normal e passa.',
              watchFor: 'Coceira intensa com bolhas ou rash — pode ser reação, não cicatrização.',
            },
            {
              period: 'Semanas 3 a 6',
              title: 'Superfície estável',
              text: 'A superfície parece cicatrizada e o desenho volta a ficar nítido. A barreira da pele ainda está amadurecendo por baixo.',
            },
            {
              period: 'Meses seguintes',
              title: 'Maturação e proteção solar',
              text: 'Com a cicatrização completa, a proteção solar passa a ser o cuidado principal para preservar cor e contraste.',
            },
          ],
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'figure',
          illustration: 'healing-stages',
          caption:
            'Aspecto esperado ao longo das fases: vermelhidão inicial, exsudato diminuindo, descamação e superfície estável.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'o-que-nao-fazer',
      title: 'O que atrasa a cicatrização',
      blocks: [
        {
          type: 'list',
          items: [
            'Arrancar casquinha ou puxar a pele que está descamando — é assim que se perde pigmento e se ganha cicatriz.',
            'Passar produto em excesso, achando que hidrata mais.',
            'Deixar a área em imersão: piscina, banheira, sauna, mar.',
            'Usar roupa apertada que atrita a região.',
            'Expor ao sol enquanto ainda está cicatrizando.',
            'Usar antisséptico, álcool ou peróxido “por precaução”.',
          ],
          sources: ['eadv-aftercare', 'aad-wound-care'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'A regra única: a direção importa mais que o sintoma',
          text: 'Vermelhidão no dia 2 é esperada. A mesma vermelhidão maior no dia 5 do que estava no dia 3 não é. Compare com ontem, não com a foto de outra pessoa.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
  ],
  sources: ['eadv-aftercare', 'aad-tattoo-care', 'aad-wound-care', 'cleveland-aftercare'],
};

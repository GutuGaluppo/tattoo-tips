import type { Guide } from '../types';

export const aftercareGuide: Guide = {
  slug: '/cliente/cuidados-depois',
  audience: 'cliente',
  title: 'Cuidados depois da tatuagem',
  navTitle: 'Cuidados depois',
  description:
    'O objetivo do pós-cuidado é restaurar a barreira da pele, evitar infecção e preservar o resultado. Os princípios são estáveis; os produtos variam.',
  intro:
    'Não existe um único protocolo válido para toda tatuagem. Existem princípios que não mudam: mãos limpas, lavagem suave, camada fina, nada de arrancar casquinha e vigilância sobre o que sai do esperado.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'gloves',
  sections: [
    {
      id: 'filme-ou-tradicional',
      title: 'Filme ou cuidado tradicional',
      summary:
        'Existem dois caminhos razoáveis para o curativo inicial. Quem decide qual você vai seguir é o tatuador que fez o trabalho — siga a orientação que veio com ele.',
      blocks: [
        {
          type: 'table',
          title: 'Comparação dos dois caminhos',
          caption:
            'Ambos são aceitáveis. O erro não é escolher um dos dois — é misturar os dois pela metade.',
          columns: [
            { key: 'aspecto', label: 'Aspecto', sortable: true },
            { key: 'filme', label: 'Filme / second skin' },
            { key: 'tradicional', label: 'Cuidado tradicional' },
          ],
          cardTitleKey: 'aspecto',
          rows: [
            {
              aspecto: 'Duração do curativo',
              filme:
                'Pode permanecer de 24 horas a vários dias, se estiver confortável e sem vazamento.',
              tradicional:
                'Curativo inicial por poucas horas, conforme orientação; depois a pele fica exposta entre as lavagens.',
            },
            {
              aspecto: 'Quando trocar',
              filme: 'Se houver vazamento de exsudato, o filme precisa ser trocado.',
              tradicional: 'Não se aplica — a rotina passa a ser lavar e hidratar.',
            },
            {
              aspecto: 'Rotina diária',
              filme: 'Menos manipulação da área enquanto o filme estiver íntegro.',
              tradicional:
                'Lavagem suave e camada fina de emoliente ou unguento hipoalergênico, 2 a 3 vezes ao dia, por 2 a 3 dias; depois emoliente simples.',
            },
            {
              aspecto: 'Risco mais comum',
              filme: 'Manter um filme vazando ou mal aderido.',
              tradicional: 'Exagerar na quantidade de produto e sufocar a área.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Antibiótico e antisséptico não são rotina',
          text: 'Desinfetantes e cremes antibióticos não são necessários de rotina durante a cicatrização. Só devem ser usados se houver infecção e avaliação médica.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'como-lavar',
      title: 'Como lavar',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Lave as mãos primeiro',
              text: 'Sempre, antes de qualquer contato com a tatuagem. Mãos visivelmente sujas pedem água e sabão por 40 a 60 segundos.',
              level: 'atencao',
            },
            {
              title: 'Água corrente morna e pouco sabonete suave',
              text: 'Sem esfregar, sem bucha, sem esponja. A mão limpa é o suficiente.',
            },
            {
              title: 'Seque sem fricção',
              text: 'Papel-toalha limpo, dando toques, ou deixe secar ao ar. Toalha de pano de uso comum não entra aqui.',
            },
            {
              title: 'Camada fina de emoliente',
              text: 'Fina de verdade: a pele deve ficar levemente úmida, não brilhante nem pegajosa. Excesso de produto atrapalha a cicatrização.',
            },
          ],
          sources: ['eadv-aftercare', 'who-handrub-poster', 'aad-tattoo-care'],
        },
        {
          type: 'video',
          youtubeId: '3PmVJQUCm4E',
          title: 'Como lavar as mãos com água e sabão',
          description:
            'Técnica oficial da OMS, em 40 a 60 segundos. É o passo que mais protege a sua tatuagem nas primeiras semanas.',
          sourceId: 'who-handwash-video',
        },
        {
          type: 'alert',
          level: 'urgencia',
          title: 'Não use peróxido de hidrogênio, álcool ou iodo na área',
          text: 'Sobre tecido em cicatrização, esses produtos ressecam e irritam, e atrapalham em vez de ajudar. Água, sabonete suave e um emoliente simples dão conta.',
          sources: ['aad-wound-care', 'eadv-aftercare'],
        },
      ],
    },
    {
      id: 'rotina',
      title: 'Sua rotina, dia a dia',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-aftercare',
          title: 'Checklist de pós-cuidado',
          description:
            'Salvo no seu navegador — você pode fechar a página e voltar depois. Também dá para imprimir e deixar no banheiro.',
          items: [
            {
              id: 'maos',
              label: 'Lavei as mãos antes de tocar na tatuagem.',
              sources: ['eadv-aftercare', 'who-hand-hygiene'],
            },
            {
              id: 'filme',
              label: 'Se estou usando filme, ele segue íntegro e sem vazamento.',
              detail: 'Vazamento importante de exsudato pede troca.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'lavagem',
              label: 'Lavei suavemente e sequei sem esfregar.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'camada-fina',
              label: 'Apliquei uma camada fina de emoliente, não uma camada grossa.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
            {
              id: 'nao-cocei',
              label: 'Não cocei, não arranquei casquinha e não esfreguei a área.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sem-imersao',
              label: 'Evitei piscina, banheira, sauna, mar e qualquer imersão.',
              detail: 'Banho de chuveiro pode; ficar de molho, não — até a cicatrização completa.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'roupa',
              label: 'Usei roupa limpa e folgada sobre a área.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sol',
              label: 'Mantive a área fora do sol.',
              detail:
                'Filtro solar de FPS alto só depois da cicatrização completa — não sobre pele em cicatrização.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
          ],
        },
      ],
    },
    {
      id: 'sol-e-longo-prazo',
      title: 'Sol e longo prazo',
      blocks: [
        {
          type: 'paragraph',
          text: 'Enquanto cicatriza, a área fica fora do sol — coberta por roupa, não por protetor. Depois de completamente cicatrizada, proteção solar de FPS alto passa a ser a principal medida para preservar cor e contraste ao longo dos anos.',
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'Pele tatuada continua sendo pele',
          text: 'Mudança em pinta, nódulo, área que coça de forma persistente ou qualquer alteração dentro da tatuagem merece avaliação dermatológica — a tinta não impede, e pode dificultar, a observação da pele.',
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

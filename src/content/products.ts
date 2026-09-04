export type ProductCategory =
  | 'stencil'
  | 'aftercare'
  | 'film'
  | 'hygiene'
  | 'ink'
  | 'needle'
  | 'machine'
  | 'accessories';

export type ProductTier = 'pro' | 'budget';

export const categoryLabels: Record<ProductCategory, string> = {
  stencil: 'Stencil',
  aftercare: 'Pós-cuidado',
  film: 'Filme / segunda pele',
  hygiene: 'Higiene',
  ink: 'Tinta',
  needle: 'Agulha e cartucho',
  machine: 'Máquina',
  accessories: 'Acessórios',
};

export interface ForumSource {
  title: string;
  url: string;
  org: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  brand: string;
  /** Texto, não número — preço varia por loja, região e câmbio. */
  priceApprox: string;
  /** Data da pesquisa, mesmo padrão de `lastReviewed` dos guias (AAAA-MM-DD). */
  priceCheckedAt: string;
  /** Site do fabricante ou da própria marca — nunca link de afiliado. */
  officialUrl: string;
  tier: ProductTier;
  /** Só para tinta: existe versão explicitamente compatível com o REACH da UE. */
  euReach?: boolean;
  /** Por que está na lista — 1–2 frases, sem hipérbole. */
  editorialNote: string;
  /** Citação real, com URL — nunca inventada. Ausente quando a pesquisa não achou menção confiável. */
  forumSources?: readonly ForumSource[];
}

/**
 * Vitrine de equipamento, à parte do manual clínico — ver /sobre. Preço e
 * link são referência de mercado, pesquisados em 2026-09-05; não são
 * indicação paga nem afiliação. `forumSources` só aparece quando a pesquisa
 * achou de fato uma thread real discutindo o produto — sem isso, o produto
 * fica só com a nota editorial.
 */
export const products: Product[] = [
  // ------------------------------------------------------------------ pro
  {
    id: 'stencil-stuff',
    category: 'stencil',
    name: 'Stencil Stuff',
    brand: 'Stencil Stuff',
    priceApprox: '~€12–27, conforme volume',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://tattoostuff.com/products/stencil-stuff-4-oz',
    tier: 'pro',
    editorialNote:
      'Referência de mercado para solução de stencil, usada há anos por tatuadores profissionais. Nos fóruns, a opinião não é unânime: parte considera o resultado mais fraco/aguado que soluções concorrentes, especialmente em pele oleosa.',
    forumSources: [
      {
        title: 'Stencil Solution',
        url: 'https://tattooing101.com/forums/threads/stencil-solution.5614/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'electrum-stencil-primer',
    category: 'stencil',
    name: 'Electrum Premium Stencil Primer',
    brand: 'Electrum',
    priceApprox: '~€20–25 / 8 oz',
    priceCheckedAt: '2026-09-05',
    officialUrl:
      'https://electrumsupply.com/products/electrum-premium-tattoo-stencil-primer-green-8-oz',
    tier: 'pro',
    editorialNote:
      'Primer verde de aplicação fina — uma camada pequena costuma render muitas sessões, segundo o próprio fabricante.',
  },
  {
    id: 'hustle-butter-deluxe',
    category: 'aftercare',
    name: 'Hustle Butter Deluxe',
    brand: 'Hustle Butter',
    priceApprox: '~€20–30 / 5 fl oz',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.hustlebutter.com/products/hustle-butter-deluxe-tattoo-balm-5-fl-oz',
    tier: 'pro',
    editorialNote:
      'Balm vegano usado antes, durante e depois da sessão. Nos fóruns a opinião é dividida: parte gosta do resultado e do cheiro, parte considera caro para o ganho percebido frente a alternativas bem mais baratas como Aquaphor.',
    forumSources: [
      {
        title: 'Hustle Butter Deluxe',
        url: 'https://tattooing101.com/forums/threads/hustle-butter-deluxe.5610/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
      {
        title: 'Anyone ever try hustle butter?',
        url: 'https://www.lastsparrowtattoo.com/forum/t/4984-anyone-ever-try-hustle-butter/',
        org: 'Last Sparrow Tattoo — Tattoo After Care',
      },
    ],
  },
  {
    id: 'dermalize-pro-film',
    category: 'film',
    name: 'Dermalize Pro Protective Film',
    brand: 'Dermalize',
    priceApprox: '~€30–40 / rolo 15 cm × 10 m',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.dermalizepro.com/protective-film/',
    tier: 'pro',
    editorialNote:
      'Filme de segunda pele registrado como dispositivo médico classe I na Itália e nos EUA (FDA). Também vem em amostras pequenas (~€5) para quem quer experimentar antes de comprar um rolo inteiro. Discussão de fórum relata boa aceitação geral, com uma taxa de reação ao adesivo estimada em torno de 10% dos casos.',
    forumSources: [
      {
        title: 'Aftercare experiment - dry wrap vs. dermalize',
        url: 'https://www.thetattooforum.com/forums/tattoo-forums/general-tattoo-discussion/41798-aftercare-experiment-dry-wrap-vs-dermalize/',
        org: 'The Tattoo Forum',
      },
      {
        title: 'Tegaderm/Saniderm/Tatuderm healing process',
        url: 'https://www.lastsparrowtattoo.com/forum/t/4431-tegadermsanidermtatuderm-healing-process/',
        org: 'Last Sparrow Tattoo — Tattoo After Care',
      },
    ],
  },
  {
    id: 'tattoo-goo-kit',
    category: 'aftercare',
    name: 'Tattoo Goo Aftercare Kit',
    brand: 'Tattoo Goo',
    priceApprox: '~US$15–20 (produto de circulação majoritariamente americana)',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.tattoogoo.com/products/tattoo-care-kit-copy',
    tier: 'pro',
    editorialNote:
      'Kit com sabonete antimicrobiano, balm e loção — fácil de indicar como pacote único de pós-cuidado, em vez de três produtos avulsos.',
  },
  {
    id: 'unigloves-black-pearl',
    category: 'hygiene',
    name: 'Unigloves Black Pearl Nitrile',
    brand: 'Unigloves',
    priceApprox: '~€5–10 / caixa de 100',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://uk.unigloves.com/products/black-pearl',
    tier: 'pro',
    editorialNote: 'Linha premium da Unigloves, mais reforçada que a nitrila básica de estúdio.',
  },
  {
    id: 'panthera-helix-soap',
    category: 'hygiene',
    name: 'Panthera Helix Green Foam Soap',
    brand: 'Panthera',
    priceApprox: '~€10',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://pantheraink.it/products/panthera-helix-green-foam-soap/',
    tier: 'pro',
    editorialNote: 'Versão em espuma do sabão verde clássico de estúdio, da mesma marca da tinta Panthera.',
  },
  {
    id: 'hartmann-bacillol-af',
    category: 'hygiene',
    name: 'Hartmann Bacillol AF',
    brand: 'Hartmann',
    priceApprox: '~€7–12, conforme volume',
    priceCheckedAt: '2026-09-05',
    officialUrl:
      'https://www.hartmann.info/de-de/produkte/desinfektion-und-hygiene/fl%C3%A4che/fl%C3%A4chendesinfektion-gebrauchsfertige-l%C3%B6sungen/bacillol%C2%AE-af',
    tier: 'pro',
    editorialNote:
      'Desinfetante de superfície de grau profissional, alternativa a produto de limpeza doméstico improvisado na bancada.',
  },
  {
    id: 'dynamic-union-black',
    category: 'ink',
    name: 'Dynamic Union Black',
    brand: 'Dynamic Color',
    priceApprox: '~€15–17 / 30 ml (frascos maiores com melhor custo/ml)',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://dynamiccolor.com/products/union-black',
    tier: 'pro',
    editorialNote:
      'Preto all-round citado com frequência como referência para lining e sombreado. Em discussão de fórum, artistas relatam que se manteve o mais escuro depois de cicatrizado entre várias marcas testadas lado a lado. Existe versão compatível com o REACH europeu — confirme com o fornecedor se é a versão Union Black/EU antes de comprar para uso na UE.',
    forumSources: [
      {
        title: 'best black ink for lining bold',
        url: 'https://tattooing101.com/forums/threads/best-black-ink-for-lining-bold.13035/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
      {
        title: 'Black Ink Suggestions',
        url: 'https://tattooing101.com/forums/threads/black-ink-suggestions.7840/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'world-famous-limitless',
    category: 'ink',
    name: 'World Famous Limitless',
    brand: 'World Famous Ink',
    priceApprox: '~€16–20 / 30 ml',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.worldfamoustattooink.com/',
    tier: 'pro',
    euReach: true,
    editorialNote:
      'Linha reformulada para atender ao REACH europeu, lançada primeiro na União Europeia antes de expandir para outros mercados.',
  },
  {
    id: 'panthera-black-gold',
    category: 'ink',
    name: 'Panthera Black Gold',
    brand: 'Panthera',
    priceApprox: '~€20–25',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://pantheraink.it/products/black-gold/',
    tier: 'pro',
    editorialNote:
      'Preto italiano com ingredientes de origem vegetal, indicado pelo fabricante como resistente ao azulamento pós-cicatrização. Para uso na UE, confirme com o fornecedor se o lote específico é a variante compatível com o REACH europeu — nem toda variante é.',
  },
  {
    id: 'spirit-classic-thermal',
    category: 'stencil',
    name: 'Spirit Classic Thermal Paper',
    brand: 'Spirit',
    priceApprox: '~€40+ / caixa grande (100 folhas)',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://spirittattooproducts.com/products/spirit-thermal-11',
    tier: 'pro',
    editorialNote: 'Papel térmico padrão da indústria para transferência de stencil via máquina térmica.',
  },
  {
    id: 'killer-ink-barrier-film',
    category: 'film',
    name: 'Killer Ink Barrier Film',
    brand: 'Killer Ink',
    priceApprox: '~€10–15 / rolo perfurado',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.killerinktattoo.co.uk/box-of-1200-killer-ink-barrier-film-roll',
    tier: 'pro',
    editorialNote: 'Filme barreira perfurado, folha a folha, para cobrir cabos, fonte e superfícies de toque.',
  },
  {
    id: 'unigloves-grip-bandage',
    category: 'accessories',
    name: 'Unigloves Grip Bandage',
    brand: 'Unigloves',
    priceApprox: '~€2–4 / rolo',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://unigloves.de/en/product/griff-bandage/',
    tier: 'pro',
    editorialNote: 'Bandagem autoaderente (só gruda em si mesma) para dar pega ao grip sem precisar de fita adesiva.',
  },
  {
    id: 'murostar-ink-caps',
    category: 'accessories',
    name: 'Murostar Silicone Ink Caps',
    brand: 'Murostar',
    priceApprox: '~€15–20 / 300 un., 12 mm',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.murostar.com/Ink-Cups-Silicone-300-pcs-12-mm',
    tier: 'pro',
    editorialNote: 'Copinhos de silicone reaproveitáveis dentro da mesma sessão, ao contrário do descartável de plástico rígido.',
  },
  {
    id: 'kwadron-traditional-needles',
    category: 'needle',
    name: 'Kwadron Traditional Needles',
    brand: 'Kwadron',
    priceApprox: '~€15–20 / caixa de 50',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.kwadron.pl/en/kwadron-needles',
    tier: 'pro',
    editorialNote: 'Agulha soldada tradicional (não-cartucho) da mesma marca polonesa por trás do sistema de cartucho mais citado da lista.',
  },
  {
    id: 'magic-moon-round-liner',
    category: 'needle',
    name: 'Magic Moon Round Liner Long Taper',
    brand: 'Magic Moon',
    priceApprox: '~€20–40, conforme linha e embalagem',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://magic-moon-shop.de/en/Round-Liner-3505-Long-Taper/3505RLLT',
    tier: 'pro',
    editorialNote: 'Marca alemã tradicional em agulha soldada, taper longo para linha mais suave.',
  },
  {
    id: 'cheyenne-safety-cartridges',
    category: 'needle',
    name: 'Cheyenne Safety Cartridges',
    brand: 'Cheyenne',
    priceApprox: '~€15–30 / caixa de 20',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://shop.us.cheyennetattoo.com/collections/cartridges',
    tier: 'pro',
    editorialNote: 'Cheyenne foi quem introduziu o sistema de cartucho no mercado — referência histórica da categoria.',
  },
  {
    id: 'kwadron-cartridge-system',
    category: 'needle',
    name: 'Kwadron Cartridge System',
    brand: 'Kwadron',
    priceApprox: '~€25–35 / caixa de 20',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.kwadron.pl/en/kwadron-cartridges',
    tier: 'pro',
    editorialNote:
      'Uma das marcas de cartucho mais citadas em fórum como "confiável" e de "bom fluxo de tinta"; a mesma discussão aponta folga (wobble) na ponta dos magnums como ponto fraco.',
    forumSources: [
      {
        title: 'Needle cartridge brands',
        url: 'https://tattooing101.com/forums/threads/needle-cartridge-brands.11393/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'bishop-da-vinci-v2',
    category: 'needle',
    name: 'Bishop Da Vinci V2',
    brand: 'Bishop',
    priceApprox: '~€25–40 / caixa de 20',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://bishoptattoosupply.com/products/da-vinci-v2-round-liners',
    tier: 'pro',
    editorialNote: 'Cartucho desenhado com artistas convidados (Carlos Torres, Franco Vescovi) — linha de assinatura da Bishop.',
  },
  {
    id: 'bishop-power-wand',
    category: 'machine',
    name: 'Bishop Power Wand',
    brand: 'Bishop',
    priceApprox: '~€800–1.500+, conforme o kit e a bateria',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://bishoptattoosupply.com/products/the-power-wand-rca-machine',
    tier: 'pro',
    editorialNote:
      'Máquina wireless bem avaliada em fórum por artistas experientes, descrita como estável para gradientes e textura; um ponto citado é que bateria de terceiros mais barata pode não sustentar o motor.',
    forumSources: [
      {
        title: 'Bishop machines',
        url: 'https://tattooing101.com/forums/threads/bishop-machines.11673/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'cheyenne-sol-nova',
    category: 'machine',
    name: 'Cheyenne SOL Nova Unlimited',
    brand: 'Cheyenne',
    priceApprox: '~€650–800',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://cheyennetattoo.com/en/tattoo-machines/sol-nova-unlimited',
    tier: 'pro',
    editorialNote:
      'Descrita pela própria Cheyenne como "a caneta mais silenciosa"; discussão de fórum destaca o ajuste de "give" (folga) como diferencial frente a máquinas de drive direto.',
    forumSources: [
      {
        title: 'Cheyenne Pens - Selecting Help',
        url: 'https://tattooing101.com/forums/threads/cheyenne-pens-selecting-help.12156/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'fk-irons-flux-max',
    category: 'machine',
    name: 'FK Irons Flux Max',
    brand: 'FK Irons',
    priceApprox: '~€900–1.000',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://www.fkirons.com/products/flux-max-wireless-tattoo-machine',
    tier: 'pro',
    editorialNote:
      'Máquina wireless com ajuste digital de pressão e stroke. Em fórum, o ponto mais citado como problema é duração de bateria abaixo do esperado em algumas unidades.',
    forumSources: [
      {
        title: 'Fk irons machines',
        url: 'https://tattooing101.com/forums/threads/fk-irons-machines.10168/',
        org: 'Tattooing 101 — Help Me Tattoo Training Forum',
      },
    ],
  },
  {
    id: 'critical-torque',
    category: 'machine',
    name: 'Critical Torque',
    brand: 'Critical',
    priceApprox: '~€900–1.000',
    priceCheckedAt: '2026-09-05',
    officialUrl: 'https://criticaltattoo.com/products/critical-torque',
    tier: 'pro',
    editorialNote:
      'A Critical é citada em fórum como marca de equipamento consistente e durável ao longo dos anos — comentário sobre a marca em geral, não sobre o modelo Torque especificamente.',
    forumSources: [
      {
        title: 'Critical Universal Tattoo Battery Pack Review',
        url: 'https://tattooing101.com/learn/reviews/critical-universal-tattoo-battery-pack/',
        org: 'Tattooing 101',
      },
    ],
  },
];

/**
 * Conteúdo editorial da página de estilos (`/estilos`).
 *
 * Fica fora de `content/index.ts` de propósito: não é um guia de saúde, não
 * tem alerta clínico nem fonte de órgão regulador — é material de repertório
 * visual. A validação de conteúdo cobre `guides`, e forçar este material no
 * mesmo tipo criaria seções e níveis de alerta que ele não tem.
 *
 * As agulhas são ponto de partida, nunca preset: a mesma regra do
 * `technicalDisclaimer` vale aqui.
 */
import type { ImageKey } from './images';

/** Ilustração de flash que abre cada verbete. Uma por estilo. */
export type OrnamentKey =
  | 'swallow'
  | 'rose'
  | 'wave'
  | 'skull'
  | 'eye'
  | 'arrow'
  | 'crescent'
  | 'star'
  | 'sun'
  | 'diamond'
  | 'web'
  | 'mandala'
  | 'cross'
  | 'banner'
  | 'bomb'
  | 'heart'
  | 'dagger'
  | 'snake'
  | 'anchor'
  | 'ship'
  | 'needle';

export interface NeedleSpec {
  /** Códigos no formato da legenda: `7RL–14RL`, `9M1–27M1/CM`. */
  codes: string;
  /** Para que serve essa faixa dentro do estilo. */
  use?: string;
}

/**
 * Módulo do verbete na diagramação, em colunas de 6 — é o que dá à página o
 * ritmo irregular de página de classificados, com manchetes largas e
 * anúncios estreitos na mesma malha.
 */
export type StyleSpan = 2 | 3 | 4;

export interface TattooStyle {
  /** Slug — vira âncora do índice. Estável, não renomear. */
  id: string;
  name: string;
  /** Nome alternativo ou original, quando o estilo tem dois. */
  altName?: string;
  techniques: string;
  needles: readonly NeedleSpec[];
  colors: string;
  placement: string;
  /** Resumo ou curiosidade — o "olho" do verbete. */
  note: string;
  /** Busca de imagens. Abre em nova aba; nada é carregado nesta página. */
  reference: string;
  ornament: OrnamentKey;
  /** Clichê do verbete — chave em `content/images.ts`. */
  image: ImageKey;
  span: StyleSpan;
  /** Proporção do clichê. Varia junto com o módulo para quebrar a grade. */
  ratio: '4/5' | '1/1' | '3/2' | '4/3';
}

export interface LegendEntry {
  code: string;
  label: string;
  meaning: string;
}

export const needleLegend: readonly LegendEntry[] = [
  { code: 'RL', label: 'Round Liner', meaning: 'linhas e detalhes.' },
  {
    code: 'RS',
    label: 'Round Shader',
    meaning: 'linhas mais suaves, pequenos preenchimentos e sombras.',
  },
  { code: 'M1', label: 'Magnum', meaning: 'preenchimento e transições.' },
  { code: 'M2', label: 'Stacked Magnum', meaning: 'pigmentação mais sólida.' },
  {
    code: 'CM/RM',
    label: 'Curved / Round Magnum',
    meaning: 'sombras e preenchimentos com bordas mais suaves.',
  },
  {
    code: 'Bugpin',
    label: 'agulha de menor diâmetro',
    meaning: 'indicada para detalhes e transições delicadas.',
  },
];

export const tattooStyles: readonly TattooStyle[] = [
  {
    id: 'old-school',
    name: 'Old School',
    altName: 'Tradicional Americano',
    techniques: 'Contorno grosso, preenchimento sólido, sombras simples e alto contraste.',
    needles: [
      { codes: '7RL–14RL', use: 'contornos' },
      { codes: '7RS–14RS' },
      { codes: '9M1–15M1/CM', use: 'cor' },
    ],
    colors: 'Preto, vermelho, amarelo, verde e azul, geralmente em paleta limitada.',
    placement: 'Braços, pernas, peito, ombros e costas.',
    note: 'Surgiu ligado a marinheiros e a símbolos como águias, rosas, punhais, âncoras e corações. Envelhece muito bem quando executado com bom contraste.',
    reference:
      'https://www.bing.com/images/search?q=old+school+traditional+American+tattoo+flash+style+example',
    ornament: 'swallow',
    image: 'estilo-old-school',
    span: 4,
    ratio: '4/3',
  },
  {
    id: 'neo-traditional',
    name: 'Neo Traditional',
    techniques:
      'Contornos fortes com variação de espessura, volume, degradês e composição ornamental.',
    needles: [{ codes: '5RL–14RL' }, { codes: '3RL', use: 'detalhes' }, { codes: '7CM–17CM' }],
    colors: 'Paleta ampla, saturada ou terrosa, com muitas variações de tom.',
    placement: 'Coxas, panturrilhas, braços, ombros, peito e costas.',
    note: 'Evolução do tradicional, mas com mais profundidade, detalhe, anatomia e influência de ilustração contemporânea.',
    reference: 'https://www.bing.com/images/search?q=neo+traditional+tattoo+style+example',
    ornament: 'rose',
    image: 'estilo-neo-traditional',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'japones',
    name: 'Japonês',
    altName: 'Irezumi',
    techniques:
      'Linhas firmes, grandes áreas de cor, fundos com ondas, vento e nuvens, composição acompanhando o corpo.',
    needles: [{ codes: '7RL–14RL' }, { codes: '9M1–27M1/CM', use: 'grandes preenchimentos' }],
    colors: 'Preto, vermelho, azul, verde, amarelo e laranja.',
    placement: 'Costas inteiras, mangas, peito, barriga, nádegas e coxas.',
    note: 'A composição é planejada como uma peça corporal completa. Dragões, carpas, tigres e flores têm significados próprios.',
    reference: 'https://www.bing.com/images/search?q=Japanese+irezumi+tattoo+style+example',
    ornament: 'wave',
    image: 'estilo-japones',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'realismo-preto-e-cinza',
    name: 'Realismo preto e cinza',
    techniques:
      'Whip shading, pendulum shading, camadas suaves, contraste e reprodução de luz e textura.',
    needles: [
      { codes: '3RL–7RL', use: 'detalhes' },
      { codes: '7CM–23CM bugpin', use: 'sombras' },
    ],
    colors: 'Preto diluído em diferentes níveis de cinza.',
    placement: 'Braço, antebraço, coxa, panturrilha, peito e costas.',
    note: 'A legibilidade depende mais do contraste do que da quantidade de detalhes. Realismo pequeno demais tende a perder definição.',
    reference: 'https://www.bing.com/images/search?q=black+and+grey+realism+tattoo+example',
    ornament: 'skull',
    image: 'estilo-realismo-preto-e-cinza',
    span: 2,
    ratio: '1/1',
  },
  {
    id: 'realismo-colorido',
    name: 'Realismo colorido',
    techniques: 'Mistura de cores, camadas, transições suaves, textura e controle de temperatura.',
    needles: [{ codes: '3RL–9RL' }, { codes: '7CM–23CM' }, { codes: 'bugpin', use: 'transições' }],
    colors: 'Paleta extensa, muitas vezes reproduzindo fotografias.',
    placement: 'Coxas, panturrilhas, ombros, braços e costas.',
    note: 'Exige planejamento de valores claros e escuros. Cores claras funcionam melhor quando apoiadas por contraste suficiente.',
    reference: 'https://www.bing.com/images/search?q=color+realism+tattoo+example',
    ornament: 'eye',
    image: 'estilo-realismo-colorido',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    techniques: 'Linhas finas, pressão controlada, poucos passes e detalhes delicados.',
    needles: [{ codes: '1RL, 3RL e 5RL', use: 'normalmente de menor diâmetro' }],
    colors: 'Principalmente preto; ocasionalmente cores suaves.',
    placement: 'Antebraço, parte superior do braço, coxa, panturrilha e costas.',
    note: 'Não significa simplesmente “usar a menor agulha”. Linhas muito finas exigem profundidade consistente para não desaparecerem nem estourarem.',
    reference: 'https://www.bing.com/images/search?q=fine+line+tattoo+style+example',
    ornament: 'arrow',
    image: 'estilo-fine-line',
    span: 3,
    ratio: '3/2',
  },
  {
    id: 'minimalista',
    name: 'Minimalista',
    techniques: 'Simplificação de formas, linhas limpas, espaço negativo e poucos elementos.',
    needles: [{ codes: '3RL–7RL' }, { codes: '3RS–5RS', use: 'ocasionalmente' }],
    colors: 'Preto ou paleta muito reduzida.',
    placement: 'Braços, pernas, nuca, tornozelo, ombro e costelas.',
    note: 'Quanto mais simples o desenho, mais visíveis ficam pequenas imperfeições de linha e proporção.',
    reference: 'https://www.bing.com/images/search?q=minimalist+tattoo+style+example',
    ornament: 'crescent',
    image: 'estilo-minimalista',
    span: 3,
    ratio: '3/2',
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    techniques: 'Grandes massas de preto, contraste, formas gráficas, textura e espaço negativo.',
    needles: [{ codes: '7RL–18RL' }, { codes: '9M1–27M1' }, { codes: 'M2 e CM' }],
    colors: 'Predominantemente preto.',
    placement: 'Braços, pernas, peito, costas e grandes painéis corporais.',
    note: 'Vai de desenhos ilustrativos a coberturas completas. A saturação uniforme é essencial para evitar manchas depois da cicatrização.',
    reference: 'https://www.bing.com/images/search?q=blackwork+tattoo+style+example',
    ornament: 'star',
    image: 'estilo-blackwork',
    span: 2,
    ratio: '1/1',
  },
  {
    id: 'tribal',
    name: 'Tribal',
    altName: 'Polinésio',
    techniques: 'Linhas espessas, padrões repetidos, preenchimento sólido e adaptação anatômica.',
    needles: [{ codes: '9RL–18RL' }, { codes: '9M1–27M1/M2' }],
    colors: 'Preto sólido.',
    placement: 'Ombros, braços, peito, costas, panturrilhas e coxas.',
    note: 'Muitos padrões tradicionais carregam significado cultural específico. Não devem ser escolhidos como decoração sem pesquisa de contexto.',
    reference: 'https://www.bing.com/images/search?q=Polynesian+tribal+tattoo+style+example',
    ornament: 'sun',
    image: 'estilo-tribal',
    span: 4,
    ratio: '3/2',
  },
  {
    id: 'geometrico',
    name: 'Geométrico',
    techniques:
      'Simetria, linhas retas, círculos, padrões repetidos, pontos de referência e construção precisa.',
    needles: [
      { codes: '3RL–9RL' },
      { codes: '3RS–9RS' },
      { codes: 'magnums', use: 'áreas preenchidas' },
    ],
    colors: 'Preto; ocasionalmente cores primárias ou contrastantes.',
    placement: 'Antebraço, braço, costas, peito, coxa e panturrilha.',
    note: 'Pequenos desvios ficam muito aparentes. O stencil e o posicionamento no corpo são tão importantes quanto a execução das linhas.',
    reference: 'https://www.bing.com/images/search?q=geometric+tattoo+style+example',
    ornament: 'diamond',
    image: 'estilo-geometrico',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'dotwork',
    name: 'Dotwork',
    altName: 'Pontilhismo',
    techniques:
      'Sombra e volume construídos por pontos, variação de densidade e movimento controlado.',
    needles: [
      { codes: '1RL–5RL', use: 'pontos individuais' },
      { codes: '3RS–9RS', use: 'agrupamentos' },
    ],
    colors: 'Preto e cinza; raramente cores.',
    placement: 'Antebraços, braços, pernas, peito e costas.',
    note: 'O tom é criado pela distância entre os pontos, não apenas pela diluição do pigmento. Pode ser feito à máquina ou por handpoke.',
    reference: 'https://www.bing.com/images/search?q=dotwork+tattoo+style+example',
    ornament: 'web',
    image: 'estilo-dotwork',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'ornamental',
    name: 'Ornamental',
    techniques: 'Simetria, padrões decorativos, mandalas, detalhes finos e espaço negativo.',
    needles: [{ codes: '3RL–9RL' }, { codes: '3RS–7RS' }, { codes: 'CM', use: 'sombras' }],
    colors: 'Preto, cinza e, ocasionalmente, detalhes dourados ou coloridos simulados.',
    placement: 'Esterno, costas, nuca, braços, mãos, coxas e canelas.',
    note: 'Funciona melhor quando acompanha e valoriza os eixos naturais do corpo. É comum em composições inspiradas em joalheria e arquitetura.',
    reference: 'https://www.bing.com/images/search?q=ornamental+tattoo+style+example',
    ornament: 'mandala',
    image: 'estilo-ornamental',
    span: 2,
    ratio: '1/1',
  },
  {
    id: 'chicano',
    name: 'Chicano',
    techniques: 'Fine line, preto e cinza, lettering, retratos, sombras suaves e alto contraste.',
    needles: [{ codes: '3RL–7RL' }, { codes: '7CM–15CM bugpin' }],
    colors: 'Preto e cinza.',
    placement: 'Braços, peito, costas, barriga e pernas.',
    note: 'Desenvolveu-se fortemente na cultura mexicano-americana, combinando imagens religiosas, retratos, carros, rosas e caligrafia.',
    reference: 'https://www.bing.com/images/search?q=Chicano+tattoo+style+example',
    ornament: 'cross',
    image: 'estilo-chicano',
    span: 4,
    ratio: '4/3',
  },
  {
    id: 'lettering',
    name: 'Lettering',
    altName: 'Caligrafia',
    techniques: 'Controle de espessura, curvas, espaçamento, linhas-guia e construção tipográfica.',
    needles: [
      { codes: '3RL–9RL', use: 'letras finas' },
      { codes: '7RL–14RL e magnums', use: 'letras pesadas' },
    ],
    colors: 'Principalmente preto; cores em efeitos e sombras.',
    placement: 'Antebraço, braço, peito, costas, costelas e pernas.',
    note: 'Uma frase pode estar escrita corretamente e ainda parecer desequilibrada. Legibilidade, kerning e adaptação à anatomia são fundamentais.',
    reference: 'https://www.bing.com/images/search?q=lettering+calligraphy+tattoo+style+example',
    ornament: 'banner',
    image: 'estilo-lettering',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'new-school',
    name: 'New School',
    techniques:
      'Contornos grossos, formas exageradas, perspectiva dinâmica, cores saturadas e volume quase cartunesco.',
    needles: [{ codes: '7RL–14RL' }, { codes: '9M1–23CM' }],
    colors: 'Cores fortes, fluorescentes e combinações contrastantes.',
    placement: 'Braços, pernas, peito, costas e peças grandes.',
    note: 'Recebe influência de cartuns, graffiti, quadrinhos e cultura pop. Frequentemente exagera proporções de propósito.',
    reference: 'https://www.bing.com/images/search?q=new+school+tattoo+style+example',
    ornament: 'bomb',
    image: 'estilo-new-school',
    span: 3,
    ratio: '3/2',
  },
  {
    id: 'aquarela',
    name: 'Aquarela',
    altName: 'Watercolor',
    techniques: 'Sobreposição de cores, bordas livres, respingos, transições e áreas sem contorno.',
    needles: [
      { codes: '3RL–7RL', use: 'estrutura' },
      { codes: '7CM–17CM', use: 'aplicação de cor' },
    ],
    colors: 'Paleta vibrante, transparente ou pastel.',
    placement: 'Braços, ombros, costas, coxas e panturrilhas.',
    note: 'Apesar da aparência espontânea, precisa de boa estrutura de contraste para continuar legível com o passar dos anos.',
    reference: 'https://www.bing.com/images/search?q=watercolor+tattoo+style+example',
    ornament: 'heart',
    image: 'estilo-aquarela',
    span: 3,
    ratio: '3/2',
  },
  {
    id: 'trash-polka',
    name: 'Trash Polka',
    techniques:
      'Colagem visual, realismo, lettering, pinceladas, formas gráficas e contraste abrupto.',
    needles: [{ codes: '5RL–14RL' }, { codes: '9M1–27M1/CM' }],
    colors: 'Principalmente preto e vermelho.',
    placement: 'Costas, peito, coxas, braços e panturrilhas.',
    note: 'Foi popularizado pelo estúdio Buena Vista Tattoo Club, na Alemanha. Mistura elementos realistas com composição caótica e gráfica.',
    reference: 'https://www.bing.com/images/search?q=trash+polka+tattoo+style+example',
    ornament: 'dagger',
    image: 'estilo-trash-polka',
    span: 2,
    ratio: '1/1',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    altName: 'Esboço',
    techniques:
      'Linhas sobrepostas, traços gestuais, marcas de construção, manchas e aparência inacabada intencional.',
    needles: [{ codes: '3RL–9RL' }, { codes: 'RS e CM', use: 'manchas e sombras' }],
    colors: 'Preto, cinza e detalhes pontuais de cor.',
    placement: 'Braços, pernas, costas, peito e ombros.',
    note: 'O efeito “imperfeito” precisa ser planejado. Linhas soltas demais viram ruído visual depois de cicatrizadas.',
    reference: 'https://www.bing.com/images/search?q=sketch+tattoo+style+example',
    ornament: 'snake',
    image: 'estilo-sketch',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'ilustrativo',
    name: 'Ilustrativo',
    techniques:
      'Combinação de desenho, gravura, quadrinhos, hachuras, linhas e sombras estilizadas.',
    needles: [
      { codes: '3RL–9RL' },
      { codes: '3RS–9RS' },
      { codes: 'CM', use: 'conforme o acabamento' },
    ],
    colors: 'Preto e cinza ou paleta autoral.',
    placement: 'Braços, pernas, peito, costas e coxas.',
    note: 'Categoria ampla, que permite misturar técnicas sem buscar realismo fotográfico. O estilo pessoal do artista costuma ser o principal diferencial.',
    reference: 'https://www.bing.com/images/search?q=illustrative+tattoo+style+example',
    ornament: 'anchor',
    image: 'estilo-ilustrativo',
    span: 2,
    ratio: '4/5',
  },
  {
    id: 'xilogravura',
    name: 'Xilogravura',
    altName: 'Gravura',
    techniques:
      'Hachuras, linhas paralelas, contraste forte, textura e simulação de impressão artesanal.',
    needles: [
      { codes: '3RL–9RL' },
      { codes: 'RS', use: 'pequenos blocos' },
      { codes: 'magnums', use: 'áreas pretas' },
    ],
    colors: 'Preto e, às vezes, vermelho ou tons terrosos.',
    placement: 'Antebraços, braços, pernas, peito e costas.',
    note: 'Inspira-se em técnicas de impressão como xilogravura, linóleo e gravura em metal. Precisa de espaçamento suficiente entre hachuras para envelhecer bem.',
    reference: 'https://www.bing.com/images/search?q=woodcut+engraving+tattoo+style+example',
    ornament: 'ship',
    image: 'estilo-xilogravura',
    span: 3,
    ratio: '3/2',
  },
  {
    id: 'handpoke',
    name: 'Handpoke',
    techniques: 'Inserção manual ponto a ponto, construção gradual de linhas e sombras.',
    needles: [{ codes: '1RL–9RL', use: 'conforme a espessura desejada' }],
    colors: 'Predominantemente preto, mas aceita cores.',
    placement: 'Braços, pernas, mãos, dedos e áreas pequenas ou médias.',
    note: 'É uma técnica, não necessariamente um estilo. Pode produzir linhas muito precisas, mas costuma exigir mais tempo do que a máquina.',
    reference: 'https://www.bing.com/images/search?q=handpoke+tattoo+style+example',
    ornament: 'needle',
    image: 'estilo-handpoke',
    span: 3,
    ratio: '3/2',
  },
];

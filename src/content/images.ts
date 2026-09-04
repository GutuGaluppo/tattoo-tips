import type { ImageId } from './image-manifest';

export interface ImageEntry {
  id: ImageId;
  /**
   * Texto alternativo. Vazio quando a foto é ambiente e não acrescenta
   * informação — nesse caso o leitor de tela deve simplesmente pular.
   */
  alt: string;
  /** Nome do fotógrafo, para a página de créditos. */
  credit: string;
  /** URL da foto no Unsplash. */
  source: string;
  /** Enquadramento preferido quando a foto é recortada em card. */
  position?: string;
}

/**
 * Fotos de terceiros. Diferente das ilustrações autorais em SVG, elas têm
 * autoria e por isso aparecem creditadas em /fontes.
 *
 * O alt descreve o que importa para o assunto da página — em foto de sessão,
 * o que interessa é a barreira, a luva e o material, não a estética.
 */
export const images = {
  craft: {
    id: 'kristian-angelo-xyjzvul4-ty',
    alt: '',
    credit: 'Kristian Angelo',
    source: 'https://unsplash.com/photos/xyJZvUL4_TY',
    position: 'center 35%',
  },
  gloves: {
    id: 'allef-vinicius-hxnixp498ui',
    alt: 'Tatuador de luvas trabalhando sobre um braço apoiado em filme plástico descartável.',
    credit: 'Allef Vinicius',
    source: 'https://unsplash.com/photos/hxNiXP498UI',
    position: 'center 40%',
  },
  aftercare: {
    id: 'tattoo-aftercare',
    alt: 'Mão aplicando hidratante sobre uma tatuagem geométrica na canela, em ambiente doméstico.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  workstation: {
    id: 'fallon-michael-equcs66pts0',
    alt: 'Bandeja de trabalho forrada com barreira descartável, com tintas, copinhos e papel-toalha separados.',
    credit: 'Fallon Michael',
    source: 'https://unsplash.com/photos/EQucs66pts0',
    position: 'center bottom',
  },
  supplies: {
    id: 'inks-machines',
    alt: 'Prateleira de estúdio organizada e etiquetada por categoria: curativos, sanitização, tintas, luvas, cartuchos, perfurocortantes, lâminas, preparo de pele e pós-cuidado.',
    credit: 'Estúdio (arquivo do projeto)',
    source: '',
    position: 'center',
  },
  stencil: {
    id: 'cloutier-benjamin-nhy4or4khxm',
    alt: 'Aplicação de tinta sobre um stencil roxo já transferido para a pele, com luvas pretas.',
    credit: 'Benjamin Cloutier',
    source: 'https://unsplash.com/photos/nHY4OR4khXM',
    position: 'center 45%',
  },
  session: {
    id: 'janko-ferlic-visezp-detu',
    alt: 'Cliente reclinada durante uma sessão no pescoço, com o tatuador trabalhando de luvas.',
    credit: 'Janko Ferlič',
    source: 'https://unsplash.com/photos/Visezp_DeTU',
    position: 'center 30%',
  },
  lining: {
    id: 'ta-focando-k-vbjak6rok',
    alt: 'Traço de contorno sendo feito com máquina de cartucho e luvas pretas, sobre pele esticada.',
    credit: 'Tá Focando',
    source: 'https://unsplash.com/photos/k_VbjAk6rok',
    position: 'center 40%',
  },
  detail: {
    id: 'collins-lesulie-pwk6cecjtjw',
    alt: 'Trabalho de detalhe com máquina de cartucho, com as duas mãos enluvadas esticando a pele.',
    credit: 'Collins Lesulie',
    source: 'https://unsplash.com/photos/PWK6CeCJtJw',
    position: 'center 45%',
  },
  ink: {
    id: 'jose-pinto-rebc6ee8jns',
    alt: 'Tatuadora de máscara segurando um frasco de tinta durante o preparo.',
    credit: 'José Pinto',
    source: 'https://unsplash.com/photos/rEbc6EE8JNs',
    position: 'center 30%',
  },
  machine: {
    id: 'andrej-lisakov-ll1tdo-aqym',
    alt: 'Máquina de bobina fotografada de cima sobre fundo colorido.',
    credit: 'Andrej Lisakov',
    source: 'https://unsplash.com/photos/Ll1TDo_AQyM',
    position: 'center',
  },
  healed: {
    id: 'agathe-lov-jpl0gpnoeom',
    alt: 'Tatuagem de linha fina já cicatrizada na parte interna do braço.',
    credit: 'Agathe Lov',
    source: 'https://unsplash.com/photos/JPl0GPNoeoM',
    position: 'center',
  },
  linework: {
    id: 'benjamin-lehman-5t4qcgtalgu',
    alt: 'Contorno em andamento sobre pele já tatuada, com luvas pretas e máquina apoiada.',
    credit: 'Benjamin Lehman',
    source: 'https://unsplash.com/photos/5t4qCgtaLGU',
    position: 'center 55%',
  },
  studio: {
    id: 'sherman-yang-zoyowsanhxo',
    alt: '',
    credit: 'Sherman Yang',
    source: 'https://unsplash.com/photos/zOyOWsANHXo',
    position: 'center',
  },

  /* ------------------------------------------------ exemplos de estilo
     Clichês da página /estilos, um por verbete. Diferente das fotos acima,
     estas chegaram sem procedência: `credit` registra isso em vez de
     inventar autoria, e `source` vazio as mantém fora de /fontes até a
     origem ser confirmada. Uma delas (minimalista) tem marca d'água de
     site, então a verificação é obrigatória antes de publicar. */
  'estilo-old-school': {
    id: 'estilo-old-school',
    alt: 'Folha de flash tradicional com pantera negra rosnando e dois retratos femininos em contorno grosso e cores chapadas.',
    // Assinada na própria arte: "Carolina Riberg 22".
    credit: 'Carolina Riberg',
    source: '',
    position: 'center',
  },
  'estilo-neo-traditional': {
    id: 'estilo-neo-traditional',
    alt: 'Escaravelho alado com asas em laranja e ocre tatuado nas costas, com contorno forte e volume.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-japones': {
    id: 'estilo-japones',
    alt: 'Braço fechado com carpas, flores e ondas em preto, cinza e vermelho, cobrindo do ombro ao punho.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 40%',
  },
  'estilo-realismo-preto-e-cinza': {
    id: 'estilo-realismo-preto-e-cinza',
    alt: 'Retrato realista de um homem idoso em preto e cinza, com textura de pele e barba detalhadas.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 30%',
  },
  'estilo-realismo-colorido': {
    id: 'estilo-realismo-colorido',
    alt: 'Retrato feminino em cores saturadas, com luz azul e magenta cortando o rosto.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 30%',
  },
  'estilo-fine-line': {
    id: 'estilo-fine-line',
    alt: 'Ramo de folhas em traço muito fino tatuado na face interna do antebraço.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-minimalista': {
    id: 'estilo-minimalista',
    alt: 'Pássaro reduzido a um único traço contínuo, de poucos centímetros, no braço.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-blackwork': {
    id: 'estilo-blackwork',
    alt: 'Ombro e peito cobertos por faixas de preto sólido com padrões geométricos e espaço negativo.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-tribal': {
    id: 'estilo-tribal',
    alt: 'Ombro com padrão polinésio em preto sólido, composto por faixas, dentes e espirais que acompanham o músculo.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-geometrico': {
    id: 'estilo-geometrico',
    alt: 'Peito com figura de geometria sagrada em linhas finas, círculos concêntricos e simetria radial.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 40%',
  },
  'estilo-dotwork': {
    id: 'estilo-dotwork',
    alt: 'Perna com mandala construída inteiramente por pontos, com sombra criada pela densidade do pontilhado.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-ornamental': {
    id: 'estilo-ornamental',
    alt: 'Braço com painel ornamental de mandalas e rendilhados simétricos em preto e cinza.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-chicano': {
    id: 'estilo-chicano',
    alt: 'Retrato feminino em preto e cinza com maquiagem de palhaço e o dedo sobre os lábios, com sombras suaves.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 25%',
  },
  'estilo-lettering': {
    id: 'estilo-lettering',
    alt: 'A palavra “Ambition” em caligrafia cursiva com variação de espessura, tatuada ao longo do antebraço.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-new-school': {
    id: 'estilo-new-school',
    alt: 'Cachorro de coroa em cores saturadas e contorno grosso, com proporções exageradas de desenho animado.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-aquarela': {
    id: 'estilo-aquarela',
    alt: 'Olho tatuado no ombro cercado por respingos e manchas de cor sem contorno, como tinta diluída.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-trash-polka': {
    id: 'estilo-trash-polka',
    alt: 'Olho realista no antebraço combinado a respingos, faixas e formas gráficas em preto e vermelho.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
  'estilo-sketch': {
    id: 'estilo-sketch',
    alt: 'Retrato masculino com traços soltos de esboço, linhas de construção aparentes e respingos coloridos.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 30%',
  },
  'estilo-ilustrativo': {
    id: 'estilo-ilustrativo',
    alt: 'Braço com personagem feminina em estilo de ilustração, com cores chapadas, contorno marcado e fundo gráfico.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 30%',
  },
  'estilo-xilogravura': {
    id: 'estilo-xilogravura',
    alt: 'Braço com cena construída em hachuras paralelas, imitando o traço de uma gravura impressa.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center 30%',
  },
  'estilo-handpoke': {
    id: 'estilo-handpoke',
    alt: 'Olho pequeno com íris colorida tatuado no braço, construído ponto a ponto.',
    credit: 'Autoria não identificada',
    source: '',
    position: 'center',
  },
} as const satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;

export const imageCredits = Object.values(images).filter((image) => image.source !== '');

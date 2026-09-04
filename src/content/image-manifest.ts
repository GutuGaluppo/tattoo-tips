/**
 * ARQUIVO GERADO por scripts/build-images.mjs — nao editar a mao.
 * Dimensoes dos originais, usadas para reservar espaco antes do download.
 */
export interface ImageDerivative {
  width: number;
  height: number;
  aspectRatio: number;
  sizes: number[];
}

export const imageManifest = {
  'agathe-lov-jpl0gpnoeom': { width: 3024, height: 3022, aspectRatio: 1.0007, sizes: [480, 960, 1600] },
  'allef-vinicius-hxnixp498ui': { width: 3456, height: 5184, aspectRatio: 0.6667, sizes: [480, 960, 1600] },
  'andrej-lisakov-ll1tdo-aqym': { width: 3470, height: 5200, aspectRatio: 0.6673, sizes: [480, 960, 1600] },
  'benjamin-lehman-5t4qcgtalgu': { width: 6720, height: 4480, aspectRatio: 1.5, sizes: [480, 960, 1600] },
  'cloutier-benjamin-nhy4or4khxm': { width: 4000, height: 6000, aspectRatio: 0.6667, sizes: [480, 960, 1600] },
  'collins-lesulie-pwk6cecjtjw': { width: 3124, height: 3905, aspectRatio: 0.8, sizes: [480, 960, 1600] },
  'estilo-aquarela': { width: 720, height: 960, aspectRatio: 0.75, sizes: [480] },
  'estilo-blackwork': { width: 604, height: 439, aspectRatio: 1.3759, sizes: [480] },
  'estilo-chicano': { width: 816, height: 1377, aspectRatio: 0.5926, sizes: [480] },
  'estilo-dotwork': { width: 1200, height: 1500, aspectRatio: 0.8, sizes: [480, 960] },
  'estilo-fine-line': { width: 1000, height: 1333, aspectRatio: 0.7502, sizes: [480, 960] },
  'estilo-geometrico': { width: 1074, height: 1300, aspectRatio: 0.8262, sizes: [480, 960] },
  'estilo-handpoke': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'estilo-ilustrativo': { width: 736, height: 977, aspectRatio: 0.7533, sizes: [480] },
  'estilo-japones': { width: 736, height: 920, aspectRatio: 0.8, sizes: [480] },
  'estilo-lettering': { width: 894, height: 1000, aspectRatio: 0.894, sizes: [480] },
  'estilo-minimalista': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'estilo-neo-traditional': { width: 300, height: 300, aspectRatio: 1, sizes: [300] },
  'estilo-new-school': { width: 1080, height: 1346, aspectRatio: 0.8024, sizes: [480, 960] },
  'estilo-old-school': { width: 736, height: 1029, aspectRatio: 0.7153, sizes: [480] },
  'estilo-ornamental': { width: 750, height: 937, aspectRatio: 0.8004, sizes: [480] },
  'estilo-realismo-colorido': { width: 736, height: 982, aspectRatio: 0.7495, sizes: [480] },
  'estilo-realismo-preto-e-cinza': { width: 736, height: 920, aspectRatio: 0.8, sizes: [480] },
  'estilo-sketch': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'estilo-trash-polka': { width: 700, height: 705, aspectRatio: 0.9929, sizes: [480] },
  'estilo-tribal': { width: 480, height: 480, aspectRatio: 1, sizes: [480] },
  'estilo-xilogravura': { width: 1080, height: 2280, aspectRatio: 0.4737, sizes: [480, 960] },
  'fallon-michael-equcs66pts0': { width: 3648, height: 5472, aspectRatio: 0.6667, sizes: [480, 960, 1600] },
  'inks-machines': { width: 1588, height: 1045, aspectRatio: 1.5196, sizes: [480, 960] },
  'janko-ferlic-visezp-detu': { width: 5304, height: 7952, aspectRatio: 0.667, sizes: [480, 960, 1600] },
  'jose-pinto-rebc6ee8jns': { width: 2624, height: 3936, aspectRatio: 0.6667, sizes: [480, 960, 1600] },
  'kristian-angelo-xyjzvul4-ty': { width: 3936, height: 2216, aspectRatio: 1.7762, sizes: [480, 960, 1600] },
  'sherman-yang-zoyowsanhxo': { width: 3573, height: 4466, aspectRatio: 0.8, sizes: [480, 960, 1600] },
  'ta-focando-k-vbjak6rok': { width: 4000, height: 6000, aspectRatio: 0.6667, sizes: [480, 960, 1600] },
  'tattoo-aftercare': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'tattoo-artist-practicing-on-synthetic-skin': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'tattoo-needle-disposal-in-studio': { width: 1122, height: 1402, aspectRatio: 0.8003, sizes: [480, 960] },
  'tattoo-studio-consent-form': { width: 1312, height: 1199, aspectRatio: 1.0942, sizes: [480, 960] },
} as const satisfies Record<string, ImageDerivative>;

export type ImageId = keyof typeof imageManifest;

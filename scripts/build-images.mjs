/**
 * Gera os derivados servidos ao usuário a partir dos originais em
 * `public/images/source/`. Os originais somam ~33 MB e são removidos de
 * `dist` pelo postbuild, portanto nunca vão para o ar. Aqui
 * saem AVIF e WebP em três larguras, mais as dimensões que o componente usa
 * para reservar espaço (e manter CLS em zero).
 *
 * Uso: npm run build:images
 */
import { readdir, mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const SOURCE = 'public/images/source';
const OUT = 'public/images/generated';
const WIDTHS = [480, 960, 1600];

/** Qualidades escolhidas por inspeção: acima disso o ganho visual some. */
const AVIF = { quality: 52, effort: 6 };
const WEBP = { quality: 74, effort: 5 };

if (existsSync(OUT)) await rm(OUT, { recursive: true });
await mkdir(OUT, { recursive: true });

const files = (await readdir(SOURCE)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
const manifest = {};
let totalBytes = 0;

for (const file of files) {
  const id = basename(file, extname(file))
    .replace(/-unsplash$/, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();

  const input = sharp(join(SOURCE, file), { failOn: 'none' }).rotate();
  const meta = await input.metadata();

  // Original menor que a menor largura da lista: sem isso ele entraria no
  // manifesto com `sizes: []` e o <picture> ficaria sem nenhum src.
  const widths = WIDTHS.filter((width) => width <= meta.width);
  if (widths.length === 0) widths.push(meta.width);

  const sizes = [];
  for (const width of widths) {
    for (const [format, options] of [
      ['avif', AVIF],
      ['webp', WEBP],
    ]) {
      const name = `${id}-${width}.${format}`;
      const info = await sharp(join(SOURCE, file), { failOn: 'none' })
        .rotate()
        .resize({ width, withoutEnlargement: true })
        [format](options)
        .toFile(join(OUT, name));
      totalBytes += info.size;
      if (format === 'avif') sizes.push(width);
    }
  }

  manifest[id] = {
    width: meta.width,
    height: meta.height,
    aspectRatio: Number((meta.width / meta.height).toFixed(4)),
    sizes,
  };

  console.log(`  ${id.padEnd(26)} ${meta.width}x${meta.height} → ${sizes.join(', ')}px`);
}

// O manifesto vai para o código-fonte, não para public/: assim o TypeScript
// avisa quando um id citado no conteúdo não tem derivado gerado.
const entries = Object.entries(manifest)
  .map(
    ([id, m]) =>
      `  '${id}': { width: ${m.width}, height: ${m.height}, aspectRatio: ${m.aspectRatio}, sizes: [${m.sizes.join(', ')}] },`,
  )
  .join('\n');

await writeFile(
  'src/content/image-manifest.ts',
  `/**
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
${entries}
} as const satisfies Record<string, ImageDerivative>;

export type ImageId = keyof typeof imageManifest;
`,
);

console.log(
  `\n${files.length} imagens · ${Object.values(manifest).reduce((n, m) => n + m.sizes.length * 2, 0)} derivados · ${(totalBytes / 1024 / 1024).toFixed(1)} MB no total`,
);

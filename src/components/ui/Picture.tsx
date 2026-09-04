import { imageManifest } from '@/content/image-manifest';
import { images, type ImageKey } from '@/content/images';
import './ui.css';

interface PictureProps {
  name: ImageKey;
  /** Proporção da moldura. A foto é recortada para caber sem distorcer. */
  ratio?: '16/9' | '4/3' | '3/2' | '1/1' | '4/5' | '3/4';
  /**
   * Largura que a imagem ocupa no layout, em media queries — alimenta o
   * atributo `sizes` para o browser escolher o derivado certo.
   */
  sizes?: string;
  /** Só para a imagem que compõe o LCP; todo o resto carrega preguiçoso. */
  priority?: boolean;
  className?: string;
}

/**
 * AVIF com WebP de reserva, em três larguras. A moldura já nasce com a
 * proporção final via `aspect-ratio`, então nada empurra o layout quando a
 * foto chega — CLS continua zero.
 */
export function Picture({ name, ratio = '3/2', sizes, priority, className }: PictureProps) {
  const image = images[name];
  const meta = imageManifest[image.id];
  const widths = meta.sizes;
  const largest = widths[widths.length - 1];

  const srcset = (format: 'avif' | 'webp') =>
    widths
      .map((width) => `/images/generated/${image.id}-${width}.${format} ${width}w`)
      .join(', ');

  return (
    <div
      className={['picture', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      <picture>
        <source type="image/avif" srcSet={srcset('avif')} sizes={sizes ?? '100vw'} />
        <source type="image/webp" srcSet={srcset('webp')} sizes={sizes ?? '100vw'} />
        <img
          src={`/images/generated/${image.id}-${largest}.webp`}
          alt={image.alt}
          width={meta.width}
          height={meta.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </picture>
    </div>
  );
}

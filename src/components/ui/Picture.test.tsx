import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Picture } from './Picture';
import { images } from '@/content/images';
import { imageManifest } from '@/content/image-manifest';

describe('Picture', () => {
  it('oferece AVIF antes de WebP', () => {
    const { container } = render(<Picture name="gloves" />);
    const sources = container.querySelectorAll('source');

    expect(sources).toHaveLength(2);
    expect(sources[0]).toHaveAttribute('type', 'image/avif');
    expect(sources[1]).toHaveAttribute('type', 'image/webp');
  });

  it('reserva o espaço com width/height do original — sem isso o CLS sobe', () => {
    render(<Picture name="gloves" />);
    const img = screen.getByAltText(images.gloves.alt);

    expect(img).toHaveAttribute('width', String(imageManifest[images.gloves.id].width));
    expect(img).toHaveAttribute('height', String(imageManifest[images.gloves.id].height));
  });

  it('carrega preguiçoso por padrão e com prioridade só quando pedido', () => {
    const { container, rerender } = render(<Picture name="gloves" />);
    expect(container.querySelector('img')).toHaveAttribute('loading', 'lazy');

    rerender(<Picture name="gloves" priority />);
    expect(container.querySelector('img')).toHaveAttribute('loading', 'eager');
  });

  it('lista todas as larguras geradas para o id', () => {
    const { container } = render(<Picture name="supplies" />);
    const srcset = container.querySelector('source')?.getAttribute('srcSet') ?? '';

    for (const width of imageManifest[images.supplies.id].sizes) {
      expect(srcset).toContain(`${width}w`);
    }
  });

  it('trata foto de ambientação como decorativa', () => {
    render(<Picture name="craft" />);
    // alt vazio: o leitor de tela pula em vez de anunciar enfeite.
    expect(screen.getByRole('presentation', { hidden: true })).toBeInTheDocument();
  });
});

describe('registro de imagens', () => {
  it('só cita ids que têm derivados gerados', () => {
    for (const image of Object.values(images)) {
      expect(imageManifest[image.id], `sem derivado para ${image.id}`).toBeDefined();
    }
  });

  it('descreve toda foto informativa e credita toda foto de terceiro', () => {
    for (const image of Object.values(images)) {
      // Alt vazio é permitido só para ambientação; o crédito nunca é.
      expect(image.credit.length, `sem crédito: ${image.id}`).toBeGreaterThan(0);
      if (image.alt !== '') {
        expect(image.alt.length, `alt curto demais: ${image.id}`).toBeGreaterThan(20);
      }
    }
  });
});

import type { ReactElement } from 'react';
import type { ProductCategory } from '@/content/products';

/**
 * Ícone por categoria de produto, mesma técnica das FlashOrnaments: traço
 * simples em `currentColor`, autoral e inline — sem foto de produto (não
 * temos arquivo nem licença) e sem lib de ícone no bundle.
 */
const icons: Record<ProductCategory, ReactElement> = {
  stencil: (
    <>
      <path d="M18 6h12v6l4 6v22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V18l4-6z" />
      <path d="M14 24h20" />
      <path d="M20 30c1.5 2 2.5 2 4 0s2.5-2 4 0" />
    </>
  ),
  aftercare: (
    <>
      <path d="M14 20h20v18a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" />
      <path d="M14 20c0-4 4-6 10-6s10 2 10 6" />
      <path d="M19 28c1.5-2 2.5-2 4 0s2.5 2 4 0" />
    </>
  ),
  film: (
    <>
      <rect x="8" y="12" width="24" height="16" rx="2" transform="rotate(-8 20 20)" />
      <rect x="16" y="20" width="24" height="16" rx="2" transform="rotate(-8 28 28)" />
    </>
  ),
  hygiene: (
    <>
      <path d="M24 6c6 8 10 14 10 19a10 10 0 1 1-20 0c0-5 4-11 10-19z" />
      <path d="M18 27a6 6 0 0 0 6 6" />
    </>
  ),
  ink: (
    <>
      <path d="M18 8h12v6l3 5v21a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V19l3-5z" />
      <path d="M15 24h18" />
      <circle cx="24" cy="16" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  needle: (
    <>
      <path d="M9 41L34 16" />
      <path d="M34 16l6-8-2 10z" />
      <path d="M13 32l4 4" />
      <g fill="currentColor" stroke="none">
        <circle cx="7" cy="33" r="1.6" />
        <circle cx="12" cy="43" r="1.6" />
        <circle cx="4" cy="43" r="1.6" />
      </g>
    </>
  ),
  machine: (
    <>
      <path d="M15 8l14 14" />
      <rect x="10" y="17" width="14" height="14" rx="3" transform="rotate(-45 17 24)" />
      <path d="M28 21l6 6-4 8-8-8z" />
      <path d="M30 35l-4 8" />
    </>
  ),
  accessories: (
    <>
      <circle cx="24" cy="24" r="15" />
      <path d="M14 19c5 3 15 3 20 0M14 29c5-3 15-3 20 0" />
    </>
  ),
};

export function ProductIcon({
  category,
  className,
}: {
  category: ProductCategory;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[category]}
    </svg>
  );
}

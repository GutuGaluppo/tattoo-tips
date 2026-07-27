import type { ReactElement } from 'react';
import type { OrnamentKey } from '@/content/tattoo-styles';

/**
 * Flash de linha para os verbetes de estilo.
 *
 * Traço grosso e forma fechada, como o clichê de jornal antigo: em 44px o
 * desenho ainda precisa ler. Tudo em `currentColor` e sem preenchimento por
 * padrão — quem herda a cor é o card, e a impressão sai em preto sozinha.
 *
 * São autorais e inline pelo mesmo motivo das outras ilustrações do site:
 * nenhuma requisição a terceiros e nenhuma lib de ícone no bundle.
 */
const ornaments: Record<OrnamentKey, ReactElement> = {
  swallow: (
    <>
      <path d="M22 23C16 10 9 6 4 11c2 7 9 11 18 12z" />
      <path d="M26 23C32 10 39 6 44 11c-2 7-9 11-18 12z" />
      <ellipse cx="24" cy="21" rx="2.8" ry="5" fill="currentColor" stroke="none" />
      <path d="M24 26l-5 13 5-4 5 4z" />
    </>
  ),
  rose: (
    <>
      <path d="M37 21a6 6 0 0 1-3.81 9.19 6 6 0 0 1-9.19 3.81 6 6 0 0 1-9.19-3.81 6 6 0 0 1-3.81-9.19 6 6 0 0 1 3.81-9.19 6 6 0 0 1 9.19-3.81 6 6 0 0 1 9.19 3.81 6 6 0 0 1 3.81 9.19z" />
      <path d="M24 12a9 9 0 1 1-9 9 5.5 5.5 0 1 1 5.5-5.5" />
      <path d="M16 34c-6 3-10 6-12 11 6 1 11-2 14-7" />
      <path d="M32 34c6 3 10 6 12 11-6 1-11-2-14-7" />
    </>
  ),
  wave: (
    <>
      <path d="M4 17c5-9 12-9 16 0 4-9 11-9 15 0 3-6 6-7 9-3" />
      <path d="M4 29c5-9 12-9 16 0 4-9 11-9 15 0 3-6 6-7 9-3" />
      <path d="M4 41c5-9 12-9 16 0 4-9 11-9 15 0 3-6 6-7 9-3" />
    </>
  ),
  skull: (
    <>
      <path d="M12 23c0-7 5-13 12-13s12 6 12 13c0 5-2 8-4 10v5c0 2-2 4-4 4h-8c-2 0-4-2-4-4v-5c-2-2-4-5-4-10z" />
      <ellipse cx="18" cy="23" rx="3.4" ry="4" fill="currentColor" stroke="none" />
      <ellipse cx="30" cy="23" rx="3.4" ry="4" fill="currentColor" stroke="none" />
      <path d="M24 29l-2.5 5h5z" fill="currentColor" stroke="none" />
      <path d="M20 38v4M24 38v4M28 38v4" />
    </>
  ),
  eye: (
    <>
      <path d="M4 24c6-9 12-13 20-13s14 4 20 13c-6 9-12 13-20 13S10 33 4 24z" />
      <circle cx="24" cy="24" r="6.5" />
      <circle cx="24" cy="24" r="2.6" fill="currentColor" stroke="none" />
      <path d="M24 4v4M9 11l2 3M39 11l-2 3" />
    </>
  ),
  arrow: (
    <>
      <path d="M7 41L38 10" />
      <path d="M29 10h10v10" />
      <path d="M6 33l9 9M11 28l9 9M16 23l9 9" />
    </>
  ),
  crescent: (
    <path
      d="M31 5a19 19 0 1 0 11 31A16 16 0 0 1 31 5z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  ),
  star: (
    <polygon
      points="24,6 28.7,18.5 42.1,19.1 31.6,27.5 35.2,40.4 24,33 12.8,40.4 16.4,27.5 5.9,19.1 19.3,18.5"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  ),
  sun: (
    <>
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
      <path d="M36 24h7M32.5 32.5l5 5M24 36v7M15.5 32.5l-5 5M12 24H5M15.5 15.5l-5-5M24 12V5M32.5 15.5l5-5" />
    </>
  ),
  diamond: (
    <>
      <path d="M24 5l19 19-19 19L5 24z" />
      <path d="M24 13l11 11-11 11-11-11z" />
      <path d="M5 24h38M24 5v38" />
    </>
  ),
  web: (
    <>
      <path d="M4 4v40M4 4l12 36M4 4l26 26M4 4l36 12M4 4h40" />
      <path d="M4 14q9-2 10-10M4 24q17-4 20-20M4 34q25-6 30-30M4 44q34-8 40-40" />
    </>
  ),
  mandala: (
    <>
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="11" />
      <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      <g fill="currentColor" stroke="none">
        <circle cx="39.5" cy="24" r="1.7" />
        <circle cx="35" cy="35" r="1.7" />
        <circle cx="24" cy="39.5" r="1.7" />
        <circle cx="13" cy="35" r="1.7" />
        <circle cx="8.5" cy="24" r="1.7" />
        <circle cx="13" cy="13" r="1.7" />
        <circle cx="24" cy="8.5" r="1.7" />
        <circle cx="35" cy="13" r="1.7" />
      </g>
    </>
  ),
  cross: (
    <>
      <path d="M20 12h8v9h9v8h-9v16h-8V29h-9v-8h9z" />
      <path d="M24 3v5M12 6l3 4M36 6l-3 4M5 15l4 2M43 15l-4 2" />
    </>
  ),
  banner: (
    <>
      <path d="M9 17c8-4 12-4 15 0s7 4 15 0v13c-8 4-11 4-15 0s-7-4-15 0z" />
      <path d="M9 17l-6 3 6 5M39 17l6 3-6 5" />
      <path d="M17 23h14" />
    </>
  ),
  bomb: (
    <>
      <circle cx="21" cy="30" r="12" />
      <path d="M26 21l4-4 6 6-4 4" />
      <path d="M33 20c5-2 6-6 4-11" />
      <path d="M37 5l3-3M40 8l4-1M34 6l-2-4" />
    </>
  ),
  heart: (
    <path d="M24 41C10 31 6 25 6 18c0-6 4-10 9-10 4 0 7 2 9 5 2-3 5-5 9-5 5 0 9 4 9 10 0 7-4 13-18 23z" />
  ),
  dagger: (
    <>
      <path d="M24 44l-5-28h10z" />
      <path d="M10 16h28" />
      <path d="M22 16V9h4v7" />
      <circle cx="24" cy="6" r="3" />
    </>
  ),
  snake: (
    <>
      <path d="M7 42c14 2 18-6 12-12S9 20 13 13s13-7 19-1" />
      <circle cx="34" cy="14" r="4.5" />
      <path d="M38 14h5M43 14l-3-2M43 14l-3 2" />
      <circle cx="34" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  anchor: (
    <>
      <circle cx="24" cy="8" r="4" />
      <path d="M24 12v30" />
      <path d="M14 19h20" />
      <path d="M9 29c0 8 7 13 15 13s15-5 15-13" />
      <path d="M9 29l-4 4 6 1M39 29l4 4-6 1" />
    </>
  ),
  ship: (
    <>
      <path d="M5 32h38l-6 9H11z" />
      <path d="M24 32V4" />
      <path d="M26 8c7 3 11 7 12 11H26z" />
      <path d="M22 10c-6 3-9 6-10 9h10z" />
      <path d="M24 4h8l-3 3 3 3h-8" />
    </>
  ),
  needle: (
    <>
      <path d="M10 42L33 17" />
      <path d="M33 17l7-9-3 11z" />
      <path d="M14 33l4 4" />
      <g fill="currentColor" stroke="none">
        <circle cx="8" cy="34" r="1.6" />
        <circle cx="13" cy="44" r="1.6" />
        <circle cx="5" cy="44" r="1.6" />
      </g>
    </>
  ),
};

export function FlashOrnament({ name, className }: { name: OrnamentKey; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ornaments[name]}
    </svg>
  );
}

/** Filete tipográfico entre seções: rosácea central com duas hastes. */
export function TypographicRule({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M0 8h96M144 8h96" />
      <path d="M104 8h8M128 8h8" />
      <path d="M120 2l4 6-4 6-4-6z" fill="currentColor" />
    </svg>
  );
}

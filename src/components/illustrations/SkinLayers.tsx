/**
 * Corte esquemático da pele mostrando onde o pigmento precisa ficar.
 * Ilustração autoral em SVG inline: zero requisições, zero CLS, escala sem
 * perda e acompanha o tema por currentColor.
 */
export function SkinLayers({ titleId }: { titleId: string }) {
  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-labelledby={titleId}
      className="illustration illustration-skin"
    >
      <title id={titleId}>
        Corte da pele em três camadas: epiderme, derme e hipoderme. O pigmento estável fica na
        derme; pigmento depositado até a hipoderme se espalha e borra (blowout).
      </title>

      <defs>
        <linearGradient id="epidermis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9cfc9" />
          <stop offset="100%" stopColor="#cfc3bc" />
        </linearGradient>
        <linearGradient id="dermis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0b8b4" />
          <stop offset="100%" stopColor="#d0a29f" />
        </linearGradient>
        <linearGradient id="hypodermis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3d6c4" />
          <stop offset="100%" stopColor="#d6c6b0" />
        </linearGradient>
        <filter id="blur-blowout" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* camadas */}
      <rect x="0" y="60" width="640" height="62" fill="url(#epidermis)" />
      <rect x="0" y="122" width="640" height="108" fill="url(#dermis)" />
      <rect x="0" y="230" width="640" height="90" fill="url(#hypodermis)" />

      <g stroke="rgba(30,30,30,0.22)" strokeWidth="1">
        <line x1="0" y1="122" x2="640" y2="122" />
        <line x1="0" y1="230" x2="640" y2="230" />
      </g>

      {/* rótulos das camadas */}
      <g
        fill="#55514f"
        fontSize="13"
        fontFamily="Inter Variable, Inter, sans-serif"
        letterSpacing="0.08em"
      >
        <text x="16" y="86">
          EPIDERME
        </text>
        <text x="16" y="146">
          DERME
        </text>
        <text x="16" y="254">
          HIPODERME
        </text>
      </g>

      {/* agulha na profundidade correta */}
      <g>
        <path d="M232 0 L232 150" stroke="#1e1e1e" strokeWidth="3" strokeLinecap="round" />
        <path d="M232 150 l-6 -14 h12 z" fill="#1e1e1e" />
        <ellipse cx="232" cy="162" rx="26" ry="11" fill="#1e1e1e" opacity="0.92" />
        <text
          x="232"
          y="206"
          fill="#175435"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          fontFamily="Inter Variable, Inter, sans-serif"
        >
          Pigmento estável
        </text>
        <text
          x="232"
          y="224"
          fill="#55514f"
          fontSize="12"
          textAnchor="middle"
          fontFamily="Inter Variable, Inter, sans-serif"
        >
          depositado na derme
        </text>
      </g>

      {/* agulha profunda demais — blowout */}
      <g>
        <path d="M452 0 L452 252" stroke="#1e1e1e" strokeWidth="3" strokeLinecap="round" />
        <path d="M452 252 l-6 -14 h12 z" fill="#1e1e1e" />
        <ellipse
          cx="452"
          cy="264"
          rx="52"
          ry="20"
          fill="#1e1e1e"
          opacity="0.75"
          filter="url(#blur-blowout)"
        />
        <text
          x="452"
          y="304"
          fill="#a8241a"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          fontFamily="Inter Variable, Inter, sans-serif"
        >
          Blowout
        </text>
        <text
          x="452"
          y="40"
          fill="#55514f"
          fontSize="12"
          textAnchor="middle"
          fontFamily="Inter Variable, Inter, sans-serif"
        >
          profundidade excessiva
        </text>
      </g>

      <text
        x="232"
        y="40"
        fill="#55514f"
        fontSize="12"
        textAnchor="middle"
        fontFamily="Inter Variable, Inter, sans-serif"
      >
        profundidade adequada
      </text>
    </svg>
  );
}

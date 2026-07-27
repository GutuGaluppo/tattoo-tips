/**
 * Quatro estágios do aspecto da pele durante a cicatrização. Serve de apoio
 * visual à linha do tempo, sem usar fotografias clínicas de terceiros.
 */
const STAGES = [
  { label: 'Dia 0–1', opacity: 1, glow: 0.55, flake: 0 },
  { label: 'Dias 2–6', opacity: 0.92, glow: 0.3, flake: 0.35 },
  { label: 'Semanas 1–3', opacity: 0.78, glow: 0.12, flake: 0.7 },
  { label: 'Semanas 3–6', opacity: 0.95, glow: 0, flake: 0 },
];

export function HealingStages({ titleId }: { titleId: string }) {
  return (
    <svg
      viewBox="0 0 640 200"
      role="img"
      aria-labelledby={titleId}
      className="illustration illustration-healing"
    >
      <title id={titleId}>
        Quatro estágios do aspecto de uma tatuagem em cicatrização: vermelhidão e brilho no primeiro
        dia, exsudato diminuindo nos primeiros dias, descamação entre a primeira e a terceira semana
        e superfície estável entre a terceira e a sexta semana.
      </title>

      {STAGES.map((stage, index) => {
        const x = 30 + index * 152;
        return (
          <g key={stage.label}>
            {/* halo de vermelhidão */}
            {stage.glow > 0 && (
              <circle cx={x + 55} cy="80" r="62" fill="#ea7060" opacity={stage.glow * 0.5} />
            )}
            <circle cx={x + 55} cy="80" r="48" fill="#f2f2f2" stroke="rgba(30,30,30,0.22)" />

            {/* traço da tatuagem */}
            <g opacity={stage.opacity}>
              <path
                d={`M${x + 30} 92 q25 -34 50 0`}
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx={x + 55} cy="66" r="7" fill="#1e1e1e" />
            </g>

            {/* descamação */}
            {stage.flake > 0 && (
              <g opacity={stage.flake} fill="#55514f">
                <circle cx={x + 36} cy="60" r="2.4" />
                <circle cx={x + 74} cy="98" r="2" />
                <circle cx={x + 62} cy="48" r="1.8" />
                <circle cx={x + 44} cy="104" r="2.2" />
              </g>
            )}

            <text
              x={x + 55}
              y="164"
              fill="#55514f"
              fontSize="13"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="Inter Variable, Inter, sans-serif"
            >
              {stage.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

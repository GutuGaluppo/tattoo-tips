import { useCallback, useEffect, useRef, useState } from 'react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLocale } from '@/i18n/useLocale';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Meta';
import './pages.css';
import {
  STENCIL_HEIGHT,
  STENCIL_SHAPES,
  STENCIL_WIDTH,
  interpolate,
  scoreDrawing,
  type Score,
  type Vec,
} from './skillsScore';
import './skills-test.css';

/** Espessura base do traço, em px CSS, por configuração de agulha. */
const NEEDLES = [
  { id: '3RL', width: 2.5 },
  { id: '7RL', width: 5 },
  { id: '11RL', width: 8 },
] as const;

type NeedleId = (typeof NEEDLES)[number]['id'];

const INK = '#141213';

interface Point {
  x: number;
  y: number;
  time: number;
}

/**
 * Painel de "pele" para treinar linha com o mouse. O traço vive só no canvas:
 * fora do frame não há listener, então nada é riscado no resto da página.
 */
export default function SkillsTest() {
  const { dict } = useLocale();
  const t = dict.skillsTest;

  useDocumentMeta({ title: t.metaTitle, description: t.metaDescription });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPoint = useRef<Point | null>(null);
  const lastWidth = useRef(0);
  const [needle, setNeedle] = useState<NeedleId>('7RL');
  const [showStencil, setShowStencil] = useState(true);
  const [drawing, setDrawing] = useState(false);
  const [score, setScore] = useState<Score | null>(null);
  /** Tinta já riscada, em coordenadas do stencil — base da pontuação. */
  const ink = useRef<Vec[]>([]);

  const baseWidth = NEEDLES.find((item) => item.id === needle)?.width ?? 5;

  // Mantém o buffer do canvas na resolução real da tela, preservando o que já
  // foi desenhado quando o frame muda de tamanho.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      const nextWidth = Math.round(width * ratio);
      const nextHeight = Math.round(height * ratio);
      if (nextWidth === canvas.width && nextHeight === canvas.height) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      let snapshot: HTMLCanvasElement | null = null;
      if (canvas.width > 0 && canvas.height > 0) {
        snapshot = document.createElement('canvas');
        snapshot.width = canvas.width;
        snapshot.height = canvas.height;
        snapshot.getContext('2d')?.drawImage(canvas, 0, 0);
      }

      canvas.width = nextWidth;
      canvas.height = nextHeight;
      if (snapshot) context.drawImage(snapshot, 0, 0, nextWidth, nextHeight);
    };

    resize();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  const pointFrom = (event: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top, time: event.timeStamp };
  };

  const stroke = useCallback(
    (from: Point, to: Point) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      if (!canvas || !context) return;

      // Como na pele: mão rápida deixa a linha mais fina. A largura é
      // suavizada entre segmentos para não "pular" de espessura.
      const distance = Math.hypot(to.x - from.x, to.y - from.y);
      const elapsed = Math.max(to.time - from.time, 1);
      const speed = distance / elapsed;
      const target = baseWidth * Math.min(1.15, Math.max(0.45, 1.15 - speed * 0.35));
      const width = lastWidth.current ? lastWidth.current * 0.7 + target * 0.3 : target;
      lastWidth.current = width;

      const ratio = canvas.width / canvas.getBoundingClientRect().width || 1;
      context.save();
      context.scale(ratio, ratio);
      context.strokeStyle = INK;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.lineWidth = width;
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
      context.restore();

      // O stencil é desenhado com `meet`: mesma escala nos dois eixos,
      // centralizado no frame. Converte para as coordenadas dele.
      const rect = canvas.getBoundingClientRect();
      const scale = Math.min(rect.width / STENCIL_WIDTH, rect.height / STENCIL_HEIGHT) || 1;
      const offsetX = (rect.width - STENCIL_WIDTH * scale) / 2;
      const offsetY = (rect.height - STENCIL_HEIGHT * scale) / 2;
      const toStencil = (p: Point): Vec => ({
        x: (p.x - offsetX) / scale,
        y: (p.y - offsetY) / scale,
      });
      ink.current.push(...interpolate(toStencil(from), toStencil(to)));
    },
    [baseWidth],
  );

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const point = pointFrom(event);
    lastPoint.current = point;
    lastWidth.current = 0;
    // Um toque sem arrastar ainda deixa um ponto de tinta.
    stroke(point, { ...point, x: point.x + 0.01, time: point.time + 16 });
    setDrawing(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing || !lastPoint.current) return;
    const point = pointFrom(event);
    const rect = event.currentTarget.getBoundingClientRect();
    // Com o ponteiro capturado, eventos continuam chegando fora do frame;
    // o traço só é riscado enquanto o ponteiro está dentro dele.
    const inside = point.x >= 0 && point.y >= 0 && point.x <= rect.width && point.y <= rect.height;
    if (inside) stroke(lastPoint.current, point);
    else lastWidth.current = 0;
    lastPoint.current = point;
  };

  const endStroke = () => {
    if (!lastPoint.current) return;
    lastPoint.current = null;
    lastWidth.current = 0;
    setDrawing(false);
    setScore(scoreDrawing(ink.current));
  };

  const clear = () => {
    const canvas = canvasRef.current;
    canvas?.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    ink.current = [];
    setScore(null);
  };

  const rank = score ? t.ranks.find((item) => score.total >= item.min) : undefined;

  return (
    <div className="container page skills-test" data-no-auto-translate>
      <header className="page-header">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1>{t.title}</h1>
        <p className="page-description">{t.description}</p>
      </header>

      <div className="skills-toolbar" role="group" aria-label={t.toolbarLabel}>
        <fieldset className="skills-needles">
          <legend>{t.needle}</legend>
          {NEEDLES.map((item) => (
            <label key={item.id} className="skills-needle">
              <input
                type="radio"
                name="needle"
                value={item.id}
                checked={needle === item.id}
                onChange={() => setNeedle(item.id)}
              />
              <span>
                <span
                  className="skills-needle-dot"
                  style={{ width: item.width + 4, height: item.width + 4 }}
                  aria-hidden="true"
                />
                {item.id}
              </span>
            </label>
          ))}
        </fieldset>

        <label className="skills-stencil-toggle">
          <input
            type="checkbox"
            checked={showStencil}
            onChange={(event) => setShowStencil(event.target.checked)}
          />
          {t.stencil}
        </label>

        <Button variant="secondary" onClick={clear}>
          {t.clear}
        </Button>
      </div>

      <div className="skills-frame" data-drawing={drawing || undefined}>
        {showStencil && <Stencil />}
        <canvas
          ref={canvasRef}
          className="skills-canvas"
          role="img"
          aria-label={t.canvasLabel}
          data-cursor-running={drawing || undefined}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
          onLostPointerCapture={endStroke}
        />
      </div>

      <section className="skills-score" aria-labelledby="skills-score-title">
        <h2 id="skills-score-title" className="skills-score-title">
          {t.scoreLabel}
        </h2>
        <div className="skills-score-body" aria-live="polite">
          {score ? (
            <>
              <p className="skills-score-total">
                <strong>{score.total}</strong>
                <span>/100</span>
              </p>
              <div>
                {rank && <p className="skills-score-rank">{rank.label}</p>}
                <p className="skills-score-detail">
                  {t.coverage}: {Math.round(score.coverage * 100)}% · {t.precision}:{' '}
                  {Math.round(score.precision * 100)}%
                </p>
              </div>
            </>
          ) : (
            <p className="skills-score-empty">{t.scoreEmpty}</p>
          )}
        </div>
        <p className="skills-score-disclaimer">{t.scoreDisclaimer}</p>
      </section>

      <p className="skills-hint">{t.hint}</p>
    </div>
  );
}

/** Exercícios clássicos de linha: reta, curva, círculo e onda, em tracejado de stencil. */
function Stencil() {
  return (
    <svg
      className="skills-stencil"
      viewBox={`0 0 ${STENCIL_WIDTH} ${STENCIL_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {STENCIL_SHAPES.map((shape) => (
        <path key={shape.d} d={shape.d} />
      ))}
    </svg>
  );
}

/**
 * Pontuação "por diversão" do painel de prática: compara a tinta riscada com
 * o stencil. Tudo em coordenadas do stencil (viewBox 800 × 450), então o
 * tamanho do frame na tela não muda o resultado.
 */

export const STENCIL_WIDTH = 800;
export const STENCIL_HEIGHT = 450;

export interface Vec {
  x: number;
  y: number;
}

/** Distância máxima, em unidades do stencil, para a tinta contar como "em cima". */
export const TOLERANCE = 9;

/** Espaçamento entre as amostras de cada forma do stencil. */
const SAMPLE_STEP = 3;

function line(from: Vec, to: Vec): Vec[] {
  const length = Math.hypot(to.x - from.x, to.y - from.y);
  const steps = Math.max(1, Math.ceil(length / SAMPLE_STEP));
  return Array.from({ length: steps + 1 }, (_, i) => ({
    x: from.x + ((to.x - from.x) * i) / steps,
    y: from.y + ((to.y - from.y) * i) / steps,
  }));
}

function bezier(points: Vec[], at: (t: number) => Vec): Vec[] {
  // Comprimento aproximado pelo polígono de controle — basta para o passo.
  let length = 0;
  for (let i = 1; i < points.length; i += 1) {
    length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  const steps = Math.max(1, Math.ceil(length / SAMPLE_STEP));
  return Array.from({ length: steps + 1 }, (_, i) => at(i / steps));
}

function quadratic(p0: Vec, p1: Vec, p2: Vec): Vec[] {
  return bezier([p0, p1, p2], (t) => {
    const u = 1 - t;
    return {
      x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
      y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
    };
  });
}

function cubic(p0: Vec, p1: Vec, p2: Vec, p3: Vec): Vec[] {
  return bezier([p0, p1, p2, p3], (t) => {
    const u = 1 - t;
    return {
      x: u ** 3 * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t ** 3 * p3.x,
      y: u ** 3 * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t ** 3 * p3.y,
    };
  });
}

function circle(center: Vec, radius: number): Vec[] {
  const steps = Math.ceil((2 * Math.PI * radius) / SAMPLE_STEP);
  return Array.from({ length: steps }, (_, i) => ({
    x: center.x + radius * Math.cos((2 * Math.PI * i) / steps),
    y: center.y + radius * Math.sin((2 * Math.PI * i) / steps),
  }));
}

/**
 * Exercícios clássicos de linha. O `d` desenha o tracejado e as amostras
 * pontuam — os dois vêm da mesma geometria para nunca divergirem.
 */
export const STENCIL_SHAPES: { d: string; samples: Vec[] }[] = [
  { d: 'M80 80 H360', samples: line({ x: 80, y: 80 }, { x: 360, y: 80 }) },
  { d: 'M80 140 H360', samples: line({ x: 80, y: 140 }, { x: 360, y: 140 }) },
  { d: 'M80 200 H360', samples: line({ x: 80, y: 200 }, { x: 360, y: 200 }) },
  {
    d: 'M80 380 C 160 250, 280 250, 360 380',
    samples: cubic({ x: 80, y: 380 }, { x: 160, y: 250 }, { x: 280, y: 250 }, { x: 360, y: 380 }),
  },
  {
    d: 'M510 130 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0',
    samples: circle({ x: 590, y: 130 }, 80),
  },
  {
    d: 'M460 330 Q 500 270, 540 330 T 620 330 T 700 330',
    samples: [
      ...quadratic({ x: 460, y: 330 }, { x: 500, y: 270 }, { x: 540, y: 330 }),
      ...quadratic({ x: 540, y: 330 }, { x: 580, y: 390 }, { x: 620, y: 330 }),
      ...quadratic({ x: 620, y: 330 }, { x: 660, y: 270 }, { x: 700, y: 330 }),
    ],
  },
];

const STENCIL_SAMPLES = STENCIL_SHAPES.flatMap((shape) => shape.samples);

/** Grade espacial simples: vizinho mais próximo sem varrer todos os pontos. */
class PointGrid {
  private cells = new Map<string, Vec[]>();

  constructor(
    points: Vec[],
    private size: number,
  ) {
    for (const point of points) {
      const key = this.key(Math.floor(point.x / size), Math.floor(point.y / size));
      const cell = this.cells.get(key);
      if (cell) cell.push(point);
      else this.cells.set(key, [point]);
    }
  }

  private key(cx: number, cy: number) {
    return `${cx}:${cy}`;
  }

  /** Há algum ponto a no máximo `size` de distância? */
  hasNear(point: Vec): boolean {
    const cx = Math.floor(point.x / this.size);
    const cy = Math.floor(point.y / this.size);
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) {
        const cell = this.cells.get(this.key(cx + dx, cy + dy));
        if (cell?.some((p) => Math.hypot(p.x - point.x, p.y - point.y) <= this.size)) return true;
      }
    }
    return false;
  }
}

export interface Score {
  /** 0–100. */
  total: number;
  /** Quanto do stencil foi coberto de tinta (0–1). */
  coverage: number;
  /** Quanto da tinta caiu em cima do stencil (0–1). */
  precision: number;
}

/**
 * Cobertura × precisão: riscar só um pedaço rende pouco, e rabiscar o painel
 * inteiro para cobrir tudo também — a precisão despenca.
 */
export function scoreDrawing(ink: Vec[]): Score | null {
  if (ink.length === 0) return null;

  const inkGrid = new PointGrid(ink, TOLERANCE);
  const stencilGrid = new PointGrid(STENCIL_SAMPLES, TOLERANCE);

  const covered = STENCIL_SAMPLES.filter((point) => inkGrid.hasNear(point)).length;
  const onTarget = ink.filter((point) => stencilGrid.hasNear(point)).length;

  const coverage = covered / STENCIL_SAMPLES.length;
  const precision = onTarget / ink.length;

  return { total: Math.round(coverage * precision * 100), coverage, precision };
}

/** Pontos intermediários para que traços rápidos (segmentos longos) contem inteiros. */
export function interpolate(from: Vec, to: Vec): Vec[] {
  const length = Math.hypot(to.x - from.x, to.y - from.y);
  const steps = Math.max(1, Math.ceil(length / 2));
  return Array.from({ length: steps }, (_, i) => ({
    x: from.x + ((to.x - from.x) * (i + 1)) / steps,
    y: from.y + ((to.y - from.y) * (i + 1)) / steps,
  }));
}

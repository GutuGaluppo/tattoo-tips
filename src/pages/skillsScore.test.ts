import { describe, expect, it } from 'vitest';
import { STENCIL_SHAPES, scoreDrawing, type Vec } from './skillsScore';

const allStencil = STENCIL_SHAPES.flatMap((shape) => shape.samples);

describe('pontuação do painel de prática', () => {
  it('não pontua antes de qualquer traço', () => {
    expect(scoreDrawing([])).toBeNull();
  });

  it('dá nota máxima a quem cobre o stencil inteiro sem sair dele', () => {
    expect(scoreDrawing(allStencil)?.total).toBe(100);
  });

  it('tolera um tremor pequeno', () => {
    const shaky = allStencil.map((p, i) => ({ x: p.x, y: p.y + (i % 2 ? 4 : -4) }));
    expect(scoreDrawing(shaky)?.total).toBeGreaterThanOrEqual(90);
  });

  it('pontua pouco quem risca só uma das formas', () => {
    const score = scoreDrawing(STENCIL_SHAPES[0].samples);
    expect(score?.precision).toBe(1);
    expect(score?.total).toBeLessThan(20);
  });

  it('pune rabiscar o painel inteiro para cobrir tudo', () => {
    const scribble: Vec[] = [];
    for (let y = 0; y <= 450; y += 6) for (let x = 0; x <= 800; x += 2) scribble.push({ x, y });
    const score = scoreDrawing(scribble);
    expect(score?.coverage).toBe(1);
    expect(score?.total).toBeLessThan(25);
  });

  it('zera quem risca longe do stencil', () => {
    expect(
      scoreDrawing([
        { x: 450, y: 20 },
        { x: 452, y: 20 },
      ])?.total,
    ).toBe(0);
  });
});

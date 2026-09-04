import { describe, expect, it } from 'vitest';
import { buildCorrectionMailto } from './correctionEmail';

describe('buildCorrectionMailto', () => {
  it('endereça para o e-mail editorial e inclui o nome do site no assunto', () => {
    const mailto = buildCorrectionMailto('galuppodev@gmail.com', 'Tattoo Tips', {
      page: '',
      message: 'Faltou citar uma fonte.',
      name: '',
      email: '',
    });

    expect(mailto.startsWith('mailto:galuppodev@gmail.com?')).toBe(true);
    expect(mailto).toContain(`subject=${encodeURIComponent('Correção Tattoo Tips')}`);
    expect(mailto).toContain(encodeURIComponent('Faltou citar uma fonte.'));
  });

  it('omite campos opcionais vazios em vez de deixar linhas em branco', () => {
    const mailto = buildCorrectionMailto('galuppodev@gmail.com', 'Tattoo Tips', {
      page: '',
      message: 'Só a mensagem.',
      name: '',
      email: '',
    });
    const body = decodeURIComponent(mailto.split('&body=')[1] ?? '');

    expect(body).toBe('Só a mensagem.');
  });

  it('inclui página, nome e e-mail de contato quando preenchidos', () => {
    const mailto = buildCorrectionMailto('galuppodev@gmail.com', 'Tattoo Tips', {
      page: '/cliente/antes',
      message: 'Texto duplicado no segundo parágrafo.',
      name: 'Ana',
      email: 'ana@example.com',
    });
    const body = decodeURIComponent(mailto.split('&body=')[1] ?? '');

    expect(body).toContain('Página ou trecho: /cliente/antes');
    expect(body).toContain('Texto duplicado no segundo parágrafo.');
    expect(body).toContain('Nome: Ana');
    expect(body).toContain('Contato para retorno: ana@example.com');
  });

  it('ignora espaços em branco puros nos campos opcionais', () => {
    const mailto = buildCorrectionMailto('galuppodev@gmail.com', 'Tattoo Tips', {
      page: '   ',
      message: 'Mensagem.',
      name: '  ',
      email: '',
    });
    const body = decodeURIComponent(mailto.split('&body=')[1] ?? '');

    expect(body).toBe('Mensagem.');
  });
});

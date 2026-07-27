import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { VideoEmbed } from './VideoEmbed';

function renderVideo() {
  return render(
    <VideoEmbed
      youtubeId="3PmVJQUCm4E"
      title="Como lavar as mãos com água e sabão"
      sourceId="who-handwash-video"
    />,
  );
}

describe('VideoEmbed', () => {
  it('não cria iframe nem toca o YouTube antes do clique', () => {
    const { container } = renderVideo();

    expect(container.querySelector('iframe')).toBeNull();
    expect(container.innerHTML).not.toContain('youtube-nocookie.com/embed');
  });

  it('anuncia que o conteúdo vem do YouTube antes de carregá-lo', () => {
    renderVideo();

    expect(
      screen.getByRole('button', { name: /carrega conteúdo do youtube/i }),
    ).toBeInTheDocument();
  });

  it('carrega o player sem cookies somente após a ação do usuário', async () => {
    const user = userEvent.setup();
    const { container } = renderVideo();

    await user.click(screen.getByRole('button', { name: /reproduzir o vídeo/i }));

    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute('src')).toContain('youtube-nocookie.com/embed/3PmVJQUCm4E');
  });
});

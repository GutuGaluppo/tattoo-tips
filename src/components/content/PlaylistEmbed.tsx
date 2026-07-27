import { useState } from 'react';
import { Picture } from '@/components/ui/Picture';
import type { ImageKey } from '@/content/images';
import './content.css';

interface PlaylistEmbedProps {
  /** Id da playlist no Spotify. */
  spotifyId: string;
  title: string;
  description?: string;
  /** Prévia de faixas mostrada antes de carregar o player. */
  preview?: readonly string[];
  /** Player reduzido, para uso dentro de um guia. */
  compact?: boolean;
  /** Capa exibida ao lado da lista, antes de carregar o player. */
  image?: ImageKey;
}

/**
 * Mesma regra do VideoEmbed: nada do Spotify é carregado antes do clique.
 * Até lá a área é uma capa desenhada localmente — nenhuma requisição a
 * terceiros acontece sem ação do usuário, e o player pesado não entra no
 * caminho crítico de uma página de saúde.
 */
export function PlaylistEmbed({
  spotifyId,
  title,
  description,
  preview,
  compact,
  image,
}: PlaylistEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const height = compact ? 152 : 352;

  return (
    <figure
      className="playlist"
      style={{ '--playlist-height': `${height}px` } as React.CSSProperties}
    >
      {playing ? (
        <iframe
          className="playlist-frame"
          src={`https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator&theme=0`}
          title={title}
          height={height}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="playlist-facade" data-with-image={image ? '' : undefined}>
          {image && (
            <Picture
              name={image}
              ratio="1/1"
              sizes="(min-width: 960px) 220px, 40vw"
              className="playlist-cover"
            />
          )}

          <div className="playlist-head">
            <p className="playlist-kicker">Playlist</p>
            <p className="playlist-title">{title}</p>
            {description && <p className="playlist-description">{description}</p>}
          </div>

          {preview && preview.length > 0 && (
            <ol className="playlist-preview" aria-hidden="true">
              {preview.map((track, index) => (
                <li key={track}>
                  <span className="playlist-index">#{String(index + 1).padStart(2, '0')}</span>
                  <span className="playlist-track">{track}</span>
                  <span className="playlist-icon">
                    <svg viewBox="0 0 24 24" width="13" height="13" focusable="false">
                      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
              ))}
            </ol>
          )}

          <button
            type="button"
            className="btn btn-primary playlist-button"
            onClick={() => setPlaying(true)}
          >
            Abrir playlist
            <span className="visually-hidden"> — carrega o player do Spotify</span>
          </button>
        </div>
      )}

      <figcaption>
        O player é do Spotify e só carrega quando você abre.{' '}
        <a
          href={`https://open.spotify.com/playlist/${spotifyId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvir no Spotify
        </a>
      </figcaption>
    </figure>
  );
}

import { useState } from 'react';
import { getSource, type SourceId } from '@/content/references';
import { useLocale } from '@/i18n/useLocale';
import './content.css';

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  description?: string;
  sourceId: SourceId;
}

/**
 * Facade: nada do YouTube é carregado até o clique — nem o player (centenas de
 * KB de JS), nem a miniatura hospedada por terceiros. Antes disso a área é uma
 * capa desenhada localmente, o que também evita requisição de rastreamento sem
 * ação do usuário. O iframe usa o domínio sem cookies.
 */
export function VideoEmbed({ youtubeId, title, description, sourceId }: VideoEmbedProps) {
  const { dict } = useLocale();
  const [playing, setPlaying] = useState(false);
  const source = getSource(sourceId);

  return (
    <figure className="video-embed">
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={dict.content.playVideo(title, source.org)}
          >
            <span className="video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" focusable="false">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
            <span className="video-meta" aria-hidden="true">
              <span className="video-org">{source.org}</span>
              <span className="video-title">{title}</span>
              <span className="video-hint">{dict.content.loadFromYoutube}</span>
            </span>
          </button>
        )}
      </div>

      <figcaption>
        {description && <span className="video-description">{description}</span>}
        <a href={source.url} target="_blank" rel="noopener noreferrer">
          {dict.content.watchOnYoutube} — {source.org}
        </a>
      </figcaption>
    </figure>
  );
}

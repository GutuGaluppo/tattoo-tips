import { Link } from 'react-router-dom';
import type { NavItem } from '@/navigation';
import type { SourceId } from '@/content/references';
import { site } from '@/config/site';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Reveal } from '@/components/motion/Reveal';
import { VideoEmbed } from '@/components/content/VideoEmbed';
import { Card, CardLink } from '@/components/ui/Card';
import { Picture } from '@/components/ui/Picture';
import type { ImageKey } from '@/content/images';
import { Disclaimer, Eyebrow, LastReviewed } from '@/components/ui/Meta';
import './pages.css';

interface JourneyHubProps {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  steps: NavItem[];
  /** Bloco de destaque no topo (por exemplo, atalho para emergências). */
  highlight?: { label: string; title: string; to: string; tone: 'danger' | 'accent' };
  /** Uma foto por etapa publicada, na ordem de `steps`. */
  stepImages?: readonly ImageKey[];
  /** Vídeo de apoio exibido depois da lista de etapas. */
  video?: { youtubeId: string; title: string; description: string; sourceId: SourceId };
}

/**
 * Hub de jornada: a mesma estrutura serve cliente e tatuador, e mostra
 * explicitamente o que ainda não foi publicado em vez de esconder.
 */
export function JourneyHub({
  eyebrow,
  title,
  description,
  path,
  steps,
  highlight,
  stepImages,
  video,
}: JourneyHubProps) {
  useDocumentMeta({
    title,
    description,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      inLanguage: site.locale,
      url: `${site.url}${path}`,
    },
  });

  const published = steps.filter((step) => !step.upcoming);
  const upcoming = steps.filter((step) => step.upcoming);

  return (
    <div className="container hub">
      <header className="hub-header">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="hub-description">{description}</p>
        <LastReviewed date={site.lastReviewed} jurisdiction={site.jurisdiction} />
      </header>

      {highlight && (
        <Reveal>
          <Link to={highlight.to} className={`hub-highlight hub-highlight-${highlight.tone}`}>
            <span className="hub-highlight-label">{highlight.label}</span>
            <span className="hub-highlight-title">{highlight.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      )}

      <ol className="hub-list">
        {published.map((step, index) => (
          <Reveal as="li" key={step.to} delay={index * 70}>
            <Card as="div" to={step.to} className="hub-card media-card">
              {stepImages?.[index] && (
                <Picture
                  name={stepImages[index]}
                  ratio="3/2"
                  sizes="(min-width: 720px) 45vw, 92vw"
                />
              )}
              <div className="media-card-body">
                <span className="hub-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>
                  <CardLink to={step.to}>{step.label}</CardLink>
                </h2>
                <p>{step.description}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </ol>

      {video && (
        <Reveal className="hub-video">
          <h2>Antes de começar</h2>
          <VideoEmbed {...video} />
        </Reveal>
      )}

      {upcoming.length > 0 && (
        <section className="hub-upcoming">
          <h2>Em produção</h2>
          <p className="text-muted">
            Estas etapas ainda não foram publicadas. Preferimos não publicar orientação de
            biossegurança pela metade.
          </p>
          <ul>
            {upcoming.map((step) => (
              <li key={step.to}>
                <strong>{step.label}</strong>
                <span>{step.description}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Disclaimer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { artistJourney, clientJourney } from '@/navigation';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Parallax } from '@/components/motion/Parallax';
import { Reveal } from '@/components/motion/Reveal';
import { PlaylistEmbed } from '@/components/content/PlaylistEmbed';
import { Button } from '@/components/ui/Button';
import { Carousel } from '@/components/ui/Carousel';
import { Card, CardLink } from '@/components/ui/Card';
import { Picture } from '@/components/ui/Picture';
import { Eyebrow } from '@/components/ui/Meta';
import { sessionPlaylist } from '@/content/playlist';
import { useLocale } from '@/i18n/useLocale';
import { htmlLangTags } from '@/i18n/locale';
import { localizeHref } from '@/i18n/routes';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
import './pages.css';

/** Uma foto por etapa, na mesma ordem de `navigation.ts`. */
const CLIENT_IMAGES = ['ink', 'session', 'aftercare', 'healed'] as const;
const ARTIST_IMAGES = [
  'workstation',
  'supplies',
  'detail',
  'lining',
  'machine',
  'linework',
] as const;

export default function Home() {
  const { locale } = useLocale();

  useDocumentMeta({
    title: site.name,
    description: site.description,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      description: site.description,
      inLanguage: htmlLangTags[locale],
      url: site.url,
    },
  });

  return (
    <>
      <div className="container">
        <UntranslatedNotice />
      </div>

      {/* ---------------------------------------------- faixa de abertura */}
      <section className="hero band-dark">
        <Parallax className="hero-ink" speed={0.12} decorative>
          <InkSplatter />
        </Parallax>

        <div className="container hero-inner">
          <Reveal from="none" className="hero-masthead">
            <h1 className="wordmark">{site.name}</h1>
            <p className="hero-tagline">
              Antes,
              <br />
              durante e
              <br />
              depois.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <article className="hero-feature">
              <div className="hero-feature-text">
                <p className="hero-feature-date">Revisado em 26 de julho de 2026</p>
                <h2>Uma tatuagem é arte e também uma ferida aberta</h2>
                <p className="hero-feature-meta">6 min de leitura</p>
                <p>
                  Este manual reúne o que órgãos de saúde e dermatologia recomendam em cada etapa —
                  separado por quem precisa da informação, com fonte pública e data de revisão em
                  toda orientação sensível.
                </p>
                <ul className="tag-row">
                  <li className="tag">Aftercare</li>
                  <li className="tag">Biossegurança</li>
                  <li className="tag">Cicatrização</li>
                </ul>
              </div>

              {/* Única imagem com prioridade: é ela que compõe o LCP. */}
              <Picture
                name="craft"
                ratio="3/2"
                sizes="(min-width: 720px) 42vw, 92vw"
                priority
                className="hero-feature-figure"
              />
            </article>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------- escolha de público */}
      <section className="container section audience deferred-section">
        <Reveal>
          <h2 className="section-title">Por onde você entra</h2>
        </Reveal>

        <div className="audience-grid">
          <Reveal delay={60}>
            <Card
              tone="accent"
              className="audience-card"
              to={localizeHref('/cliente', locale)}
            >
              <Eyebrow>Sou cliente</Eyebrow>
              <h3>
                <CardLink to={localizeHref('/cliente', locale)}>Vou fazer uma tatuagem</CardLink>
              </h3>
              <p>
                Como se preparar, o que observar no estúdio, como cuidar depois e como saber se a
                cicatrização está no caminho certo.
              </p>
              <span className="card-cta" aria-hidden="true">
                Ver a jornada do cliente →
              </span>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="audience-card" to={localizeHref('/tatuador', locale)}>
              <Eyebrow>Sou tatuador</Eyebrow>
              <h3>
                <CardLink to={localizeHref('/tatuador', locale)}>Estou aprendendo a tatuar</CardLink>
              </h3>
              <p>
                Triagem honesta, higiene das mãos, bancada limpa, descarte correto e os limites
                técnicos que protegem você e o cliente.
              </p>
              <span className="card-cta" aria-hidden="true">
                Ver a jornada do tatuador →
              </span>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- acesso rápido */}
      <section className="container section quick-access deferred-section">
        <Reveal>
          <h2 className="visually-hidden">Acesso rápido</h2>
          <div className="quick-grid">
            <Link to={localizeHref('/cliente/cuidados-depois', locale)} className="quick-card">
              <span className="quick-label">Acabei de tatuar</span>
              <span className="quick-title">Cuidados depois</span>
            </Link>
            <Link
              to={localizeHref('/sinais-de-alerta', locale)}
              className="quick-card quick-card-warning"
            >
              <span className="quick-label">Está estranho</span>
              <span className="quick-title">Normal ou sinal de alerta</span>
            </Link>
            <Link
              to={localizeHref('/emergencias', locale)}
              className="quick-card quick-card-danger"
            >
              <span className="quick-label">Piorando agora</span>
              <span className="quick-title">Emergências</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------- playlist */}
      <section className="container section playlist-section deferred-section">
        <Reveal className="playlist-player">
          <PlaylistEmbed {...sessionPlaylist} image="studio" />
        </Reveal>

        <Reveal delay={80} className="playlist-pitch">
          <h2>Já ouviu a playlist da sessão?</h2>
          <p>
            Sessão longa cansa, e distração ajuda mais do que se imagina. Combine com quem vai
            tatuar: fone de ouvido é bem-vindo na maioria dos estúdios, desde que você continue
            conseguindo avisar se sentir algo errado.
          </p>
          <Button href={`https://open.spotify.com/playlist/${sessionPlaylist.spotifyId}`} size="lg">
            Playlist
          </Button>
        </Reveal>
      </section>

      {/* ------------------------------------------- jornada em carrossel */}
      <section className="container section deferred-section">
        <Carousel
          label="Jornada do cliente"
          lead={
            <div className="carousel-title-card">
              <h2>
                Jornada
                <br />
                do
                <br />
                cliente
              </h2>
              <p>Quatro etapas, na ordem em que você vai precisar delas.</p>
            </div>
          }
        >
          {clientJourney.map((step, index) => {
            const href = localizeHref(step.to, locale);
            return (
              <Card as="div" key={step.to} to={href} className="journey-card media-card">
                <Picture
                  name={CLIENT_IMAGES[index]}
                  ratio="4/3"
                  sizes="(min-width: 960px) 260px, 70vw"
                />
                <div className="media-card-body">
                  <span className="journey-index" aria-hidden="true">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>
                    <CardLink to={href}>{step.label}</CardLink>
                  </h3>
                  <p>{step.description}</p>
                </div>
              </Card>
            );
          })}
        </Carousel>
      </section>

      {/* ------------------------------------------------ jornada técnica */}
      <section className="container section deferred-section">
        <Reveal className="section-head">
          <h2 className="section-title">Para quem está começando a tatuar</h2>
          <p className="section-lead">
            O risco mais subestimado de quem começa não é errar o desenho — é deixar a biossegurança
            cair.
          </p>
        </Reveal>

        <Carousel label="Jornada do tatuador">
          {artistJourney.map((step, index) => {
            const href = step.upcoming ? undefined : localizeHref(step.to, locale);
            return (
              <Card
                as="div"
                key={step.to}
                to={href}
                className={
                  step.upcoming ? 'journey-card media-card is-upcoming' : 'journey-card media-card'
                }
              >
                <Picture
                  name={ARTIST_IMAGES[index]}
                  ratio="4/3"
                  sizes="(min-width: 960px) 260px, 70vw"
                />
                <div className="media-card-body">
                  <span className="journey-index" aria-hidden="true">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>
                    {step.upcoming ? step.label : <CardLink to={href!}>{step.label}</CardLink>}
                  </h3>
                  <p>{step.description}</p>
                  {step.upcoming && <span className="tag tag-quiet">Em produção</span>}
                </div>
              </Card>
            );
          })}
        </Carousel>
      </section>

      {/* ---------------------------------------------------- confiança */}
      <section className="container section trust deferred-section">
        <Reveal>
          <div className="trust-panel">
            <div className="trust-copy">
              <Eyebrow>Como este conteúdo é feito</Eyebrow>
              <h2>Toda orientação sensível tem fonte pública e data de revisão.</h2>
              <p>
                As recomendações vêm de EADV, OMS, CDC, FDA, AAD, ECHA e Anvisa. Quando uma regra
                vale só para um país, isso está dito. Quando é boa prática e não obrigação legal,
                isso também está dito.
              </p>
              <div className="trust-actions">
                <Button to={localizeHref('/fontes', locale)}>Ver fontes e metodologia</Button>
                <Button to={localizeHref('/sobre', locale)} variant="secondary">
                  Limites deste manual
                </Button>
              </div>
            </div>

            <ul className="trust-list">
              <li>
                <strong>Não substitui</strong>
                <span>avaliação médica presencial nem a legislação sanitária local.</span>
              </li>
              <li>
                <strong>Não vende</strong>
                <span>produto, curso, estúdio nem marca de tinta.</span>
              </li>
              <li>
                <strong>Não trata</strong>
                <span>faixa de regulagem como receita — apenas como ponto de partida.</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/** Forma orgânica de tinta, decorativa, na camada de parallax do hero. */
function InkSplatter() {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <path
          d="M300 60c62 34 118 62 140 122s-4 122-46 168-96 84-158 78-118-56-140-118 2-128 48-172 94-112 156-78Z"
          opacity="0.5"
        />
        <circle cx="152" cy="188" r="14" opacity="0.55" />
        <circle cx="470" cy="150" r="9" opacity="0.45" />
        <circle cx="452" cy="452" r="18" opacity="0.4" />
        <circle cx="118" cy="420" r="7" opacity="0.5" />
      </g>
    </svg>
  );
}

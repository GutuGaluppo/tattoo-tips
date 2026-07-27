import { useEffect, useState } from 'react';
import type { Guide } from '@/content/types';
import { site } from '@/config/site';
import { Disclaimer, Eyebrow, LastReviewed } from '@/components/ui/Meta';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/motion/Reveal';
import { BlockRenderer } from './BlockRenderer';
import { SourceList } from './SourceRefs';
import './content.css';

const AUDIENCE_LABEL: Record<Guide['audience'], string> = {
  cliente: 'Para quem vai tatuar',
  tatuador: 'Para quem tatua',
  ambos: 'Para clientes e tatuadores',
};

/** Destaca no sumário a seção que está sendo lida. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/**
 * Layout comum a todos os guias: cabeçalho, sumário lateral com marcação da
 * seção atual, seções ancoráveis (link compartilhável), aviso de escopo,
 * fontes e data de revisão.
 */
export function GuideLayout({ guide }: { guide: Guide }) {
  const sectionIds = guide.sections.map((section) => section.id);
  const active = useActiveSection(sectionIds);

  return (
    <article className="guide">
      <header className="guide-header">
        <Eyebrow>{AUDIENCE_LABEL[guide.audience]}</Eyebrow>
        <h1>{guide.title}</h1>
        <p className="guide-description">{guide.description}</p>
        <LastReviewed date={guide.lastReviewed} jurisdiction={guide.jurisdiction} />
      </header>

      {guide.image && (
        <Picture
          name={guide.image}
          ratio="3/2"
          sizes="(min-width: 1000px) 1160px, 92vw"
          priority
          className="guide-cover no-print"
        />
      )}

      <div className="guide-body">
        {guide.sections.length > 1 && (
          <nav className="guide-toc no-print" aria-label="Sumário deste guia">
            <p className="guide-toc-title">Nesta página</p>
            <ol>
              {guide.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active === section.id ? 'true' : undefined}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="guide-content">
          {guide.intro && <p className="guide-intro">{guide.intro}</p>}

          <Disclaimer technical={guide.technical} />

          {guide.sections.map((section, index) => (
            <Reveal
              as="section"
              key={section.id}
              className="guide-section deferred-section"
              delay={index === 0 ? 0 : 60}
            >
              <h2 id={section.id}>
                {section.title}
                <a
                  className="anchor-link no-print"
                  href={`#${section.id}`}
                  aria-label={`Link direto para a seção ${section.title}`}
                >
                  #
                </a>
              </h2>
              {section.summary && <p className="guide-section-summary">{section.summary}</p>}
              {section.blocks.map((block, blockIndex) => (
                <BlockRenderer key={`${section.id}-${blockIndex}`} block={block} />
              ))}
            </Reveal>
          ))}

          <SourceList ids={guide.sources} />

          <p className="print-note" hidden>
            {guide.title} — {site.name} ({site.url}) · Última revisão: {guide.lastReviewed}
          </p>
        </div>
      </div>
    </article>
  );
}

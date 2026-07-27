import type { Block } from '@/content/types';
import { AlertBox } from './AlertBox';
import { Checklist } from './Checklist';
import { ComparisonTable } from './ComparisonTable';
import { DataTable } from './DataTable';
import { Figure } from './Figure';
import { HealingTimeline } from './HealingTimeline';
import { PlaylistEmbed } from './PlaylistEmbed';
import { SourceRefs } from './SourceRefs';
import { StepFlow } from './StepFlow';
import { VideoEmbed } from './VideoEmbed';
import './content.css';

/**
 * Ponte única entre o conteúdo tipado (src/content) e os componentes.
 * Adicionar uma página nova passa a ser escrever dados, não JSX.
 */
export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="content-paragraph">
          {block.text}
          <SourceRefs ids={block.sources} />
        </p>
      );

    case 'list':
      return (
        <div className="content-list">
          {block.title && <h3>{block.title}</h3>}
          {block.ordered ? (
            <ol>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <SourceRefs ids={block.sources} block />
        </div>
      );

    case 'alert':
      return (
        <AlertBox level={block.level} title={block.title}>
          <p>
            {block.text}
            <SourceRefs ids={block.sources} />
          </p>
        </AlertBox>
      );

    case 'checklist':
      return <Checklist {...block} />;

    case 'comparison':
      return <ComparisonTable {...block} />;

    case 'table':
      return <DataTable {...block} />;

    case 'steps':
      return <StepFlow {...block} />;

    case 'timeline':
      return <HealingTimeline {...block} />;

    case 'video':
      return <VideoEmbed {...block} />;

    case 'playlist':
      return <PlaylistEmbed {...block} />;

    case 'figure':
      return <Figure {...block} />;
  }
}

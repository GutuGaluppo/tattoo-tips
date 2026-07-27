import { useId } from 'react';
import type { FigureBlock } from '@/content/types';
import { SkinLayers } from '@/components/illustrations/SkinLayers';
import { HealingStages } from '@/components/illustrations/HealingStages';
import { SourceRefs } from './SourceRefs';
import './content.css';

type FigureProps = Omit<FigureBlock, 'type'>;

export function Figure({ illustration, caption, sources }: FigureProps) {
  const titleId = useId();

  return (
    <figure className="figure">
      {illustration === 'skin-layers' ? (
        <SkinLayers titleId={titleId} />
      ) : (
        <HealingStages titleId={titleId} />
      )}
      <figcaption>
        {caption}
        <SourceRefs ids={sources} />
      </figcaption>
    </figure>
  );
}

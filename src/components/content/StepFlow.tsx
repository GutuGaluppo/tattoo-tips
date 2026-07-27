import type { StepsBlock } from '@/content/types';
import { SourceRefs } from './SourceRefs';
import './content.css';

type StepFlowProps = Omit<StepsBlock, 'type'>;

/**
 * Substitui os fluxogramas Mermaid do relatório de pesquisa: mesma informação,
 * como lista ordenada semântica — sem biblioteca de diagramas, sem render no
 * cliente e legível quando impresso.
 */
export function StepFlow({ title, steps, sources }: StepFlowProps) {
  return (
    <section className="step-flow">
      {title && <h3>{title}</h3>}
      <ol className="step-list">
        {steps.map((step, index) => (
          <li key={step.title} className="step" data-level={step.level}>
            <span className="step-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h4>{step.title}</h4>
              <p className="text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <SourceRefs ids={sources} block />
    </section>
  );
}

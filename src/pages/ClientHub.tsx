import { clientJourney } from '@/navigation';
import { JourneyHub } from './JourneyHub';

export default function ClientHub() {
  return (
    <JourneyHub
      eyebrow="Para quem vai tatuar"
      title="Jornada do cliente"
      description="Da decisão de tatuar até a cicatrização completa, com o que fazer e o que observar em cada etapa."
      steps={clientJourney}
      stepImages={['consent', 'session', 'aftercare', 'healed']}
      highlight={{
        label: 'Algo parece errado agora?',
        title: 'Comparar com os sinais de alerta',
        to: '/sinais-de-alerta',
        tone: 'danger',
      }}
    />
  );
}

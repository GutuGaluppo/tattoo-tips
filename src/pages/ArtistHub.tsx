import { artistJourney } from '@/navigation';
import { JourneyHub } from './JourneyHub';

export default function ArtistHub() {
  return (
    <JourneyHub
      eyebrow="Para quem tatua"
      title="Jornada de biossegurança"
      description="O risco mais subestimado de quem está começando não é errar o desenho — é deixar a biossegurança cair. Esta jornada trata o posto de trabalho como parte do trabalho artístico."
      steps={artistJourney}
      stepImages={['workstation']}
      highlight={{
        label: 'Acidente com perfurocortante?',
        title: 'Conduta imediata em emergências',
        to: '/emergencias',
        tone: 'danger',
      }}
      video={{
        youtubeId: '0DMM6L4VcJA',
        title: 'New to Tattooing? Watch This Before You Begin',
        description:
          'Material educacional comercial, em inglês. Útil como panorama de expectativas — não substitui norma sanitária nem mentoria presencial.',
        sourceId: 't101-beginners-video',
      }}
    />
  );
}

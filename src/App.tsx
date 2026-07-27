import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

/**
 * Uma chunk por rota: quem abre a home não baixa o conteúdo dos guias, e quem
 * chega direto em uma emergência baixa só o que aquela página precisa.
 */
const Home = lazy(() => import('@/pages/Home'));
const ClientHub = lazy(() => import('@/pages/ClientHub'));
const ArtistHub = lazy(() => import('@/pages/ArtistHub'));
const Before = lazy(() => import('@/pages/guides/Before'));
const SessionDay = lazy(() => import('@/pages/guides/SessionDay'));
const Aftercare = lazy(() => import('@/pages/guides/Aftercare'));
const Healing = lazy(() => import('@/pages/guides/Healing'));
const WarningSigns = lazy(() => import('@/pages/guides/WarningSigns'));
const Emergency = lazy(() => import('@/pages/guides/Emergency'));
const Screening = lazy(() => import('@/pages/guides/Screening'));
const TattooStyles = lazy(() => import('@/pages/TattooStyles'));
const Sources = lazy(() => import('@/pages/Sources'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteFallback() {
  return (
    <div className="container route-fallback" role="status" aria-live="polite">
      <span className="visually-hidden">Carregando conteúdo</span>
      <span className="route-fallback-bar" aria-hidden="true" />
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cliente" element={<ClientHub />} />
          <Route path="/cliente/antes" element={<Before />} />
          <Route path="/cliente/dia-da-sessao" element={<SessionDay />} />
          <Route path="/cliente/cuidados-depois" element={<Aftercare />} />
          <Route path="/cliente/cicatrizacao" element={<Healing />} />

          <Route path="/sinais-de-alerta" element={<WarningSigns />} />
          <Route path="/emergencias" element={<Emergency />} />

          <Route path="/tatuador" element={<ArtistHub />} />
          <Route path="/tatuador/triagem" element={<Screening />} />

          <Route path="/estilos" element={<TattooStyles />} />

          <Route path="/fontes" element={<Sources />} />
          <Route path="/sobre" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}

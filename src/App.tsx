import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { LocaleProvider } from '@/i18n/LocaleContext';
import { useLocale } from '@/i18n/useLocale';
import { locales } from '@/i18n/locale';
import { detectLocale, pathFor, routeIds, type RouteId } from '@/i18n/routes';

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
const Equipment = lazy(() => import('@/pages/Equipment'));
const EquipmentPro = lazy(() => import('@/pages/EquipmentPro'));
const Sources = lazy(() => import('@/pages/Sources'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteFallback() {
  const { dict } = useLocale();
  return (
    <div className="container route-fallback" role="status" aria-live="polite">
      <span className="visually-hidden">{dict.routeFallback}</span>
      <span className="route-fallback-bar" aria-hidden="true" />
    </div>
  );
}

/** Mesmo componente por rota, qualquer que seja o idioma — só o slug muda. */
const pageByRouteId: Record<RouteId, JSX.Element> = {
  home: <Home />,
  clientHub: <ClientHub />,
  clientBefore: <Before />,
  clientSessionDay: <SessionDay />,
  clientAftercare: <Aftercare />,
  clientHealing: <Healing />,
  warningSigns: <WarningSigns />,
  emergency: <Emergency />,
  artistHub: <ArtistHub />,
  artistScreening: <Screening />,
  styles: <TattooStyles />,
  equipmentHub: <Equipment />,
  equipmentPro: <EquipmentPro />,
  sources: <Sources />,
  about: <About />,
};

export default function App() {
  // A locale é lida direto da URL (não de um Route casado): assim o AppShell
  // (cabeçalho, rodapé) monta uma única vez e só troca o texto ao navegar,
  // em vez de remontar a cada rota.
  const { pathname } = useLocation();
  const locale = detectLocale(pathname);

  return (
    <LocaleProvider locale={locale}>
      <AppShell>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {locales.flatMap((loc) =>
              routeIds.map((id) => (
                <Route key={`${loc}:${id}`} path={pathFor(id, loc)} element={pageByRouteId[id]} />
              )),
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppShell>
    </LocaleProvider>
  );
}

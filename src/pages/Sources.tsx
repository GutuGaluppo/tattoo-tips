import { site } from '@/config/site';
import { allSources } from '@/content/references';
import { imageCredits } from '@/content/images';
import type { SourceId } from '@/content/references';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { SourceList } from '@/components/content/SourceRefs';
import { Eyebrow, LastReviewed } from '@/components/ui/Meta';
import { AlertBox } from '@/components/content/AlertBox';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
import './pages.css';

export default function Sources() {
  useDocumentMeta({
    title: 'Fontes e metodologia',
    description:
      'Todas as referências usadas neste manual, com organização, jurisdição e data de verificação, além do método editorial adotado.',
  });

  const ids = allSources.map((source) => source.id as SourceId);

  return (
    <div className="container page">
      <UntranslatedNotice />
      <header className="page-header">
        <Eyebrow>Transparência</Eyebrow>
        <h1>Fontes e metodologia</h1>
        <p className="page-description">
          Nenhuma orientação sensível deste site existe sem uma fonte pública que possa ser aberta,
          lida e conferida por você.
        </p>
        <LastReviewed date={site.lastReviewed} jurisdiction={site.jurisdiction} />
      </header>

      <div className="prose">
        <h2>Como o conteúdo é construído</h2>
        <ol className="method-list">
          <li>
            <strong>Prioridade de fonte.</strong> Órgãos reguladores e sociedades médicas vêm
            primeiro (OMS, EADV, CDC, FDA, AAD, ECHA, Anvisa). Material educacional de escolas e
            fabricantes só aparece em assunto técnico, e sempre identificado como tal.
          </li>
          <li>
            <strong>Separação entre lei e boa prática.</strong> Quando algo é exigência legal de um
            país específico, isso está escrito ao lado da recomendação. Norma da OSHA é norma dos
            Estados Unidos, não do Brasil.
          </li>
          <li>
            <strong>Nenhuma faixa técnica vira receita.</strong> Voltagem, stroke e escolha de
            agulha são apresentados como ponto de partida dependente de máquina, pele e produto.
          </li>
          <li>
            <strong>Nenhuma recomendação de marca por conveniência.</strong> Este site não vende
            produto, curso nem estúdio, e não recebe patrocínio de fabricante.
          </li>
          <li>
            <strong>Verificação de links.</strong> As URLs são checadas automaticamente. Sites que
            bloqueiam acesso automatizado ficam marcados para conferência manual.
          </li>
        </ol>

        <AlertBox level="info" title="Este conteúdo ainda não passou por revisão clínica formal">
          <p>
            As orientações foram extraídas de fontes públicas de órgãos de saúde e sociedades
            médicas, mas ainda não foram revisadas por profissional de saúde ou de biossegurança
            responsável identificado. Enquanto essa revisão não acontece, trate o material como
            ponto de partida informado — não como protocolo validado.
          </p>
        </AlertBox>

        <h2>Jurisdições citadas</h2>
        <ul className="jurisdiction-list">
          <li>
            <strong>BR</strong> — Brasil. Anvisa regulariza tintas; a fiscalização de estúdios é da
            vigilância sanitária municipal ou estadual.
          </li>
          <li>
            <strong>EU</strong> — União Europeia. O REACH restringe substâncias em tintas e PMU.
          </li>
          <li>
            <strong>US</strong> — Estados Unidos. OSHA regula exposição ocupacional a patógenos de
            transmissão sanguínea; a FDA trata tintas como cosmético.
          </li>
          <li>
            <strong>global</strong> — orientação sem recorte territorial, como a higiene das mãos da
            OMS.
          </li>
        </ul>
      </div>

      <SourceList ids={ids} title={`Todas as fontes (${ids.length})`} />

      <section className="source-list" aria-label="Créditos das fotografias">
        <h2>Fotografias</h2>
        <p className="text-muted">
          As ilustrações técnicas do site são autorais, em SVG. As fotografias vêm do Unsplash e são
          de terceiros — nenhuma delas documenta caso clínico, e nenhuma serve de referência para
          autodiagnóstico.
        </p>
        <ul>
          {imageCredits.map((image) => (
            <li key={image.id}>
              <a href={image.source} target="_blank" rel="noopener noreferrer">
                {image.credit}
              </a>
              <p className="source-meta">Unsplash · {image.id}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

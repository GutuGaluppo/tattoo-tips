import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { needleLegend, tattooStyles, type StyleSpan } from '@/content/tattoo-styles';
import { FlashOrnament, TypographicRule } from '@/components/illustrations/FlashOrnaments';
import { Disclaimer } from '@/components/ui/Meta';
import { Picture } from '@/components/ui/Picture';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
// Fontes só desta rota: entram na chunk de /estilos, não no bundle inicial.
import '@fontsource/unifrakturmaguntia/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/playfair-display/400-italic.css';
import './tattoo-styles.css';

/**
 * Largura real do clichê por módulo, para o browser escolher o derivado
 * certo. Em 6 colunas de 1160px: 2 ≈ 360px, 3 ≈ 550px, 4 ≈ 740px.
 */
const CUT_SIZES: Record<StyleSpan, string> = {
  2: '(min-width: 64rem) 22vw, (min-width: 48rem) 34vw, 90vw',
  3: '(min-width: 64rem) 33vw, (min-width: 48rem) 34vw, 90vw',
  4: '(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 90vw',
};

const reviewDate = new Date(`${site.lastReviewed}T12:00:00`);

const dateline = reviewDate
  .toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  .toUpperCase();

/**
 * Página em forma de jornal antigo: nameplate, filetes duplos, colunas,
 * capitular e verbetes emoldurados como pranchas de flash.
 *
 * O tema old school é o próprio assunto da primeira entrada da tabela, então
 * a página adota a linguagem gráfica do período — clichê de linha grossa,
 * papel envelhecido e vermelho de tinta — em vez do papel neutro do resto do
 * manual. A escala e o contraste continuam os do design system.
 */
export default function TattooStyles() {
  useDocumentMeta({
    title: 'Guia dos principais estilos de tatuagem',
    description:
      'Vinte e um estilos de tatuagem em formato de jornal: técnicas envolvidas, agulhas usadas como ponto de partida, paleta característica, onde cada um funciona melhor e o que observar antes de fechar o desenho.',
  });

  return (
    <div className="gazette">
      <div className="container">
        <UntranslatedNotice />
        <article className="gazette-sheet">
          <header className="gazette-masthead">
            <p className="gazette-overline">
              <span>Suplemento ilustrado</span>
              <span aria-hidden="true">✶</span>
              <span>{site.name}</span>
            </p>

            <p className="gazette-nameplate">A Gazeta da Agulha</p>

            <p className="gazette-dateline">
              <span>Exemplar gratuito</span>
              <span aria-hidden="true">·</span>
              <span>Edição nº 1</span>
              <span aria-hidden="true">·</span>
              <span>Brasil</span>
              <span aria-hidden="true">·</span>
              <time dateTime={site.lastReviewed}>{dateline}</time>
              <span aria-hidden="true">·</span>
              <span>{tattooStyles.length} verbetes</span>
            </p>

            <div className="gazette-headline">
              <p className="gazette-kicker">Repertório visual · Prancheta do estúdio</p>
              <h1>Os principais estilos de tatuagem</h1>
              <p className="gazette-deck">
                Do tradicional americano ao handpoke: técnica, paleta, corpo e agulha de cada
                estilo, em uma folha só.
              </p>
            </div>
          </header>

          <section className="gazette-lede" aria-labelledby="abertura">
            <h2 className="visually-hidden" id="abertura">
              Como ler esta edição
            </h2>

            <div className="gazette-lede-text">
              <p className="has-dropcap">
                As agulhas listadas em cada verbete são <strong>referência inicial</strong>, não
                regra fixa. A escolha muda conforme o tamanho do desenho, a elasticidade da pele, a
                máquina, o stroke, o pigmento e a técnica de quem tatua. Dois artistas podem fechar
                o mesmo desenho com configurações diferentes e chegar aos dois a um bom resultado. O
                que a tabela oferece é o ponto de partida mais comum de cada estilo — e,
                principalmente, o que cada um cobra de quem executa.
              </p>
            </div>

            <aside className="gazette-legend" aria-labelledby="legenda">
              <h2 id="legenda">Legenda rápida</h2>
              <dl>
                {needleLegend.map((entry) => (
                  <div key={entry.code}>
                    <dt>
                      <span className="legend-code">{entry.code}</span>
                      <span className="legend-label">{entry.label}</span>
                    </dt>
                    <dd>{entry.meaning}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>

          <TypographicRule className="gazette-rule" />

          <nav className="gazette-index" aria-labelledby="indice">
            <h2 id="indice">Índice desta edição</h2>
            <ol>
              {tattooStyles.map((style, index) => (
                <li key={style.id}>
                  <a href={`#${style.id}`}>
                    <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="index-name">{style.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <p className="gazette-notice" role="note">
            <strong>Sobre as imagens.</strong> O clichê de cada verbete é um exemplo do estilo,
            servido deste próprio site — nada de terceiros carrega nesta página. A autoria de parte
            deles ainda está em confirmação. O link no fim de cada verbete abre uma busca externa de
            imagens; reproduzir qualquer trabalho exige checar autoria e licença antes.
          </p>

          <section className="gazette-entries deferred-section" aria-labelledby="verbetes">
            <h2 className="visually-hidden" id="verbetes">
              Os estilos, um a um
            </h2>

            <div className="entry-grid">
              {tattooStyles.map((style, index) => (
                <article className="entry" id={style.id} key={style.id} data-span={style.span}>
                  <figure className="entry-cut">
                    <Picture
                      name={style.image}
                      ratio={style.ratio}
                      sizes={CUT_SIZES[style.span]}
                      className="entry-cut-picture"
                    />
                    <span className="entry-cut-vignette" aria-hidden="true" />
                  </figure>

                  <div className="entry-body">
                    <header className="entry-head">
                      <FlashOrnament name={style.ornament} className="entry-flash" />
                      <h3 className="entry-name">
                        {style.name}
                        {style.altName && <span className="entry-altname">ou {style.altName}</span>}
                      </h3>
                      <p className="entry-folio">
                        <span aria-hidden="true">Nº</span>
                        <span className="entry-number">{String(index + 1).padStart(2, '0')}</span>
                      </p>
                    </header>

                    <p className="entry-techniques">{style.techniques}</p>

                    <dl className="entry-specs">
                      <div className="spec spec-needles">
                        <dt>Agulhas</dt>
                        <dd>
                          <ul>
                            {style.needles.map((needle) => (
                              <li key={needle.codes}>
                                <span className="needle-code">{needle.codes}</span>
                                {needle.use && <span className="needle-use">{needle.use}</span>}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div className="spec">
                        <dt>Cores</dt>
                        <dd>{style.colors}</dd>
                      </div>
                      <div className="spec">
                        <dt>Onde funciona melhor</dt>
                        <dd>{style.placement}</dd>
                      </div>
                    </dl>

                    <p className="entry-note">{style.note}</p>

                    <a
                      className="entry-reference no-print"
                      href={style.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver imagens
                      <span className="visually-hidden">
                        {' '}
                        de {style.name} — busca externa, abre em nova aba
                      </span>
                      <span aria-hidden="true" className="entry-reference-arrow">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <TypographicRule className="gazette-rule" />

          <section className="gazette-editorial" aria-labelledby="local-do-corpo">
            <p className="gazette-kicker">Coluna do fim da folha</p>
            <h2 id="local-do-corpo">Observações importantes sobre o local do corpo</h2>

            <div className="editorial-columns">
              <p>
                Áreas planas e com pele relativamente estável — <strong>antebraço</strong>,{' '}
                <strong>parte externa do braço</strong>, <strong>coxa</strong> e{' '}
                <strong>panturrilha</strong> — facilitam linhas precisas, realismo e geometria.
              </p>
              <p>
                Regiões como{' '}
                <strong>costelas, barriga, joelhos, cotovelos, mãos, dedos e pés</strong> têm mais
                movimento, atrito ou renovação da pele. Por isso, detalhes muito pequenos e linhas
                extremamente finas perdem definição mais rápido ali.
              </p>
              <p>
                Estilos com contorno forte, espaço negativo bem definido e contraste consistente —
                tradicional, japonês e blackwork — costumam apresentar excelente leitura e
                envelhecimento. Já fine line, micro-realismo, aquarela e detalhes muito delicados
                exigem planejamento cuidadoso de escala e espaçamento.
              </p>
            </div>

            <blockquote className="gazette-pullquote">
              <p>Quanto menor a tatuagem, mais simples deve ser a informação visual.</p>
              <footer>Regra prática para estilos com muito detalhe</footer>
            </blockquote>
          </section>

          <footer className="gazette-colophon">
            <Disclaimer technical />

            <p className="colophon-line">
              Publicado por <strong>{site.name}</strong>, manual independente de segurança e
              cuidados com tatuagem. Última revisão em{' '}
              <time dateTime={site.lastReviewed}>{reviewDate.toLocaleDateString('pt-BR')}</time>.
              Referência regulatória: {site.jurisdiction}.
            </p>

            <p className="colophon-links no-print">
              <Link to="/cliente/antes">Antes da tatuagem</Link>
              <span aria-hidden="true">✶</span>
              <Link to="/cliente/cuidados-depois">Cuidados depois</Link>
              <span aria-hidden="true">✶</span>
              <Link to="/fontes">Fontes</Link>
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}

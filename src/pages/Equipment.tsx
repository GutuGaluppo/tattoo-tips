import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLocale } from '@/i18n/useLocale';
import { localizeHref } from '@/i18n/routes';
import { Card, CardLink } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Meta';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
import './pages.css';

export default function Equipment() {
  const { locale } = useLocale();

  useDocumentMeta({
    title: 'Equipamento e materiais',
    description:
      'Vitrine de referência de mercado para quem tatua: stencil, pós-cuidado, tinta, agulha e máquina, com preço aproximado, data de consulta e link para o site oficial.',
  });

  return (
    <div className="container page">
      <UntranslatedNotice />
      <header className="page-header">
        <Eyebrow>Para quem tatua</Eyebrow>
        <h1>Equipamento e materiais</h1>
        <p className="page-description">
          Isto não é o manual. É um catálogo de referência de mercado — o que outros tatuadores
          usam, preço aproximado e link direto para o site oficial de cada marca. Sem patrocínio,
          sem comissão por indicação: se um produto está aqui, é porque apareceu na pesquisa como
          referência de categoria, não porque alguém pagou por isso.
        </p>
      </header>

      <div className="audience-grid">
        <Card tone="accent" className="audience-card" to={localizeHref('/equipamento/pro', locale)}>
          <Eyebrow>Linha profissional</Eyebrow>
          <h3>
            <CardLink to={localizeHref('/equipamento/pro', locale)}>Equipamento pro</CardLink>
          </h3>
          <p>
            Marcas e produtos de referência usados por tatuadores já estabelecidos — stencil,
            pós-cuidado, tinta, agulha, cartucho e máquina.
          </p>
          <span className="card-cta" aria-hidden="true">
            Ver a lista pro →
          </span>
        </Card>

        <Card className="audience-card is-upcoming">
          <Eyebrow>Baixo orçamento</Eyebrow>
          <h3>Para quem está começando</h3>
          <p>
            Alternativas mais baratas por categoria, para montar o primeiro kit sem abrir mão de
            biossegurança. Em produção.
          </p>
          <span className="tag tag-quiet">Em produção</span>
        </Card>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLocale } from '@/i18n/useLocale';
import { localizeHref } from '@/i18n/routes';
import { AlertBox } from '@/components/content/AlertBox';
import { CorrectionModal } from '@/components/content/CorrectionModal';
import { Button } from '@/components/ui/Button';
import { Eyebrow, LastReviewed } from '@/components/ui/Meta';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
import './pages.css';

export default function About() {
  const { locale } = useLocale();
  const [correctionOpen, setCorrectionOpen] = useState(false);

  useDocumentMeta({
    title: 'Sobre e limites editoriais',
    description:
      'Para quem este manual é, para quem não é, o que ele não faz e como enviar uma correção.',
  });

  return (
    <div className="container page">
      <UntranslatedNotice />
      <header className="page-header">
        <Eyebrow>Sobre</Eyebrow>
        <h1>Um manual, não um estúdio</h1>
        <p className="page-description">
          {site.name} é um material educacional independente sobre segurança e cuidados com
          tatuagem. Não é um estúdio, não agenda sessões e não indica profissionais.
        </p>
        <LastReviewed date={site.lastReviewed} jurisdiction={site.jurisdiction} />
      </header>

      <div className="prose">
        <h2>Para quem é</h2>
        <ul>
          <li>Quem vai fazer, está fazendo ou acabou de fazer uma tatuagem.</li>
          <li>Quem está começando a tatuar e precisa de referência de biossegurança.</li>
        </ul>

        <h2>Para quem não é</h2>
        <ul>
          <li>
            Quem está com sintoma agudo agora. Nesse caso, o lugar certo é um serviço de saúde — a
            página de <Link to={localizeHref('/emergencias', locale)}>emergências</Link> existe para orientar a conduta, não
            para substituir atendimento.
          </li>
          <li>Quem procura protocolo clínico validado para uso profissional em saúde.</li>
          <li>Quem procura indicação de marca, produto, estúdio ou curso.</li>
        </ul>

        <h2>O que este manual não faz</h2>
        <ul>
          <li>Não diagnostica. Não prescreve. Não substitui consulta.</li>
          <li>
            Não trata norma de um país como se fosse universal. A referência regulatória padrão aqui
            é o Brasil; quando a fonte é de outra jurisdição, isso está sinalizado.
          </li>
          <li>
            Não transforma faixa de voltagem, stroke ou escolha de agulha em preset. Tudo depende de
            máquina, cartucho, pele e velocidade de mão.
          </li>
          <li>Não recebe patrocínio de fabricante nem comissão por indicação.</li>
        </ul>

        <AlertBox level="atencao" title="Revisão profissional pendente">
          <p>
            O conteúdo foi construído a partir de fontes públicas de órgãos de saúde e sociedades
            médicas, com jurisdição e data de acesso registradas. Ainda falta a revisão por
            profissional de saúde e de biossegurança identificado, prevista antes de qualquer
            divulgação ampla.
          </p>
        </AlertBox>

        <h2>Encontrou um erro?</h2>
        <p className="text-muted">
          Correções são bem-vindas, especialmente as que vierem com fonte. Quanto mais específico o
          apontamento — página, trecho e referência —, mais rápido a correção entra.
        </p>
        <Button onClick={() => setCorrectionOpen(true)}>Enviar correção por e-mail</Button>
      </div>

      <CorrectionModal open={correctionOpen} onClose={() => setCorrectionOpen(false)} />
    </div>
  );
}

# Plano de melhorias e implementações

## 1. Objetivo

Este documento compara o conteúdo de `deep-research-report.md` com o app React atual e propõe as mudanças necessárias para transformar a SPA institucional genérica em um manual prático de cuidados com tatuagem para dois públicos:

- clientes que vão fazer ou acabaram de fazer uma tatuagem;
- tatuadores iniciantes que precisam de orientação técnica e de biossegurança.

O relatório deve ser a base editorial do produto, mas não deve ser publicado integralmente em uma única página. O conteúdo precisa ser revisado, separado por público e convertido em jornadas curtas, checklists, tabelas e alertas.

## 2. Resumo do diagnóstico

O app atual implementa principalmente a direção visual definida para o projeto: tema escuro, aparência premium, cards, navegação simples e layout responsivo básico. Entretanto, quase nenhum conteúdo ou fluxo do relatório foi implementado.

| Área             | Relatório                                     | App atual                             | Diagnóstico                              |
| ---------------- | --------------------------------------------- | ------------------------------------- | ---------------------------------------- |
| Proposta         | Manual prático para clientes e iniciantes     | Landing page de “Atelier Noir”        | Desalinhamento total de produto          |
| Públicos         | Cliente e tatuador iniciante                  | Visitante genérico de estúdio/agência | Não há segmentação                       |
| Pré-tatuagem     | Triagem, preparo, checklist e consentimento   | Não existe                            | Ausente                                  |
| Durante a sessão | Biossegurança, técnica, regulagem e checklist | Não existe                            | Ausente                                  |
| Pós-tatuagem     | Curativo, lavagem, cicatrização e cuidados    | Não existe                            | Ausente                                  |
| Sinais de alerta | Normal versus anormal e condutas              | Não existe                            | Ausente e prioritário                    |
| Equipamentos     | Tintas, agulhas, máquina e produtos           | “Serviços” de design genéricos        | Conteúdo incorreto                       |
| Formação         | Técnicas, limites, recursos e cidades         | Não existe                            | Ausente                                  |
| Ferramentas      | Checklists e fluxos operacionais              | Formulário de contato inativo         | Funcionalidade ausente                   |
| Evidências       | Muitas citações no relatório                  | Nenhuma fonte no app                  | Sem rastreabilidade pública              |
| Identidade       | Educação, segurança e cuidado                 | Exclusividade e design premium        | Visual aproveitável; mensagem inadequada |

Conclusão: não se trata de adicionar algumas seções ao app existente. É necessário reposicionar a arquitetura de informação e substituir a maior parte do conteúdo, preservando apenas a base visual e técnica.

## 3. O que pode ser aproveitado

- React, Vite, TypeScript e React Router são suficientes para o primeiro release.
- A paleta, os cards, os painéis e a tipografia combinam com o tema.
- O componente de shell com cabeçalho, conteúdo e rodapé pode ser mantido.
- O grid já possui uma adaptação básica para telas menores.
- A aplicação gera build de produção com sucesso.

Antes de crescer, a implementação visual deve unificar os tokens já existentes em `react-theme.css`/`react-theme.ts` com `src/styles.css`. Hoje há duas definições paralelas de tema, mas apenas `src/styles.css` é importado pela aplicação.

## 4. Problemas do app atual

### 4.1 Conteúdo e posicionamento

- A marca “Atelier Noir” sugere um estúdio, enquanto o relatório descreve um produto educacional.
- A home fala sobre a própria interface (“SPA moderna”, “design editorial”) em vez de ajudar o usuário.
- “Serviços” oferece consultoria visual, design editorial e experiência premium, assuntos sem relação com o relatório.
- “Sobre” descreve estética, não missão, limites editoriais ou metodologia.
- “Contato” pergunta sobre um projeto, não sobre dúvidas, feedback ou suporte.
- O rodapé reforça linguagem de estúdio e não contém aviso médico, fontes ou data de revisão.

### 4.2 Funcionalidade

- O formulário não tem `onSubmit`, validação, estado de envio ou integração; o botão é `type="button"`.
- Os links principais da home usam `<a href>`, causando navegação completa em vez de navegação do React Router.
- Não há página de rota desconhecida.
- Não há busca, índice, filtros, favoritos ou checklists interativos.
- Não existe persistência local do progresso dos checklists.
- Não há mecanismo para atualizar ou versionar o conteúdo.

### 4.3 Acessibilidade e UX

- Inputs usam apenas `placeholder`; faltam `label`, `name`, autocomplete e mensagens de erro.
- Não há estilos consistentes de foco visível para links e botões.
- Não há link “Pular para o conteúdo”.
- A navegação móvel apenas quebra para outra linha; não foi desenhada para telas muito estreitas ou muitos capítulos.
- Falta indicação semântica e visual para conteúdos críticos, avisos, emergências e diferenças entre recomendação e obrigação.
- Não há suporte explícito a `prefers-reduced-motion`.
- Fontes sugeridas são declaradas, mas não são carregadas; o resultado depende das fontes instaladas no dispositivo.

### 4.4 SEO, confiança e operação

- O título “Tattoo Atelier” e a descrição “SPA premium...” não descrevem o produto real.
- Não há metadados sociais, canonical, ícones ou dados estruturados.
- Não há página de fontes, política de privacidade, termos ou aviso de escopo.
- As citações do relatório usam identificadores internos como `turn28view0`. Esses identificadores não são links publicáveis e precisam ser substituídos pelas URLs, títulos, organizações e datas reais.
- Parte da orientação é sensível a legislação, rótulo do fabricante e localidade. O app não informa país, data de revisão ou limites da recomendação.
- Não há testes automatizados, lint, formatter ou validação de conteúdo.

## 5. Arquitetura de informação proposta

### Navegação principal

1. **Início**
   - escolha de jornada: “Vou fazer uma tatuagem” ou “Estou aprendendo a tatuar”;
   - acesso rápido a “Antes”, “Cuidados depois” e “Sinais de alerta”;
   - aviso de escopo e data da última revisão.

2. **Para clientes**
   - antes da tatuagem;
   - dia da sessão;
   - cuidados depois;
   - linha do tempo de cicatrização;
   - normal versus sinal de alerta;
   - quando procurar atendimento.

3. **Para tatuadores**
   - triagem e consentimento;
   - preparação da bancada;
   - biossegurança durante a sessão;
   - encerramento, descarte e descontaminação;
   - regulagem inicial;
   - limites para iniciantes.

4. **Equipamentos**
   - tipos de agulha;
   - máquina, stroke e voltagem;
   - tintas e diluentes;
   - setup inicial;
   - documentação e rastreabilidade de materiais.

5. **Checklists**
   - pré-sessão;
   - intra-sessão;
   - pós-sessão;
   - aftercare do cliente;
   - exportação/impressão.

6. **Emergências**
   - infecção local;
   - sinais sistêmicos;
   - reação cutânea;
   - acidente com perfurocortante;
   - sangramento anormal.

7. **Fontes e sobre**
   - metodologia;
   - referências verificáveis;
   - responsáveis e revisão;
   - aviso médico e regulatório.

“Cidades de referência” deve ficar fora da navegação principal. É conteúdo cultural secundário e não contribui para a jornada central de segurança. Pode virar um artigo futuro.

## 6. Modelo de conteúdo

O relatório não deve ser copiado diretamente para componentes JSX. Criar conteúdo estruturado facilita manutenção, revisão e busca.

Estrutura sugerida:

```text
src/
  content/
    client/
      before.ts
      aftercare.ts
      healing.ts
      warning-signs.ts
    artist/
      screening.ts
      workstation.ts
      during-session.ts
      technique.ts
    equipment/
      needles.ts
      machines.ts
      inks.ts
    references.ts
  components/
    AudienceCard.tsx
    ArticleLayout.tsx
    AlertBox.tsx
    Checklist.tsx
    ComparisonTable.tsx
    HealingTimeline.tsx
    SourceList.tsx
```

Cada bloco sensível deve conter:

- público;
- título e resumo curto;
- instruções em passos;
- nível do alerta: informativo, atenção ou urgência;
- fonte verificável;
- jurisdição, quando aplicável;
- data da última revisão;
- responsável pela revisão editorial.

## 7. Implementações necessárias

### 7.1 MVP — prioridade crítica

#### Reposicionamento

- Renomear o produto e substituir todo o texto institucional genérico.
- Refazer a home com seleção explícita de público.
- Trocar “Serviços”, “Contato” e “Sobre” pelas jornadas propostas.
- Atualizar título, descrição, idioma, rodapé e avisos.

#### Conteúdo essencial do cliente

- Guia pré-tatuagem.
- Guia de aftercare com distinção clara entre filme e cuidado tradicional.
- Linha do tempo de cicatrização.
- Comparativo “esperado versus sinal de alerta”.
- Página de emergência com linguagem curta e acionável.

#### Conteúdo essencial do tatuador

- Fluxo de triagem, higiene, bancada, procedimento e encerramento.
- Checklists pré, intra e pós-sessão.
- Tabela de regulagem apresentada como ponto de partida, nunca como preset universal.
- Orientação de tintas, água estéril, perfurocortantes e barreiras.
- Limites técnicos recomendados para primeiros trabalhos.

#### Confiança e segurança editorial

- Reconstruir todas as referências com URLs públicas reais.
- Separar regras legais de boas práticas e identificar a jurisdição.
- Exibir “última revisão” nas páginas.
- Incluir aviso: conteúdo educacional, não substitui avaliação médica nem legislação local.
- Submeter orientação médica e de biossegurança a revisão profissional antes de publicar.
- Remover ou reescrever recomendações de produtos que possam soar como publicidade ou prescrição universal.

#### Qualidade básica

- Usar `NavLink`/`Link` em toda navegação interna.
- Criar rota 404.
- Implementar labels, foco, navegação por teclado e skip link.
- Garantir contraste WCAG AA.
- Corrigir navegação móvel.
- Tornar tabelas utilizáveis em telas estreitas.

### 7.2 Segunda entrega — alto valor

- Checklist interativo com progresso salvo em `localStorage`.
- Ação “reiniciar checklist”.
- Versão para impressão e exportação em PDF.
- Busca por termos e sintomas.
- Filtros por público, etapa e tema.
- Sumário lateral nos guias longos.
- Componentes visuais para fluxograma e timeline, sem depender de Mermaid no navegador.
- Links compartilháveis para seções específicas.
- Glossário para termos como blowout, packing, stroke, gray wash, RL, RS e CM.
- Página de feedback editorial no lugar do formulário genérico.
- Eventos de analytics respeitando consentimento e privacidade.

### 7.3 Evolução futura

- Conteúdo multilíngue e seleção de país/jurisdição.
- CMS ou arquivos MDX validados para atualização sem alterar componentes.
- Histórico de versões e revisão periódica das fontes.
- Modo offline/PWA para consulta em estúdio.
- Favoritos e progresso entre dispositivos, caso exista autenticação.
- Área de recursos visuais e tutoriais.
- Artigos culturais, incluindo cidades de referência, separados do conteúdo clínico-operacional.

## 8. Matriz de prioridade

| Prioridade | Entrega                                           |    Impacto | Esforço estimado |
| ---------- | ------------------------------------------------- | ---------: | ---------------: |
| P0         | Corrigir identidade, home e navegação por público | Muito alto |            Médio |
| P0         | Sinais de alerta e página de emergência           | Muito alto |            Médio |
| P0         | Aftercare e cicatrização                          | Muito alto |            Médio |
| P0         | Fontes públicas, avisos e revisão profissional    | Muito alto |             Alto |
| P0         | Fluxos e checklists de biossegurança              | Muito alto |             Alto |
| P1         | Guias de equipamentos e técnica                   |       Alto |            Médio |
| P1         | Acessibilidade e responsividade completas         |       Alto |            Médio |
| P1         | Checklists interativos e impressão                |       Alto |            Médio |
| P1         | SEO e dados estruturados                          |      Médio |            Baixo |
| P2         | Busca, filtros e glossário                        |      Médio |            Médio |
| P2         | CMS/MDX e versionamento editorial                 |       Alto |             Alto |
| P3         | PWA, contas e sincronização                       |      Médio |             Alto |
| P3         | Conteúdo cultural e cidades                       |      Baixo |            Médio |

## 9. Sequência recomendada de execução

### Fase 0 — validação editorial

- Definir nome, promessa do produto, público principal e jurisdição inicial.
- Recuperar a bibliografia real do relatório.
- Revisar alegações médicas, regulatórias e recomendações de produtos.
- Classificar conteúdo entre cliente, tatuador, obrigação legal e boa prática.

### Fase 1 — fundação

- Centralizar tokens visuais.
- Criar layouts, componentes de alerta, tabelas e checklist.
- Modelar conteúdo fora do JSX.
- Reconfigurar rotas e metadados.
- Implementar acessibilidade estrutural.

### Fase 2 — conteúdo crítico

- Publicar jornada do cliente.
- Publicar emergências e sinais de alerta.
- Publicar jornada de biossegurança do tatuador.
- Adicionar fontes e data de revisão em cada guia.

### Fase 3 — ferramentas

- Tornar checklists interativos e imprimíveis.
- Adicionar timeline, comparação e fluxos visuais.
- Implementar busca e glossário.

### Fase 4 — qualidade e lançamento

- Testes de componente, integração e navegação.
- Auditoria de acessibilidade, SEO e performance.
- Revisão em celular real e impressão.
- Aprovação editorial final.

## 10. Critérios de aceite do MVP

- Na home, o usuário identifica em poucos segundos se deve seguir a jornada de cliente ou tatuador.
- Todo tema crítico do relatório está acessível em até dois níveis de navegação.
- “Sinais de alerta” e “Emergências” ficam disponíveis diretamente no cabeçalho ou em destaque persistente.
- Todas as orientações sensíveis exibem fonte pública e data de revisão.
- Nenhum marcador interno `turn...` aparece no produto.
- Recomendações técnicas deixam explícito quando são pontos de partida dependentes de máquina, pele, produto ou legislação.
- Checklists podem ser usados no celular e impressos sem perda de informação.
- O app funciona com teclado, possui foco visível, labels e hierarquia correta de headings.
- O layout permanece legível a partir de 320 px.
- Links internos não recarregam a SPA.
- Rotas inválidas exibem uma página 404 útil.
- O build de produção, testes e auditorias definidos no projeto passam.

## 11. Estratégia de testes recomendada

- Adicionar ESLint e Prettier para consistência.
- Usar Vitest e Testing Library para componentes e jornadas.
- Usar Playwright para navegação, checklists, persistência, impressão e 404.
- Automatizar verificação de links de fontes.
- Validar o schema do conteúdo no build, impedindo publicação sem fonte ou data de revisão.
- Rodar Lighthouse e axe em CI.
- Testar manualmente em Chrome, Safari e Firefox, desktop e mobile.

Casos essenciais:

1. seleção de público leva à jornada correta;
2. checklist salva e restaura progresso;
3. conteúdo de emergência permanece acessível sem JavaScript avançado;
4. navegação por teclado percorre menu, alertas e checklists;
5. tabela de agulhas e regulagem não causa overflow ilegível;
6. impressão remove navegação e preserva instruções, fontes e avisos;
7. rota inexistente oferece retorno para a home e busca;
8. nenhuma página crítica é publicada sem referência válida.

## 12. Riscos e decisões pendentes

### Riscos

- Publicar recomendações médicas sem revisão especializada.
- Apresentar regras da OSHA ou de outra autoridade como se fossem universais em Portugal, Brasil ou outro país.
- Transformar faixas de voltagem e stroke em receitas rígidas.
- Induzir automanejo de infecção em vez de encaminhamento adequado.
- Recomendar marcas sem critérios editoriais transparentes.
- Deixar conteúdo desatualizado após mudanças regulatórias.
- Misturar orientação para cliente com técnica profissional e aumentar o risco de uso indevido.

### Decisões de produto

- Nome definitivo e posicionamento: manual independente, portal de um estúdio ou ferramenta de formação.
- País e idioma da primeira versão.
- Público prioritário no MVP.
- Responsável pela revisão clínica e de biossegurança.
- Política de atualização e periodicidade de revisão.
- Se recomendações de produtos permanecerão e sob quais critérios.
- Canal real para feedback/contato e requisitos de privacidade.

## 13. Resultado esperado

Após o MVP, o app deixa de ser uma demonstração visual de estúdio e passa a ser uma ferramenta consultiva: orienta o visitante pela etapa em que ele está, diferencia informação comum de alerta, oferece procedimentos práticos e sustenta cada orientação sensível com fonte e data de revisão.

O visual premium atual pode continuar como identidade, mas deve servir à clareza, à segurança e à confiança. A principal medida de qualidade não será a quantidade de conteúdo exibido, e sim a capacidade de o usuário encontrar a conduta certa, para o público certo, no momento certo.

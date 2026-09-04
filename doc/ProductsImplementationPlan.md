# Plano de implementação — Equipamento e materiais

Cobre as duas listas (`ProductsPro.md` e `ProductosBaixoOrcamento.md`) como uma única seção nova do site, à parte do manual clínico. A implementação em si começa pela linha **Pro**; a linha **Baixo orçamento** segue depois, reaproveitando a mesma estrutura.

## 1. Por que isso é uma seção à parte, não um adendo ao manual

`/sobre` afirma hoje que o site "não recebe patrocínio de fabricante nem comissão por indicação" e lista "quem procura indicação de marca, produto, estúdio ou curso" como público que **não** é o alvo do manual. Uma seção com preço e link de compra contradiz isso se for misturada ao conteúdo clínico (guias de cuidado, biossegurança).

Solução: nova área **"Equipamento e materiais"**, com identidade própria — não é o manual, é uma vitrine de referência de mercado para quem tatua. `/sobre` ganha um parágrafo novo explicando a distinção: o manual continua sem patrocínio e sem indicação; a seção de equipamento é catálogo de referência, com preço aproximado e data de consulta, não recomendação médica nem indicação paga.

## 2. Rota e navegação

- Rotas: `/equipamento` (hub), `/equipamento/pro` (linha profissional), `/equipamento/baixo-orcamento` (linha de entrada).
- Item novo em `primaryNav`, entre "Estilos" e "Sobre": **"Equipamento"**.
- Segue o padrão i18n já existente (`src/i18n/routes.ts`): entra em `routeIds` com slug próprio por idioma. Conteúdo do produto fica só em PT por ora (mesmo tratamento do resto do conteúdo ainda não traduzido — `UntranslatedNotice` na página).

## 3. Estrutura de dados

Novo módulo `src/content/products.ts` (mesmo formato dos guias — um `as const satisfies Record<...>`, validado por script):

```ts
export interface Product {
  id: string;
  category: ProductCategory; // 'stencil' | 'aftercare' | 'ink' | 'needles' | 'machine' | ...
  name: string;
  brand: string;
  priceApprox: string; // "~€15–17" — texto, não número: preço varia por loja/câmbio
  priceCheckedAt: string; // data da última verificação, mesmo padrão de `lastReviewed`
  officialUrl: string; // site do fabricante ou loja — nunca link de afiliado
  tier: 'pro' | 'budget';
  editorialNote: string; // por que está na lista — 1–2 frases, sem hipérbole
  forumSources?: readonly { title: string; url: string; org: string }[]; // citação real, com URL — nunca inventada
}
```

Regra dura: **todo produto precisa de `officialUrl` real** (site do fabricante/distribuidor oficial, nunca afiliado) antes de entrar na lista. Se a pesquisa não encontrar um link confiável para um item do documento-fonte, o item fica de fora desta rodada em vez de publicar link quebrado ou inventado — mesmo princípio de "sem fonte, não publica" que já vale para o conteúdo clínico (`scripts/validate-content.ts`).

## 4. Recomendações de fórum

Os documentos originais (`ProductsPro.md`, `ProductosBaixoOrcamento.md`) trazem opinião/nota em estrela sem citação — não existe fórum real por trás do texto que está lá. Para atender ao pedido de "recomendação com base em fóruns", a pesquisa (passo seguinte, com WebSearch/WebFetch) busca threads reais em fóruns de tatuagem (r/tattooing, r/TattooArtists, fóruns de estúdio) que mencionem o produto, e cita como `forumSources` com título, URL e data — mesmo tratamento de fonte que uma referência clínica. Produto sem menção real encontrada em fórum entra só com a nota editorial, sem a seção "o que dizem nos fóruns" — não se inventa citação para preencher a seção.

## 5. Validação

Estender `scripts/validate-content.ts` (ou um script irmão `validate-products.ts`) para checar: todo produto tem `officialUrl` não vazio, `priceCheckedAt` no formato `AAAA-MM-DD`, e nenhuma `forumSources[].url` vazia.

## 6. Cards — sem foto de produto

Sem arquivo de imagem real de cada produto (e sem licença para usar foto de fabricante). Cada card usa uma ilustração SVG genérica por categoria (mesma técnica das ilustrações do manual — `components/illustrations/`), não uma foto do produto específico. Card mostra: ilustração de categoria, nome, marca, preço aproximado + data, nota editorial curta, badge "visto em fóruns" quando houver `forumSources`, botão para o site oficial.

## 6.1 Nota — `tattoo-tips-products-research-pro-beginners.md`

Um terceiro documento apareceu no repositório depois deste plano, com preços mais específicos em euros e o alerta de EU REACH para tinta comercializada na Europa. `src/content/products.ts` (linha pro) foi harmonizado com esses números; o alerta virou o campo `euReach` no tipo `Product` e o selo "EU REACH" no card. O aviso da seção 12 daquele documento sobre não hotlinkar imagem de fabricante confirma a decisão já tomada aqui (seção 6): ilustração genérica por categoria, sem foto de produto.

## 7. Ordem de implementação

1. Este documento.
2. Pesquisa web dos links oficiais e preços atuais + fóruns reais para os itens da linha **Pro**.
3. `src/content/products.ts` (linha pro) + tipos + ilustrações de categoria.
4. Página `/equipamento/pro` + hub `/equipamento` + nav + i18n routing.
5. Ajuste do parágrafo em `/sobre`.
6. Typecheck, lint, testes, build.
7. Repetir 2–6 para a linha **baixo orçamento**, depois.

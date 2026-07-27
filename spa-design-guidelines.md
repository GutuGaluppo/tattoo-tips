# Diretrizes de UI/UX para uma SPA em React com estilo premium e alinhado ao tema de tatuagem

## 1. Objetivo do projeto

A interface da SPA deve transmitir uma experiência de alto padrão, combinando:

- exclusividade;
- precisão técnica;
- estética artística;
- sensibilidade para o tema de tatuagem e cuidado.

A proposta visual deve parecer sofisticada, forte e refinada, preservando uma identidade autoral elegante e contemporânea, com a percepção de um estúdio de alto nível.

---

## 2. Direção visual geral

O estilo ideal para a aplicação é um equilíbrio entre:

- minimalismo de luxo;
- contraste deliberado;
- personalidade marcante;
- clareza visual e sensação de prestígio.

A estética deve remeter a um estúdio tatuador de referência: organizado, elegante, discreto e visualmente impactante, com uma atmosfera de cuidado, técnica e cultura artística.

### Princípios visuais

- Priorizar limpeza, ritmo e espaço negativo com rigor editorial.
- Usar contraste de forma precisa para reforçar sofisticação e impacto.
- Destacar o conteúdo essencial com tipografia forte e hierarquia impecável.
- Trabalhar com uma paleta escura e refinada, mas com pontos de atenção intensos.
- Evitar excesso de ornamentação e manter a composição elegante.

---

## 3. Diretrizes de tipografia

A tipografia deve reforçar a sensação de precisão, autoridade e requinte.

### Recomendação de fontes

Para a interface, recomenda-se combinar uma fonte de destaque com uma fonte de corpo elegante e altamente legível:

- Título e headings: Sora, Space Grotesk ou Poppins
- Texto corrido e UI: Inter, Manrope ou Source Sans 3

Essas fontes possuem um perfil contemporâneo, sofisticado e visualmente refinado, sem perder funcionalidade e clareza.

### Hierarquia tipográfica

- H1: peso 700 ou 800, tamanho entre 40 e 56px
- H2: peso 600 ou 700, tamanho entre 28 e 36px
- H3: peso 600, tamanho entre 20 e 24px
- Corpo: Inter ou Manrope, peso 400 a 500, tamanho entre 16 e 18px
- Texto auxiliar: peso 400, tamanho entre 14 e 15px

### Recomendações de uso

- Usar letras maiúsculas apenas em pequenos trechos, como rótulos ou destaques curtos.
- Evitar excesso de italic e efeitos decorativos.
- Manter boa legibilidade com line-height entre 1.4 e 1.7.
- Trabalhar com letter-spacing suave para títulos, especialmente em elementos de destaque.

### Exemplo de escala tipográfica

- Título principal: 48px / 700 / tracking -0.02em
- Subtítulo: 24px / 600
- Texto de navegação: 16px / 500
- Texto de suporte: 14px / 400

---

## 4. Paleta de cores premium

A paleta deve refletir uma identidade escura, refinada e artística, com pontos de destaque que tragam intensidade, elegância e personalidade.

### Paleta principal

- Obsidian Black: #090909
- Deep Charcoal: #131313
- Graphite Noir: #222222
- Ivory Silk: #F4EEE8
- Soft Taupe: #C8B8A8
- Midnight Plum: #3F2431
- Bordeaux: #6E2230
- Metallic Gold: #C9A96B

### Uso recomendado

- Fundo principal: Obsidian Black ou Deep Charcoal
- Texto principal: Ivory Silk
- Texto secundário: Soft Taupe
- Destaques importantes: Bordeaux ou Midnight Plum
- Ação principal: Metallic Gold, usado com moderação e intenção

### Direção da paleta

A cor deve sugerir:

- tatuagem: profundidade, contraste, densidade;
- cuidado: limpeza, confiança e rigor;
- luxo: precisão, personalidade e distinção.

Evitar paletas excessivamente vibrantes, muito claras ou muito saturadas, pois podem comprometer a elegância premium da proposta.

---

## 5. Estrutura visual da interface

A SPA deve ter uma identidade visual forte, sofisticada e extremamente organizada.

### Recomendações de layout

- Layout com margens generosas e ritmo vertical preciso.
- Cards com bordas sutis, superfícies refinadas e fundos ligeiramente diferenciados do fundo principal.
- Uso de sombras suaves e materiais visuais discretos para dar profundidade sem perder a elegância.
- Elementos principais bem espaçados para reforçar a sensação de prestígio e facilitar a navegação.

### Componentes sugeridos

- Cabeçalho com identidade visual forte e navegação simples
- Hero section com impacto visual e mensagem clara
- Cards para conteúdo, serviços ou etapas
- Botões com contraste marcante e estados visuais bem definidos
- Seções de conteúdo com separação limpa e visual consistente

---

## 6. Estilo de componentes

### Botões

- Botões primários: fundo em Bordeaux ou Metallic Gold, texto em Ivory Silk
- Botões secundários: fundo transparente ou neutro, borda sutil e acabamento refinado
- Estados hover: elevação discreta, mudança de contraste e maior presença visual

### Inputs e formulários

- Fundo escuro com borda discreta
- Destaque em foco com cor de contraste
- Texto claro e rótulos bem espaçados

### Cards e painéis

- Fundo escuro com leve diferenciação tonal
- Bordas arredondadas, entre 12px e 16px
- Sombreamento sutil para dar profundidade

---

## 7. Estilo emocional e tonalidade

A comunicação visual da SPA deve parecer:

- confiante;
- refinada;
- contemporânea;
- artística sem ser excessivamente ostentosa;
- profissional sem perder a alma do tema.

Isso pode ser alcançado através de uma abordagem que une contraste preciso, clareza elegante e linguagem visual minimalista, com forte percepção de exclusividade.

---

## 8. Implementação em React

Para manter a consistência visual, recomenda-se centralizar o tema em variáveis CSS ou tokens de design.

### Exemplo de tokens de tema

```css
:root {
  --color-bg: #0d0d0d;
  --color-surface: #171717;
  --color-surface-2: #2a2a2a;
  --color-text: #f3ece7;
  --color-muted: #c9bdb3;
  --color-accent: #7a2c37;
  --color-highlight: #b8ff3a;
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Boa prática

- Usar CSS variables para facilitar manutenção e escalabilidade.
- Aplicar a paleta em componentes reutilizáveis.
- Manter consistência em botões, cards, headings e seções.

---

## 9. Checklist de qualidade visual

Antes de considerar a interface finalizada, verificar:

- a tipografia está clara e consistente;
- a hierarquia visual está bem definida;
- a paleta não está excessivamente carregada;
- o contraste é suficiente para leitura;
- os elementos principais têm destaque adequado;
- o visual transmite personalidade sem perder usabilidade.

---

## 10. Resumo executivo

Para a SPA em React, o estilo mais adequado é um visual escuro, elegante e refinado, inspirado no universo da tatuagem, mas traduzido para uma linguagem digital de alto padrão. A combinação entre tipografia forte, paleta premium e elementos discretamente impactantes cria uma identidade visual memorável, sofisticada e alinhada ao tema com uma sensação de exclusividade.

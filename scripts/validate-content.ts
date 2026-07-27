/**
 * Barreira de publicação: roda no prebuild e falha o build se o conteúdo
 * quebrar alguma regra editorial. É o que impede que uma orientação sensível
 * chegue ao ar sem fonte ou com marcador interno do relatório de pesquisa.
 */
import { guides, nonGuideSources } from '../src/content';
import { references } from '../src/content/references';
import type { Block, Guide, Section } from '../src/content/types';

const errors: string[] = [];
const warnings: string[] = [];

/** Identificadores internos do relatório original (`turn28view0`, etc.). */
const INTERNAL_MARKER = /turn\d+(view|search|news)\d+/i;

const knownSourceIds = new Set(Object.keys(references));

function checkSourceIds(ids: readonly string[] | undefined, where: string) {
  if (!ids) return;
  for (const id of ids) {
    if (!knownSourceIds.has(id)) {
      errors.push(`${where}: fonte desconhecida "${id}" — não existe em references.ts`);
    }
  }
}

function checkStrings(value: unknown, where: string) {
  if (typeof value === 'string') {
    if (INTERNAL_MARKER.test(value)) {
      errors.push(`${where}: contém marcador interno do relatório ("${value.slice(0, 60)}…")`);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => checkStrings(item, `${where}[${index}]`));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [key, nested] of Object.entries(value)) {
      checkStrings(nested, `${where}.${key}`);
    }
  }
}

function checkBlock(block: Block, where: string) {
  checkStrings(block, where);

  if ('sources' in block) checkSourceIds(block.sources, where);
  if (block.type === 'video') checkSourceIds([block.sourceId], where);

  // Alertas de atenção e urgência carregam a orientação mais consequente do
  // site. Nenhum deles pode ir ao ar sem fonte pública.
  if (block.type === 'alert' && block.level !== 'info') {
    if (!block.sources || block.sources.length === 0) {
      errors.push(`${where}: alerta de nível "${block.level}" sem fonte`);
    }
  }

  if (block.type === 'checklist') {
    const seen = new Set<string>();
    for (const item of block.items) {
      if (seen.has(item.id)) {
        errors.push(`${where}: item de checklist duplicado "${item.id}"`);
      }
      seen.add(item.id);
      checkSourceIds(item.sources, `${where}.items.${item.id}`);
    }
  }

  if (block.type === 'table') {
    const columnKeys = new Set(block.columns.map((column) => column.key));
    block.rows.forEach((row, index) => {
      for (const key of columnKeys) {
        if (!(key in row)) {
          errors.push(`${where}: linha ${index} não tem a coluna "${key}"`);
        }
      }
    });
    if (block.cardTitleKey && !columnKeys.has(block.cardTitleKey)) {
      errors.push(`${where}: cardTitleKey "${block.cardTitleKey}" não é uma coluna`);
    }
  }
}

function checkSection(section: Section, where: string) {
  if (section.blocks.length === 0) {
    errors.push(`${where}: seção sem blocos`);
  }
  section.blocks.forEach((block, index) => checkBlock(block, `${where}.blocks[${index}]`));
}

function checkGuide(guide: Guide) {
  const where = `guia "${guide.slug}"`;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(guide.lastReviewed)) {
    errors.push(`${where}: lastReviewed inválido ("${guide.lastReviewed}") — use AAAA-MM-DD`);
  }

  if (guide.sources.length === 0) {
    errors.push(`${where}: guia publicado sem nenhuma fonte`);
  }
  checkSourceIds(guide.sources, where);

  const sectionIds = new Set<string>();
  for (const section of guide.sections) {
    if (sectionIds.has(section.id)) {
      errors.push(`${where}: id de seção duplicado "${section.id}" — quebra links de âncora`);
    }
    sectionIds.add(section.id);
    checkSection(section, `${where} › ${section.id}`);
  }

  // Toda fonte citada dentro do guia deve aparecer na lista final, senão o
  // leitor vê a citação inline e não encontra a referência completa.
  const cited = new Set<string>();
  const collect = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }
    if (value && typeof value === 'object') {
      for (const [key, nested] of Object.entries(value)) {
        if (key === 'sources' && Array.isArray(nested)) nested.forEach((id) => cited.add(id));
        else if (key === 'sourceId' && typeof nested === 'string') cited.add(nested);
        else collect(nested);
      }
    }
  };
  collect(guide.sections);

  const declared = new Set<string>(guide.sources);
  for (const id of cited) {
    if (!declared.has(id)) {
      warnings.push(`${where}: fonte "${id}" citada no corpo mas ausente da lista final do guia`);
    }
  }
}

for (const guide of guides) {
  checkGuide(guide);
}

// Fontes órfãs indicam registry inchado ou citação esquecida.
const usedSources = new Set([
  ...guides.flatMap((guide) => guide.sources as string[]),
  ...nonGuideSources,
]);
for (const id of knownSourceIds) {
  if (!usedSources.has(id)) {
    warnings.push(`fonte "${id}" está em references.ts mas nenhum guia a usa`);
  }
}

for (const warning of warnings) {
  console.warn(`  aviso  ${warning}`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} erro(s) de conteúdo:\n`);
  for (const error of errors) console.error(`  erro   ${error}`);
  console.error('');
  process.exit(1);
}

console.log(
  `Conteúdo validado: ${guides.length} guias, ${knownSourceIds.size} fontes, ${warnings.length} aviso(s).`,
);

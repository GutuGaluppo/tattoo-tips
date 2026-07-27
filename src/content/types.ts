import type { SourceId } from './references';
import type { ImageKey } from './images';

export type Audience = 'cliente' | 'tatuador' | 'ambos';

/** Nível semântico de um bloco. Nunca é comunicado só por cor. */
export type AlertLevel = 'ok' | 'info' | 'atencao' | 'urgencia';

export type Jurisdiction = 'BR' | 'EU' | 'US' | 'global';

export type SourceKind =
  'norma' | 'orientacao-clinica' | 'orgao-regulador' | 'educacional' | 'video';

export interface Source {
  id: string;
  title: string;
  org: string;
  url: string;
  /** ISO date — quando a URL foi verificada pela última vez. */
  accessedAt: string;
  jurisdiction?: Jurisdiction;
  kind: SourceKind;
  note?: string;
  /** Site bloqueia acesso automatizado; check:links não consegue validar. */
  botProtected?: boolean;
}

/* ---------------------------------------------------------------- blocos */

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
  sources?: readonly SourceId[];
}

export interface ListBlock {
  type: 'list';
  title?: string;
  ordered?: boolean;
  items: readonly string[];
  sources?: readonly SourceId[];
}

export interface AlertBlock {
  type: 'alert';
  level: Exclude<AlertLevel, 'ok'>;
  title: string;
  text: string;
  sources?: readonly SourceId[];
}

export interface ChecklistBlock {
  type: 'checklist';
  /** Chave de persistência em localStorage. Estável — não renomear. */
  id: string;
  title: string;
  description?: string;
  items: readonly { id: string; label: string; detail?: string; sources?: readonly SourceId[] }[];
  sources?: readonly SourceId[];
}

export interface ComparisonBlock {
  type: 'comparison';
  title?: string;
  expectedLabel: string;
  alarmingLabel: string;
  rows: readonly { context: string; expected: string; alarming: string }[];
  sources?: readonly SourceId[];
}

export interface TableBlock {
  type: 'table';
  title?: string;
  caption?: string;
  columns: readonly { key: string; label: string; align?: 'start' | 'end'; sortable?: boolean }[];
  rows: readonly Record<string, string>[];
  /** Habilita campo de busca sobre todas as colunas. */
  searchable?: boolean;
  /** Coluna usada como título quando a tabela vira cards no mobile. */
  cardTitleKey?: string;
  sources?: readonly SourceId[];
}

export interface StepsBlock {
  type: 'steps';
  title?: string;
  steps: readonly { title: string; text: string; level?: AlertLevel }[];
  sources?: readonly SourceId[];
}

export interface TimelineBlock {
  type: 'timeline';
  title?: string;
  entries: readonly {
    period: string;
    title: string;
    text: string;
    watchFor?: string;
  }[];
  sources?: readonly SourceId[];
}

export interface VideoBlock {
  type: 'video';
  /** Id do vídeo no YouTube. O iframe só é criado no clique. */
  youtubeId: string;
  title: string;
  description?: string;
  /** Fonte que descreve o vídeo (org, URL canônica). */
  sourceId: SourceId;
}

export interface PlaylistBlock {
  type: 'playlist';
  /** Id da playlist no Spotify. O player só carrega no clique. */
  spotifyId: string;
  title: string;
  description?: string;
  preview?: readonly string[];
  compact?: boolean;
}

export interface FigureBlock {
  type: 'figure';
  illustration: 'skin-layers' | 'healing-stages';
  caption: string;
  sources?: readonly SourceId[];
}

export type Block =
  | ParagraphBlock
  | ListBlock
  | AlertBlock
  | ChecklistBlock
  | ComparisonBlock
  | TableBlock
  | StepsBlock
  | TimelineBlock
  | VideoBlock
  | PlaylistBlock
  | FigureBlock;

/* --------------------------------------------------------------- guias */

export interface Section {
  id: string;
  title: string;
  summary?: string;
  level?: AlertLevel;
  blocks: readonly Block[];
}

export interface Guide {
  slug: string;
  audience: Audience;
  title: string;
  /** Título curto para navegação e breadcrumbs. */
  navTitle: string;
  description: string;
  /** Frase de abertura, acima do sumário. */
  intro?: string;
  jurisdiction?: Jurisdiction;
  lastReviewed: string;
  sections: readonly Section[];
  /** Fontes agregadas do guia. Obrigatório em guias com conteúdo sensível. */
  sources: readonly SourceId[];
  /** Guias técnicos exibem o aviso adicional de regulagem/produto. */
  technical?: boolean;
  /** Chave em `content/images.ts` — foto de abertura do guia. */
  image?: ImageKey;
}

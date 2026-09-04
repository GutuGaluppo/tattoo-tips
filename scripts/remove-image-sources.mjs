/**
 * Os originais ficam junto dos derivados no repositório para centralizar os
 * ativos, mas não devem fazer parte do artefato publicado.
 */
import { rm } from 'node:fs/promises';

await rm('dist/images/source', { recursive: true, force: true });

/**
 * "Occupational Safety and Health Administration (OSHA)" → "OSHA".
 * Citações inline precisam de rótulo curto; a lista de fontes usa o nome completo.
 */
export function shortOrg(org: string): string {
  const parenthetical = org.match(/\(([^)]+)\)/);
  return parenthetical ? parenthetical[1] : org;
}

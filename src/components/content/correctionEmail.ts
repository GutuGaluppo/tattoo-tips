interface CorrectionFields {
  page: string;
  message: string;
  name: string;
  email: string;
}

/** Monta o `mailto:` a partir dos campos do formulário — função pura, sem DOM, fácil de testar. */
export function buildCorrectionMailto(to: string, siteName: string, fields: CorrectionFields): string {
  const subject = `Correção ${siteName}`;
  const parts = [
    fields.page.trim() && `Página ou trecho: ${fields.page.trim()}`,
    fields.message.trim(),
    fields.name.trim() && `Nome: ${fields.name.trim()}`,
    fields.email.trim() && `Contato para retorno: ${fields.email.trim()}`,
  ].filter((part): part is string => Boolean(part));

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(parts.join('\n\n'))}`;
}

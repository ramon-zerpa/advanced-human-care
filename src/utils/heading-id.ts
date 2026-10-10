/** Shared by EN/ES headings: remove accents/punctuation and separate words with hyphens. */
export function headingId(title: string): string {
  return title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

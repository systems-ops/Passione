export function parsePriceToCents(price: string): number | null {
  const trimmed = price.trim();
  if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) return null;
  return Math.round(parseFloat(trimmed) * 100);
}

export function formatCents(cents: number): string {
  return (cents / 100).toFixed(2);
}

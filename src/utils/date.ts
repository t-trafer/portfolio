export function calculateYears(startDate: Date): number {
  const monthsDiff =
    (new Date().getFullYear() - startDate.getFullYear()) * 12 +
    (new Date().getMonth() - startDate.getMonth());

  return monthsDiff / 12;
}

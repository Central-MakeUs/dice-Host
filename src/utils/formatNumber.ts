export function formatNumber(value: number): string {
  return value.toLocaleString('ko-KR', { minimumIntegerDigits: 2 });
}

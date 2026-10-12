const ETH_ADDRESS = /^0x[a-fA-F0-9]{40}$/;

export function isEthAddress(value: string): boolean {
  return ETH_ADDRESS.test(value.trim());
}

export function safeHttpUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
    return url.toString();
  } catch {
    return '';
  }
}

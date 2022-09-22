import { Magic } from 'magic-sdk';

export function getMagicClient() {
  return typeof window !== 'undefined' && new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function CurrrencyFormat(latestPrice: string) {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(latestPrice))
}
export const RedGreenIndicator = (persentage: string) => clsx(persentage.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600');

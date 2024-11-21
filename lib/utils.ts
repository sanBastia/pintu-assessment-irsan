/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CurrrencyFormat = (latestPrice: string) => Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(latestPrice))

export const combineCurrencyAndPriceChangeData = (
  supportedCurrencies: any ,
  priceChanges: any
) => {
  const combinedArray: any[] = [];

  supportedCurrencies.forEach((curr: { currencyGroup: string }) => {
    const matchingPair = priceChanges.find(
      (price: { pair: string }) => curr.currencyGroup.toLowerCase() === price.pair.split('/')[0]
    );

    if (matchingPair) {
      combinedArray.push({ ...curr, ...matchingPair });
    }
  });

  return combinedArray;
}

export const RedGreenIndicator = ( percentage: string ) => percentage.charAt(0) === '-' ? percentage.replace('-','') : percentage

// export const RedGreenIndicator = (persentage: string) => clsx(persentage.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600');

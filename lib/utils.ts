/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function CurrrencyFormat(latestPrice: string) {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(latestPrice))
}

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

// export const RedGreenIndicator = (persentage: string) => clsx(persentage.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600');


// const SupportedCurrencies = dataSupportedCurrencies.payload.map((curr: {
//   currencyGroup: string; logo: string; currencySymbol: string; color: string; name: string 
// }) => ({
//       currencySymbol: curr.currencySymbol,
//       currencyGroup: curr.currencyGroup,
//       color: curr.color,
//       name: curr.name,
//       logo: curr.logo,
// })) 
// const PriceChange = dataPricechange.payload.map((price: any) => (price))  


// const combinedArray: any[] = [];

// SupportedCurrencies.forEach((curr: { currencyGroup: string }) => {
//     const matchingPair = PriceChange.find((price: { pair: string }) => curr.currencyGroup.toLowerCase() === price.pair.split('/')[0]); // Assuming 'pair' has currencyGroup in first part

//     if (matchingPair) {
//       combinedArray.push({
//         ...curr,
//         ...matchingPair
//       });
//     }
// });
// console.log(combinedArray, "CA");
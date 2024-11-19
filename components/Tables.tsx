/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges, useGetSupportedCurrencies } from '@/data/get-data'
import React from 'react'

export default function Tables() {
  
 
  const { data: dataPricechange, error: errorPriceChange, isLoading: isLoadingPriceChange } = useGetPriceChanges()
  const { data: dataSupportedCurrencies, error: errorSupportedCurrencies, isLoading: isLoadingSupportedCurrencies } = useGetSupportedCurrencies()
  if (errorPriceChange) return errorPriceChange.message

  if(dataPricechange && dataSupportedCurrencies){
    
    const SupportedCurrencies = dataSupportedCurrencies.payload.map((curr: {
      currencyGroup: string; logo: string; currencySymbol: string; color: string; name: string 
    }) => ({
          currencySymbol: curr.currencySymbol,
          currencyGroup: curr.currencyGroup,
          color: curr.color,
          name: curr.name,
          logo: curr.logo,
    })) 
    const PriceChange = dataPricechange.payload.map((price: any) => (price))  

  
    const combinedArray: any[] = [];

    SupportedCurrencies.forEach((curr: { currencyGroup: string }) => {
        const matchingPair = PriceChange.find((price: { pair: string }) => curr.currencyGroup.toLowerCase() === price.pair.split('/')[0]); // Assuming 'pair' has currencyGroup in first part

        if (matchingPair) {
          combinedArray.push({
            ...curr,
            ...matchingPair
          });
        }
});
    console.log(combinedArray, "CA");

    
      return (
      <div className='flex gap-2 items-center'>
        
        { isLoadingPriceChange && 'loading...'}
        {!isLoadingPriceChange && dataPricechange.payload.map((data: any, index: any) => (
        <h1 className='font-bold text-lg' key={index}>{data.pair}</h1>
      ))}
      </div>
    )
  }
}

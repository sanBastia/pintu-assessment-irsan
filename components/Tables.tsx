/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges, useGetSupportedCurrencies } from '@/data/get-data'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { CurrrencyFormat, RedGreenIndicator } from '@/lib/utils'

export default function Tables() {
  
  const { data: dataPricechange, error: errorPriceChange, isLoading: isLoadingPriceChange } = useGetPriceChanges()
  const { data: dataSupportedCurrencies, error: errorSupportedCurrencies, isLoading: isLoadingSupportedCurrencies } = useGetSupportedCurrencies()
  if (errorPriceChange && errorSupportedCurrencies) return errorPriceChange.message 

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
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Crypto</TableHead>
                <TableHead></TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>24 jam</TableHead>
                <TableHead>1 MGG</TableHead>
                <TableHead>1 BLN</TableHead>
                <TableHead>1 THN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { combinedArray.map((curr:{name: string, currencySymbol: string, latestPrice: string, day: string, week:string,month:string, year: string}, index: any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{curr.name}</TableCell>
                  <TableCell>{curr.currencySymbol}</TableCell>
                  <TableCell>{CurrrencyFormat(curr.latestPrice)}</TableCell>
    
                  <TableCell className={RedGreenIndicator(curr.day)}>{curr.day+"%"}</TableCell>
                  <TableCell className={RedGreenIndicator(curr.week)}>{curr.week+"%"}</TableCell>
                  <TableCell className={RedGreenIndicator(curr.week)}>{curr.month+"%"}</TableCell>
                  <TableCell className={RedGreenIndicator(curr.week)}>{curr.year+"%"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    )
  }
}

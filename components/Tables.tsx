/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges, useGetSupportedCurrencies } from '@/data/get-data'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { CurrrencyFormat, RedGreenIndicator } from '@/lib/utils'
import SearchInput from './SearchInput'
import { LoadingSpinner } from './LoadingSpinner'
import Image from 'next/image'

export default function Tables() {
  
  const { data: dataPricechange, error: errorPriceChange, isLoading: isLoadingPriceChange } = useGetPriceChanges()
  const { data: dataSupportedCurrencies, error: errorSupportedCurrencies, isLoading: isLoadingSupportedCurrencies } = useGetSupportedCurrencies()

  if (errorPriceChange && errorSupportedCurrencies) return errorPriceChange.message 

  if(isLoadingPriceChange || isLoadingSupportedCurrencies ){
    return (
      <div className="w-full">
        <div className='flex px-10 2xl:px-36 my-4'>
        <LoadingSpinner />
      </div>
      </div>
    )
  } 

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
      <div className="w-full">
      <div className='flex px-10 2xl:px-36 my-4'>
        <SearchInput />
      </div>
      <div className="flex px-10 2xl:px-36">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Crypto</TableHead>
                <TableHead></TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>24 JAM</TableHead>
                <TableHead>1 MGG</TableHead>
                <TableHead>1 BLN</TableHead>
                <TableHead>1 THN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { combinedArray.map((curr: {
                name: string, 
                currencySymbol: string, 
                latestPrice: string, 
                day: string, 
                week:string,
                month:string, 
                year: string,
                logo: string
              }, index: any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <Image 
                    src={curr.logo}
                    width={10}
                    height={10}
                    alt='logocurrency'
                    className=''
                    />
                    {curr.name}
                  </TableCell>
                  <TableCell>{curr.currencySymbol}</TableCell>
                  <TableCell>{CurrrencyFormat(curr.latestPrice)}</TableCell>
    
                  <TableCell className={`${curr.day.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.day+"%"} </TableCell>
                  <TableCell className={`${curr.week.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.week+"%"} </TableCell>
                  <TableCell className={`${curr.month.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.month+"%"}</TableCell>
                  <TableCell className={`${curr.year.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.year+"%"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
          </div> 
    )
  }
}



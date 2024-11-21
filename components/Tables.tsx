/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges, useGetSupportedCurrencies } from '@/data/get-data'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { combineCurrencyAndPriceChangeData, CurrrencyFormat } from '@/lib/utils'
import SearchInput from './SearchInput'
import { LoadingSpinner } from './LoadingSpinner'
import CoinLogo from './CoinLogo'

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
      //refactor this
        const supportedCurrencies = dataSupportedCurrencies.payload
        const priceChanges = dataPricechange.payload
        const combined = combineCurrencyAndPriceChangeData(supportedCurrencies, priceChanges);
          
                
    return (
      <div className="w-full">
      <div className='flex px-10 2xl:px-36 my-4'>
        <SearchInput />
      </div>
      <div className="flex px-10 2xl:px-36">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={2}>Crypto</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>24 JAM</TableHead>
                <TableHead>1 MGG</TableHead>
                <TableHead>1 BLN</TableHead>
                <TableHead>1 THN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { combined.map((curr: {
                name: string, 
                currencySymbol: string, 
                latestPrice: string, 
                color:string,
                day: string, 
                week:string,
                month:string, 
                year: string,
                logo: string
              }, index: any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium" colSpan={2}>
                    <div className='flex gap-6'>
                   <CoinLogo url={curr.logo} color={curr.color} />
                    <div className='flex-col'>
                    <h1 className='text-lg font-bold'>{curr.name}</h1>
                    <span className='text-sm text-gray-700'>{curr.currencySymbol}</span>
                    </div> 
                    </div>
                   
                  </TableCell>
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



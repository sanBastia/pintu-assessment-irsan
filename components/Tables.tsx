/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges, useGetSupportedCurrencies } from '@/data/get-data'
import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { combineCurrencyAndPriceChangeData, CurrrencyFormat } from '@/lib/utils'
import SearchInput from './SearchInput'
import { LoadingSpinner } from './LoadingSpinner'
import CoinLogo from './CoinLogo'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import TableCellPersentage from './TableCellPersentage'

export default function Tables() {
  
  const { data: dataPricechange, error: errorPriceChange, isLoading: isLoadingPriceChange } = useGetPriceChanges()
  const { data: dataSupportedCurrencies, error: errorSupportedCurrencies, isLoading: isLoadingSupportedCurrencies } = useGetSupportedCurrencies()

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('latestPrice')
  const [sortOrder,setSortOrder] = useState('low')

 
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
      
        const supportedCurrencies = dataSupportedCurrencies.payload
        const priceChanges = dataPricechange.payload
        const combined = combineCurrencyAndPriceChangeData(supportedCurrencies, priceChanges);
  
        // Function to handle sorting
        const handleSort = (key: string) => {
          if (sortBy === key) {
            setSortOrder(sortOrder === "high" ? "low" : "high");
          } else {
            setSortBy(key);
            setSortOrder("low");
          }
        };

        // Sorting logic based on sortBy and sortOrder
        const sortedData = [...combined].sort((a, b) => {
          const aValue = parseInt(a[sortBy]);
          const bValue = parseInt(b[sortBy]);
          if (sortOrder === "high") {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
          } else {
            return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
          }
        });
          
                
    return (
      <div className="w-full">
      <div className='flex px-10 2xl:px-36 my-4'>
        <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
      </div>
      <div className="flex px-10 2xl:px-36">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={2}>Crypto</TableHead>
                <TableHead  onClick={()=> handleSort('latestPrice')}>
                  <div className="flex gap-2 mt-4">
                    Harga {sortBy === "latestPrice" && (sortOrder === "high" ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />)}  
                    </div>
                </TableHead>
                <TableHead onClick={()=> handleSort('day')}>
                  <div className="flex gap-2 mt-4">
                   24 JAM {sortBy === "day" && (sortOrder === "high" ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />)}
                  </div>
                  </TableHead>
                <TableHead onClick={()=> handleSort('week')}>
                   <div className="flex gap-2 mt-4"> 
                      1 MGG {sortBy === "week" && (sortOrder === "high" ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />)}
                    </div>
                  </TableHead>
                <TableHead onClick={()=> handleSort('month')}>
                   <div className="flex gap-2 mt-4"> 
                     1 BLN {sortBy === "month" && (sortOrder === "high" ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />)}
                   </div>
                  </TableHead>
                <TableHead onClick={()=> handleSort('year')}>
                  <div className="flex gap-2 mt-4">
                    1 THN {sortBy === "year" && (sortOrder === "high" ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />)}
                  </div>
                  </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { 
                sortedData.filter((coin)=>
                  coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  coin.currencySymbol.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((curr: {
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
                  <TableCellPersentage persentage={curr.day} />
                  <TableCellPersentage persentage={curr.week} />
                  <TableCellPersentage persentage={curr.month} />
                  <TableCellPersentage persentage={curr.year} />
                  
                </TableRow>
              ))
             }

            </TableBody>
          </Table>
          </div>
          </div> 
    )
  }
}


{/* <TableCell className={`${curr.day.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{RedGreenIndicator(curr.day)+"%"} </TableCell>
                  <TableCell className={`${curr.week.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.week+"%"} </TableCell>
                  <TableCell className={`${curr.month.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.month+"%"}</TableCell>
                  <TableCell className={`${curr.year.charAt(0) === '-' ? 'text-red-600' : 'text-emerald-600'}`}>{curr.year+"%"}</TableCell> */}
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useGetPriceChanges } from '@/data/get-data'
import React from 'react'

export default function Tables() {
  const { data, error, isLoading } = useGetPriceChanges()
  if (error) return error.message
  if (data)
    return (
      <div className='flex gap-2 items-center'>
        {isLoading &&  'loading...'}
       {data.payload.map((data: any, index: any) => (
        <h1 className='font-bold text-lg' key={index}>{data.day}</h1>
      ))}
      </div>
    )
}

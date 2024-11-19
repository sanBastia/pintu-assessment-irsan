'use client'

import { useGetData } from '@/data/get-data'
import React from 'react'


export default function Tables() {
  const { data, error, isLoading } = useGetData()
  if (error) return error.message
 
  if (data)
    return (
      <div>
        {isLoading &&  'loading...'}
        <code>{data}</code>
      </div>
    )
}

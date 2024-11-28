import React from 'react'
import { TableCell } from './ui/table'
import { CurrrencyFormat } from '@/lib/utils'

const TableCellLatestPrice = ({latestPrice}: {latestPrice: string}) => {
  return (
    <TableCell>
        <h1 className="text-lg font-bold">
            {CurrrencyFormat(latestPrice)}
        </h1>
        </TableCell>
  )
}

export default TableCellLatestPrice
import React from 'react'
import CoinLogo from './CoinLogo'
import { TableCell } from './ui/table'

const TableCellCurrency = ({logo, color, name, currencySymbol}:{logo: string, color: string, name: string, currencySymbol: string}) => {
  return (
    <TableCell className="font-medium" colSpan={2}>
    <div className="flex gap-6">
      <CoinLogo url={logo} color={color} />
      <div className="flex-col">
        <h1 className="text-lg font-bold">{name}</h1>
        <span className="text-sm text-gray-700">
          {currencySymbol}
        </span>
      </div>
    </div>
  </TableCell>
  )
}

export default TableCellCurrency
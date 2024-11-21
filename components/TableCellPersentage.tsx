import React from 'react'
import { TableCell } from './ui/table'
import { RedGreenIndicator } from '@/lib/utils'
import { FaSortUp, FaSortDown } from "react-icons/fa";

const TableCellPersentage = ({persentage}: {persentage: string}) => {

    const isMinus = persentage.charAt(0) === '-'

  return (
    <TableCell>
        <div className='flex'>
                {isMinus ? <FaSortDown size={20} fill='red' />: <FaSortUp className='mt-1' size={20} fill='green' />}
                <p className={`font-bold text-lg ${isMinus ? 'text-red-600' : 'text-emerald-600'}`} >
                {RedGreenIndicator(persentage)+"%"} 
                </p>
        </div>
    </TableCell>
  )
}

export default TableCellPersentage
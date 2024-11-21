import React, { Dispatch, SetStateAction } from 'react'
import { TableHead } from './ui/table'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'



const TableHeaderSort = ({
    title,
    displayTitle,  
    sortOrder, 
    sortBy,
    setSortBy,
    setSortOrder
    } :
    {   title:string, 
        displayTitle:string, 
        setSortOrder: Dispatch<SetStateAction<string>>,
        setSortBy: Dispatch<SetStateAction<string>>,
        sortOrder: string,
        sortBy: string
    }) => {

        const handleSort = (key: string) => {

            if (sortBy === key) {
            setSortOrder(sortOrder === "high" ? "low" : "high");
            } else {
            setSortBy(key);
            setSortOrder("high");
            }
        };
  return (
        <TableHead onClick={()=> handleSort(title)}>
                <div className="flex gap-2 mt-4">
                {displayTitle} {sortOrder === "high" && sortBy === title  ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}  
                </div>
        </TableHead>
  )
}

export default TableHeaderSort
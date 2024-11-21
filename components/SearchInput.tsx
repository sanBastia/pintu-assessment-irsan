import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

export default function Component({searchTerm, handleSearch}: {searchTerm: string, handleSearch: Dispatch<SetStateAction<string>>;}) {
 
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <FaSearch size={20} />
      <Input 
        type="text" 
        placeholder="Cari Aset di Pintu"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        />
    </div>
  )
}
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";

export default function Component() {
 
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <FaSearch size={20} />
      <Input 
        type="text" 
        placeholder="Cari Aset di Pintu" 
        />
    </div>
  )
}
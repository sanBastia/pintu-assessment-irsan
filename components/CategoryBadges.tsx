import React from 'react'
import { Badge } from "@/components/ui/badge"
import { BsStars, BsLayersHalf, BsLayersFill  } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiConsoleController, GiPayMoney } from "react-icons/gi";
import { MdDataThresholding } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { PiDatabaseFill } from "react-icons/pi";


const Categories = [{
    name:'Terbaru',
    icon: <BsStars size={25}/>
  },
  {
    name:'DeFi',
    icon: <FaBuildingColumns size={19} />
  },
  {
    name:'NFT / Gaming',
    icon: <GiConsoleController size={24} />
  },
  {
    name:'CEX',
    icon: <MdDataThresholding size={25} />
  },
  {
    name:'DEX',
    icon: <FaArrowRightArrowLeft size={20} />
  },
  {
    name:'Layer-1',
    icon: <BsLayersHalf size={20} />
  },
  {
    name:'Infrastructur',
    icon: <PiDatabaseFill size={20} />
  },
  {
    name:'Lending',
    icon: <GiPayMoney size={20} />
  },
  {
    name:'Layer-2',
    icon: <BsLayersFill size={20} />
  },
  {
    name:'Ekosistem Stable Coin',
    icon: <FaBalanceScale size={20} />
  },]

const CategoryBadges = () => Categories.map((category,index) => {
    return (
      <Badge variant="outline" className="p-3 rounded-2xl" key={index}>
      {category.icon}
      <p className="font-bold text-sm ml-2">{category.name}</p>
      </Badge>
    )
       
  })


export default CategoryBadges
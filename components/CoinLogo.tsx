import Image from 'next/image'
import React from 'react'

const CoinLogo = ({url, color}:{url: string, color:string}) => {
  return (
    <Image src={url} alt='coinlogo' width={30} height={30} className='w-30 h-30' style={{fill: color}} />
  )
}

export default CoinLogo
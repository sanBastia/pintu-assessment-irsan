import React from 'react'
import { FaGithub } from 'react-icons/fa6'

const PageHeader = () => {
  return (
    <div className="w-full">
    <div className="flex justify-between items-center px-10 2xl:px-36 py-6">
          <div className='flex item-centers'>
            <h1 className="font-bold font-sans text-2xl">
            Harga Crypto dalam Rupiah hari ini
            </h1>
        </div>
        <div className="flex-end items-center">
        <a href="https://github.com/sanBastia/pintu-assessment-irsan" target="_BLANK"> 
          <FaGithub size={28} />
          </a>
        </div>
        </div>
  </div>
  )
}

export default PageHeader
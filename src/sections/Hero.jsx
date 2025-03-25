import React from 'react'
import Navbar from '../Components/Navbar'
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full font-["nayuki"] flex flex-col justify-center items-center relative overflow-hidden'>
        <h1 className='text-[5vw] leading-none'>Preserving Culture,</h1>
        <h1 className='text-[5vw] leading-none'>Empowering</h1>
        <h1 className='text-[5vw] leading-none'>Artisans</h1>
        <div className='px-20 py-5 mt-5 text-2xl rounded-full bg-[#dfb68d] cursor-pointer'>
          Explore
          <MdArrowOutward className='inline-block ml-2 text-4xl' />
        </div>
        <div className='w-64 absolute left-10 top-40 border-[1px] border-[#000] p-3 '>
          <img src="https://shop.gaatha.com/image/catalog/Chanchal-Soni/02-phad-painting-2cc.jpg" alt="" />
        </div>
        <div className='w-80 absolute right-10 top-28 border-[1px] border-[#000] p-3'>
          <img src="https://www.holidify.com/images/cmsuploads/compressed/800px-Mdbpainting_20200429143714.jpg" alt="" />
        </div>
        <div className='w-96 absolute right-40 bottom-20 border-[1px] border-[#000] p-3'>
          <img src="https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg" alt="" />
        </div>
        <div className=' absolute left-100 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-[0.3]'>
          <img className='w-full scale-[2] ' src="/images/design/bg2.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
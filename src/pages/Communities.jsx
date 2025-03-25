import React from 'react'
import Navbar from '../Components/Navbar'

const Communities = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen w-full">
      <div className='h-[50vh] w-full flex flex-col justify-end items-center '>
        <h1 className='text-[5vw] leading-none font-[nayuki] '>Meet the Makers: </h1>
        <h1 className='text-[5vw] leading-none font-[nayuki] '>Stories from Our Tribal Artisans</h1>
      </div>
      <div className='flex justify-between flex-wrap mt-20'>
      {Array(9).fill(0).map((_, index) => (
        <div 
          key={index} 
          className='h-[60vh] w-full md:w-1/2 lg:w-1/3 flex flex-col justify-end items-start p-5 font-[nayuki] border-[1px] border-[#3f27104c]'>
            <h1 className='text-3xl'>Community {index + 1}</h1>
            <p className='font-[Raleway] '>Rajpipla, Gujarat</p>

        </div>
      ))}
      </div>
    </div>
  </>
  )
}

export default Communities
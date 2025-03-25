import React from 'react'

const Category = () => {
  return (
    <div className='h-screen w-full flex px-10 mt-20 gap-5'>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/4 w-full flex justify-center items-center '>
                <h1 className='font-[nayuki] text-7xl '>Categories</h1>
            </div>
            <div className='h-1/3 w-full border-[1px] border-[#3f2710] rounded-3xl '></div>
        </div>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/2 w-full border-[1px] border-[#3f2710] rounded-3xl '></div>
            <div className='h-1/2 w-full border-[1px] border-[#3f2710] rounded-3xl '></div>
        </div>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/3 w-full border-[1px] border-[#3f2710] rounded-3xl '></div>
            <div className='h-1/2 w-full border-[1px] border-[#3f2710] rounded-3xl '></div>
        </div>
        
    </div>
  )
}

export default Category
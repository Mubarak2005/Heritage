import React from 'react'

const Loading = () => {
  return (
    <div>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-[#dfb68d] text-4xl animate-spin flex items-center justify-center border-t-[#3f2710] rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-[#dfb68d] text-2xl animate-spin flex items-center justify-center border-t-[#3f2710] rounded-full"></div>
            </div>
        </div>

    </div>
  )
}

export default Loading
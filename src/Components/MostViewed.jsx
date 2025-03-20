import React from 'react'
import MostViewedCom from './MostViewedCom'

const MostViewed = () => {
  return (
    <div className='min-h-screen w-full font-[Raleway] px-10'>
        <h1 className=''>Most Viewed</h1>
        <h1 className='text-[3vw] leading-none font-[nayuki] '>Tribal art and crafts</h1>
        <div className='w-full flex justify-between gap-10 flex-wrap items-center mt-10'>
          <MostViewedCom />
          <MostViewedCom />
          <MostViewedCom />
          <MostViewedCom />
          <MostViewedCom />
        </div>
    </div>
  )
}

export default MostViewed
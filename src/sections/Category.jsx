import React from 'react'

const Category = () => {
  return (
    <div className='h-screen w-full font-[nayuki] flex px-10 mt-40 gap-5'>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/4 w-full flex justify-center items-center '>
                <h1 className='text-7xl '>Categories</h1>
            </div>
            <div className='h-1/2 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://muselot.in/cdn/shop/articles/gond_painting.jpg?v=1676631899)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Tribal Art Forms</h1>
            </div>
            <div className='h-1/2 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/91570/248534/1675448371135_IMG-20230203-WA0001_2__04624.1686998893.jpg?c=2&imbypass=on)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Mural Painting</h1>
            </div>
        </div>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/3 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://images.squarespace-cdn.com/content/v1/555f823ae4b07f0c9545fb48/1435278502826-9RNQNUI370U82YXPHTVI/guatemala06002dilx1__59619d.jpg?format=1500w)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Textile and Fiber</h1>
            </div>
            <div className='h-1/2 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://www.tribesindia.com/wp-content/uploads/2022/02/1TGADCTRJ04026-15.jpg)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Wood and Bamboo</h1>
            </div>
        </div>
        <div className='h-full w-1/2 flex flex-col gap-5'>
            <div className='h-1/2 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://static.toiimg.com/photo/106594613.cms)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Ceramics and Pottery</h1>
            </div>
            <div className='h-1/2 w-full text-4xl relative cursor-pointer flex justify-center items-center rounded-3xl overflow-hidden bg-[url(https://5.imimg.com/data5/ECOM/Default/2022/10/DK/EV/HP/151982153/handmade-green-red-bamboo-tribal-jewellery-set-jewellery-arteastri-728613-500x500.jpg)] bg-cover '>
                <div className='h-full w-full bg-[#00000098] '></div>
                <h1 className='absolute z-[1] text-[#fff] '>Jewelry and Accessories</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Category
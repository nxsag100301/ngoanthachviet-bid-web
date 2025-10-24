import React from 'react'

import ProductInSessionCard from './ProductInSessionCard'

const ListProductInSession = ({ session }) => {
  return (
    <div
      className='p-3 sm:p-6 rounded-[12px] border border-gray-100 bg-white 
    flex flex-col gap-3 sm:gap-6 w-full max-h-[818px] overflow-y-auto'
    >
      <p className='text-[14px] sm:text-[18px] leading-6 sm:leading-[26px] text-black'>
        Danh sách sản phẩm đấu giá
      </p>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        {session?.Items?.map((item) => (
          <ProductInSessionCard
            key={item.AuctionItemId}
            product={item}
            sessionId={session?.ID}
          />
        ))}
      </div>
    </div>
  )
}

export default ListProductInSession

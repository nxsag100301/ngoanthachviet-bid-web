import React from 'react'

import DatePicker from '@/components/DatePicker'
import AuctionSessionCard from '@/components/AuctionSessionCard'
import Pagination from '@/components/Pagination'

const ListSessionAuctionEnded = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 pt-5 sm:pt-9 pb-12'>
      <div className='flex flex-col gap-4 sm:gap-6'>
        <div className='flex flex-row justify-between gap-4'>
          <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
            Danh sách phiên đã kết thúc
          </p>
          <DatePicker />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]'>
          {[1, 2, 3, 4].map((item) => (
            <AuctionSessionCard key={item} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default ListSessionAuctionEnded

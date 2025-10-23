import React from 'react'

import AuctionSessionResult from './components/AuctionSessionResult'
import DatePicker from '@/components/DatePicker'

const MyAuctionResult = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-9 pb-12'>
      <div className='flex flex-col gap-5 sm:gap-7 md:gap-9'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
            Kết quả của tôi
          </p>
          <DatePicker />
        </div>
        <AuctionSessionResult />
        <AuctionSessionResult />
      </div>
    </div>
  )
}

export default MyAuctionResult

import React, { useState } from 'react'

import DatePicker from '@/components/DatePicker'
import StatusTab from './components/StatusTab'
import AuctionSessionCard from '@/components/AuctionSessionCard'
import Pagination from '@/components/Pagination'

const ListSessionAuction = () => {
  const [tab, setTab] = useState('All') // All || Participating
  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-12'>
      <div className='flex flex-col gap-2 sm:gap-6'>
        <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
          Danh sách phiên đấu giá
        </p>
        <div className='flex flex-row justify-between gap-4 h-[58px]'>
          <StatusTab tab={tab} setTab={setTab} />
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

export default ListSessionAuction

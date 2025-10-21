import DatePicker from '@/components/DatePicker'
import React, { useState } from 'react'
import StatusTab from './components/StatusTab'
import AuctionSessionCard from '@/components/AuctionSessionCard'

const ListSessionAuction = () => {
  const [tab, setTab] = useState('All') // All || Participating
  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 pt-9 pb-12'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row justify-between h-[58px]'>
          <StatusTab tab={tab} setTab={setTab} />
          <DatePicker />
        </div>
        <div className='grid grid-cols-3 gap-[25px]'>
          {[1, 2, 3].map((item) => (
            <AuctionSessionCard key={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListSessionAuction

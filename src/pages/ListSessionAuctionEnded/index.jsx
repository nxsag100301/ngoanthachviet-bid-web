import React, { useEffect, useState } from 'react'
import moment from 'moment'

import DatePicker from '@/components/DatePicker'
import AuctionSessionCard from '@/components/AuctionSessionCard'
import Pagination from '@/components/Pagination'
import { getListSessionAuction } from '@/apis/auction'

const ListSessionAuctionEnded = () => {
  const [listSession, setListSession] = useState()
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const fetchListSession = async () => {
      const res = await getListSessionAuction({
        searchText: '',
        status: 'Ended',
        startDate: moment(selectedDate).format('YYYY-MM-DD')
      })
      if (res.statusCodes === 200) {
        setListSession(res.metadata)
      }
    }
    fetchListSession()
  }, [selectedDate])
  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-12'>
      <div className='flex flex-col gap-4 sm:gap-6'>
        <div className='flex flex-row justify-between gap-4'>
          <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
            Danh sách phiên đã kết thúc
          </p>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]'>
          {listSession?.map((item) => (
            <AuctionSessionCard key={item} session={item} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default ListSessionAuctionEnded

import React, { useEffect, useState } from 'react'
import moment from 'moment'

import DatePicker from '@/components/DatePicker'
import AuctionSessionEnded from './components/AuctionSessionEnded'
import { getListSessionAuction } from '@/apis/auction'
import Pagination from '@/components/Pagination'
import LoadingScreen from '@/components/LoadingScreen'

const ListSessionAuctionEnded = () => {
  const [listSession, setListSession] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchListSession = async () => {
      try {
        setLoading(true)
        const res = await getListSessionAuction({
          searchText: '',
          status: 'Ended',
          startDate: moment(selectedDate).format('YYYY-MM-DD')
        })
        if (res.statusCodes === 200) {
          setListSession(res.metadata)
        }
      } catch (error) {
        console.log('Fetch list session error: ', error)
      } finally {
        setLoading(false)
      }
    }
    fetchListSession()
  }, [selectedDate])

  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-9 pb-12'>
      <div className='flex flex-col gap-5 sm:gap-7 md:gap-9'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
            Danh sách phiên đã kết thúc
          </p>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        {loading ? (
          <LoadingScreen />
        ) : (
          listSession?.map((item) => <AuctionSessionEnded session={item} />)
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={10} />
    </div>
  )
}

export default ListSessionAuctionEnded

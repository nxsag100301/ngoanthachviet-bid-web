import React, { useEffect, useState } from 'react'
import moment from 'moment'

import DatePicker from '@/components/DatePicker'
import StatusTab from './components/StatusTab'
import AuctionSessionCard from '@/components/AuctionSessionCard'
import Pagination from '@/components/Pagination'
import { getListSessionAuction } from '@/apis/auction'
import LoadingScreen from '@/components/LoadingScreen'

const ListSessionAuction = () => {
  const [tab, setTab] = useState('All') // All || Participating
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
          status: tab === 'Participating' ? 'Participating' : '',
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
  }, [selectedDate, tab])

  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-12'>
      <div className='flex flex-col gap-2 sm:gap-6'>
        <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950'>
          Danh sách phiên đấu giá
        </p>
        <div className='flex flex-row justify-between gap-4 h-[58px]'>
          <StatusTab tab={tab} setTab={setTab} />
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        {loading === true ? (
          <LoadingScreen />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]'>
            {listSession?.map((item) => (
              <AuctionSessionCard key={item.ID} session={item} />
            ))}
          </div>
        )}

        <Pagination page={page} setPage={setPage} totalPages={10} />
      </div>
    </div>
  )
}

export default ListSessionAuction

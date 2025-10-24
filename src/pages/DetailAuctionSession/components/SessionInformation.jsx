import moment from 'moment'
import React from 'react'

import CountdownTimerSession from '@/components/CountdownTimerSession'

const SessionInformation = ({ session }) => {
  return (
    <div
      className={`p-4 sm:p-6 rounded-[12px] border border-gray-100
     ${
       session?.Status === 'Active'
         ? 'bg-warning-100'
         : session?.Status === 'Scheduled'
         ? 'bg-blue-100'
         : 'bg-success-100'
     } flex flex-col gap-3 sm:gap-5 w-full md:max-w-[348px]`}
    >
      <div className='flex flex-col gap-3 sm:gap-5'>
        <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950 font-semibold'>
          {session?.Title}
        </p>
        <CountdownTimerSession type={3} size='medium' sessionId={session?.ID} />
      </div>
      <div className='p-2 sm:p-4 rounded-[12px] bg-white flex flex-col gap-2 sm:gap-3'>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Mã phiên
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 font-medium'>
            {session?.Code}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Thời gian bắt đầu
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right font-medium'>
            {moment(session?.StartTime).format('HH:mm | DD/MM/YYYY')}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Thời gian kết thúc
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right font-medium'>
            {moment(session?.EndTime).format('HH:mm | DD/MM/YYYY')}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Người chủ trì
          </p>
          <p className='w-[50%] text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right font-medium'>
            {session?.Host1Name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SessionInformation

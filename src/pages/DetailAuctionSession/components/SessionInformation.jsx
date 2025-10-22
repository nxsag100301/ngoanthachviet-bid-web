import CountdownTimer from '@/components/CountdownTimer'
import React from 'react'

const SessionInformation = () => {
  return (
    <div
      className='p-4 sm:p-6 rounded-[12px] border border-gray-100
     bg-warning-100 flex flex-col gap-3 sm:gap-5 w-full md:max-w-[348px]'
    >
      <div className='flex flex-col gap-3 sm:gap-5'>
        <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-950 font-semibold'>
          Phiên đấu thiện nguyện ủng hộ chương trình
        </p>
        <CountdownTimer type={3} size='medium' />
      </div>
      <div className='p-2 sm:p-4 rounded-[12px] bg-white flex flex-col gap-2 sm:gap-3'>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Mã phiên
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950'>
            PPK00001
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Thời gian bắt đầu
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right'>
            15:00 | 20/05/2025
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Thời gian kết thúc
          </p>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right'>
            18:00 | 20/05/2025
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-600'>
            Người chủ trì
          </p>
          <p className='w-[50%] text-[11px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-950 text-right'>
            Nguyễn Huỳnh Ngọc Phương
          </p>
        </div>
      </div>
    </div>
  )
}

export default SessionInformation

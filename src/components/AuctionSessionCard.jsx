import React from 'react'
import Icon from './icons/IconSVG'
import AuctionProductCard from './AuctionProductCard'

const AuctionSessionCard = () => {
  return (
    <div
      className='p-6 rounded-[16px] border border-gray-100
   bg-blue-50 flex flex-col gap-6'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-start'>
          <p
            className='w-[75%] text-[20px] leading-7 
                font-semibold text-text-950'
          >
            Phiến đấu thiện nguyện ủng hộ chương trình
          </p>
          <div className='flex flex-row items-center gap-[2px] cursor-pointer'>
            <p className='text-[14px] leading-[22px] text-blue-600'>Chi tiết</p>
            <Icon name='arrowRight' width={20} height={20} />
          </div>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[14px] leading-[22px] text-text-400'>
              Mã phiên:
            </p>
            <p className='text-[14px] leading-[22px] text-text-900'>PK123456</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[14px] leading-[22px] text-text-400'>
              Người chủ trì:
            </p>
            <p className='text-[14px] leading-[22px] text-text-900'>
              Huỳnh Văn B
            </p>
          </div>
        </div>
      </div>
      <AuctionProductCard />
    </div>
  )
}

export default AuctionSessionCard

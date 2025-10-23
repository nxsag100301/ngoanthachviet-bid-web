import React from 'react'
import Icon from './icons/IconSVG'
import AuctionProductCard from './AuctionProductCard'
import { useNavigate } from 'react-router-dom'

const AuctionSessionCard = () => {
  const navigate = useNavigate()

  return (
    <div
      className='p-4 sm:p-6 rounded-[16px] border border-gray-100
   bg-blue-50 flex flex-col gap-4 sm:gap-6'
    >
      <div className='flex flex-col gap-2 sm:gap-4'>
        <div className='flex flex-row justify-between items-start gap-2'>
          <p
            className='w-[75%] text-[14px] sm:text-[20px] leading-5 sm:leading-7 
                font-semibold text-text-950'
          >
            Phiến đấu thiện nguyện ủng hộ chương trình
          </p>
          <div
            onClick={() => navigate(`/auction/session/${1}`)}
            className='flex flex-row items-center gap-[1px] sm:gap-[2px] md:gap-[1px] lg:gap-[2px] cursor-pointer'
          >
            <p className='text-[10px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-blue-600 whitespace-nowrap'>
              Chi tiết
            </p>
            <div className='hidden sm:flex justify-between items-center'>
              <Icon name='arrowRight' width={20} height={20} />
            </div>
            <div className='flex sm:hidden justify-between items-center'>
              <Icon name='arrowRight' width={14} height={14} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-400'>
              Mã phiên:
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-900 font-medium'>
              PK123456
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-400'>
              Người chủ trì:
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-900 font-medium'>
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

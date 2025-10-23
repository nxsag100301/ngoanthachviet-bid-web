import Icon from '@/components/icons/IconSVG'
import React from 'react'
import ProductResultCard from './ProductResultCard'
import { useNavigate } from 'react-router-dom'

const AuctionSessionResult = () => {
  const navigate = useNavigate()
  return (
    <div className='p-3 sm:p-6 rounded-[16px] border border-gray-100 bg-blue-50 flex flex-col gap-3 sm:gap-6'>
      <div className='flex flex-col gap-1 sm:gap-2'>
        <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-text-950 font-semibold'>
          Phiên đấu thiện nguyện ủng hộ chương trình
        </p>
        <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-900'>
          PK123456
        </p>
        <div
          onClick={() => navigate(`/auction/session/${1}`)}
          className='flex flex-row items-center mr-auto cursor-pointer gap-[1px] sm:gap-[2px]'
        >
          <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-blue-600 whitespace-nowrap'>
            Chi tiết
          </p>
          <div className='hidden sm:flex justify-center items-center'>
            <Icon name='arrowRight' width={20} height={20} />
          </div>
          <div className='flex sm:hidden justify-center items-center'>
            <Icon name='arrowRight' width={16} height={16} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[474px] overflow-y-auto'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ProductResultCard key={item} />
        ))}
      </div>
    </div>
  )
}

export default AuctionSessionResult

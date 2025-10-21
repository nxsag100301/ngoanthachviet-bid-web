import Icon from '@/components/icons/IconSVG'
import React from 'react'
import ProductResultCard from './ProductResultCard'

const AuctionSessionResult = () => {
  return (
    <div className='p-6 rounded-[16px] border border-gray-100 bg-blue-50 flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-[20px] leading-7 text-text-950'>
          Phiên đấu thiện nguyện ủng hộ chương trình
        </p>
        <p className='text-[14px] leading-[22px] text-text-900'>PK123456</p>
        <div className='flex flex-row items-center mr-auto cursor-pointer gap-[2px]'>
          <p className='text-[14px] leading-[22px] text-blue-600'>Chi tiết</p>
          <Icon name='arrowRight' width={20} height={20} />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[474px] overflow-y-auto'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ProductResultCard key={item} />
        ))}
      </div>
    </div>
  )
}

export default AuctionSessionResult

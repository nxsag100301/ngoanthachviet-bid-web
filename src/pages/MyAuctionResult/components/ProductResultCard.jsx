import Chip from '@/components/Chip'
import Icon from '@/components/icons/IconSVG'
import images from '@/constants/images'
import React from 'react'

const ProductResultCard = () => {
  return (
    <div className='p-4 rounded-[12px] border border-gray-100 bg-white'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between'>
          <img
            src={images.productExample}
            className='w-[75px] h-[75px] rounded-[8px] '
          />
          <div className='w-[77%] flex flex-row justify-between items-start'>
            <p className='w-[72%] text-[18px] font-semibold leading-[26px] text-text-900'>
              Đá Thạch Anh Long Hoa
            </p>
            <div className='flex flex-row items-center gap-[2px] cursor-pointer'>
              <p className='text-[14px] leading-[22px] text-primary-700'>
                Chi tiết
              </p>
              <Icon
                name='arrowRight'
                width={20}
                height={20}
                stroke={'#b25d0b'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[6px] mt-[6px]'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[14px] leading-[22px] text-text-500'>
              Giá mở phiên
            </p>
            <p className='text-[14px] leading-[22px] text-black'>500.000 VND</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-1 cursor-pointer'>
              <p className={`text-[14px] leading-[22px] text-success-600`}>
                Lịch sử ra giá
              </p>
              <Icon name='externalLink' width={20} height={20} />
            </div>
            <Chip label={'Thắng phiên'} type={'success'} />
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[14px] leading-[22px] text-text-500'>
              Giá chốt phiên
            </p>
            <p className='text-[14px] leading-[22px] text-success-600 font-semibold'>
              3.000.000 VND
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductResultCard

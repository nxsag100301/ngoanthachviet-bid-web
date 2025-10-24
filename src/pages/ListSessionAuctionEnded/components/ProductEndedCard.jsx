import React from 'react'
import { useNavigate } from 'react-router-dom'

import Chip from '@/components/Chip'
import Icon from '@/components/icons/IconSVG'
import images from '@/constants/images'

const ProductEndedCard = () => {
  const navigate = useNavigate()

  return (
    <div className='p-2 sm:p-4 rounded-[12px] border border-gray-100 bg-white'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between gap-2'>
          <img
            src={images.productExample}
            className='w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] rounded-[8px] '
          />
          <div className='w-[88%] mr-auto flex flex-row justify-between items-start'>
            <p className='w-[80%] text-[14px] sm:text-[18px] leading-[22px] sm:leading-[26px] font-semibold  text-text-900'>
              Đá Thạch Anh Long Hoa
            </p>
            <div
              onClick={() => navigate(`/auction/product/${1}`)}
              className='flex flex-row items-center gap-[1px] sm:gap-[2px] cursor-pointer'
            >
              <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-primary-700 whitespace-nowrap'>
                Chi tiết
              </p>
              <div className='hidden sm:flex justify-center items-center'>
                <Icon
                  name='arrowRight'
                  width={20}
                  height={20}
                  stroke={'#b25d0b'}
                />
              </div>
              <div className='flex sm:hidden justify-center items-center'>
                <Icon
                  name='arrowRight'
                  width={16}
                  height={16}
                  stroke={'#b25d0b'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[6px] mt-[6px]'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
              Giá mở phiên
            </p>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
              500.000 VND
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-1 cursor-pointer'>
              <p
                className={`text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-success-600`}
              >
                Lịch sử ra giá
              </p>
              <Icon name='externalLink' width={20} height={20} />
            </div>
            <Chip label={'Thắng phiên'} type={'success'} />
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
              Giá chốt phiên
            </p>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-success-600 font-semibold'>
              3.000.000 VND
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductEndedCard

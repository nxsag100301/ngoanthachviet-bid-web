import React from 'react'
import { useNavigate } from 'react-router-dom'

import CountdownTimerSession from '@/components/CountdownTimerSession'
import { Button } from '@/components/ui/button'
import images from '@/constants/images'

const ProductInSessionCard = () => {
  const navigate = useNavigate()
  return (
    <div className='p-4 rounded-[12px] border border-gray-100 space-y-2 sm:space-y-4'>
      <div className='space-y-2'>
        <div className='flex flex-row justify-between gap-2 sm:gap-5'>
          <img
            src={images.productExample}
            className='w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] rounded-[8px]'
          />
          <div className='space-y-1 sm:space-y-2 w-[80%]'>
            <div className='sm:space-y-1'>
              <p className='text-[16px] sm:text-[18px] leading-6 sm:leading-[26px] font-semibold text-text-900'>
                Tên sản phẩm
              </p>
              <p className='text-[10px] sm:text-[12px] leading-4 sm:leading-5 text-text-400'>
                No.NIL5-OHBN-VK
              </p>
            </div>
            <CountdownTimerSession type={2} />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
            Bước giá
          </p>
          <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
            500.000 VND
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
            Giá hiện tại
          </p>
          <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
            2.000.000 VND
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <Button
          onClick={() => navigate(`/auction/product/${1}`)}
          variant='outline'
          className='h-7 sm:h-9 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'
        >
          Chi tiết sản phẩm
        </Button>
        <Button className='h-7 sm:h-9 px-6 sm:px-8 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'>
          Ra giá
        </Button>
      </div>
    </div>
  )
}

export default ProductInSessionCard

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import images from '@/constants/images'
import CountdownTimer from './CountdownTimer'
import { Button } from './ui/button'
import BidModal from './BidModal'
import Chip from './Chip'

const AuctionProductCard = () => {
  const navigate = useNavigate()

  const [isOpenBidModal, setIsOpenBidModal] = useState(false)

  return (
    <>
      <BidModal open={isOpenBidModal} onOpenChange={setIsOpenBidModal} />
      <div className='p-3 sm:p-4 bg-white border border-gray-100 rounded-[12px] flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between items-start gap-3'>
            <img
              src={images.productExample}
              className='w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] rounded-[8px]'
            />

            <div className='w-[88%] flex flex-col gap-2 mr-auto'>
              <div className='flex flex-col gap-[2px] sm:gap-1'>
                <div className='flex flex-row justify-between items-start'>
                  <p
                    className='text-[14px] sm:text-[18px] font-semibold
                 leading-5 sm:leading-[26px] text-text-900'
                  >
                    Tên sản phẩm
                  </p>
                </div>
                <p className='text-[9px] sm:text-[12px] leading-4 sm:leading-5 text-text-400'>
                  No.NIL5-OHBN-VK
                </p>
              </div>
              <CountdownTimer type={1} />
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-500'>
              Bước giá
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black'>
              500.000 VND
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-500'>
              Giá hiện tại
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black'>
              2.000.000 VND
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <Chip label={'Đã tắt tự động đặt giá'} type={'gray'} />
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-success-600'>
              Đang dẫn đầu
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
          <Button
            onClick={() => setIsOpenBidModal(true)}
            className='h-7 sm:h-9 px-6 sm:px-8 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'
          >
            Ra giá
          </Button>
        </div>
      </div>
    </>
  )
}

export default AuctionProductCard

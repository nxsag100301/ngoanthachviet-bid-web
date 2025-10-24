import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'

import Chip from '@/components/Chip'
import CountdownTimerProduct from '@/components/CountdownTimerProduct'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/utils/formatter'
import BidModal from '@/components/BidModal'

const GeneralProductInformation = ({ product, sessionId }) => {
  const [isOpenBidModal, setIsOpenBidModal] = useState(false)
  const [currentPrice, setCurrentPrice] = useState()
  const [isAutoBid, setIsAutoBid] = useState(false)

  useEffect(() => {
    if (product?.CurrentPrice !== undefined) {
      setCurrentPrice(product?.CurrentPrice)
    }
  }, [product?.CurrentPrice])

  const handleReceiveBidUpdate = useCallback(
    (itemId, highestBidderId, newPrice, isAuto) => {
      if (newPrice) {
        setCurrentPrice(newPrice)
      }
      if (isAuto) {
        setIsAutoBid(isAuto)
      }
    },
    []
  )

  return (
    <div>
      <BidModal
        open={isOpenBidModal}
        onOpenChange={setIsOpenBidModal}
        auctionItemId={product?.AuctionItemId}
        currentPrice={currentPrice}
        stepPrice={product?.Increment}
        isAutoBid={isAutoBid}
      />
      <div className='p-2 sm:p-6 md:p-3 lg:p-6 rounded-[12px] border border-gray-100 bg-blue-50 space-y-3 sm:space-y-6'>
        <p className='text-[20px] sm:text-[24px] leading-6 sm:leading-8 font-semibold text-black'>
          {product?.ProductName}
        </p>
        <div className='flex flex-row justify-between '>
          <div className='space-y-1 sm:space-y-2'>
            <p className='text-[12px] sm:text-[14px] leading-[22px] text-black font-normal'>
              Thời gian bắt đầu
            </p>
            <p className='text-[14px] sm:text-[16px] leading-6 text-black font-semibold'>
              {moment(product?.StartTime).format('HH:mm | DD/MM/YYYY')}
            </p>
          </div>
          <div className='space-y-1 sm:space-y-2'>
            <p className='text-[12px] sm:text-[14px] leading-[22px] text-black font-normal text-right'>
              Thời gian kết thúc
            </p>
            <p className='text-[14px] sm:text-[16px] leading-6 text-black font-semibold text-right'>
              {moment(product?.EndTime).format('HH:mm | DD/MM/YYYY')}
            </p>
          </div>
        </div>
        <CountdownTimerProduct
          type={2}
          size='large'
          sessionId={+sessionId}
          auctionItemId={+product?.AuctionItemId}
          onReceiveBidUpdate={handleReceiveBidUpdate}
        />
        <div className='hidden sm:block px-2 py-1 sm:px-6 sm:py-4 md:px-4 md:py-2 lg:px-6 lg:py-4 rounded-[12px] border border-gray-100 bg-white space-y-6'>
          <div className='flex flex-col gap-2 sm:gap-3'>
            <p className='text-[14px] leading-5 text-gray-950'>Chưa tham gia</p>
            <div className='flex flex-row justify-between'>
              <p className='text-[14px] leading-5 text-text-500'>
                Giá hiện tại
              </p>
              <p className='text-[14px] leading-5 text-text-950 font-semibold'>
                {formatPrice(currentPrice)} VND
              </p>
            </div>

            <div className='flex flex-row justify-between'>
              <Chip label={'Tự động đặt giá'} type='error' />
              <p className='text-[14px] leading-5 text-success-600 font-semibold'>
                Đang dẫn đầu
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-[14px] leading-5 text-text-500'>
                Tự tăng mỗi lần
              </p>
              <p className='text-[14px] leading-5 text-text-950 font-semibold'>
                3.000.000 VND
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-[14px] leading-5 text-text-500'>
                Giá tối đa của bạn
              </p>
              <p className='text-[14px] leading-5 text-text-950 font-semibold'>
                {formatPrice(product?.MaxAutoBidAmount)} VND
              </p>
            </div>

            <Button
              onClick={() => setIsOpenBidModal(true)}
              className='lg:w-[195px] lg:h-[60px] px-10 py-6 lg:rounded-[30px] ml-auto lg:text-[20px]'
            >
              Ra giá
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom mobile */}
      <div
        className='fixed sm:hidden bottom-0 bg-white w-full
      rounded-t-[24px] -mx-4 shadow-[0_-3px_10px_rgba(0,0,0,0.1)] p-4 border border-gray-100 z-20'
      >
        <div className='h-1 w-11 bg-gray-100 rouned-full mx-auto' />
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[14px] leading-5 text-gray-950 font-semibold'>
            Chưa tham gia
          </p>
          <div className='flex flex-row justify-between'>
            <p className='text-[14px] leading-5 text-text-500'>Giá hiện tại</p>
            <p className='text-[14px] leading-5 text-text-950 font-semibold'>
              {formatPrice(currentPrice)} VND
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <Chip label={'Tự động đặt giá'} type='error' />
            <p className='text-[14px] leading-5 text-success-600 font-semibold'>
              Đang dẫn đầu
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[14px] leading-5 text-text-500'>
              Tự tăng mỗi lần
            </p>
            <p className='text-[14px] leading-5 text-text-950 font-semibold'>
              3.000.000 VND
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[14px] leading-5 text-text-500'>
              Giá tối đa của bạn
            </p>
            <p className='text-[14px] leading-5 text-text-950 font-semibold'>
              35.000.000 VND
            </p>
          </div>
          <Button
            onClick={() => setIsOpenBidModal(true)}
            className='w-full mt-1 px-10 py-6 lg:rounded-[30px] ml-auto lg:text-[20px]'
          >
            Ra giá
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GeneralProductInformation

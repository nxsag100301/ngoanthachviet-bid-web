import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import BidModal from './BidModal'
import Chip from './Chip'
import { formatPrice } from '@/utils/formatter'
import { IMAGE_URL } from '@/utils/constants'
import CountdownTimerProduct from './CountdownTimerProduct'

const AuctionProductCard = ({ session, listProductInSession }) => {
  const navigate = useNavigate()

  const productActiveInSession =
    session.Status === 'Scheduled'
      ? listProductInSession[0]
      : listProductInSession.find((item) => item.Status === 'InProgress')

  const [isOpenBidModal, setIsOpenBidModal] = useState(false)
  const [currentPrice, setCurrentPrice] = useState(
    productActiveInSession?.CurrentPrice
  )
  const [isAutoBid, setIsAutoBid] = useState(false)

  const handleReceiveBidUpdate = (
    itemId,
    highestBidderId,
    newPrice,
    isAuto
  ) => {
    if (newPrice) {
      setCurrentPrice(newPrice)
    }
    if (isAuto) {
      setIsAutoBid(isAuto)
    }
  }

  return (
    <>
      <BidModal
        open={isOpenBidModal}
        onOpenChange={setIsOpenBidModal}
        auctionItemId={productActiveInSession?.AuctionItemId}
        currentPrice={currentPrice}
        stepPrice={productActiveInSession?.Increment}
        isAutoBid={isAutoBid}
      />
      <div className='p-3 sm:p-4 bg-white border border-gray-100 rounded-[12px] flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between items-start gap-3'>
            <img
              src={IMAGE_URL + productActiveInSession?.ImageUrls[0]}
              className='w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] rounded-[8px]'
            />

            <div className='w-[88%] flex flex-col gap-2 mr-auto'>
              <div className='flex flex-col gap-[2px] sm:gap-1'>
                <div className='flex flex-row justify-between items-start'>
                  <p
                    className='text-[14px] sm:text-[18px] font-semibold
                 leading-5 sm:leading-[26px] text-text-900'
                  >
                    {productActiveInSession?.ProductName}
                  </p>
                </div>
                <p className='text-[9px] sm:text-[12px] leading-4 sm:leading-5 text-text-400'>
                  {productActiveInSession?.ProductCode}
                </p>
              </div>
              <CountdownTimerProduct
                type={1}
                sessionId={session?.ID}
                auctionItemId={productActiveInSession?.AuctionItemId}
                onReceiveBidUpdate={handleReceiveBidUpdate}
              />
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-500'>
              Bước giá
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black font-semibold'>
              {formatPrice(productActiveInSession?.Increment)} VND
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-text-500'>
              Giá hiện tại
            </p>
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-black font-semibold'>
              {formatPrice(productActiveInSession?.CurrentPrice)} VND
            </p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <Chip label={'Đã tắt tự động đặt giá'} type={'gray'} />
            <p className='text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-success-600 font-semibold'>
              Đang dẫn đầu
            </p>
          </div>
        </div>
        {productActiveInSession?.Status === 'InProgress' && (
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
              className='h-7 sm:h-9 px-6 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'
            >
              Ra giá
            </Button>
          </div>
        )}

        {productActiveInSession?.Status === 'Upcoming' && (
          <Button
            onClick={() => navigate(`/auction/product/${1}`)}
            className='h-7 sm:h-9 ml-auto px-5 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'
          >
            Chi tiết
          </Button>
        )}
      </div>
    </>
  )
}

export default AuctionProductCard

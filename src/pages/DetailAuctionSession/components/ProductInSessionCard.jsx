import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import CountdownTimerProduct from '@/components/CountdownTimerProduct'
import { IMAGE_URL } from '@/utils/constants'
import { formatPrice } from '@/utils/formatter'
import BidModal from '@/components/BidModal'

const ProductInSessionCard = ({ product, sessionId }) => {
  const navigate = useNavigate()

  const [isOpenBidModal, setIsOpenBidModal] = useState(false)
  const [currentPrice, setCurrentPrice] = useState(product?.CurrentPrice)
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
        auctionItemId={product?.AuctionItemId}
        currentPrice={currentPrice}
        stepPrice={product?.Increment}
        isAutoBid={isAutoBid}
      />
      <div className='p-4 rounded-[12px] border border-gray-100 space-y-2 sm:space-y-4'>
        <div className='space-y-2'>
          <div className='flex flex-row justify-between gap-2 sm:gap-5'>
            <img
              src={`${IMAGE_URL}${product?.ImageUrls[0]}`}
              className='w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] rounded-[8px]'
            />
            <div className='space-y-1 sm:space-y-2 w-[80%]'>
              <div className='sm:space-y-1'>
                <p className='text-[16px] sm:text-[18px] leading-6 sm:leading-[26px] font-semibold text-text-900'>
                  {product?.ProductName}
                </p>
                <p className='text-[10px] sm:text-[12px] leading-4 sm:leading-5 text-text-400'>
                  {product?.ProductCode}
                </p>
              </div>
              <CountdownTimerProduct
                type={2}
                sessionId={+sessionId}
                auctionItemId={+product?.AuctionItemId}
                onReceiveBidUpdate={handleReceiveBidUpdate}
              />
            </div>
          </div>
          {product?.Status === 'Upcoming' && (
            <div className='flex flex-row justify-between'>
              <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
                Giá mở phiên
              </p>
              <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
                {formatPrice(product?.StartingPrice)} VND
              </p>
            </div>
          )}

          <div className='flex flex-row justify-between'>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
              Bước giá
            </p>
            <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
              {formatPrice(product?.Increment)} VND
            </p>
          </div>
          {product?.Status === 'InProgress' && (
            <div className='flex flex-row justify-between'>
              <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-text-500'>
                Giá hiện tại
              </p>
              <p className='text-[12px] sm:text-[14px] leading-5 sm:leading-[22px] text-black font-semibold'>
                {formatPrice(currentPrice)} VND
              </p>
            </div>
          )}
        </div>
        {product?.Status === 'InProgress' && (
          <div className='flex flex-row justify-between items-center'>
            <Button
              onClick={() =>
                navigate(
                  `/auction/product/${sessionId}/${product?.AuctionItemId}`
                )
              }
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
        )}
        {product?.Status === 'Upcoming' && (
          <Button
            onClick={() =>
              navigate(
                `/auction/product/${sessionId}/${product?.AuctionItemId}`
              )
            }
            className='h-7 sm:h-9 ml-auto px-5 text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px]'
          >
            Chi tiết
          </Button>
        )}
      </div>
    </>
  )
}

export default ProductInSessionCard

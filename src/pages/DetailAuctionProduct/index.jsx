import React from 'react'
import { useNavigate } from 'react-router-dom'

import Icon from '@/components/icons/IconSVG'
import ImageGallery from './components/ImageGallery'
import GeneralProductInformation from './components/GeneralProductInformation'
import SessionAndProductInformation from './components/SessionAndProductInformation'

const dataImg = [
  'productExample',
  'productExample',
  'productExample',
  'productExample',
  'productExample'
]

const DetailAuctionProduct = () => {
  const navigation = useNavigate()

  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-72 sm:pb-12 space-y-12'>
      <div className='flex flex-col gap-5 sm:gap-9'>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <div className='flex flex-row items-center gap-1 sm:gap-2'>
            <p
              onClick={() => navigation('/')}
              className='text-[10px] sm:text-[20px] leading-6 sm:leading-7 text-primary-600 cursor-pointer'
            >
              Danh sách phiên đấu giá
            </p>
            <Icon name='triangleRight' width={16} height={16} />
            <p className='text-[10px] sm:text-[20px] leading-6 sm:leading-7 text-text-500'>
              Chi tiết sản phẩm đấu giá
            </p>
          </div>
          <p className='text-[24px] sm:text-[32px] leading-9 sm:leading-10 font-bold text-black uppercase'>
            Phiên: Mã phiên
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          <ImageGallery listImage={dataImg} />
          <GeneralProductInformation />
        </div>
      </div>
      <SessionAndProductInformation />
    </div>
  )
}

export default DetailAuctionProduct

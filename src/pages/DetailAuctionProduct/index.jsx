import React from 'react'

import ImageGallery from './components/ImageGallery'
import GeneralProductInformation from './components/GeneralProductInformation'
import SessionAndProductInformation from './components/SessionAndProductInformation'
import BreadCrumb from '@/components/BreadCrumb'

const dataImg = [
  'productExample',
  'productExample',
  'productExample',
  'productExample',
  'productExample'
]

const DetailAuctionProduct = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-72 sm:pb-12 space-y-12'>
      <div className='flex flex-col gap-5 sm:gap-9'>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <BreadCrumb />
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

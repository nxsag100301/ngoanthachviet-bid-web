import React from 'react'
import { useNavigate } from 'react-router-dom'

import Icon from '@/components/icons/IconSVG'
import SessionInformation from './components/SessionInformation'
import ListProductInSession from './components/ListProductInSession'

const DetailAuctionSession = () => {
  const navigation = useNavigate()

  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-12'>
      <div className='flex flex-col gap-5 sm:gap-9'>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <div className='flex flex-row items-center gap-1 sm:gap-2'>
            <p
              onClick={() => navigation('/')}
              className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-primary-600 cursor-pointer'
            >
              Danh sách phiên
            </p>
            <Icon name='triangleRight' width={16} height={16} />
            <p className='text-[16px] sm:text-[20px] leading-6 sm:leading-7 text-text-500'>
              Chi tiết phiên
            </p>
          </div>
          <p className='text-[28px] sm:text-[32px] leading-9 sm:leading-10 font-bold text-black uppercase'>
            Phiên: Mã phiên
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-6 sm:gap-10'>
          <SessionInformation />
          <ListProductInSession />
        </div>
      </div>
    </div>
  )
}

export default DetailAuctionSession

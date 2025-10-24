import Chip from '@/components/Chip'
import CountdownTimerSession from '@/components/CountdownTimerSession'
import { Button } from '@/components/ui/button'
import React from 'react'

const GeneralProductInformation = () => {
  return (
    <div>
      <div className='p-2 sm:p-6 md:p-3 lg:p-6 rounded-[12px] border border-gray-100 bg-blue-50 space-y-3 sm:space-y-6'>
        <p className='text-[20px] sm:text-[24px] leading-6 sm:leading-8 font-semibold text-black'>
          Đá cảnh thác chảy 7B16
        </p>
        <div className='flex flex-row justify-between '>
          <div className='space-y-1 sm:space-y-2'>
            <p className='text-[12px] sm:text-[14px] leading-[22px] text-black font-normal'>
              Thời gian bắt đầu
            </p>
            <p className='text-[14px] sm:text-[16px] leading-6 text-black font-semibold'>
              15:00 | 20/05/2025
            </p>
          </div>
          <div className='space-y-1 sm:space-y-2'>
            <p className='text-[12px] sm:text-[14px] leading-[22px] text-black font-normal text-right'>
              Thời gian kết thúc
            </p>
            <p className='text-[14px] sm:text-[16px] leading-6 text-black font-semibold text-right'>
              18:00 | 20/05/2025
            </p>
          </div>
        </div>
        <CountdownTimerSession type={2} size='large' />
        <div className='hidden sm:block px-2 py-1 sm:px-6 sm:py-4 md:px-4 md:py-2 lg:px-6 lg:py-4 rounded-[12px] border border-gray-100 bg-white space-y-6'>
          <div className='flex flex-col gap-2 sm:gap-3'>
            <p className='text-[14px] leading-5 text-gray-950'>Chưa tham gia</p>
            <div className='flex flex-row justify-between'>
              <p className='text-[14px] leading-5 text-text-500'>
                Giá hiện tại
              </p>
              <p className='text-[14px] leading-5 text-text-950 font-semibold'>
                10.000.000 VND
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
            <Button className='lg:w-[195px] lg:h-[60px] px-10 py-6 lg:rounded-[30px] ml-auto lg:text-[20px]'>
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
              10.000.000 VND
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
          <Button className='w-full mt-1 px-10 py-6 lg:rounded-[30px] ml-auto lg:text-[20px]'>
            Ra giá
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GeneralProductInformation

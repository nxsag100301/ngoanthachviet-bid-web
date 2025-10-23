import React, { useState, useTransition } from 'react'
import SessionInformation from './SessionInformation'
import ProductInformation from './ProductInformation'

const SessionAndProductInformation = () => {
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState('product') // session || product

  return (
    <div className='px-4 sm:px-9 py-2 sm:py-6 rounded-[12px] space-y-4 sm:space-y-9 bg-white'>
      <div className='flex flex-row justify-between items-center'>
        <div
          onClick={() => startTransition(() => setTab('session'))}
          className={`text-[12px] sm:text-[18px] text-center pb-1 sm:pb-2 w-full cursor-pointer border-b sm:border-b-[2px]
            ${
              tab === 'session'
                ? 'border-primary-800 text-primary-800'
                : 'border-gray-400'
            }
            `}
        >
          Thông tin phiên
        </div>
        <div
          onClick={() => startTransition(() => setTab('product'))}
          className={`text-[12px] sm:text-[18px] text-center pb-1 sm:pb-2 w-full cursor-pointer border-b sm:border-b-[2px]
            ${
              tab === 'product'
                ? 'border-primary-800 text-primary-800'
                : 'border-gray-400'
            }
            `}
        >
          Thông tin sản phẩm
        </div>
      </div>
      {tab === 'session' ? <SessionInformation /> : <ProductInformation />}
    </div>
  )
}

export default SessionAndProductInformation

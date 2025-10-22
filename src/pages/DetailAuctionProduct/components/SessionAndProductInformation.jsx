import React, { useState } from 'react'
import SessionInformation from './SessionInformation'
import ProductInformation from './ProductInformation'

const SessionAndProductInformation = () => {
  const [tab, setTab] = useState('product') // session || product

  return (
    <div className='px-9 py-6 rounded-[12px] space-y-9 bg-white'>
      <div className='flex flex-row justify-between items-center'>
        <div
          onClick={() => setTab('session')}
          className={`text-center pb-2  w-full cursor-pointer
            ${
              tab === 'session'
                ? 'border-b-[2px] border-primary-800 text-primary-800'
                : 'border-b border-gray-400'
            }
            `}
        >
          Thông tin phiên
        </div>
        <div
          onClick={() => setTab('product')}
          className={`text-center pb-2 border-b  w-full cursor-pointer
            ${
              tab === 'product'
                ? 'border-b-[2px] border-primary-800 text-primary-800'
                : 'border-b border-gray-400'
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

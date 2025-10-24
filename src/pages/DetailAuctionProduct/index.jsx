import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ImageGallery from './components/ImageGallery'
import GeneralProductInformation from './components/GeneralProductInformation'
import SessionAndProductInformation from './components/SessionAndProductInformation'
import BreadCrumb from '@/components/BreadCrumb'
import { getDetailSessionAuction } from '@/apis/auction'

const DetailAuctionProduct = () => {
  const { sessionId, itemId } = useParams()

  const [detailSession, setDetailSession] = useState(null)

  useEffect(() => {
    const fetchDetailSessionAuction = async () => {
      try {
        const res = await getDetailSessionAuction({ sessionId })
        if (res?.statusCodes === 200) {
          const dataSession = res?.metadata
          setDetailSession(dataSession)
        }
      } catch (error) {
        console.log('Error getDetailSessionAuction: ', error)
      }
    }
    fetchDetailSessionAuction()
  }, [sessionId])

  const product = detailSession?.Items?.find(
    (item) => +item.AuctionItemId === +itemId
  )

  return (
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-20 pt-5 sm:pt-9 pb-72 sm:pb-12 space-y-12'>
      <div className='flex flex-col gap-5 sm:gap-9'>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <BreadCrumb />
          <p className='text-[24px] sm:text-[32px] leading-9 sm:leading-10 font-bold text-black uppercase'>
            Phiên: {detailSession?.Code}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          <ImageGallery listImage={product?.ImageUrls} />
          <GeneralProductInformation product={product} sessionId={sessionId} />
        </div>
      </div>
      <SessionAndProductInformation />
    </div>
  )
}

export default DetailAuctionProduct

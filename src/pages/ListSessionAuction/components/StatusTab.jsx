import React, { useTransition } from 'react'

const StatusTab = ({ tab, setTab }) => {
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition()

  const handleChangeTab = (tabValue) => {
    startTransition(() => {
      setTab(tabValue)
    })
  }

  return (
    <div className='flex flex-row items-center gap-4 sm:gap-8'>
      <div
        onClick={() => handleChangeTab('All')}
        className={`text-[14px] sm:text-[18px] leading-[20px] sm:leading-[26px] text-text-400 font-semibold
            cursor-pointer pb-1 border-b-2 border-gray-50 ${
              tab === 'All' &&
              'border-b-2 !border-primary-800 !text-primary-800'
            }
            `}
      >
        Tất cả
      </div>
      <div
        onClick={() => handleChangeTab('Participating')}
        className={`text-[14px] sm:text-[18px] leading-[20px] sm:leading-[26px] text-text-400 font-semibold
            cursor-pointer pb-1  border-b-2 border-gray-50 ${
              tab === 'Participating' &&
              'border-b-2 !border-primary-800 !text-primary-800'
            }
            `}
      >
        Đang tham gia
      </div>
    </div>
  )
}

export default StatusTab

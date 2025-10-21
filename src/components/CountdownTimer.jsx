import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import Icon from './icons/IconSVG'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

const CountdownTimer = ({ type }) => {
  // type: 1 || 2
  return (
    <div
      className={`px-2 py-[6px] flex flex-row justify-between rounded-[6px]
  ${type === 1 && 'bg-gray-100'}
  `}
    >
      <div className='flex flex-row gap-1 items-center'>
        <Icon
          name='clockTimer'
          width={16}
          height={16}
          fill={colors.warning[600]}
        />
        <p className='text-[12px] leading-5 text-warning-600'>Kết thúc trong</p>
      </div>
      <div className='flex flex-row gap-[6px] items-center'>
        <div className='w-6 h-6 rounded-[2px] p-[2px] flex justify-center items-center bg-warning-600'>
          <p className='text-[12px] leading-[18px] font-bold text-warning-50'>
            01
          </p>
        </div>
        <div className='w-6 h-6 rounded-[2px] p-[2px] flex justify-center items-center bg-warning-600'>
          <p className='text-[12px] leading-[18px] font-bold text-warning-50'>
            15
          </p>
        </div>
        <div className='w-6 h-6 rounded-[2px] p-[2px] flex justify-center items-center bg-warning-600'>
          <p className='text-[12px] leading-[18px] font-bold text-warning-50'>
            29
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

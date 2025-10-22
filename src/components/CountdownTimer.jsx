import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import Icon from '@/components/icons/IconSVG'
import tailwindConfig from '@/.././tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

const CountdownTimer = ({ type, size = 'small' }) => {
  // type: 1 || 2 || 3
  return (
    <div
      className={`flex flex-row justify-between rounded-[6px] gap-1
      ${type === 1 && 'bg-gray-100'}
      ${type === 2 && 'bg-warning-100'}
      ${type === 3 && 'bg-white'}
      ${
        size === 'medium'
          ? 'p-2'
          : size === 'large'
          ? 'xl:px-6 xl:py-4 px-[6px] sm:px-2 py-[6px]'
          : 'px-[6px] sm:px-2 py-[6px]'
      }
  `}
    >
      <div className='flex flex-row gap-1 items-center'>
        {size === 'large' ? (
          <>
            <div className='hidden xl:flex justify-center items-center'>
              <Icon
                name='clockTimer'
                width={30}
                height={30}
                fill={colors.warning[600]}
              />
            </div>
            <div className='flex xl:hidden justify-center items-center'>
              <Icon
                name='clockTimer'
                width={22}
                height={22}
                fill={colors.warning[600]}
              />
            </div>
          </>
        ) : (
          <>
            <div className='hidden sm:flex justify-center items-center'>
              <Icon
                name='clockTimer'
                width={16}
                height={16}
                fill={colors.warning[600]}
              />
            </div>
            <div className='flex sm:hidden justify-center items-center'>
              <Icon
                name='clockTimer'
                width={12}
                height={12}
                fill={colors.warning[600]}
              />
            </div>
          </>
        )}

        <p
          className={`text-warning-600 whitespace-nowrap text-[9px] sm:text-[11px] 2xl:text-[12px] leading-4 sm:leading-5
           ${size === 'medium' && '2xl:text-[14px]'}
           ${
             size === 'large' && '2xl:!text-[18px] md:!text-[16px] !text-[14px]'
           }
           `}
        >
          Kết thúc trong
        </p>
      </div>
      <div className='flex flex-row gap-1 sm:gap-[6px] items-center'>
        <div
          className={`
          ${
            size === 'large'
              ? 'w-10 h-8 xl:w-12 xl:h-10 px-[6px] py-1'
              : 'w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 p-[2px]'
          }
          rounded-[2px] flex justify-center items-center bg-warning-600
          `}
        >
          <p
            className={`
            ${
              size === 'large'
                ? 'text-[16px] xl:text-[20px] leading-8'
                : 'text-[9px] sm:text-[11px] 2xl:text-[12px] leading-[14px] sm:leading-[18px]'
            }
             font-bold text-warning-50
            `}
          >
            01
          </p>
        </div>
        <div
          className={`
          ${
            size === 'large'
              ? 'w-10 h-8 xl:w-12 xl:h-10 px-[6px] py-1'
              : 'w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 p-[2px]'
          }
          rounded-[2px] flex justify-center items-center bg-warning-600
          `}
        >
          <p
            className={`
            ${
              size === 'large'
                ? 'text-[16px] xl:text-[20px] leading-8'
                : 'text-[9px] sm:text-[11px] 2xl:text-[12px] leading-[14px] sm:leading-[18px]'
            }
             font-bold text-warning-50
            `}
          >
            15
          </p>
        </div>
        <div
          className={`
          ${
            size === 'large'
              ? 'w-10 h-8 xl:w-12 xl:h-10 px-[6px] py-1'
              : 'w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 p-[2px]'
          }
          rounded-[2px] flex justify-center items-center bg-warning-600
          `}
        >
          <p
            className={`
            ${
              size === 'large'
                ? 'text-[16px] xl:text-[20px] leading-8'
                : 'text-[9px] sm:text-[11px] 2xl:text-[12px] leading-[14px] sm:leading-[18px]'
            }
             font-bold text-warning-50
            `}
          >
            29
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

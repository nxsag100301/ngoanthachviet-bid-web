import React from 'react'
import Icon from './icons/IconSVG'

const QuantitySelector = ({ value, onChange }) => {
  const handlePlus = () => {
    onChange(value + 1)
  }

  const handleMinus = () => {
    if (value === 1) return
    onChange(value - 1)
  }
  return (
    <div className='flex flex-row gap-[6px] items-center'>
      <div onClick={handleMinus}>
        <Icon name='minusQuantity' width={30} height={30} />
      </div>

      <p className='w-8 h-8 text-[16px] leading-6 text-text-950 text-center'>
        {value}
      </p>
      <div onClick={handlePlus}>
        <Icon name='plusQuantity' width={30} height={30} />
      </div>
    </div>
  )
}

export default QuantitySelector

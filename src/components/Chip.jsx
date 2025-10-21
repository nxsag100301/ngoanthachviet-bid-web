import React from 'react'

const Chip = ({ label, type }) => {
  return (
    <div
      className={`px-[10px] py-[2px] flex justify-center items-center
         text-[12px] leading-5 rounded-[8px]
       ${type === 'blue' && 'bg-blue-100 text-blue-600'} ${
        type === 'error' && 'bg-error-100 text-error-600'
      }`}
    >
      {label}
    </div>
  )
}

export default Chip

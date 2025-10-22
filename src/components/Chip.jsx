import React from 'react'

const Chip = ({ label, type }) => {
  return (
    <div
      className={`px-[10px] py-[2px] flex justify-center items-center
         text-[10px] sm:text-[12px] leading-4 sm:leading-5 rounded-[6px]
       ${type === 'success' && 'bg-success-100 text-success-600'} 
       ${type === 'error' && 'bg-error-100 text-error-600'}
      ${type === 'gray' && 'bg-gray-200 text-text-500'}
      `}
    >
      {label}
    </div>
  )
}

export default Chip

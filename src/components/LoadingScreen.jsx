import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default LoadingScreen

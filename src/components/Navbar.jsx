import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { useSelector } from 'react-redux'

import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'
import { DialogTitle } from './ui/dialog'
import { maskPhoneNumber } from '@/utils/formatter'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const { userInfo } = useSelector((state) => state.user)

  return (
    <div className='h-[84px] bg-primary-900 py-1 sticky top-0 w-full z-40 '>
      <div className='flex justify-between items-center h-full max-w-screen-2xl mx-auto px-4 lg:px-20'>
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src='/assets/images/logo.png'
          className='w-[100px] h-[76px] object-cover cursor-pointer sm:scale-125'
          alt='logo'
        />

        {/* Desktop menu */}
        <div className='flex flex-row items-center gap-10 xl:gap-[68px]'>
          <div className='hidden lg:flex items-center gap-6 xl:gap-10 text-white text-base'>
            <span
              onClick={() => navigate('/')}
              className={`cursor-pointer ${
                isActive('/') ? 'text-white' : 'text-text-200'
              }`}
            >
              Danh sách phiên đấu giá
            </span>
            <span
              onClick={() => navigate('/auction/results')}
              className={`cursor-pointer ${
                isActive('/auction/results') ? 'text-white' : 'text-text-200'
              }`}
            >
              Kết quả của tôi
            </span>
            <span
              onClick={() => navigate('/auction/ended')}
              className={`cursor-pointer ${
                isActive('/auction/ended') ? 'text-white' : 'text-text-200'
              }`}
            >
              Danh sách phiên đã kết thúc
            </span>
          </div>

          {/* Time & Login (Desktop) */}
          <div className='flex items-center gap-6'>
            <div className='text-white space-y-1 text-center'>
              <div className='text-sm'>
                {maskPhoneNumber(userInfo?.PhoneNumber)}
              </div>
              <div className='text-xs text-gray-300'>{userInfo?.FullName}</div>
            </div>
            {/* Sheet menu mobile */}
            <div className='lg:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <button className='focus:outline-none focus:ring-0'>
                    <IoMenu className='text-white w-8 h-8' />
                  </button>
                </SheetTrigger>
                <SheetContent className='bg-primary-900 text-white focus:outline-none focus:ring-0'>
                  <DialogTitle className='sr-only'>Menu mobile</DialogTitle>
                  <nav className='flex flex-col gap-5 text-base pt-14'>
                    <SheetClose asChild>
                      <span onClick={() => navigate('/')}>
                        Danh sách phiên đấu giá
                      </span>
                    </SheetClose>
                    <SheetClose asChild>
                      <span onClick={() => navigate('/auction/results')}>
                        Kết quả của tôi
                      </span>
                    </SheetClose>
                    <SheetClose asChild>
                      <span onClick={() => navigate('/auction/ended')}>
                        Danh sách phiên đã kết thúc
                      </span>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import { Outlet } from 'react-router-dom'

import Navbar from '@/components/Navbar'

const Layout = () => {
  return (
    <div className='bg-gray-50 h-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout

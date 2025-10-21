import { Routes, Route } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import Layout from '@/Layout'
import ListSessionAuction from '@/pages/ListSessionAuction'
import MyAuctionResult from '@/pages/MyAuctionResult'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />

      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path='/' element={<ListSessionAuction />} />
          <Route path='/myauctionresult' element={<MyAuctionResult />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes

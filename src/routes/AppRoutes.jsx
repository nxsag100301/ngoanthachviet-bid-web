import { Routes, Route } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import Layout from '@/Layout'
import ListSessionAuction from '@/pages/ListSessionAuction'
import MyAuctionResult from '@/pages/MyAuctionResult'
import DetailAuctionSession from '@/pages/DetailAuctionSession'
import ListSessionAuctionEnded from '@/pages/ListSessionAuctionEnded'
import DetailAuctionProduct from '@/pages/DetailAuctionProduct'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />

      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path='/' element={<ListSessionAuction />} />
          <Route path='/auction/ended' element={<ListSessionAuctionEnded />} />
          <Route path='/auction/results' element={<MyAuctionResult />} />
          <Route
            path='/auction/session/:id'
            element={<DetailAuctionSession />}
          />
          <Route
            path='/auction/product/:id'
            element={<DetailAuctionProduct />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes

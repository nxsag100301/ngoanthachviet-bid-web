import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { logoutByTimeout, userLogOutAPI } from '@/redux/slice/userSlice'

const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const { userInfo, loginTime } = useSelector((state) => state.user)
  const isAuthenticated = !!userInfo

  useEffect(() => {
    if (loginTime) {
      const now = Date.now()
      const diffHours = (now - loginTime) / (1000 * 60 * 60)

      if (diffHours >= 24) {
        dispatch(userLogOutAPI({ AccessToken: userInfo?.Token }))
        dispatch(logoutByTimeout())
      }
    }
  }, [loginTime, userInfo, dispatch])

  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />}</>
}

export default PrivateRoutes

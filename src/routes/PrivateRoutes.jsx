import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { userInfo } = useSelector((state) => state.user)
  const isAuthenticated = !!userInfo
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />}</>
}

export default PrivateRoutes

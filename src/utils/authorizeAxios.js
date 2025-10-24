import axios from 'axios'
import { toast } from 'react-toastify'

import { interceptorLoadingElements } from './formatter'
import { API_URL, X_API_KEY } from './constants'
import { setLoadingApi } from '@/redux/slice/loadingApiSlice'

let axiosReduxStore
export const injectStore = (mainStore) => {
  axiosReduxStore = mainStore
}

let authorizeAxiosInstance = axios.create({
  baseURL: API_URL + '/api'
})

authorizeAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizeAxiosInstance.defaults.withCredentials = false
authorizeAxiosInstance.defaults.headers.common['x-api-key'] = X_API_KEY

// Interceptors Request
authorizeAxiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const userStateRedux = axiosReduxStore.getState()
    const { userInfo } = userStateRedux.user

    const accessToken = userInfo?.Token
    const userId = userInfo?.CustomerId
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    if (userId) {
      config.headers.userIdLogin = userId
    }
    interceptorLoadingElements(true)
    axiosReduxStore.dispatch(setLoadingApi(true))
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Interceptors Response
authorizeAxiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    interceptorLoadingElements(false)
    axiosReduxStore.dispatch(setLoadingApi(false))
    if (response?.data?.statusCodes !== 200) {
      toast.error(response?.data?.message)
    }
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    interceptorLoadingElements(false)
    axiosReduxStore.dispatch(setLoadingApi(false))

    let errMessage = error?.message
    if (error.response?.data?.message) {
      errMessage = error.response?.data?.message
    }
    if (error.response?.status !== 410) {
      toast.error(errMessage)
    }
    return Promise.reject(error)
  }
)

export default authorizeAxiosInstance

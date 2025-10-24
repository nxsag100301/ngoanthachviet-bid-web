import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import axios from '@/utils/authorizeAxios'

const initialState = {
  userInfo: null
}

export const userLoginAPI = createAsyncThunk(
  'user/userLoginAPI',
  async (data) => {
    const res = await axios.post('/Auth/Customer/LoginWithPhoneNumber', data)
    return res.data
  }
)

export const userLogOutAPI = createAsyncThunk(
  'user/userLogOutAPI',
  async (showSuccessMessage = true) => {
    const res = await axios.post('/Auth/Customer/Logout')
    if (showSuccessMessage) {
      toast.success('Đăng xuất thành công')
    }
    return res.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAPI.fulfilled, (state, action) => {
      state.userInfo = action.payload.metadata
    })
    builder.addCase(userLogOutAPI.fulfilled, (state) => {
      state.userInfo = null
    })
  }
})

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions

export default userSlice.reducer

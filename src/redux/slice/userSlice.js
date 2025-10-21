import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer

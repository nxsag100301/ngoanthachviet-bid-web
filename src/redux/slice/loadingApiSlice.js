import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

export const loadingSlice = createSlice({
  name: 'loadingApi',
  initialState,
  reducers: {
    setLoadingApi: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setLoadingApi } = loadingSlice.actions

export const selectLoadingApi = (state) => state.loadingApi.loading

export default loadingSlice.reducer

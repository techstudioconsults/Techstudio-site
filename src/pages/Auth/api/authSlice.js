import { createSlice } from '@reduxjs/toolkit'

const STATE = { token: null, refreshToken: null }

const AUTH_SLICE = {
  name: 'auth',
  initialState: STATE,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken } = action.payload
      state.token = accessToken
      state.refreshToken = refreshToken
    },
    logOut: (state) => {
      state.token = null
      state.refreshToken = null
    },
  },
}

const authSlice = createSlice(AUTH_SLICE)

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken

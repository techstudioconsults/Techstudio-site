import { createSlice } from '@reduxjs/toolkit'

const STATE = { token: null }

const AUTH_SLICE = {
  name: 'auth',
  initialState: STATE,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logOut: (state, action) => {
      state.token = null
    },
  },
}

const authSlice = createSlice(AUTH_SLICE)

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token

import { createSlice } from '@reduxjs/toolkit'

const STATE = {}

const COURSES_SLICE = {
  name: 'courses',
  initialState: STATE,
  reducers: {},
}

const coursesSlice = createSlice(COURSES_SLICE)

export const { setCredentials, logOut } = coursesSlice.actions

export default coursesSlice.reducer

// export const selectCurrentToken = (state) => state.auth.token
// export const selectCurrentRefreshToken = (state) => state.auth.refreshToken

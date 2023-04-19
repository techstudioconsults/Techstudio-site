import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  courseDetailsLoading: false,
}

const APP_SLICE = {
  name: 'app',
  initialState: STATE,
  reducers: {
    setcourseDetailsLoading: (state, action) => {
      state.courseDetailsLoading = action.payload
    },
  },
}

const appSlice = createSlice(APP_SLICE)

export const { setcourseDetailsLoading } = appSlice.actions

export default appSlice.reducer

export const selectCourseDetailsLoading = (state) =>
  state.app.courseDetailsLoading
// export const selectCurrentRefreshToken = (state) => state.app.refreshToken

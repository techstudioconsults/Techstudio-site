import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  courseDetailsLoading: false,
  userType: `tutor`,
}

const APP_SLICE = {
  name: 'app',
  initialState: STATE,
  reducers: {
    setcourseDetailsLoading: (state, action) => {
      state.courseDetailsLoading = action.payload
    },
    setUserType: (state, action) => {
      state.userType = action.payload
    },
  },
}

const appSlice = createSlice(APP_SLICE)

export const { setcourseDetailsLoading, setUserType } = appSlice.actions

export default appSlice.reducer

export const selectCourseDetailsLoading = (state) =>
  state.app.courseDetailsLoading
export const selectUserType = (state) => state.app.userType
// export const selectCurrentRefreshToken = (state) => state.app.refreshToken

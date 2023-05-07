import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  courseDetailsLoading: false,
  userType: `tutor`,
  classDetailOpen: true,
  courseDetailOpen: true,
  errorMessage: ``,
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
    setClassDetailOpen: (state, action) => {
      state.classDetailOpen = action.payload
    },
    setCourseDetailOpen: (state, action) => {
      state.classDetailOpen = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
  },
}

const appSlice = createSlice(APP_SLICE)

export const {
  setcourseDetailsLoading,
  setUserType,
  setClassDetailOpen,
  setCourseDetailOpen,
  setErrorMessage,
} = appSlice.actions

export default appSlice.reducer

export const selectCourseDetailsLoading = (state) =>
  state.app.courseDetailsLoading
export const selectUserType = (state) => state.app.userType
export const selectClassDetailOpen = (state) => state.app.classDetailOpen
export const selectCourseDetailOpen = (state) => state.app.setCourseDetailOpen
export const selectErrorMessage = (state) => state.app.errorMessage

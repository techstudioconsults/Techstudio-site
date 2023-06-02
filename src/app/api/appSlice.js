import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  courseDetailsLoading: false,
  userType: `tutor`,
  classDetailOpen: true,
  courseDetailOpen: true,
  errorMessage: ``,
  faq: {},
  courses: [],
  courseID: ``,
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
    setFAQ: (state, action) => {
      state.faq = action.payload
    },
    setCourses: (state, action) => {
      state.courses = action.payload
    },
    setCourseID: (state, action) => {
      state.courseID = action.payload
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
  setFAQ,
  setCourses,
  setCourseID,
} = appSlice.actions

export default appSlice.reducer

export const selectCourseDetailsLoading = (state) =>
  state.app.courseDetailsLoading
export const selectUserType = (state) => state.app.userType
export const selectClassDetailOpen = (state) => state.app.classDetailOpen
export const selectCourseDetailOpen = (state) => state.app.setCourseDetailOpen
export const selectErrorMessage = (state) => state.app.errorMessage
export const selectFAQ = (state) => state.app.faq
export const selectCoursesExternal = (state) => state.app.courses
export const selectCourseID = (state) => state.app.courseID

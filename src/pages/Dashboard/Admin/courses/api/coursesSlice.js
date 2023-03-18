import { createSlice } from '@reduxjs/toolkit'

const STATE = { courses: [], courseDetails: {} }

const COURSES_SLICE = {
  name: 'courses',
  initialState: STATE,
  reducers: {
    setCourses: (state, action) => {
      const { courses } = action.payload
      state.courses = courses
    },
    setCourseDetails: (state, action) => {
      const { courseDetails } = action.payload
      state.courseDetails = courseDetails
    },
  },
}

const coursesSlice = createSlice(COURSES_SLICE)

export const { setCourses, setCourseDetails } = coursesSlice.actions

export default coursesSlice.reducer

export const selectCourses = (state) => state.courses.courses
export const selectCourseDetails = (state) => state.courses.courseDetails

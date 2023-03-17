import { createSlice } from '@reduxjs/toolkit'

const STATE = { courses: null }

const COURSES_SLICE = {
  name: 'courses',
  initialState: STATE,
  reducers: {
    setCourses: (state, action) => {
      const { courses } = action.payload
      state.courses = courses
    },
  },
}

const coursesSlice = createSlice(COURSES_SLICE)

export const { setCourses } = coursesSlice.actions

export default coursesSlice.reducer

export const selectCourses = (state) => state.courses.courses

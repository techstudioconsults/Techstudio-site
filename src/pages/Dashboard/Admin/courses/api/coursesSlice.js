import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  courses: [],
  courseDetails: {},
  activeCourse: { isActive: false },
}

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

    setActiveCourse: (state, action) => {
      const { isActive } = action.payload
      state.activeCourse.isActive = isActive
    },
  },
}

const coursesSlice = createSlice(COURSES_SLICE)

export const { setCourses, setCourseDetails, setActiveCourse } =
  coursesSlice.actions

export default coursesSlice.reducer

export const selectCourses = (state) => state.courses.courses
export const selectActiveCourse = (state) => state.courses.activeCourse
export const selectCourseDetails = (state) => state.courses.courseDetails

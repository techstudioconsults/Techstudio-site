import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  classes: {},
  details: {},
  // resources: {},
  lessons: {},
  showDetailBox: false,
}

const CLASS_SLICE = {
  name: 'classes',
  initialState: STATE,
  reducers: {
    setClasses: (state, action) => {
      const { classes } = action.payload
      state.classes = classes
    },
    setLessons: (state, action) => {
      const { lessons } = action.payload
      state.lessons = lessons
    },
    setClassDetails: (state, action) => {
      state.details = action.payload
      state.showDetailBox = true
    },
    setLessonDetails: (state, action) => {
      state.details = action.payload
    },
    // setResources: (state, action) => {
    //   state.resources = action.payload
    // },
  },
}

const classSlice = createSlice(CLASS_SLICE)

export const {
  setClasses,
  setLessons,
  setClassDetails,
  // setResources
} = classSlice.actions

export default classSlice.reducer

export const selectClasses = (state) => state.classes.classes
export const selectLessons = (state) => state.classes.lessons
export const selectDetails = (state) => state.classes.details
// export const selectAllResources = (state) => state.classes.resources
export const selectShowDetailBox = (state) => state.classes.showDetailBox

import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  classes: {},
  classDetails: {},
}

const CLASS_SLICE = {
  name: 'classes',
  initialState: STATE,
  reducers: {
    setClasses: (state, action) => {
      const { classes } = action.payload
      state.classes = classes
    },
    setClassDetails: (state, action) => {
      state.classDetails = action.payload
    },
  },
}

const classSlice = createSlice(CLASS_SLICE)

export const { setClasses, setClassDetails } = classSlice.actions

export default classSlice.reducer

export const selectClasses = (state) => state.classes.classes
export const selectClassDetails = (state) => state.classes.classDetails

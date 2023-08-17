import { createSlice } from '@reduxjs/toolkit'

const STATE = { upcomingCourses: [] }

const EXTERNAL_SLICE = {
  name: 'external',
  initialState: STATE,
  reducers: {
    setUpcomingCourses: (state, action) => {
      state.upcomingCourses = action.payload
    },
  },
}

const externalSlice = createSlice(EXTERNAL_SLICE)

export const { setUpcomingCourses } = externalSlice.actions

export default externalSlice.reducer

export const selectExternalCourses = (state) => state.external.upcomingCourses

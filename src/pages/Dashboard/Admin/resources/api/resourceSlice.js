import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  resources: [],
}

const RESOURCE_SLICE = {
  name: 'resources',
  initialState: STATE,
  reducers: {
    setResources: (state, action) => {
      const { resources } = action.payload
      state.resources = resources
    },
  },
}

const resourceSlice = createSlice(RESOURCE_SLICE)

export const { setResources } = resourceSlice.actions

export default resourceSlice.reducer

export const selectAllResources = (state) => state.resources.resources

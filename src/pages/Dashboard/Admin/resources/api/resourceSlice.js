import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  resources: {},
}

const RESOURCE_SLICE = {
  name: 'resources',
  initialState: STATE,
  reducers: {
    setResources: (state, action) => {
      state.resources = action.payload
    },
  },
}

const resourceSlice = createSlice(RESOURCE_SLICE)

export const { setResources } = resourceSlice.actions

export default resourceSlice.reducer

export const selectAllResources = (state) => state.resources.resources

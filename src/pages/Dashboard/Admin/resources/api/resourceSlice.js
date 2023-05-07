import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  resources: [],
  classResources: [],
}

const RESOURCE_SLICE = {
  name: 'resources',
  initialState: STATE,
  reducers: {
    setResources: (state, action) => {
      const { resources } = action.payload
      state.resources = resources
    },
    setClassResources: (state, action) => {
      const { resources } = action.payload
      state.classResources = resources
    },
  },
}

const resourceSlice = createSlice(RESOURCE_SLICE)

export const { setResources, setClassResources } = resourceSlice.actions

export default resourceSlice.reducer

// export const selectAllResources = (state) => state.resources.resources
export const selectResources = (state) => state.resources.resources
export const selectClassResources = (state) => state.resources.classResources

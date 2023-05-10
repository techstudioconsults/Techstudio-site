import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  cards: {},
  resources: {},
}

const DASHBOARD_SLICE = {
  name: 'dashboard',
  initialState: STATE,
  reducers: {
    setCards: (state, action) => {
      const { cards } = action.payload
      state.cards = cards
    },
    setResources: (state, action) => {
      const { resources } = action.payload
      state.resources = resources
    },
  },
}

const dashboardSlice = createSlice(DASHBOARD_SLICE)

export const { setCards, setResources } = dashboardSlice.actions

export default dashboardSlice.reducer

export const selectCards = (state) => state.dashboard.cards
export const selectDashboardResources = (state) => state.dashboard.resources

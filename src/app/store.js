import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from '../pages/Auth/api/authSlice'
import dashboardReducer from '../pages/Dashboard/Admin/api/dashboardSlice'
import classesReducer from '../pages/Dashboard/Admin/classes/api/classSlice'
import coursesReducer from '../pages/Dashboard/Admin/courses/api/coursesSlice'
import paymentReducer from '../pages/Dashboard/Admin/Payment/api/paymentSlice'
import resourceReducer from '../pages/Dashboard/Admin/resources/api/resourceSlice'
import usersReducer from '../pages/Dashboard/Admin/users/api/usersSlice'
import externalReducer from '../pages/Externals/api/externalSlice'

import { apiSlice } from './api/apiSlice'
import appReducer from './api/appSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['auth'], // only persist the auth state
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    external: externalReducer,
    auth: persistedReducer,
    dashboard: dashboardReducer,
    courses: coursesReducer,
    classes: classesReducer,
    resources: resourceReducer,
    users: usersReducer,
    payment: paymentReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  // devTools: process.env.NODE_ENV !== 'production',

  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)

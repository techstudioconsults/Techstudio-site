import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../pages/Auth/api/authSlice'
import coursesReducer from '../pages/Dashboard/Admin/courses/api/coursesSlice'
import classesReducer from '../pages/Dashboard/Admin/classes/api/classSlice'
import resourceReducer from '../pages/Dashboard/Admin/resources/api/resourceSlice'
import usersReducer from '../pages/Dashboard/Admin/users/api/usersSlice'

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
    // auth: authReducer,
    auth: persistedReducer,
    courses: coursesReducer,
    classes: classesReducer,
    resources: resourceReducer,
    users: usersReducer,
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

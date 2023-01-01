import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './components/PageContent/Categories/categoriesSlice'
import locationReducer from './components/Header/SelectLocation/selectLocationSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    location: locationReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

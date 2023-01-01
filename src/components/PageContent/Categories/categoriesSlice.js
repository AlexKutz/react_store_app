import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { categoriesApi } from '../../../api'

const initialState = {
  current: 0,
  categories: []
}

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (thunkApi) => await categoriesApi.getCategories()
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setCurrent: (state, action) => {
      state.current = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export const { setCurrent } = categoriesSlice.actions

export default categoriesSlice.reducer

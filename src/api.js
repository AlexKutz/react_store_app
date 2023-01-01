import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = {
  getCategories: async function () {
    try {
      const response = await axios.get('https://api.storerestapi.com/categories')
      return response.data.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const locationApi = {
  getUserLocation: async function (position) {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
      if (response.data.error_message) {
        throw new Error(response.data.error_message)
      } else {
        return response.data.results[4]
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.storerestapi.com' }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => '/products'
    })
  })
})

export const { useGetAllProductsQuery } = api

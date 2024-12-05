import { configureStore } from '@reduxjs/toolkit'
// import { authReducer } from '../auth/slices/authSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
})
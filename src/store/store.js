import { configureStore } from '@reduxjs/toolkit'
// import { authReducer } from '../auth/slices/authSlice'
import { authSlice } from './auth/authSlice'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer
  },
})
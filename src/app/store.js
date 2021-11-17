import { configureStore } from '@reduxjs/toolkit'
import authorsReducer from '../features/authors/authorsSlice'

export default configureStore({
  reducer: {
    authors: authorsReducer
  }
})
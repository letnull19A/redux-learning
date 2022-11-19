import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './../features/data/userDataSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  userData: {
    name: "",
    email: ""
  }
});
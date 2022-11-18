import { createSlice } from '@reduxks/toolkit'

const initialState = { name: null, email: null }

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setName: (data, name) => {
      data.name = name
    }
  }
});

export const { setName } = dataSlice.actions;
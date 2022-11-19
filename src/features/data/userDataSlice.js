import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  name: '', 
  email: '' 
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    }
  }
});

export const selectName = (state) => state.data.name;

export const selectEmail = (state) => state.data.email;

export const { setName, setEmail } = dataSlice.actions;

export default dataSlice.reducer;
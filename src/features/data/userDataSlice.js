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
    }
  }
});

export const selectName = (state) => state.data.name;

export const { setName } = dataSlice.actions;

export default dataSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'api',
  initialState: {
    value: ""
  },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getData } = cardSlice.actions

export default cardSlice.reducer
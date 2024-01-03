import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  loggedIn: false,
  user: {}
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false
      state.user = {}
    },
    setUser: (state,action) => {
      state.user =action.payload ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout ,setUser} = authSlice.actions

export default authSlice.reducer


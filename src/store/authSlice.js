import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,  // Ensure 'user' exists
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload; // Set user data on login
    },
    logout: (state) => {
      state.user = null; // Clear user on logout
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

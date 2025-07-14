import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 🔐 Login Action
    login: (state, action) => {
      const { email, password } = action.payload || {}; // 👈 safe destructuring

      // 🔑 Static credentials
      if (email === 'admin@example.com' && password === 'admin123') {
        state.isAuthenticated = true;
        state.user = { email };
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
      }
    },

    // 🚪 Logout Action
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

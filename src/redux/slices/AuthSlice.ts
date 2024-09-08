// src/redux/slices/AuthSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthState } from '../../types/types';

// API endpoints (FakeStore API)
const LOGIN_URL = 'https://fakestoreapi.com/auth/login';
const SIGNUP_URL = 'https://fakestoreapi.com/users';  // FakeStore doesn't have an actual signup route, so you can handle it manually

// Async Thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
     
      const response = await axios.post(LOGIN_URL, credentials);
      return response.data; // returns { token: "your-token" }
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

// Async Thunk for signup (For FakeStore, manual user creation)
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userDetails: { email: string; password: string; username: string; name: { firstname: string; lastname: string }; phone: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(SIGNUP_URL, userDetails);
      return response.data; // returns created user details
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload; // store token after login
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // store user details after signup
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {

        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

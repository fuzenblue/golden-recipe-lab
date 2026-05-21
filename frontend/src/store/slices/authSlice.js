import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  error: null,
  showPinSetup: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    if (credentials.email === 'demo@swu.ac.th' && credentials.password === 'demo123') {
      const demoUser = {
        id: 'demo-001',
        email: 'demo@swu.ac.th',
        name: 'สมชาย ทดสอบ',
        institution: 'Srinakharinwirot University',
        department: 'คณะวิทยาศาสตร์',
        position: 'ผู้ช่วยศาสตราจารย์',
      };
      const token = 'demo-token-' + Date.now();
      localStorage.setItem('token', token);
      return { user: demoUser, token };
    }
    try {
      const response = await authApi.login(credentials);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.showPinSetup = false;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
    checkPinStatus: (state) => {
      const hasPin = localStorage.getItem('hasPin');
      state.showPinSetup = !hasPin;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        
        const hasPin = localStorage.getItem('hasPin');
        state.showPinSetup = !hasPin;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export const { logout, clearError, checkPinStatus } = authSlice.actions;
export default authSlice.reducer;
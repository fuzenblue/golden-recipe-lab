import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { applicationApi } from '../../api/application';

const demoApplications = [
  {
    id: 'app-001',
    position: {
      level: 'assistant',
      titleTh: 'ผู้ช่วยศาสตราจารย์',
      titleEn: 'Assistant Professor',
    },
    status: 'submitted',
    submittedAt: '2024-05-15',
    createdAt: '2024-05-10',
  },
  {
    id: 'app-002',
    position: {
      level: 'associate',
      titleTh: 'รองศาสตราจารย์',
      titleEn: 'Associate Professor',
    },
    status: 'reviewing',
    createdAt: '2024-04-20',
  },
];

const initialState = {
  items: demoApplications,
  selectedApplication: null,
  availablePositions: [],
  isLoading: false,
  error: null,
};

export const fetchApplications = createAsyncThunk(
  'applications/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await applicationApi.getApplications();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setSelectedApplication: (state, action) => {
      state.selectedApplication = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedApplication } = applicationsSlice.actions;
export default applicationsSlice.reducer;
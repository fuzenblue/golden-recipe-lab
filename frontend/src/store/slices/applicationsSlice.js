import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { applicationApi } from '../../api/application';

const STATUS_STAGES = [
  { key: 'documentation_review', label: 'ตรวจสอบเอกสาร', duration: '3-5 วัน' },
  { key: 'teaching_evaluation', label: 'ประเมินการสอน', duration: '1-2 สัปดาห์' },
  { key: 'academic_evaluation', label: 'ประเมินผลงานวิชาการ', duration: '2-4 สัปดาห์' },
  { key: 'committee_decision', label: 'รอคณะกรรมการตัดสิน', duration: '1 สัปดาห์' },
];

const demoApplications = [
  {
    id: 'app-001',
    position: {
      level: 'assistant',
      titleTh: 'ผู้ช่วยศาสตราจารย์',
      titleEn: 'Assistant Professor',
    },
    status: 'submitted',
    stage: 'teaching_evaluation',
    submittedAt: '2024-05-15',
    createdAt: '2024-05-10',
    referenceId: 'REF-2024-001',
    holderDid: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
    credentials: ['VC1', 'VC2', 'VC3'],
    submission: null,
  },
  {
    id: 'app-002',
    position: {
      level: 'associate',
      titleTh: 'รองศาสตราจารย์',
      titleEn: 'Associate Professor',
    },
    status: 'reviewing',
    stage: 'documentation_review',
    createdAt: '2024-04-20',
    submittedAt: null,
    referenceId: null,
    holderDid: null,
    credentials: [],
    submission: null,
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

export const submitApplication = createAsyncThunk(
  'applications/submit',
  async ({ position, credentials, session, verificationResult }, { rejectWithValue }) => {
    try {
      const refId = 'REF-' + Date.now().toString(36).toUpperCase();
      const now = new Date().toISOString();

      const application = {
        id: 'app-' + Date.now(),
        position: {
          level: 'assistant',
          titleTh: position || 'ผู้ช่วยศาสตราจารย์',
          titleEn: 'Assistant Professor',
        },
        status: 'submitted',
        stage: 'documentation_review',
        submittedAt: now,
        createdAt: now,
        referenceId: refId,
        holderDid: verificationResult?.holderDid || 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
        credentials: credentials,
        session: session,
        verificationResult: verificationResult,
        statusHistory: [
          { status: 'submitted', at: now, label: 'ส่งใบสมัครแล้ว' },
        ],
      };

      return application;
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
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.selectedApplication = action.payload;
      });
  },
});

export { STATUS_STAGES };
export const { setSelectedApplication } = applicationsSlice.actions;
export default applicationsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from '../../api/wallet';
import { verifierApi } from '../../api/verifier';

const demoCredentials = [
  {
    id: 'vc1-demo',
    type: 'VC1',
    title: 'บัตรประจำตัวประชาชน',
    issuer: 'กรมการปกครอง',
    status: 'verified',
    issuedAt: '2024-01-15',
    expiresAt: '2034-01-15',
    claims: {
      fullName: 'สมชาย ทดสอบ',
      thaiId: '1-2345-67890-12-1',
      dateOfBirth: '1985-06-20',
      birthPlace: 'กรุงเทพมหานคร',
      gender: 'ชาย',
      nationality: 'ไทย',
      address: '123 ถนนพหลโยธิน กรุงเทพมหานคร',
    },
  },
  {
    id: 'vc2-demo',
    type: 'VC2',
    title: 'ข้อมูลการทำงาน',
    issuer: 'สำนักงานจัดการบุคลากร มศว',
    status: 'ready',
    issuedAt: '2024-03-01',
    claims: {
      personnelStatus: 'ข้าราชการ',
      position: 'ผู้ช่วยศาสตราจารย์',
      appointmentDate: '2019-08-01',
      faculty: 'คณะวิทยาศาสตร์',
      department: 'ภาควิชาคณิตศาสตร์',
      salaryScale: 'ค4-4',
    },
  },
  {
    id: 'vc3-demo',
    type: 'VC3',
    title: 'Applications of Machine Learning in Education',
    issuer: 'Journal of Educational Technology',
    status: 'verified',
    issuedAt: '2024-05-15',
    claims: {
      title: 'Applications of Machine Learning in Education',
      journal: 'Journal of Educational Technology',
      impactFactor: '3.5',
      citations: 45,
      authorPosition: 'ผู้ประพันธ์อันดับแรก',
      ownershipPercentage: 60,
    },
  },
];

const initialState = {
  items: [],
  requests: [],
  selectedCredential: null,
  isLoading: false,
  error: null,
  selectedForPresentation: [],
  vpToken: null,
  vpStatus: 'idle',
  vpError: null,
  verificationResult: null,
  oidc4vpSession: null,
};

export const fetchDemoCredentials = createAsyncThunk(
  'credentials/fetchDemo',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return demoCredentials;
  }
);

export const submitOIDC4VP = createAsyncThunk(
  'credentials/submitOIDC4VP',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { selectedForPresentation, items } = getState().credentials;
      if (!selectedForPresentation.length) {
        throw new Error('กรุณาเลือกข้อมูลที่ต้องการเปิดเผย');
      }

      const selectedCreds = items.filter((c) => selectedForPresentation.includes(c.id));
      const step = (status, data) => ({ status, data });

      const session = await verifierApi.createSession(selectedCreds.map((c) => c.type));
      step('session_created', session);

      const vpResult = await walletApi.createPresentation(selectedForPresentation);
      const vpToken = vpResult?.vpToken || vpResult;
      step('vp_created', vpToken);

      const submission = await verifierApi.submitVPToSession(session.sessionId, vpToken);
      step('vp_submitted', submission);

      const result = await verifierApi.getVerificationResult(session.sessionId);
      step('verified', result);

      return {
        session,
        vpToken,
        submission,
        verification: result,
      };
    } catch (error) {
      return rejectWithValue(
        error.message || error.response?.data?.message || 'เกิดข้อผิดพลาดในกระบวนการ OIDC4VP'
      );
    }
  }
);

export const fetchCredentials = createAsyncThunk(
  'credentials/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await walletApi.getCredentials();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setSelectedCredential: (state, action) => {
      state.selectedCredential = action.payload;
    },
    toggleCredentialForPresentation: (state, action) => {
      const id = action.payload;
      const index = state.selectedForPresentation.indexOf(id);
      if (index >= 0) {
        state.selectedForPresentation.splice(index, 1);
      } else {
        state.selectedForPresentation.push(id);
      }
    },
    selectAllForPresentation: (state) => {
      state.selectedForPresentation = state.items.map((c) => c.id);
    },
    clearSelection: (state) => {
      state.selectedForPresentation = [];
    },
    clearVP: (state) => {
      state.vpToken = null;
      state.vpStatus = 'idle';
      state.vpError = null;
      state.verificationResult = null;
      state.oidc4vpSession = null;
      state.selectedForPresentation = [];
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCredentials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCredentials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCredentials.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDemoCredentials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(submitOIDC4VP.pending, (state) => {
        state.vpStatus = 'creating_session';
        state.vpError = null;
        state.verificationResult = null;
        state.vpToken = null;
        state.oidc4vpSession = null;
      })
      .addCase(submitOIDC4VP.fulfilled, (state, action) => {
        state.vpStatus = 'verified';
        state.vpToken = action.payload.vpToken;
        state.oidc4vpSession = action.payload.session;
        state.verificationResult = action.payload.verification;
      })
      .addCase(submitOIDC4VP.rejected, (state, action) => {
        state.vpStatus = 'failed';
        state.vpError = action.payload;
      });
  },
});

export const {
  setSelectedCredential,
  toggleCredentialForPresentation,
  selectAllForPresentation,
  clearSelection,
  clearVP,
  clearError,
} = credentialsSlice.actions;
export default credentialsSlice.reducer;

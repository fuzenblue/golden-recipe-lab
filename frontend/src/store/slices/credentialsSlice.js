import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from '../../api/wallet';

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
    title: 'บันทึกการสอน',
    issuer: 'คณะวิทยาศาสตร์ มศว',
    status: 'verified',
    issuedAt: '2024-05-15',
    claims: {
      academicYear: '2566',
      courses: [
        { courseCode: 'MATH101', courseName: 'แคลคูลัส 1', credits: 3, students: 120, hours: 3, score: 4.2 },
        { courseCode: 'MATH201', courseName: 'พีชคณิตเชิงเส้น', credits: 3, students: 80, hours: 3, score: 4.5 },
      ],
      totalUnits: 6,
      teachingEvaluationScore: 4.3,
    },
  },
  {
    id: 'vc4-1-demo',
    type: 'VC4',
    title: 'บทความวิจัย: Machine Learning in Education',
    issuer: 'Scopus - Elsevier',
    status: 'verified',
    issuedAt: '2023-06-20',
    claims: {
      title: 'Applications of Machine Learning in Education',
      journal: 'Journal of Educational Technology',
      DOI: '10.1234/jed.2023.001',
      publicationDate: '2023-06-15',
      scopusLevel: 'Q1',
      authors: ['สมชาย ทดสอบ', 'สมหญิง ตัวอย่าง'],
      authorPosition: 1,
    },
  },
  {
    id: 'vc5-1-demo',
    type: 'VC5',
    title: 'การยืนยันสัดส่วน',
    issuer: 'สมหญิง ตัวอย่าง',
    status: 'ready',
    issuedAt: '2023-07-01',
    claims: {
      publicationTitle: 'Applications of Machine Learning in Education',
      coAuthorName: 'สมหญิง ตัวอย่าง',
      contributionPercentage: 60,
      confirmedAt: '2023-07-01',
    },
  },
];

const initialState = {
  items: [],
  requests: [],
  selectedCredential: null,
  isLoading: false,
  error: null,
};

export const fetchDemoCredentials = createAsyncThunk(
  'credentials/fetchDemo',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return demoCredentials;
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
      });
  },
});

export const { setSelectedCredential, clearError } = credentialsSlice.actions;
export default credentialsSlice.reducer;
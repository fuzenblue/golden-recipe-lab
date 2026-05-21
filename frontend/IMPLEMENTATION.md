# Researcher Digital Wallet - Implementation Roadmap
## Complete Development Guide for Thai Academic Position Promotion System

**Project:** Researcher Digital Wallet for SWU & Thai Public Universities  
**Version:** 1.0.0  
**Date:** May 20, 2026  
**Reference:** "Data ใช้ในการขอตำแหน่ง อ้างอิง swu.md"

---

## 📑 Table of Contents

1. [Executive Overview](#1-executive-overview)
2. [Project Architecture](#2-project-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Installation & Setup](#4-installation--setup)
5. [Project Structure](#5-project-structure)
6. [Credential Workflow (VC1-6)](#6-credential-workflow-vc1-6)
7. [UI/UX Implementation](#7-uiux-implementation)
8. [API Integration](#8-api-integration)
9. [Form Auto-Population Engine](#9-form-auto-population-engine)
10. [Development Phases](#10-development-phases)
11. [Testing Strategy](#11-testing-strategy)
12. [Deployment](#12-deployment)
13. [Reference Documents](#13-reference-documents)

---

## 1. Executive Overview

### Project Vision
Enable Thai academic researchers to streamline academic position promotion requests by consolidating 6 verifiable credentials into 11 government forms with cryptographic verification.

### Key Metrics
- **Timeline Reduction:** 2-3 days → 30 minutes (form completion)
- **Verification Speed:** 3-5 days → 1 hour (credential verification)
- **Success Rate:** 85% → 98% (credential verification)
- **User Satisfaction:** > 4.5/5
- **Form Compliance:** 100% (11/11 forms)

### Core Stakeholders
- **Researchers:** Faculty members applying for positions
- **HR Offices:** Employee data providers
- **Faculties:** Teaching record providers
- **Journal Organizations:** Publication data providers
- **Co-researchers:** Contribution confirmation signers
- **University Committees:** Decision makers

### System Scope
- **Frontend Only:** Web-based React application (this project)
- **Backend:** walt.id services (existing at ports 7002, 7003)
- **Credentials:** 6 types (VC1-6) aggregated into VC6
- **Forms:** 11 government forms auto-populated
- **Language:** Thai primary, English secondary

---

## 2. Project Architecture

### High-Level Architecture
```
┌──────────────────────────────────────────┐
│   Researcher Digital Wallet Frontend      │
│   (React 18 + TypeScript + Vite)          │
├──────────────────────────────────────────┤
│  ┌──────────────────────────────────┐   │
│  │  UI Components                    │   │
│  │  • Dashboard                      │   │
│  │  • Smart Card                     │   │
│  │  • VC Management (VC1-6)          │   │
│  │  • Form Generation                │   │
│  │  • Request Tracking               │   │
│  └──────────────────────────────────┘   │
├──────────────────────────────────────────┤
│  State Management (Redux Toolkit)        │
│  • Auth State (user, token)              │
│  • Credentials State (VC1-6)             │
│  • Forms State (11 forms)                │
│  • Requests State (tracking)             │
├──────────────────────────────────────────┤
│  API Layer (Axios + Interceptors)        │
│  • Authentication API                    │
│  • Wallet API (walt.id)                  │
│  • Issuer Request API                    │
│  • Form Generation API                   │
│  • Submission API                        │
├──────────────────────────────────────────┤
│  Backend Services                        │
│  ┌─────────────┐  ┌──────────────┐      │
│  │Wallet API   │  │Issuer API    │      │
│  │(7002)       │  │(7002)        │      │
│  └─────────────┘  └──────────────┘      │
│  ┌──────────────────────────────┐       │
│  │  Verifier API (7003)         │       │
│  │  • Verify VP signatures      │       │
│  │  • Validate form data        │       │
│  └──────────────────────────────┘       │
├──────────────────────────────────────────┤
│  External Credential Issuers             │
│  • Thai National ID Agency (VC1)         │
│  • HR Office สำนักงานจัดการบุคลากร(VC2) │
│  • Faculty/Department คณะ (VC3)         │
│  • Scopus/TCI Databases (VC4)            │
│  • Co-researchers (VC5)                  │
└──────────────────────────────────────────┘
```

### Data Flow
```
User Login (@g.swu.ac.th + PIN)
         ↓
Auth State: User + JWT Token
         ↓
Auto-fetch VC1 (Thai ID) + VC2 (HR)
         ↓
Dashboard displays: VC1✓, VC2✓
         ↓
User requests VC3-5 from organizations
         ↓
Organizations verify identity + send credentials
         ↓
Wallet aggregates VC1-5 → Creates VC6
         ↓
User clicks "Generate Forms"
         ↓
Form Engine auto-fills 11 forms using VC6
         ↓
System creates Verifiable Presentation (VP)
         ↓
User submits VP to Committee
         ↓
Committee receives cryptographically-verified package
         ↓
Real-time status updates: Review → Evaluation → Decision
```

---

## 3. Technology Stack

### Core Technologies
| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Language** | TypeScript | 5.x | Type-safe development |
| **Framework** | React | 18.x | UI components |
| **Build** | Vite | 5.x | Fast development, optimized builds |
| **State** | Redux Toolkit | 1.9.x | Credential state management |
| **HTTP** | Axios | 1.x | API communication |
| **UI Components** | Material-UI (MUI) | 5.x | Pre-built components |
| **Forms** | React Hook Form | 7.x | Form validation |
| **Routing** | React Router | 6.x | Page navigation |
| **Icons** | Heroicons | 2.x | UI icons |
| **CSS** | Tailwind CSS | 3.x | Utility-first styling |
| **Crypto** | jose | 5.x | JWT operations |
| **Date** | date-fns | 3.x | Date formatting |
| **Testing** | Vitest | 1.x | Unit tests |
| **E2E** | Playwright | 1.4x | End-to-end tests |
| **Linting** | ESLint | 8.x | Code quality |
| **Format** | Prettier | 3.x | Code formatting |

### Development Environment
- **Node.js:** 18.x or higher
- **npm:** 9.x or higher
- **Docker:** For backend services
- **VS Code:** Recommended editor

### Production Deployment
- **Container:** Docker + Docker Compose
- **Web Server:** nginx
- **SSL:** HTTPS only
- **Hosting:** University servers

---

## 4. Installation & Setup

### 4.1 Prerequisites Check
```bash
node --version       # v18.x or higher
npm --version        # 9.x or higher
docker --version     # Latest
git --version        # Latest
```

### 4.2 Project Initialization
```bash
# Navigate to frontend directory
cd d:\golden-recipe-lab\frontend

# Initialize npm (if needed)
npm init -y

# Install all dependencies
npm install

# Install core packages
npm install react@18 react-dom@18 react-router-dom@6
npm install @reduxjs/toolkit react-redux axios
npm install @mui/material @emotion/react @emotion/styled
npm install react-hook-form zod date-fns @heroicons/react
npm install jose

# Install dev tools
npm install --save-dev typescript vite @vitejs/plugin-react
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin
npm install --save-dev vitest @vitest/ui @testing-library/react
npm install --save-dev playwright tailwindcss postcss autoprefixer
```

### 4.3 Configuration Files
Create these files in root:

**vite.config.ts**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': { target: 'http://localhost:7002', changeOrigin: true },
      '/verifier': { target: 'http://localhost:7003', changeOrigin: true }
    }
  }
})
```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

**.env.example**
```bash
# API URLs
VITE_API_BASE_URL=http://localhost:7002
VITE_VERIFIER_API_URL=http://localhost:7003

# App Settings
VITE_APP_NAME=Researcher Digital Wallet
VITE_APP_VERSION=1.0.0

# Features
VITE_ENABLE_MOCK_API=false
VITE_DEBUG=false
```

### 4.4 Copy Environment
```bash
cp .env.example .env
```

### 4.5 Start Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Output: Server running at http://localhost:3000
```

---

## 5. Project Structure

```
frontend/
├── src/
│   ├── main.tsx                      # Entry point
│   ├── App.tsx                       # Root component
│   ├── vite-env.d.ts
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx         # Email/Bua Sri ID login
│   │   │   ├── PINSetup.tsx          # 6-digit PIN setup
│   │   │   └── AuthGuard.tsx         # Protected routes
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx         # Main page (VC + Grid)
│   │   │   ├── SmartCard.tsx         # Profile card
│   │   │   ├── ServicesGrid.tsx      # 4-service grid
│   │   │   ├── NotificationBar.tsx   # Status alerts
│   │   │   └── BottomNav.tsx         # Menu bar
│   │   │
│   │   ├── wallet/
│   │   │   ├── WalletPage.tsx        # VC tabs (VC1-6)
│   │   │   ├── CredentialCard.tsx    # Individual VC
│   │   │   ├── CredentialDetail.tsx  # Full details view
│   │   │   ├── RequestCredential.tsx # VC request UI
│   │   │   └── ExportDialog.tsx      # Export options
│   │   │
│   │   ├── requests/
│   │   │   ├── RequestsPage.tsx      # Check requests (list)
│   │   │   ├── RequestItem.tsx       # Request card
│   │   │   ├── RequestDetail.tsx     # Detail view
│   │   │   ├── SubmitRequest.tsx     # New request wizard
│   │   │   ├── RequestWizard.tsx     # Multi-step form
│   │   │   └── StatusTracker.tsx     # Timeline view
│   │   │
│   │   ├── forms/
│   │   │   ├── FormGenerator.tsx     # Auto-fill engine
│   │   │   ├── FormPreview.tsx       # Preview all 11 forms
│   │   │   ├── FormValidator.tsx     # Validation logic
│   │   │   ├── FormItem.tsx          # Individual form
│   │   │   └── VPGenerator.tsx       # VP creation
│   │   │
│   │   ├── documents/
│   │   │   ├── DocumentsPage.tsx     # My documents
│   │   │   ├── DocumentCard.tsx      # Document item
│   │   │   ├── DocumentFilter.tsx    # Filter UI
│   │   │   └── DocumentActions.tsx   # View/Share/Export
│   │   │
│   │   ├── profile/
│   │   │   ├── ProfilePage.tsx       # User profile
│   │   │   ├── ProfileForm.tsx       # Edit profile
│   │   │   ├── SecuritySettings.tsx  # PIN/Password
│   │   │   └── Preferences.tsx       # Notifications
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx            # Primary button
│   │   │   ├── Input.tsx             # Text input
│   │   │   ├── Card.tsx              # Card component
│   │   │   ├── Modal.tsx             # Modal dialog
│   │   │   ├── Alert.tsx             # Alert messages
│   │   │   ├── Loader.tsx            # Loading spinner
│   │   │   ├── StatusBadge.tsx       # Status indicator
│   │   │   ├── Icon.tsx              # Icon wrapper
│   │   │   └── Header.tsx            # Top navigation
│   │   │
│   │   └── layout/
│   │       └── MainLayout.tsx        # Page layout wrapper
│   │
│   ├── pages/
│   │   ├── NotFound.tsx              # 404 page
│   │   └── ErrorPage.tsx             # Error fallback
│   │
│   ├── store/
│   │   ├── index.ts                  # Redux store config
│   │   ├── hooks.ts                  # Custom hooks (useAppDispatch, etc.)
│   │   └── slices/
│   │       ├── authSlice.ts          # Auth state
│   │       ├── credentialsSlice.ts   # VC1-6 state
│   │       ├── formsSlice.ts         # 11 forms state
│   │       ├── requestsSlice.ts      # Requests state
│   │       └── uiSlice.ts            # UI state (notifications, etc.)
│   │
│   ├── api/
│   │   ├── client.ts                 # Axios instance + interceptors
│   │   ├── auth.ts                   # Auth endpoints
│   │   ├── wallet.ts                 # Wallet API calls
│   │   ├── issuer.ts                 # Issuer request endpoints
│   │   ├── verifier.ts               # Verification endpoints
│   │   ├── forms.ts                  # Form generation
│   │   └── submissions.ts            # Submission endpoints
│   │
│   ├── services/
│   │   ├── authService.ts            # Auth logic
│   │   ├── credentialService.ts      # VC management
│   │   ├── formService.ts            # Form generation
│   │   ├── cryptoService.ts          # JWT, crypto ops
│   │   ├── storageService.ts         # Local/session storage
│   │   ├── vpService.ts              # VP creation
│   │   └── notificationService.ts    # Alerts/toasts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts                # Auth hook
│   │   ├── useCredentials.ts         # Credentials hook
│   │   ├── useRequests.ts            # Requests hook
│   │   ├── useForms.ts               # Forms hook
│   │   ├── useFetch.ts               # Data fetching
│   │   └── useLocalStorage.ts        # Storage hook
│   │
│   ├── types/
│   │   ├── index.ts                  # Type exports
│   │   ├── credential.ts             # VC types
│   │   ├── request.ts                # Request types
│   │   ├── form.ts                   # Form types
│   │   ├── api.ts                    # API response types
│   │   ├── user.ts                   # User types
│   │   └── vc.ts                     # VC data models
│   │
│   ├── styles/
│   │   ├── index.css                 # Global styles
│   │   ├── tailwind.css              # Tailwind imports
│   │   ├── theme.ts                  # MUI theme
│   │   └── variables.css             # CSS variables
│   │
│   ├── utils/
│   │   ├── validators.ts             # Form validators
│   │   ├── formatters.ts             # Data formatters
│   │   ├── constants.ts              # Constants/enums
│   │   ├── helpers.ts                # Utility functions
│   │   └── errorHandler.ts           # Error handling
│   │
│   ├── middleware/
│   │   └── authMiddleware.ts         # Redux middleware
│   │
│   └── config/
│       ├── colors.ts                 # Color palette
│       └── endpoints.ts              # API endpoints
│
├── tests/
│   ├── unit/
│   │   ├── utils.test.ts
│   │   ├── validators.test.ts
│   │   └── services.test.ts
│   │
│   ├── components/
│   │   ├── Auth.test.tsx
│   │   ├── Dashboard.test.tsx
│   │   └── Wallet.test.tsx
│   │
│   └── e2e/
│       ├── auth.spec.ts              # Login flow
│       ├── credential.spec.ts        # VC workflow
│       ├── forms.spec.ts             # Form generation
│       └── submission.spec.ts        # Request submission
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── logo.png
│       └── icons/
│
├── .env.example
├── .env
├── .eslintrc.json
├── .prettierrc.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.js
├── Dockerfile
├── docker-compose.yml
│
└── README.md                          # Project overview
```

---

## 6. Credential Workflow (VC1-6)

### VC1: Personal Identity Credential
**Source:** Thai National ID Agency  
**Auto-import on:** First login  
**Data:**
- Full name (ชื่อ-นามสกุล)
- Name prefix (คำนำหน้า)
- Birth date (วันเกิด)
- National ID number (เลขประจำตัว)
- Age (อายุ)

**Implementation:**
```typescript
// services/credentialService.ts
export const fetchVC1 = async (nationalID: string) => {
  const response = await api.get(`/api/wallet/vc1/import`, {
    params: { nationalID }
  })
  return response.data
}
```

### VC2: Employment & HR Credential
**Source:** HR Office (สำนักงานจัดการบุคลากร)  
**Auto-fetch on:** First login using VC1  
**Data:**
- Institution (มหาวิทยาลัย)
- Faculty (คณะ)
- Department (ภาค/สาขา)
- Current position (ตำแหน่ง)
- Appointment date (วันแต่งตั้ง)
- Service duration (ระยะเวลา)
- Employment status (สถานะ: ราชการ/พนักงาน)
- Education history (วุฒิการศึกษา)

**Implementation:**
```typescript
// services/credentialService.ts
export const fetchVC2 = async (userID: string) => {
  const response = await api.post(`/api/issuer/vc2/request`, {
    userID,
    includeVC1: true
  })
  return response.data
}
```

### VC3: Teaching Record Credential
**Source:** Faculty/Department (คณะ/ภาค)  
**Request trigger:** User action  
**Data:**
- Courses taught (3-year history)
- Course codes (รหัสวิชา)
- Credit units (หน่วยกิต)
- Schedule (ภาค/ปีการศึกษา)
- Teaching evaluation scores (คะแนนการสอน)
- Total credits (รวมหน่วยกิต)

**Implementation:**
```typescript
// components/wallet/RequestCredential.tsx
const requestVC3 = async () => {
  const response = await api.post(`/api/issuer/vc3/request`, {
    userVC1: credentials.vc1,
    userVC2: credentials.vc2
  })
  // Faculty system receives request
  // Faculty responds with teaching data
  return response.data
}
```

### VC4: Research Publications Credential
**Source:** Scopus/TCI Databases or Journal Organizations  
**Request trigger:** User action  
**Data:**
- Publication title (ชื่อบทความ)
- DOI (Digital Object Identifier)
- Journal name (ชื่อวารสาร)
- ISSN (International Standard Serial Number)
- Volume/Issue (เล่ม/ฉบับ)
- Pages (หน้า)
- Publication year (ปีพิมพ์)
- Authors list (รายชื่อผู้แต่ง)
- Author position (First/Corresponding/Other)
- Database level (TCI/Scopus/National)

**Implementation:**
```typescript
// components/wallet/RequestCredential.tsx
const requestVC4 = async (journalDatabase: string) => {
  const response = await api.post(`/api/issuer/vc4/request`, {
    journalDB: journalDatabase,
    userVC1: credentials.vc1,
    userVC2: credentials.vc2
  })
  // Journal database verifies researcher
  // Returns publication list
  return response.data
}
```

### VC5: Co-author Confirmation Credential
**Source:** Co-researchers (digitally signed)  
**Request trigger:** After VC4 received  
**Data:**
- Publication reference (DOI/ID)
- Contributor name (ชื่อผู้ร่วม)
- Contribution percentage (% สัดส่วน)
- Role in publication (บทบาท)
- Digital signature (ลายเซ็นดิจิตัล)
- Signature timestamp (เวลา)

**Implementation:**
```typescript
// services/credentialService.ts
export const requestVC5 = async (publication: Publication, coauthorEmails: string[]) => {
  // Generate unique signing request for each co-author
  const signingRequests = coauthorEmails.map(email => ({
    publicationDOI: publication.doi,
    recipientEmail: email,
    contributionPrompt: `Please confirm your contribution % to ${publication.title}`
  }))
  
  const response = await api.post(`/api/issuer/vc5/request`, {
    signingRequests,
    signerVC1: credentials.vc1
  })
  return response.data
}
```

### VC6: Consolidated Credential (Auto-generated)
**Source:** Wallet System  
**Auto-create when:** All VC1-5 available  
**Contains:**
- All VC1-5 aggregated
- Verification status
- Ready-for-form flag
- Expiry date (5 years from creation)

**Implementation:**
```typescript
// services/credentialService.ts
export const createVC6 = async () => {
  if (!allCredentialsReady()) return null
  
  const vc6 = {
    type: 'ConsolidatedAcademicCredential',
    aggregatedFrom: ['VC1', 'VC2', 'VC3', 'VC4', 'VC5'],
    readyForFormGeneration: true,
    formsToGenerate: 11,
    generatedDate: new Date(),
    expiryDate: addYears(new Date(), 5)
  }
  
  return api.post('/api/wallet/vc6/create', vc6)
}
```

---

## 7. UI/UX Implementation

### 7.1 Login Page
**Route:** `/login`  
**Components:**
- Email/Bua Sri ID input
- Password input
- Login button
- Forgot password link

```typescript
// components/auth/LoginPage.tsx
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (e) => {
    const response = await authService.login(email, password)
    // Navigate to PIN setup or dashboard
  }
  
  return (
    <div className="login-container">
      <input type="email" placeholder="user@g.swu.ac.th" value={email} />
      <input type="password" placeholder="Password" value={password} />
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
    </div>
  )
}
```

### 7.2 PIN Setup Page
**Route:** `/auth/pin-setup` (first time only)  
**Components:**
- 6-digit PIN input (hidden dots)
- Numeric keypad
- Confirm/Cancel buttons

```typescript
// components/auth/PINSetup.tsx
const PINSetup = () => {
  const [pin, setPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  
  const handlePINEntry = (digit: string) => {
    if (pin.length < 6) setPin(pin + digit)
  }
  
  const handleConfirm = async () => {
    if (pin === confirmPin && pin.length === 6) {
      await authService.setupPIN(pin)
      navigate('/dashboard')
    }
  }
  
  return (
    <div className="pin-setup">
      <div className="pin-display">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="pin-dot">
            {i < pin.length ? '●' : '○'}
          </div>
        ))}
      </div>
      <NumericKeypad onDigitClick={handlePINEntry} />
      <button onClick={handleConfirm}>ยืนยัน</button>
    </div>
  )
}
```

### 7.3 Dashboard
**Route:** `/dashboard`  
**Components:**
- Smart Card (Profile)
- Services Grid (4 items)
- Bottom Navigation

```typescript
// components/dashboard/Dashboard.tsx
const Dashboard = () => {
  const user = useAppSelector(state => state.auth.user)
  const credentials = useAppSelector(state => state.credentials)
  
  return (
    <MainLayout>
      <SmartCard user={user} />
      
      <ServicesGrid>
        <ServiceItem
          icon="check"
          title="ตรวจสอบคำขอ"
          onClick={() => navigate('/requests')}
        />
        <ServiceItem
          icon="edit"
          title="ส่งคำร้องใหม่"
          onClick={() => navigate('/requests/new')}
        />
        <ServiceItem
          icon="document"
          title="เอกสารของฉัน"
          onClick={() => navigate('/documents')}
        />
        <ServiceItem
          icon="plus"
          title="เพิ่มเติม"
          onClick={() => navigate('/menu')}
        />
      </ServicesGrid>
      
      <BottomNav />
    </MainLayout>
  )
}
```

### 7.4 Wallet Page (VC Management)
**Route:** `/wallet`  
**Components:**
- Tab navigation (VC1-6)
- Credential cards
- Actions (View, Share, Export)

```typescript
// components/wallet/WalletPage.tsx
const WalletPage = () => {
  const credentials = useAppSelector(state => state.credentials)
  const [activeTab, setActiveTab] = useState('VC1')
  
  const credentialTabs = [
    { id: 'VC1', label: 'Personal ID', data: credentials.vc1 },
    { id: 'VC2', label: 'Employment', data: credentials.vc2 },
    { id: 'VC3', label: 'Teaching', data: credentials.vc3 },
    { id: 'VC4', label: 'Publications', data: credentials.vc4 },
    { id: 'VC5', label: 'Co-author', data: credentials.vc5 },
    { id: 'VC6', label: 'Consolidated', data: credentials.vc6 }
  ]
  
  return (
    <div className="wallet-page">
      <Tabs value={activeTab} onChange={setActiveTab}>
        {credentialTabs.map(tab => (
          <CredentialCard key={tab.id} credential={tab.data} />
        ))}
      </Tabs>
    </div>
  )
}
```

---

## 8. API Integration

### 8.1 Authentication API
```
POST /auth/login
  Request: { email, password }
  Response: { token, user }

POST /auth/pin-setup
  Request: { pin }
  Response: { success }

GET /auth/user/identity
  Response: VC1 data from Thai ID

GET /auth/user/employment
  Response: VC2 data from HR
```

### 8.2 Wallet API (walt.id)
```
GET /api/wallet/credentials
  Response: [VC1, VC2, VC3, VC4, VC5, VC6]

POST /api/wallet/credentials/import
  Request: { credential, type }
  Response: { imported }

POST /api/wallet/presentations
  Request: { credentials, claimsToPresent }
  Response: { vp: {...} }
```

### 8.3 Issuer API
```
POST /api/issuer/vc3/request
  Request: { userVC1, userVC2 }
  Response: { requestID, status }

POST /api/issuer/vc4/request
  Request: { journalDB, userVC1, userVC2 }
  Response: { publications }

POST /api/issuer/vc5/request
  Request: { signingRequests, signerVC1 }
  Response: { confirmationRequests }
```

### 8.4 Form Generation API
```
POST /api/forms/generate
  Request: { vc6Data }
  Response: { forms: [{name, data}, ...] }

POST /api/forms/validate
  Request: { forms }
  Response: { valid, errors }

POST /api/forms/presentation
  Request: { forms, formsData }
  Response: { vp: {...} }
```

### 8.5 Submission API
```
POST /api/submission/send
  Request: { vp, targetPosition, requestMethod }
  Response: { referenceID, timestamp }

GET /api/submission/:refID/status
  Response: { status, stage, progress }

GET /api/submission/:refID/decision
  Response: { decision, feedback, approvalDate }
```

---

## 9. Form Auto-Population Engine

### Form Mapping Strategy
```typescript
// services/formService.ts
const FORM_FIELD_MAPPING = {
  'ก.พ.อ.03': {
    'ชื่อ-นามสกุล': 'VC1.fullName',
    'เลขประจำตัว': 'VC1.nationalID',
    'คณะ': 'VC2.faculty',
    'ตำแหน่งปัจจุบัน': 'VC2.currentPosition',
    'ตำแหน่งที่ขอ': 'REQUEST.targetPosition',
    'ผลงานวิชาการ': 'VC4.publications',
    'จำนวนการสอน': 'VC3.totalCredits'
  },
  'แบบแสดงหลักฐานผลงาน': {
    'ชื่อผู้แต่ง': 'VC1.fullName',
    'บทความ': 'VC4.publications',
    'DOI': 'VC4.doi',
    'ผู้เผยแพร่': 'VC4.journal',
    'สัดส่วน': 'VC5.contributionPercentage'
  },
  // ... 9 more forms
}

export const populateForms = (vc6Data: VC6, formsList: FormTemplate[]) => {
  const populatedForms = formsList.map(form => {
    const mapping = FORM_FIELD_MAPPING[form.name]
    const filledForm = { ...form }
    
    Object.entries(mapping).forEach(([fieldName, vcPath]) => {
      const value = getNestedValue(vc6Data, vcPath)
      filledForm.fields[fieldName].value = value
    })
    
    return filledForm
  })
  
  return populatedForms
}
```

### Auto-Fill Process
```
1. User clicks "Generate Forms"
2. System validates VC6 is complete
3. Extract data from VC1-5
4. Match to form field mapping
5. Populate 11 forms
6. Validate completeness
7. Generate Verifiable Presentation
8. Ready for submission
```

---

## 10. Development Phases

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Core infrastructure setup  
**Tasks:**
- [ ] Project setup + Dependencies
- [ ] Redux store structure
- [ ] API client setup
- [ ] Auth flow (Login, PIN)
- [ ] Basic page layout

**Deliverable:** Working auth system, can login + PIN setup

### Phase 2: Credential Management (Weeks 3-5)
**Goal:** VC1-6 management  
**Tasks:**
- [ ] VC1 auto-import
- [ ] VC2 auto-fetch
- [ ] VC3 request UI
- [ ] VC4 request UI
- [ ] VC5 confirmation flow
- [ ] VC6 aggregation
- [ ] Wallet dashboard

**Deliverable:** Full credential lifecycle, wallet page

### Phase 3: Form Generation (Weeks 6-8)
**Goal:** Auto-fill 11 forms  
**Tasks:**
- [ ] Form data structures
- [ ] Field mapping logic
- [ ] Form population engine
- [ ] Validation logic
- [ ] Form preview UI
- [ ] VP generation
- [ ] Form submission

**Deliverable:** Auto-filled forms, VP creation

### Phase 4: Advanced Features (Weeks 9-10)
**Goal:** Tracking + Notifications  
**Tasks:**
- [ ] Request tracking
- [ ] Status timeline
- [ ] Notifications system
- [ ] Export functionality
- [ ] Sharing controls
- [ ] Search/filter

**Deliverable:** Full request tracking, notifications

### Phase 5: Testing + Deployment (Weeks 11-12)
**Goal:** Quality + Production ready  
**Tasks:**
- [ ] Unit tests
- [ ] Component tests
- [ ] E2E tests
- [ ] Security audit
- [ ] Performance optimization
- [ ] Docker setup
- [ ] Deployment

**Deliverable:** Production-ready application

---

## 11. Testing Strategy

### Unit Tests (services, utils)
```bash
npm run test -- src/services/
npm run test -- src/utils/
```

### Component Tests
```bash
npm run test -- src/components/
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage Goals
- **Overall:** > 80%
- **Critical paths:** 100%
- **Auth flows:** 100%
- **Form generation:** 95%

---

## 12. Deployment

### Docker Build
```bash
docker build -t researcher-wallet:latest .
```

### Docker Run
```bash
docker run -p 3000:3000 researcher-wallet:latest
```

### Production Deployment
```bash
docker-compose -f docker-compose.yml up -d
```

---

## 13. Reference Documents

### Core Documentation
- **SPECIFICATION.md** - Complete requirements (6 credentials, 11 forms, 4-phase workflow)
- **TECHSTACK.md** - Tech details, dependencies, architecture
- **QUICKSTART.md** - Setup instructions
- **UI_DESIGN_GUIDE.md** - UI/UX specifications (7 pages, components)
- **INTEGRATION_GUIDE.md** - API integration, data models, workflows
- **README.md** - Project overview

### External Resources
- **walt.id Docs:** https://docs.walt.id/
- **W3C VC Standards:** https://www.w3.org/TR/vc-data-model/
- **React Docs:** https://react.dev
- **Redux Toolkit:** https://redux-toolkit.js.org/
- **Material-UI:** https://mui.com/

### Data Reference
- **swu.md** - Academic position requirements (11 forms, data types)

---

## 14. Success Criteria

✅ **Functional:**
- All 6 credentials (VC1-6) working
- All 11 forms auto-populated
- VP generation successful
- Submission to committee works

✅ **Performance:**
- Page load < 3 seconds
- Form generation < 2 seconds
- API responses < 500ms

✅ **User Experience:**
- Login to forms < 30 minutes
- 95% users complete without help
- User satisfaction > 4.5/5

✅ **Quality:**
- 80%+ test coverage
- Zero security vulnerabilities
- WCAG 2.1 AA accessibility

---

## 15. Getting Started Checklist

- [ ] Clone/navigate to frontend folder
- [ ] Copy `.env.example` to `.env`
- [ ] Run `npm install`
- [ ] Start backend: `./start-lab.sh` (or cmd on Windows)
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Login with test credentials
- [ ] Test PIN setup
- [ ] Explore dashboard

---

**Document Version:** 1.0  
**Last Updated:** May 20, 2026  
**Status:** Ready for Development  
**Next Step:** Begin Phase 1 development

---

*For questions or issues, refer to specific documentation files above.*


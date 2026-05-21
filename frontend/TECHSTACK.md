# Researcher Digital Wallet - Tech Stack Guide

## 📊 Recommended Tech Stack Overview

### Quick Reference Table

| Category | Technology | Version | Link | Notes |
|----------|-----------|---------|------|-------|
| **Language** | TypeScript | 5.x | https://www.typescriptlang.org/ | Type-safe, production-ready |
| **Framework** | React | 18.x | https://react.dev/ | Component-based, large ecosystem |
| **Build Tool** | Vite | 5.x | https://vitejs.dev/ | Lightning-fast HMR, optimized builds |
| **State Mgmt** | Redux Toolkit | 1.9.x | https://redux-toolkit.js.org/ | Predictable state for complex flows |
| **HTTP Client** | Axios | 1.x | https://axios-http.com/ | Promise-based, interceptor support |
| **UI Framework** | Material-UI (MUI) | 5.x | https://mui.com/ | Comprehensive components, accessibility |
| **Form Library** | React Hook Form | 7.x | https://react-hook-form.com/ | Lightweight, performance-optimized |
| **Routing** | React Router | 6.x | https://reactrouter.com/ | Client-side routing, nested routes |
| **Date/Time** | date-fns | 3.x | https://date-fns.org/ | Lightweight, modular date utilities |
| **Icons** | Heroicons | 2.x | https://heroicons.com/ | Beautiful, accessible SVG icons |
| **Testing** | Vitest | 1.x | https://vitest.dev/ | Fast unit testing for Vite projects |
| **Component Test** | React Testing Library | 14.x | https://testing-library.com/ | User-centric testing approach |
| **E2E Testing** | Playwright | 1.4x | https://playwright.dev/ | Cross-browser testing, reliable |
| **Crypto** | jose | 5.x | https://github.com/panva/jose | JWT operations, credential verification |
| **Code Quality** | ESLint | 8.x | https://eslint.org/ | Code linting and consistency |
| **Formatter** | Prettier | 3.x | https://prettier.io/ | Code formatting, consistency |
| **CSS** | Tailwind CSS | 3.x | https://tailwindcss.com/ | Utility-first, rapid development |
| **Container** | Docker | Latest | https://www.docker.com/ | Development and production deployment |
| **Package Mgr** | npm | 9.x+ | https://www.npmjs.com/ | Standard Node.js package management |

---

## 🏗️ Technology Stack Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE LAYER                     │
│  React Components + React Router (SPA Navigation)           │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│               PRESENTATION & STYLING LAYER                 │
│  Material-UI (Components) + Tailwind CSS (Utilities)        │
│  Heroicons (Icons) + React Hook Form (Form Management)      │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│                  STATE MANAGEMENT LAYER                     │
│  Redux Toolkit (Global State) + React Hooks (Local State)   │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│                   API & SERVICE LAYER                       │
│  Axios (HTTP Client) + Custom API Adapters + Interceptors  │
│  jose (JWT Operations) + Crypto Services                    │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│                  DATA LAYER (Client-Side)                   │
│  localStorage (Encrypted Tokens) + IndexedDB (Credentials)  │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
    │ Wallet  │    │ Issuer  │    │Verifier │
    │  API    │    │  API    │    │  API    │
    │(7002)   │    │(7002)   │    │(7003)   │
    └─────────┘    └─────────┘    └─────────┘
```

---

## 📦 Core Dependencies Breakdown

### Frontend Framework
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x.x"
  }
}
```

### State Management & Data Fetching
```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.x",
    "react-redux": "^8.x.x",
    "axios": "^1.x.x"
  }
}
```

### UI & Styling
```json
{
  "dependencies": {
    "@mui/material": "^5.x.x",
    "@mui/icons-material": "^5.x.x",
    "tailwindcss": "^3.x.x",
    "@heroicons/react": "^2.x.x"
  }
}
```

### Form Handling
```json
{
  "dependencies": {
    "react-hook-form": "^7.x.x",
    "zod": "^3.x.x"
  }
}
```

### Security & Cryptography
```json
{
  "dependencies": {
    "jose": "^5.x.x",
    "tweetnacl": "^1.0.x"
  }
}
```

### Testing
```json
{
  "devDependencies": {
    "vitest": "^1.x.x",
    "@vitest/ui": "^1.x.x",
    "@testing-library/react": "^14.x.x",
    "@testing-library/jest-dom": "^6.x.x",
    "playwright": "^1.4x.x"
  }
}
```

### Development Tools
```json
{
  "devDependencies": {
    "typescript": "^5.x.x",
    "vite": "^5.x.x",
    "@vitejs/plugin-react": "^4.x.x",
    "eslint": "^8.x.x",
    "@typescript-eslint/eslint-plugin": "^6.x.x",
    "prettier": "^3.x.x"
  }
}
```

---

## 🚀 Setup & Installation Steps

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Docker (for backend services)

### Project Initialization

```bash
# 1. Create React app with Vite
npm create vite@latest researcher-wallet -- --template react-ts

# 2. Navigate to project
cd researcher-wallet

# 3. Install dependencies
npm install

# 4. Install additional core libraries
npm install \
  @reduxjs/toolkit react-redux \
  @mui/material @mui/icons-material @emotion/react @emotion/styled \
  react-hook-form zod \
  axios \
  react-router-dom \
  date-fns \
  @heroicons/react \
  jose

# 5. Install dev dependencies
npm install --save-dev \
  typescript @types/react @types/react-dom \
  vitest @vitest/ui @testing-library/react @testing-library/jest-dom \
  playwright \
  eslint @typescript-eslint/eslint-plugin prettier \
  tailwindcss postcss autoprefixer

# 6. Setup Tailwind CSS (if choosing Tailwind)
npx tailwindcss init -p

# 7. Start development server
npm run dev
```

---

## 📁 Project Structure (React + Redux)

```
researcher-wallet/
├── src/
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   ├── common/            # Shared UI components
│   │   ├── dashboard/         # Dashboard view components
│   │   ├── wallet/            # Wallet management components
│   │   ├── applications/      # Application workflow
│   │   ├── credentials/       # Credential display
│   │   └── layout/            # Layout components (Header, Sidebar)
│   │
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Wallet.tsx
│   │   ├── Applications.tsx
│   │   ├── ApplicationDetail.tsx
│   │   └── NotFound.tsx
│   │
│   ├── store/
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── credentialsSlice.ts
│   │   │   ├── applicationsSlice.ts
│   │   │   └── uiSlice.ts
│   │   └── hooks.ts           # Custom Redux hooks
│   │
│   ├── api/
│   │   ├── client.ts          # Axios instance with interceptors
│   │   ├── wallet.ts          # Wallet API calls
│   │   ├── issuer.ts          # Issuer API calls
│   │   ├── verifier.ts        # Verifier API calls
│   │   ├── auth.ts            # Auth API calls
│   │   └── positions.ts       # Academic positions API
│   │
│   ├── services/
│   │   ├── authService.ts
│   │   ├── credentialService.ts
│   │   ├── cryptoService.ts
│   │   ├── storageService.ts
│   │   └── notificationService.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useCredentials.ts
│   │   ├── useApplications.ts
│   │   ├── useFetch.ts        # Custom fetch hook
│   │   └── useLocalStorage.ts
│   │
│   ├── types/
│   │   ├── index.ts           # Type exports
│   │   ├── credential.ts      # Credential types
│   │   ├── application.ts     # Application types
│   │   ├── user.ts            # User types
│   │   ├── api.ts             # API response types
│   │   └── vc.ts              # VC/VP types
│   │
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.ts           # MUI theme
│   │
│   ├── utils/
│   │   ├── validators.ts      # Form validators
│   │   ├── formatters.ts      # Data formatters
│   │   ├── constants.ts       # App constants
│   │   └── helpers.ts
│   │
│   ├── middleware/
│   │   └── authMiddleware.ts  # Redux middleware
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── tests/
│   ├── unit/
│   │   ├── utils.test.ts
│   │   ├── validators.test.ts
│   │   └── services.test.ts
│   ├── components/
│   │   ├── Auth.test.tsx
│   │   ├── Dashboard.test.tsx
│   │   └── Wallet.test.tsx
│   └── e2e/
│       ├── auth.spec.ts
│       ├── application.spec.ts
│       └── wallet.spec.ts
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│
├── .env.example
├── .env.development
├── .env.production
├── .eslintrc.json
├── .prettierrc.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.js
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🔌 API Integration Points

### Wallet API (Port 7002)
```typescript
// Example: Get Credentials
const response = await axios.get('/api/wallet/credentials', {
  headers: { Authorization: `Bearer ${token}` }
});
```

### Issuer API (Port 7002)
```typescript
// Example: Request Credential
const response = await axios.post('/api/issuer/credentials/offer', {
  credentialType: 'degree',
  data: { /* issuer request data */ }
});
```

### Verifier API (Port 7003)
```typescript
// Example: Verify Presentation
const response = await axios.post('/api/verifier/verify', {
  presentation: { /* VP object */ }
});
```

---

## 🔐 Security Best Practices

### Environment Variables
```bash
# .env.development
VITE_API_BASE_URL=http://localhost:7002
VITE_VERIFIER_API_URL=http://localhost:7003
VITE_APP_NAME=Researcher Wallet
VITE_ENABLE_MOCK_API=false

# .env.production
VITE_API_BASE_URL=https://api.wallet.example.com
VITE_VERIFIER_API_URL=https://verifier.example.com
VITE_ENABLE_MOCK_API=false
```

### API Client Setup with Interceptors
```typescript
// api/client.ts
import axios from 'axios';
import { useAppSelector } from '../store';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
});

// Add auth token to requests
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or redirect to login
    }
    return Promise.reject(error);
  }
);

export default client;
```

---

## 🧪 Testing Setup

### Vitest Configuration
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  }
});
```

### Running Tests
```bash
# Unit tests
npm run test

# With coverage
npm run test:coverage

# E2E tests
npm run test:e2e

# Watch mode
npm run test:watch
```

---

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  wallet-frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - VITE_API_BASE_URL=http://wallet-api:7002
      - VITE_VERIFIER_API_URL=http://verifier-api:7003
    networks:
      - wallet-network

networks:
  wallet-network:
    external: true
```

---

## 📊 Package Management

### Production Dependencies (~20 packages)
- React ecosystem (react, react-dom, react-router-dom)
- State management (redux-toolkit, react-redux)
- UI libraries (mui, tailwindcss, heroicons)
- HTTP client (axios)
- Form handling (react-hook-form)
- Utilities (date-fns, zod)
- Cryptography (jose)

### Development Dependencies (~25 packages)
- Build tool (vite, vitejs/plugin-react)
- TypeScript (@types/*)
- Testing (vitest, playwright, testing-library)
- Code quality (eslint, prettier)

**Total:** ~45 dependencies (manageable, focused)

---

## 🔄 Build & Development Workflow

### npm Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives",
    "format": "prettier --write src",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "type-check": "tsc --noEmit",
    "docker:build": "docker build -t researcher-wallet:latest .",
    "docker:run": "docker run -p 3000:3000 researcher-wallet:latest"
  }
}
```

---

## 📈 Performance Optimization

### Build Optimization
- Tree-shaking with Vite
- Code splitting by routes
- CSS purging with Tailwind
- Image optimization
- Lazy loading of components

### Runtime Optimization
- React.memo for component memoization
- useMemo/useCallback for expensive operations
- Virtual scrolling for long lists
- Debounced API calls
- Service worker for caching

---

## 🚀 Deployment Checklist

- [ ] TypeScript compilation without errors
- [ ] ESLint and Prettier pass
- [ ] Unit tests pass (>80% coverage)
- [ ] E2E tests pass
- [ ] Build output < 1MB (gzipped)
- [ ] Environment variables configured
- [ ] SSL certificates installed
- [ ] CORS configured correctly
- [ ] Security headers set
- [ ] Monitoring/logging configured
- [ ] Database backups scheduled
- [ ] Incident response plan ready

---

## 📚 Learning Resources

- **React:** https://react.dev/learn
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Redux Toolkit:** https://redux-toolkit.js.org/usage/usage-guide
- **Material-UI:** https://mui.com/material-ui/getting-started/
- **Vite:** https://vitejs.dev/guide/
- **walt.id:** https://docs.walt.id/
- **VC Data Model:** https://www.w3.org/TR/vc-data-model/

---

## 🆘 Troubleshooting

### Common Issues

**Issue:** Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

**Issue:** Node modules corrupted
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue:** TypeScript errors after update
```bash
npm run type-check
npm update
```

**Issue:** Vite build fails
```bash
npm run build -- --debug
# Check tsconfig.json and vite.config.ts
```

---

**Last Updated:** May 2026  
**Next Review:** Monthly


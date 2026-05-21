# 🚀 Researcher Digital Wallet - Quick Start Guide

## 📋 Prerequisites

Before starting development, ensure you have:
- **Node.js 18.x or higher** — [download](https://nodejs.org/)
- **npm 9.x or higher** — included with Node.js
- **Git** — [download](https://git-scm.com/)
- **Docker Desktop** — [download](https://www.docker.com/products/docker-desktop/) (for backend services)
- **VS Code** (recommended) — [download](https://code.visualstudio.com/)

### Verify Installation
```bash
node --version    # Should be v18.x or higher
npm --version     # Should be 9.x or higher
docker --version  # Should show Docker version
```

---

## ⚙️ Initial Setup

### 1. Clone or Initialize the Project

```bash
# Navigate to frontend directory
cd d:\golden-recipe-lab\frontend

# Initialize as npm project (if not already done)
npm init -y
```

### 2. Install Core Dependencies

```bash
# Install React and core dependencies
npm install react@18 react-dom@18 react-router-dom@6

# Install TypeScript and type definitions
npm install --save-dev typescript @types/react @types/react-dom @types/node

# Install Vite and plugins
npm install --save-dev vite @vitejs/plugin-react @vitejs/plugin-basic-ssl

# Install state management
npm install @reduxjs/toolkit react-redux

# Install UI libraries
npm install @mui/material @emotion/react @emotion/styled @heroicons/react

# Install form handling
npm install react-hook-form zod

# Install HTTP client
npm install axios

# Install utilities
npm install date-fns

# Install dev tools
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install --save-dev vitest @vitest/ui @testing-library/react @testing-library/jest-dom
npm install --save-dev playwright
npm install --save-dev tailwindcss postcss autoprefixer
```

### 3. Setup Configuration Files

#### Create `vite.config.ts`
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
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/verifier': {
        target: 'http://localhost:7003',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/verifier/, '')
      }
    }
  }
})
```

#### Create `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### Create `.eslintrc.json`
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "jsx": true
  },
  "rules": {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

#### Create `.prettierrc.json`
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

#### Create `.env.example`
```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:7002
VITE_VERIFIER_API_URL=http://localhost:7003
VITE_ISSUER_API_URL=http://localhost:7002

# App Configuration
VITE_APP_NAME=Researcher Digital Wallet
VITE_APP_VERSION=1.0.0
VITE_ENABLE_MOCK_API=false

# Debug
VITE_DEBUG=false
```

#### Copy `.env` file
```bash
cp .env.example .env
```

### 4. Update `package.json`

Add these scripts to your `package.json`:

```json
{
  "name": "researcher-wallet",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "lint:fix": "eslint src --ext ts,tsx --fix",
    "format": "prettier --write src",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 📁 Create Project Structure

Create the basic folder structure:

```bash
mkdir -p src/{components,pages,store,api,services,hooks,types,styles,utils}
mkdir -p src/components/{auth,common,dashboard,wallet,applications,credentials,layout}
mkdir -p src/store/slices
mkdir -p tests/{unit,components,e2e}
mkdir -p public
```

---

## 📝 Create Basic Files

### 1. `src/main.tsx` (Entry Point)
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 2. `src/App.tsx`
```typescript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
```

### 3. `src/vite-env.d.ts`
```typescript
/// <reference types="vite/client" />
```

### 4. `public/index.html`
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Researcher Digital Wallet</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## 🔐 Setup Backend Connection

### 1. Create API Client `src/api/client.ts`

```typescript
import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7002',
  timeout: 10000,
})

// Add request interceptor for auth token
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Add response interceptor for error handling
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default client
```

### 2. Create Wallet API `src/api/wallet.ts`

```typescript
import client from './client'

export const walletAPI = {
  getCredentials: async () => {
    const response = await client.get('/api/wallet/credentials')
    return response.data
  },
  
  getCredentialById: async (id: string) => {
    const response = await client.get(`/api/wallet/credentials/${id}`)
    return response.data
  },
  
  deleteCredential: async (id: string) => {
    const response = await client.delete(`/api/wallet/credentials/${id}`)
    return response.data
  },
  
  createPresentation: async (credentialIds: string[]) => {
    const response = await client.post('/api/wallet/presentations', {
      credentials: credentialIds
    })
    return response.data
  }
}
```

---

## ⚙️ Setup Redux Store

### 1. Create `src/store/index.ts`

```typescript
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import credentialsReducer from './slices/credentialsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    credentials: credentialsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
```

### 2. Create `src/store/slices/authSlice.ts`

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  user: { id: string; email: string } | null
}

const initialState: AuthState = {
  token: localStorage.getItem('authToken'),
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.token = action.payload.token
      state.user = action.payload.user
      state.isAuthenticated = true
      localStorage.setItem('authToken', action.payload.token)
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('authToken')
    },
  },
})

export const { setAuth, logout } = authSlice.actions
export default authSlice.reducer
```

---

## 🚀 Run Development Server

```bash
# Start the development server
npm run dev

# The app will open at http://localhost:3000
```

---

## 🔧 Backend Services Setup

### Start Backend Services

From the `lab-v1.0.47-amd64` directory:

**Windows:**
```bash
cd lab-v1.0.47-amd64
start-lab.cmd
```

**macOS/Linux:**
```bash
cd lab-v1.0.47-amd64
chmod +x start-lab.sh
./start-lab.sh
```

### Verify Backend is Running

Check if backend services are accessible:
```bash
# Wallet API
curl http://localhost:7002/swagger

# Verifier API  
curl http://localhost:7003/swagger

# Issuer API
curl http://localhost:7002/swagger
```

---

## ✅ Verify Setup

Run these commands to verify everything is working:

```bash
# Check TypeScript compilation
npm run type-check

# Run linter
npm run lint

# Run tests
npm run test

# Build for production
npm run build
```

---

## 🆘 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Issue: Node modules not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Backend connection refused
- Ensure Docker Desktop is running
- Check backend services: `npm run docker:ps` in lab folder
- Verify URLs in `.env` file match running services

### Issue: CORS errors
- Check `vite.config.ts` proxy configuration
- Verify `Access-Control-Allow-Origin` headers from backend

### Issue: TypeScript errors
```bash
npm run type-check
npm update
```

---

## 📚 Next Steps

1. **Review Documentation**
   - Read `SPECIFICATION.md` for detailed requirements
   - Check `TECHSTACK.md` for tech stack details

2. **Create First Component**
   - Start with `src/pages/Login.tsx`
   - Implement authentication flow
   - Test with backend API

3. **Setup State Management**
   - Create additional Redux slices as needed
   - Implement async thunks for API calls

4. **Build UI Components**
   - Create reusable components in `src/components/common`
   - Use Material-UI or Tailwind for styling

5. **Add Tests**
   - Write unit tests for utilities
   - Add component tests for key features
   - Create E2E tests for workflows

---

## 📖 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check for linting issues
npm run lint:fix         # Auto-fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types

# Testing
npm run test             # Run unit tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report
npm run test:e2e         # Run E2E tests

# Maintenance
npm update               # Update dependencies
npm outdated             # Check for outdated packages
npm audit                # Check for security issues
```

---

## 🔗 Important URLs (When Backend is Running)

| Service | URL |
|---------|-----|
| Frontend Dev | http://localhost:3000 |
| Wallet API Docs | http://localhost:7002/swagger |
| Issuer API Docs | http://localhost:7002/swagger |
| Verifier API Docs | http://localhost:7003/swagger |
| Wallet Portal | http://localhost:7101 |
| Issuer Portal | http://localhost:7102 |

---

## 🎓 Learning Resources

- **Vite Guide:** https://vitejs.dev/guide/
- **React Docs:** https://react.dev
- **Redux Toolkit:** https://redux-toolkit.js.org/
- **Material-UI:** https://mui.com/
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## 💡 Development Tips

1. **Use Redux DevTools** for debugging state
2. **Enable Strict Mode** to catch bugs early
3. **Use TypeScript strict mode** for type safety
4. **Write tests as you develop** not after
5. **Use ESLint** to catch errors before runtime
6. **Keep components small** and focused
7. **Use custom hooks** for logic reuse
8. **Document complex functions** with JSDoc

---

**Last Updated:** May 2026  
**Questions?** Check SPECIFICATION.md and TECHSTACK.md for more details.


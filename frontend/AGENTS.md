# Agent Guidance - Frontend

## Project Status
**NOT YET INITIALIZED** - Only documentation files exist. Run `npm install` after creating package.json.

## improtant
- Do not use emoji, Use icon only
- The content within the app must be in easy-to-understand Thai and entirely in Thai.

## Prerequisites
- Node.js 18.x+
- npm 9.x+
- Docker Desktop (for backend services)

## Quick Start
```bash
cd D:\golden-recipe-lab\frontend
npm install          # After setting up package.json
npm run dev          # Start dev server on port 3000
```

## Environment Variables
Create `.env` from `.env.example`:
```
VITE_API_BASE_URL=http://localhost:7002
VITE_VERIFIER_API_URL=http://localhost:7003
```

## Key Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript check |
| `npm run test` | Vitest unit tests |
| `npm run test:e2e` | Playwright E2E tests |

## Vite Proxy Config
- `/api/*` → `http://localhost:7002`
- `/verifier/*` → `http://localhost:7003`

## Dependencies (from QUICKSTART.md)
- React 18, React Router 6
- Redux Toolkit, React Redux
- MUI, Tailwind CSS
- React Hook Form + Zod
- Axios
- Vitest, Playwright

## Backend Dependency
Frontend requires Docker services running:
```bash
cd D:\golden-recipe-lab\lab-v1.0.47-amd64
start-lab.cmd        # Windows
./start-lab.sh       # macOS/Linux
```
Services: Wallet API (7002), Verifier API (7003)

## Reference Docs
- `SPECIFICATION.md` - Feature specs
- `TECHSTACK.md` - Tech details
- `QUICKSTART.md` - Setup instructions
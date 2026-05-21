# Agent Guidance

## Project Structure
```
golden-recipe-lab/
├── frontend/           # React 18 + TypeScript + Vite app (NOT YET INITIALIZED)
│   └── *.md            # Documentation only, no package.json yet
└── lab-v1.0.47-amd64/  # Backend Docker services (walt.id identity stack)
    ├── start-lab.cmd   # Windows startup script
    ├── start-lab.sh    # macOS/Linux startup script
    ├── waltid/         # Wallet API configs
    ├── issuer/         # Issuer API configs
    └── verifier/       # Verifier API configs
```

## Key Commands

### Frontend (requires npm install first)
```bash
cd D:\golden-recipe-lab\frontend
npm run dev          # Start dev server on port 3000
npm run build        # Production build
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run test         # Vitest unit tests
npm run test:e2e     # Playwright E2E tests
```

### Backend (requires Docker Desktop running)
```bash
cd D:\golden-recipe-lab\lab-v1.0.47-amd64
start-lab.cmd        # Windows: starts all Docker services
./start-lab.sh       # macOS/Linux
```

**Required services:** Wallet API (port 7002), Verifier API (port 7003)

## Important Notes

1. **Frontend not initialized**: The `frontend/` folder has only documentation files. No `package.json` exists yet. Run `npm install` after setting up the project.

2. **Backend required**: The frontend cannot function without the lab Docker services running. Start `start-lab.cmd` first.

3. **Environment variables**: Copy `.env.example` to `.env` before running. Key vars: `VITE_API_BASE_URL=http://localhost:7002`, `VITE_VERIFIER_API_URL=http://localhost:7003`

4. **Tech stack**: React 18, Redux Toolkit, MUI, React Hook Form + Zod, Vitest, Playwright

5. **Vite proxy config**: API calls to `/api` proxy to localhost:7002, `/verifier` to localhost:7003

## Reference Documents
- `frontend/SPECIFICATION.md` - Full feature specs
- `frontend/TECHSTACK.md` - Tech details
- `frontend/QUICKSTART.md` - Setup instructions with dependency list
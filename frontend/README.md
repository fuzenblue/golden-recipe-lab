# 🎓 Researcher Digital Wallet - Frontend
## Thai Academic Position Promotion System

A modern web application enabling Thai academic researchers to efficiently manage Verifiable Credentials (VCs) and auto-complete academic position promotion applications using the walt.id Identity Stack.

**Reference:** Built to support workflows in "Data ใช้ในการขอตำแหน่ง อ้างอิง swu.md"

## 🌟 Overview

This is a **React + TypeScript** web application that provides Thai researchers with:
- 🔐 Secure management of 6-credential types (VC1-VC6): Personal ID, HR Info, Teaching Records, Publications, Co-author Confirmations
- 📋 Complete academic position promotion workflow (ผู้ช่วยศาสตราจารย์ → รองศาสตราจารย์ → ศาสตราจารย์)
- ✅ Auto-fill 11 government forms (ก.พ.อ. 03 + 10 others) using Verifiable Presentations (VP)
- ⚡ Fast, responsive interface with real-time credential status tracking
- 🔄 Integration with walt.id backend and multiple institutional stakeholders (HR, Faculty, Journals, Co-researchers)

## 📚 Documentation

### 📖 Key Documents
- **[SPECIFICATION.md](./SPECIFICATION.md)** — Complete project requirements and specifications
- **[TECHSTACK.md](./TECHSTACK.md)** — Detailed tech stack, dependencies, and architecture
- **[QUICKSTART.md](./QUICKSTART.md)** — Step-by-step setup and development guide

### 📋 Document Breakdown

| Document | Purpose | Audience | Read Time |
|----------|---------|----------|-----------|
| **SPECIFICATION.md** | Complete feature requirements, user flows, architecture, security requirements, testing strategy | Product managers, developers, architects | 20-30 min |
| **TECHSTACK.md** | Technology selection rationale, dependencies, installation, project structure | Developers, DevOps engineers | 15-20 min |
| **QUICKSTART.md** | Step-by-step setup instructions, first run, common issues | New developers | 10-15 min |
| **README.md** (this file) | Quick overview and navigation guide | Everyone | 5 min |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x+
- npm 9.x+
- Docker Desktop (for backend services)
- Git

### Installation

1. **Clone/Navigate to project:**
   ```bash
   cd d:\golden-recipe-lab\frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Start backend services** (from lab folder):
   ```bash
   cd ../lab-v1.0.47-amd64
   start-lab.cmd          # Windows
   ./start-lab.sh         # macOS/Linux
   ```

✅ Frontend: http://localhost:3000  
✅ Wallet API: http://localhost:7002  
✅ Verifier API: http://localhost:7003

**For detailed setup instructions, see [QUICKSTART.md](./QUICKSTART.md)**

---

## 🏗️ Tech Stack

### Core Technologies
```
Frontend:    React 18 + TypeScript + Vite
State:       Redux Toolkit + React Hooks
UI:          Material-UI (MUI) + Tailwind CSS
HTTP:        Axios + Interceptors
Forms:       React Hook Form + Zod
Testing:     Vitest + Playwright + React Testing Library
Security:    jose (JWT) + TweetNaCl.js
Build:       Docker + nginx
```

**For complete tech stack details, see [TECHSTACK.md](./TECHSTACK.md)**

---

## 📋 Project Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── store/              # Redux store setup
│   ├── api/                # API client & endpoints
│   ├── services/           # Business logic services
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   ├── styles/             # CSS & theme
│   ├── utils/              # Utility functions
│   ├── App.tsx
│   └── main.tsx
├── tests/                  # Test files
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── README.md             # This file
```

---

## 🎯 Key Features

### ✅ Phase 1: Foundation (Weeks 1-2)
- User authentication (login/register)
- Dashboard overview
- Basic navigation structure

### ✅ Phase 2: Core Wallet (Weeks 3-5)
- View and manage credentials
- Credential organization by type
- Expiration date tracking
- Credential details view

### ✅ Phase 3: Applications (Weeks 6-8)
- Browse academic positions
- Create applications
- Select relevant credentials
- Generate Verifiable Presentations (VP)
- Submit applications

### ✅ Phase 4: Advanced (Weeks 9-10)
- Notification system
- Application status tracking
- Offline support
- Credential expiration alerts

### ✅ Phase 5: Launch (Weeks 11-12)
- Testing & bug fixes
- Performance optimization
- Security audit
- Deployment

---

## 📊 Feature Overview

### 🔐 Authentication & Authorization
- Secure login/registration with JWT
- Session management
- Role-based access control
- Password recovery

### 👤 Profile Management
- User profile editing
- Contact information
- Research interests
- Institutional verification

### 💳 Credential Management
- **Request** credentials from trusted issuers
- **Store** credentials securely (local + cloud)
- **Organize** by type/issuer/date
- **Monitor** expiration dates
- **Verify** issuer authenticity
- **Share** credentials with verifiers

### 📝 Application Workflow
- **Browse** academic positions
- **Filter** by field/location/experience
- **View** position details and requirements
- **Select** relevant credentials
- **Generate** Verifiable Presentations
- **Submit** applications
- **Track** application status

### 🔔 Notifications & Communication
- Email notifications for credential updates
- Application decision alerts
- Expiration warnings
- In-app notification center

---

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# With coverage
npm run test:coverage

# Watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# UI mode
npm run test:ui
```

### Test Coverage Goals
- Minimum 80% code coverage
- 100% coverage for security-critical code
- All user workflows tested via E2E

---

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server (port 3000)
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types

# Testing
npm run test             # Run Vitest
npm run test:coverage    # Generate coverage report
npm run test:e2e         # Run Playwright E2E tests

# Maintenance
npm update               # Update dependencies
npm outdated             # Check outdated packages
npm audit                # Security audit
```

---

## 🌐 API Integration

### Backend Services

| Service | URL | Port | Purpose |
|---------|-----|------|---------|
| Wallet API | http://localhost:7002 | 7002 | Manage credentials |
| Issuer API | http://localhost:7002 | 7002 | Issue credentials |
| Verifier API | http://localhost:7003 | 7003 | Verify presentations |

### Environment Variables

```bash
# .env file (copy from .env.example)
VITE_API_BASE_URL=http://localhost:7002
VITE_VERIFIER_API_URL=http://localhost:7003
VITE_APP_NAME=Researcher Digital Wallet
```

---

## 🔐 Security

### Features
- ✅ HTTPS/TLS encryption
- ✅ JWT authentication with refresh tokens
- ✅ Encrypted credential storage
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ Content Security Policy (CSP)
- ✅ Regular security audits

### Best Practices
- Never store sensitive data in localStorage without encryption
- Always validate user input on both client and server
- Keep dependencies updated regularly
- Use TypeScript strict mode
- Implement rate limiting on backend
- Monitor and log security events

---

## 📈 Performance

### Optimization Strategies
- Code splitting by routes
- Tree-shaking with Vite
- CSS purging with Tailwind
- Image optimization
- Lazy loading of components
- Debounced API calls
- Virtual scrolling for lists

### Performance Targets
- Page load time: < 3 seconds on 4G
- API response time: < 500ms
- Lighthouse score: > 80
- Bundle size: < 1MB (gzipped)

---

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t researcher-wallet:latest .
```

### Run Container
```bash
docker run -p 3000:3000 researcher-wallet:latest
```

### Docker Compose
```bash
docker-compose up -d
```

---

## 🆘 Troubleshooting

### Common Issues

**Port 3000 in use:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000 | grep LISTEN
kill -9 <PID>
```

**Node modules issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Backend connection refused:**
- Ensure Docker Desktop is running
- Start backend services: `./start-lab.sh`
- Check `.env` file has correct URLs

**TypeScript errors:**
```bash
npm run type-check
npm update
```

For more troubleshooting, see [QUICKSTART.md](./QUICKSTART.md#-troubleshooting)

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Follow code style: `npm run lint:fix`
3. Write tests for new code
4. Format code: `npm run format`
5. Commit changes with clear messages
6. Push to branch and create Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow ESLint/Prettier configuration
- Maintain >80% test coverage
- Document complex functions with JSDoc
- Keep components small and focused

---

## 📞 Support

### Resources
- 📖 **Read Docs:** [SPECIFICATION.md](./SPECIFICATION.md), [TECHSTACK.md](./TECHSTACK.md)
- 🚀 **Get Started:** [QUICKSTART.md](./QUICKSTART.md)
- 🔗 **Backend Docs:** https://docs.walt.id/
- 💬 **Ask Questions:** Create an issue

### Getting Help
1. Check the documentation files
2. Search existing issues/discussions
3. Check troubleshooting section
4. Create new issue with:
   - Description of problem
   - Steps to reproduce
   - Error messages
   - System information

---

## 📋 Roadmap

### Version 1.0 (MVP) - June 2026
- ✅ Authentication system
- ✅ Credential management
- ✅ Application workflow
- ✅ Basic notifications

### Version 1.1 (Q3 2026)
- Mobile-responsive improvements
- Advanced credential filtering
- Credential marketplace
- Two-factor authentication

### Version 1.2 (Q4 2026)
- Mobile apps (iOS/Android)
- Advanced analytics
- API webhooks
- CLI tool

### Version 2.0 (2027)
- Federation support
- Multi-language support
- AI-powered recommendations
- Enhanced security features

---

## 📄 License

[Add your license information here]

---

## 👥 Team

| Role | Name |
|------|------|
| Project Lead | TBD |
| Frontend Lead | TBD |
| Backend Lead | TBD |
| DevOps | TBD |

---

## 🔗 Related Repositories

- **Backend:** [walt.id](https://github.com/walt-id/waltid-identity)
- **Lab Setup:** `lab-v1.0.47-amd64/` folder
- **Documentation:** This repository

---

## 📞 Contact

- 📧 Email: [contact@wallet.example.com](mailto:contact@wallet.example.com)
- 🔗 Website: [https://wallet.example.com](https://wallet.example.com)
- 💬 Discord: [Join our community](https://discord.gg/example)

---

## ⭐ Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Material-UI](https://mui.com) & [Tailwind CSS](https://tailwindcss.com)
- Powered by [walt.id](https://walt.id)
- Verifiable Credentials by [W3C](https://www.w3.org/TR/vc-data-model/)

---

**Last Updated:** May 2026  
**Version:** 1.0.0 (Draft)

---

### 🎯 Next Steps

1. **Read the specification:** [SPECIFICATION.md](./SPECIFICATION.md)
2. **Review tech stack:** [TECHSTACK.md](./TECHSTACK.md)
3. **Follow quick start:** [QUICKSTART.md](./QUICKSTART.md)
4. **Start development:** `npm run dev`

---

*For questions or suggestions, please create an issue or discussion in this repository.*


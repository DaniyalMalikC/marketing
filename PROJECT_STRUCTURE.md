# Marketing Project Structure

## Overview
This is a production-ready Next.js 15 marketing website with the latest stable versions of all dependencies, following Atomic Design principles combined with feature-based architecture.

## Tech Stack

### Core Technologies
- **Next.js**: 15.5.9 (App Router, Turbopack)
- **React**: 19.2.3
- **TypeScript**: 5.9.3 (Strict mode)
- **Package Manager**: PNPM 8.6.0

### Styling & UI
- **Tailwind CSS**: 3.4.19
- **SCSS**: 1.97.1
- **CSS Modules**: Supported
- **Fonts**: Geist Sans & Geist Mono

### Animations
- **Framer Motion**: 11.18.2 (Component animations)
- **GSAP**: 3.14.2 (Complex animations)
- **Lenis**: 1.3.16 (Smooth scrolling)
- **AOS**: 2.3.4 (Scroll animations)

### State & Data
- **Zustand**: 5.0.9 (Global state management)
- **API Client**: Custom type-safe wrapper

### Icons & Assets
- **Iconify**: 5.2.1
- **Images**: Unsplash integration ready

### Development Tools
- **Biome**: 1.9.4 (Linting & Formatting)
- **PostCSS**: 8.5.6
- **Autoprefixer**: 10.4.23

## Project Architecture

```
marketing/
│
├── app/                          # Next.js App Router
│   ├── (marketing)/             # Route group for marketing pages
│   │   ├── layout.tsx          # Marketing layout with Header/Footer
│   │   ├── page.tsx            # Home page (/)
│   │   ├── about/
│   │   │   └── page.tsx        # About page (/about)
│   │   └── contact/
│   │       └── page.tsx        # Contact page (/contact)
│   │
│   ├── api/                     # API routes
│   │   └── health/
│   │       └── route.ts        # Health check endpoint
│   │
│   ├── layout.tsx              # Root layout
│   ├── loading.tsx             # Global loading state
│   ├── not-found.tsx           # 404 page
│   └── error.tsx               # Error page
│
├── components/                  # React components (Atomic Design)
│   ├── atoms/                  # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Text/
│   │   │   ├── Text.tsx
│   │   │   └── index.ts
│   │   ├── Icon/
│   │   │   ├── Icon.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── molecules/              # Combinations of atoms
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── organisms/              # Complex UI components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── providers/              # Context providers
│   │   ├── theme-provider.tsx
│   │   ├── animation-provider.tsx
│   │   └── index.tsx
│   │
│   └── error-boundary.tsx      # Error boundary component
│
├── features/                    # Feature-based modules
│   ├── home/                   # Home page features
│   └── shared/                 # Shared features
│
├── hooks/                       # Custom React hooks
│   ├── use-mounted.ts
│   ├── use-media-query.ts
│   └── index.ts
│
├── lib/                         # Utilities and helpers
│   ├── utils/
│   │   ├── cn.ts              # Class name utility
│   │   ├── seo.ts             # SEO utilities
│   │   └── index.ts
│   ├── constants/             # App constants
│   └── validators/            # Validation schemas
│
├── services/                    # API and external services
│   └── api/
│       ├── client.ts          # Type-safe API client
│       └── index.ts
│
├── store/                       # Zustand state management
│   ├── slices/
│   │   └── theme-slice.ts     # Theme state slice
│   ├── middleware/            # Store middleware
│   └── index.ts               # Store configuration
│
├── styles/                      # Global styles
│   ├── base/
│   │   ├── globals.scss       # Global CSS/Tailwind
│   │   └── animations.scss    # Animation styles
│   ├── components/            # Component-specific styles
│   └── utilities/             # Utility classes
│
├── types/                       # TypeScript type definitions
│   ├── common.ts              # Common types
│   └── index.ts
│
├── config/                      # Configuration files
│   └── site.ts                # Site configuration
│
├── public/                      # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables
├── .gitignore                   # Git ignore rules
├── biome.json                   # Biome configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
└── PROJECT_STRUCTURE.md         # This file
```

## Key Features Implemented

### ✅ Core Setup
- [x] Next.js 15 with App Router
- [x] TypeScript with strict configuration
- [x] PNPM package manager
- [x] Latest stable versions of all dependencies

### ✅ Styling
- [x] Tailwind CSS with custom theme
- [x] SCSS support
- [x] CSS Modules support
- [x] Dark/Light mode with system preference
- [x] Custom CSS variables

### ✅ Animations
- [x] Framer Motion integration
- [x] GSAP ready
- [x] Lenis smooth scrolling
- [x] AOS scroll animations
- [x] Custom animation utilities

### ✅ State Management
- [x] Zustand store setup
- [x] Persisted state (localStorage)
- [x] Devtools support
- [x] Type-safe store

### ✅ Architecture
- [x] Atomic Design pattern
- [x] Feature-based structure
- [x] Strict separation of concerns
- [x] Reusable components
- [x] Custom hooks
- [x] Type-safe API layer

### ✅ Components
- [x] Button (multiple variants)
- [x] Text (typography)
- [x] Icon (Iconify)
- [x] Card (flexible)
- [x] Header (with theme toggle)
- [x] Footer (with links)

### ✅ Pages
- [x] Home page with animations
- [x] About page
- [x] Contact page
- [x] 404 Not Found
- [x] Error page
- [x] Loading state

### ✅ Providers
- [x] Theme Provider
- [x] Animation Provider
- [x] Error Boundary

### ✅ SEO & Meta
- [x] SEO utility functions
- [x] Meta tag generation
- [x] Open Graph support
- [x] Twitter Card support

### ✅ Development
- [x] Biome linting
- [x] Biome formatting
- [x] TypeScript strict mode
- [x] Absolute imports
- [x] Environment variables

### ✅ Build & Deploy
- [x] Production build passes
- [x] Type checking passes
- [x] Vercel ready
- [x] Optimized bundle

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server with Turbopack

# Build
pnpm build            # Production build
pnpm start            # Start production server

# Quality
pnpm lint             # Run Biome linter
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code
pnpm type-check       # TypeScript type checking
```

## Environment Variables

See `.env.example` for required environment variables.

## Architecture Principles

### Atomic Design
- **Atoms**: Basic UI elements (Button, Text, Icon)
- **Molecules**: Simple component groups (Card, Form)
- **Organisms**: Complex components (Header, Footer)

### Feature-Based
- Each feature has its own directory
- Features contain components, hooks, and logic
- Shared code is in dedicated folders

### Separation of Concerns
- UI components are pure and reusable
- Business logic in hooks and services
- State management centralized
- API layer is type-safe
- Styles are modular

## Next Steps

1. Add more atomic components as needed
2. Implement feature modules
3. Connect to real APIs
4. Add analytics
5. Implement forms with validation
6. Add more pages
7. Setup testing
8. Add CI/CD

## Notes

- All dependencies use the latest stable versions
- No experimental or deprecated APIs
- Clean, scalable, production-ready
- Follows Next.js 15 best practices
- Type-safe throughout
- SEO optimized
- Accessible components
- Responsive design

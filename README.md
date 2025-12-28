# Marketing - Production-Ready Next.js Boilerplate

A modern, scalable, and production-ready marketing website built with the latest stable versions of Next.js, TypeScript, Tailwind CSS, and more.

## Features

- ⚡ **Next.js 15** with App Router
- 🔷 **TypeScript** with strict configuration
- 🎨 **Tailwind CSS** + SCSS + CSS Modules
- 🎭 **Framer Motion** + GSAP + Lenis + AOS for animations
- 🐻 **Zustand** for state management
- 🎯 **Iconify** for icons
- 📦 **PNPM** package manager
- 🧹 **Biome** for linting and formatting
- 🏗️ **Atomic Design** + Feature-based architecture
- 🌓 **Dark/Light mode** with theme provider
- 🔒 **Type-safe** API layer
- 📱 **Responsive** design
- ♿ **Accessible** components
- 🎯 **SEO optimized**
- 🚀 **Vercel** ready

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
marketing/
├── app/                      # Next.js app directory
│   ├── (marketing)/         # Marketing pages group
│   │   ├── about/
│   │   ├── contact/
│   │   └── page.tsx         # Home page
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── loading.tsx          # Global loading
│   ├── not-found.tsx        # 404 page
│   └── error.tsx            # Error page
├── components/              # React components
│   ├── atoms/              # Atomic design - atoms
│   ├── molecules/          # Atomic design - molecules
│   ├── organisms/          # Atomic design - organisms
│   ├── providers/          # Context providers
│   └── error-boundary.tsx  # Error boundary
├── features/               # Feature modules
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and helpers
│   ├── utils/             # Utility functions
│   └── constants/         # Constants
├── services/              # API services
│   └── api/              # API client
├── store/                # Zustand store
│   ├── slices/          # Store slices
│   └── index.ts         # Store configuration
├── styles/              # Global styles
│   ├── base/           # Base styles
│   └── components/     # Component styles
├── types/              # TypeScript types
└── config/            # Configuration files

```

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Biome
- `pnpm type-check` - Run TypeScript type checking

## Stack

### Core

- **Framework**: Next.js 15.5.9
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.19
- **Package Manager**: PNPM 8.6.0

### State & Data

- **State Management**: Zustand 5.0.9
- **API Client**: Custom fetch wrapper

### UI & Animation

- **Animations**: Framer Motion 11.18.2, GSAP 3.14.2
- **Smooth Scroll**: Lenis 1.3.16
- **Scroll Animations**: AOS 2.3.4
- **Icons**: Iconify React 5.2.1
- **Utilities**: clsx, tailwind-merge

### Development

- **Linter/Formatter**: Biome 1.9.4
- **Type Checking**: TypeScript strict mode
- **Fonts**: Geist Sans & Geist Mono

## Architecture

This project follows a hybrid architecture combining:

1. **Atomic Design** for UI components
   - Atoms: Basic building blocks (Button, Text, Icon)
   - Molecules: Simple component groups (Card, Form)
   - Organisms: Complex components (Header, Footer)

2. **Feature-based** for business logic
   - Each feature has its own folder with components, hooks, and logic

3. **Strict Separation of Concerns**
   - UI components are pure and reusable
   - Business logic in hooks and services
   - Type-safe API layer
   - Centralized state management

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT

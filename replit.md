# E-SPIN NANOTECH

A Next.js 15 website for E-SPIN NANOTECH, a nanofiber technology solutions company.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion, React Spring
- **Particles**: tsParticles
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Language**: TypeScript

## Structure

- `app/` - Next.js App Router pages (home, about, contact, products, media, publications)
- `components/` - Shared UI components including Header and Footer
- `lib/` - Utility functions
- `hooks/` - Custom React hooks
- `public/` - Static assets

## Running the App

```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration

- Dev server runs on port 5000, bound to 0.0.0.0 (required for Replit preview)
- Vercel-specific packages (analytics, speed insights) removed — not needed on Replit
- Static export mode disabled — using standard Next.js server mode
- Workflow: "Start application" runs `npm run dev`

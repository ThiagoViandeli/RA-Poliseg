# RA Poliseg Seguros — Landing Page

## Overview
Premium landing page for RA Poliseg Seguros, a Brazilian insurance brokerage founded in 1988. Designed with a minimalist editorial aesthetic inspired by Acrisure, with all content in Brazilian Portuguese.

## Architecture
- **Frontend**: React + Vite with Tailwind CSS v4, served by Express in development via Vite middleware
- **Backend**: Express server (serves frontend only; no API routes or database needed for this static landing page)
- **Styling**: Tailwind CSS with custom theme colors and CSS animations
- **Carousel**: Embla Carousel (embla-carousel-react + embla-carousel-autoplay) for infinite-scrolling client logos

## Design System
- **Background**: `#EDF1E6` (light sage), alternating sections `#e4e9dc`
- **Accent**: `#d97706` (amber/orange)
- **Typography**: Inter font, clean editorial style
- **Logo treatment**: `grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all`
- **Section headers**: Small uppercase tracking-widest amber + `w-8 h-[2px] bg-[#d97706]` line accent
- **Float animation**: Custom `animate-float` keyframes in index.css

## Page Structure (Home.tsx)
1. **Slide 1 — Hero**: Company tagline + value proposition
2. **Slide 2 — History**: Founder story (Rogério Abinader) and team
3. **Slide 3 — Specialty & Portfolio**: Services overview, Construtoras carousel (Embla), and Seguradoras Parceiras grid
4. **Slide 4 — Lines of Business**: 4 insurance categories with isometric icons and service lists, plus Portfolio section with partner insurers

## Key Files
- `client/src/pages/Home.tsx` — Main landing page component
- `client/src/index.css` — Global styles, float animation, Embla carousel styles
- `client/public/` — Logo images and isometric icons
- `server/index.ts` — Express server entry point
- `server/routes.ts` — API routes (currently empty; no dynamic data needed)

## Running
- `npm run dev` — Starts Express + Vite dev server on port 5000
- `npm run build` — Production build

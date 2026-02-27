# Dia's Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Overview

This portfolio presents:

- Hero / introduction section
- Skills section
- Education section
- Projects & experience section
- Interests section
- Contact section

It also includes a built-in French/English language toggle through a dedicated language context.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
git clone <your-repository-url>
cd Dia-s-portfolio
npm install
```

### Run in development

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run build:dev` — build in development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run tests once with Vitest
- `npm run test:watch` — run Vitest in watch mode

## Project Structure

```text
src/
  components/
    HeroSection.tsx
    SkillsSection.tsx
    EducationSection.tsx
    ProjectsSection.tsx
    InterestsSection.tsx
    ContactSection.tsx
    ui/
  contexts/
    LanguageContext.tsx
  pages/
    Index.tsx
    NotFound.tsx
```

## Customization

- Main landing page composition: `src/pages/Index.tsx`
- Language content and translation keys: `src/contexts/LanguageContext.tsx`
- Global styles: `src/index.css` and `src/App.css`
- Public assets: `public/images/`

## Build & Deploy

```bash
npm run build
```

The generated static files are in `dist/` and can be deployed to platforms like Vercel, Netlify, GitHub Pages, or any static hosting service.

## License

This project is currently unlicensed. Add a `LICENSE` file if you want to define usage terms.

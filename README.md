# Sai Charan — Portfolio

A single-page personal portfolio for **U Sai Charan**, Frontend Engineer.
Dark-only, bold & creative, built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion + react-type-animation
- **Icons:** lucide-react (UI) + simple-icons (brand logos)
- **Contact form:** EmailJS
- **Toasts:** react-hot-toast

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All site content lives in `src/data/portfolio.ts`. Edit it there — components
never hardcode content.

## Structure

```
src/
├── app/            layout, page, globals.css
├── data/           portfolio.ts (all content)
├── lib/            utils (cn), skillIcons (simple-icons registry)
├── hooks/          useActiveSection, useScrollDirection, usePrefersReducedMotion
└── components/
    ├── layout/     Navbar, Footer
    ├── sections/   Hero, About, Skills, Projects, Experience, Contact
    ├── ui/         SectionHeader, ProjectCard, ProjectModal, TimelineItem, ...
    └── effects/    BackgroundBlobs
```

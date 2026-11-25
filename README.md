# Reading Goal Tracker

A lightweight reading-goal application built with React, TypeScript, Vite, and Tailwind CSS v4. Track pages read, monitor progress toward a target, and keep your current page count saved between visits.

## Features

- Track progress toward a reading target
- Increase the page count in 10-page increments
- Persist progress in browser local storage
- Detect when the reading goal is completed
- Accessible progress indicator and keyboard focus styles
- Component tests with Vitest and Testing Library

## Getting started

### Requirements

- Node.js (current LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |
| `npm test` | Run Vitest |

## Tailwind CSS

This project uses Tailwind CSS v4 with the official Vite plugin. The plugin is configured in `vite.config.ts`, and `src/index.css` imports Tailwind with `@import "tailwindcss";`.

## Project structure

```text
public/             Static assets (including close.svg alternative)
src/                React application source
  App.tsx           Application shell
  ReadingGoal.tsx   Reading goal component
  index.css         Tailwind import and global base styles
  main.tsx          React entry point
  useReadingProgress.ts
  ReadingGoal.test.tsx
EXERCISE-03-NOTES.md Exercise 03 written analysis and references
```

## Exercise 03

See [EXERCISE-03-NOTES.md](./EXERCISE-03-NOTES.md) for implementation notes, comparisons, SVG approaches, research references, and screenshot instructions. Add your own Tailwind Play screenshots and verify course-book-specific terminology/page references before submission.

## Reading progress storage

The current page count is stored in browser local storage under the `currentPage` key. It is specific to the browser and device being used.

## License

No license has been specified yet. Add a license before distributing or reusing this project publicly.

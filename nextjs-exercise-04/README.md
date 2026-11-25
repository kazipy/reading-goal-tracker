# Exercise 04 — React Server and Client Components

This is a separate Next.js practice app. The existing Vite Reading Goal Tracker at the repository root is intentionally unchanged.

## Run locally

Requirements: Node.js 20.9 or later and npm.

```bash
cd nextjs-exercise-04
npm install
npm run dev
```

Open http://localhost:3000.

To create the project from scratch as the assignment asks, the book's generator workflow is:

```bash
npx create-next-app@latest MynameNextApp
```

Replace `Myname` with your own first name or nickname. The folder in this repository is already scaffolded so you can inspect and run the result without creating a second project.

## What this implementation demonstrates

- `src/app/layout.tsx`: required root layout and page wrapper.
- `src/app/page.tsx`: root route, displayed at `/` (http://localhost:3000).
- `src/components/Header.tsx`: Server Component by default. It calculates the number of reading topics and logs the result in the terminal.
- `src/components/ColorModeToggle.tsx`: Client Component. The `"use client"` directive is needed for `useState` and `onClick`.
- `src/components/icons/ColorModeIcon.tsx`: Server Component passed as children into the Client Component from the Server Component Header.
- `tsconfig.json`: configures the `@/*` import alias to point to `src/*`.

## Verify the server calculation

Run `npm run dev`, load the page, and inspect the terminal. You should see a message similar to:

```
[Server Component] Header total: 3
```

The browser console is not the expected location for this log.

## Assignment screenshots to capture yourself

1. React Developer Tools Components tab showing RootLayout and Home and their badges.
2. Header.tsx and the terminal output showing the total calculation.
3. ColorModeToggle.tsx showing the `"use client"` directive.
4. The running page before and after clicking the color-mode button.
5. ColorModeIcon.tsx and Header.tsx passing the icon as children to ColorModeToggle.
6. The running page showing the icon inside the interactive button.

Do not fabricate screenshots or badge descriptions. React/Next.js and React DevTools versions can change the exact labels.

## Notes

- The code is an educational example for Exercise 04, not a production theme switcher: the button demonstrates local interactive state but does not change the whole page theme.
- The exercise's Task 2 asks you to decompose the existing ReadingGoal component into at least two client components. Keep that implementation in the main Vite app only if/when you decide to apply that task there; this Next.js folder focuses on the Next.js tasks and keeps the original app intact.
- Review and rewrite written explanations in your own words, cite the course book as the primary source, and disclose AI assistance as required by the assignment.

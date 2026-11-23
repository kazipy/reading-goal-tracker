# Reading Goal Tracker

A lightweight reading-goal application built with React, TypeScript, and Vite. Track pages read, monitor progress toward a target, and keep your current page count saved between visits.

## Features

- Set and view a reading target
- Track progress toward the goal
- Increase the page count in 10-page increments
- Persist reading progress in browser local storage
- Automatically detect when the goal is completed
- Component tests with Vitest and Testing Library

## Tech stack

- React 19
- TypeScript
- Vite
- Vitest, jsdom, and React Testing Library
- Oxlint

## Getting started

### Requirements

- Node.js (a current LTS release is recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |
| `npm test` | Run tests with Vitest |

## Project structure

```text
public/       Static public assets
src/          Application source code, components, hooks, and tests
index.html    Vite application entry HTML
package.json  Project metadata, dependencies, and scripts
vite.config.* Vite and test configuration
```

## Reading progress storage

The application stores the current page count in the browser's local storage under the `currentPage` key. Progress is therefore specific to the browser and device being used.

## Development

1. Create a feature branch for your work.
2. Make and test your changes.
3. Run `npm run lint`, `npm test`, and `npm run build`.
4. Open a pull request with a clear description of the change.

## License

No license has been specified yet. Add a license before distributing or reusing this project publicly.

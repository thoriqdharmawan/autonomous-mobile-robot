# MAP VIEW FOR A FLEET OF ROBOTS IN A SCHOOL CAMPUS

This is a frontend application built with Next.js, leveraging several libraries for UI components, map functionalities, and styling.

## Project Setup

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Install the dependencies:

   ```bash
   npm install
   ```

### Scripts

- **Development**

  Start the development server:

  ```bash
  npm run dev
  ```

## Dependencies

### Main Dependencies

- **[@radix-ui/react-dialog](https://www.radix-ui.com/docs/primitives/components/dialog)**: A set of accessible UI primitives for building robust design systems and web apps.
- **[@radix-ui/react-slider](https://www.radix-ui.com/docs/primitives/components/slider)**: Slider component for Radix UI.
- **[@radix-ui/react-slot](https://www.radix-ui.com/docs/primitives/components/slot)**: Slot component for Radix UI.
- **[@radix-ui/react-switch](https://www.radix-ui.com/docs/primitives/components/switch)**: Switch component for Radix UI.
- **[class-variance-authority](https://github.com/joe-bell/class-variance-authority)**: Utility for managing class name variants.
- **[clsx](https://github.com/lukeed/clsx)**: Utility for constructing `className` strings conditionally.
- **[leaflet](https://leafletjs.com/)**: An open-source JavaScript library for mobile-friendly interactive maps.
- **[lucide-react](https://github.com/lucide-icons/lucide)**: React components for Lucide icons.
- **[next](https://nextjs.org/)**: The React framework for production.
- **[next-images](https://github.com/twopluszero/next-images)**: A plugin to handle images in Next.js.
- **[react](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[react-dom](https://reactjs.org/docs/react-dom.html)**: Serves as the entry point to the DOM and server renderers for React.
- **[react-leaflet](https://react-leaflet.js.org/)**: React components for Leaflet maps.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Utility to merge Tailwind CSS classes efficiently.
- **[tailwindcss-animate](https://github.com/benface/tailwindcss-animate)**: Tailwind CSS plugin to add animations.
- **[vaul](https://github.com/emotion-js/emotion)**: A performant and flexible CSS-in-JS library.

### Dev Dependencies

- **[@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)**: A Prettier plugin to sort imports.
- **[@types/leaflet](https://www.npmjs.com/package/@types/leaflet)**: TypeScript definitions for Leaflet.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript definitions for Node.js.
- **[@types/react](https://www.npmjs.com/package/@types/react)**: TypeScript definitions for React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: TypeScript definitions for React DOM.
- **[eslint](https://eslint.org/)**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **[eslint-config-next](https://nextjs.org/docs/basic-features/eslint)**: ESLint configuration for Next.js.
- **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)**: Disables ESLint rules that might conflict with Prettier.
- **[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)**: Runs Prettier as an ESLint rule.
- **[postcss](https://postcss.org/)**: A tool for transforming CSS with JavaScript plugins.
- **[prettier](https://prettier.io/)**: An opinionated code formatter.
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**: Prettier plugin for Tailwind CSS class sorting.
- **[tailwindcss](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[typescript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.

## Folder Structure

- `.next/`: Contains the build output of the Next.js application.
- `.vscode/`: VSCode settings and extensions for the project.
- `app/`: Main application files and entry points.
- `components/`: Reusable React components.
- `constant/`: Constant values and configurations.
  - `map.ts`: Map-related constants.
- `interface/`: TypeScript interfaces.
  - `map.ts`: Map-related interfaces.
  - `utils.ts`: Utility interfaces.
- `lib/`: Utility functions and libraries.
  - `utils.ts`: Utility functions.
- `providers/`: Context providers and higher-order components.
  - `MapProvider.tsx`: Provider component for map context.
- `public/`: Static files like images and fonts.
- `.eslintrc.json`: ESLint configuration file.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `.prettierrc`: Prettier configuration file.
- `components.json`: Configuration for component documentation.
- `next-env.d.ts`: Next.js environment types.
- `next.config.mjs`: Next.js configuration file.
- `package-lock.json`: Automatically generated file that describes the exact tree that was generated by npm.
- `package.json`: Project metadata and dependencies.
- `postcss.config.mjs`: PostCSS configuration file.
- `README.md`: Project documentation file (this file).

### Running the Development Server

```bash
npm run dev
```

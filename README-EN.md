# Next.js TypeScript Project Template

[**中文**](./README.md)  
This is a template project based on [Next.js](https://nextjs.org/) and TypeScript, integrating internationalization (i18n), code formatting, lint checking, and using Tailwind CSS and Chakra UI as UI frameworks.

## Features

- **Next.js App Router**: Using Next.js 13+ App Router structure.
- **TypeScript**: Full TypeScript support.
- **Internationalization (i18n)**: Support for internationalization in both server-side and client-side components.
- **Code Formatting**: Using Prettier for code formatting, compatible with ESLint syntax checking.
- **Linting & Compile**: Using ESLint for code quality checking, and tsconfig for syntax checking rules.
- **UI Frameworks**: Integration of Tailwind CSS and Chakra UI.
- **VSCode Integration**: Optimized VSCode development experience, automatically fixing import order during formatting (simple-import-sort), i18n Ally plugin for convenient translation display.

## Quick Start

1. Clone the repository:
   `git clone https://github.com/HUAHUAI23/laf-homepage.git`

2. Install dependencies:

   ```sh
   cd laf-homepage
   pnpm install
   ```

3. Run the development server:
   `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Internationalization (i18n)

This project uses i18next for internationalization. It supports translation functionality in both server-side and client-side components.
Refer to next-app-dir-i18next-example-ts for configuration.

Usage example:

```typescript
// Server-side component
import { useTranslation } from '@/app/i18n';
export default async function ServerComponent({ params: { lng } }) {
  const { t } = await useTranslation(lng,'common');
  return <h1>{t('title')}</h1>;
}

// Client-side component
'use client';
import { useTranslation } from '@/app/i18n/client';
export default function ClientComponent({ lng }) {
  const { t } = await useTranslation(lng,'common');
  return <button>{t('button.label')}</button>;
}
```

## Code Formatting and Linting

- Using Prettier for code formatting.
- Using ESLint for code quality checking.
- Configuration files: .prettierrc and .eslintrc.json.

## Run lint checks

`pnpm lint`
`pnpm lint:next`
`pnpm lint:fix`

## VSCode Integration

- Auto-formatting: Automatically format code on save.
- Import sorting: Use simple-import-sort plugin to automatically sort import statements.
- i18n hints: Use i18n Ally plugin to provide translation hints.

## Recommended VSCode plugins

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- i18n Ally

## UI Frameworks

- Tailwind CSS: For quickly building custom designs.
- Chakra UI: Providing accessible React components.

## Script Commands

- `pnpm dev`: Run development server
- `pnpm build`: Build production version
- `pnpm lint:next`: Run next lint check
- `pnpm lint`: Run eslint lint check
- `pnpm lint:fix`: Run eslint lint check and fix
- `docker build  -t my-nextjs-app .`: Build docker image
- `...` See scripts configuration in package.json for more details

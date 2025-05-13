# Project Information

## Project Name: amosglenn-portfolio

Version: 0.1.0

## Dependencies

```json
{
  "@radix-ui/react-accordion": "^1.2.2",
  "@radix-ui/react-alert-dialog": "^1.1.4",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-icons": "^1.3.2",
  "@radix-ui/react-label": "^2.1.1",
  "@radix-ui/react-navigation-menu": "^1.2.5",
  "@radix-ui/react-separator": "^1.1.2",
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-tabs": "^1.1.2",
  "@vercel/analytics": "^1.5.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^12.4.4",
  "lucide-react": "^0.469.0",
  "motion": "^12.4.4",
  "next": "15.1.3",
  "next-themes": "^0.4.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwind-merge": "^2.6.0",
  "tailwindcss-animate": "^1.0.7"
}
```

## Dev Dependencies

```json
{
  "@commitlint/cli": "^19.7.1",
  "@commitlint/config-conventional": "^19.7.1",
  "@eslint/eslintrc": "^3",
  "@tailwindcss/postcss": "^4.0.9",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.1.0",
  "@testing-library/user-event": "^14.5.2",
  "@types/jest": "^29.5.14",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@typescript-eslint/eslint-plugin": "^8.19.0",
  "@typescript-eslint/parser": "^8.19.0",
  "eslint": "^9.20.1",
  "eslint-config-next": "^15.1.3",
  "eslint-plugin-tailwindcss": "^3.18.0",
  "husky": "^9.1.7",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "lint-staged": "^15.4.3",
  "postcss": "^8",
  "prettier": "^3.5.1",
  "tailwindcss": "^4.0.9",
  "typescript": "^5"
}
```

## Environment Variables

No `.env` file found.

## Project Structure

```sh
.
├── _scripts
│   └── generate-project-info.js
├── app
│   ├── [...not_found]
│   ├── components
│   ├── layout.tsx
│   └── page.tsx
├── commitlint.config.js
├── components
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui
├── components.json
├── constants
│   └── site-config.ts
├── eslint.config.mjs
├── jest.config.js
├── jest.setup.js
├── lib
│   ├── fonts.ts
│   └── utils.ts
├── next.config.ts
├── node_modules
│   ├── @commitlint
│   ├── @eslint
│   ├── @eslint-community
│   ├── @next
│   ├── @radix-ui
│   ├── @rushstack
│   ├── @tailwindcss
│   ├── @testing-library
│   ├── @types
│   ├── @typescript-eslint
│   ├── @vercel
│   ├── class-variance-authority -> .pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority
│   ├── clsx -> .pnpm/clsx@2.1.1/node_modules/clsx
│   ├── eslint -> .pnpm/eslint@9.20.1_jiti@2.4.2/node_modules/eslint
│   ├── eslint-config-next -> .pnpm/eslint-config-next@15.1.7_eslint@9.20.1_jiti@2.4.2__typescript@5.7.3/node_modules/eslint-config-next
│   ├── eslint-import-resolver-node -> .pnpm/eslint-import-resolver-node@0.3.9/node_modules/eslint-import-resolver-node
│   ├── eslint-import-resolver-typescript -> .pnpm/eslint-import-resolver-typescript@3.8.1_eslint-plugin-import@2.31.0_eslint@9.20.1_jiti@2.4.2_/node_modules/eslint-import-resolver-typescript
│   ├── eslint-module-utils -> .pnpm/eslint-module-utils@2.12.0_@typescript-eslint+parser@8.24.1_eslint@9.20.1_jiti@2.4.2__typescr_ymlxlsiqib5ohsgman4fx2ymvu/node_modules/eslint-module-utils
│   ├── eslint-plugin-import -> .pnpm/eslint-plugin-import@2.31.0_@typescript-eslint+parser@8.24.1_eslint@9.20.1_jiti@2.4.2__typesc_blx6hn5enz5fukuskrf4bwo3xq/node_modules/eslint-plugin-import
│   ├── eslint-plugin-jsx-a11y -> .pnpm/eslint-plugin-jsx-a11y@6.10.2_eslint@9.20.1_jiti@2.4.2_/node_modules/eslint-plugin-jsx-a11y
│   ├── eslint-plugin-react -> .pnpm/eslint-plugin-react@7.37.4_eslint@9.20.1_jiti@2.4.2_/node_modules/eslint-plugin-react
│   ├── eslint-plugin-react-hooks -> .pnpm/eslint-plugin-react-hooks@5.1.0_eslint@9.20.1_jiti@2.4.2_/node_modules/eslint-plugin-react-hooks
│   ├── eslint-plugin-tailwindcss -> .pnpm/eslint-plugin-tailwindcss@3.18.0_tailwindcss@4.0.9/node_modules/eslint-plugin-tailwindcss
│   ├── eslint-scope -> .pnpm/eslint-scope@8.2.0/node_modules/eslint-scope
│   ├── eslint-visitor-keys -> .pnpm/eslint-visitor-keys@4.2.0/node_modules/eslint-visitor-keys
│   ├── framer-motion -> .pnpm/framer-motion@12.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion
│   ├── husky -> .pnpm/husky@9.1.7/node_modules/husky
│   ├── jest -> .pnpm/jest@29.7.0_@types+node@20.17.19/node_modules/jest
│   ├── jest-environment-jsdom -> .pnpm/jest-environment-jsdom@29.7.0/node_modules/jest-environment-jsdom
│   ├── lint-staged -> .pnpm/lint-staged@15.4.3/node_modules/lint-staged
│   ├── lucide-react -> .pnpm/lucide-react@0.469.0_react@19.0.0/node_modules/lucide-react
│   ├── motion -> .pnpm/motion@12.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/motion
│   ├── next -> .pnpm/next@15.1.3_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next
│   ├── next-themes -> .pnpm/next-themes@0.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next-themes
│   ├── postcss -> .pnpm/postcss@8.5.3/node_modules/postcss
│   ├── prettier -> .pnpm/prettier@3.5.1/node_modules/prettier
│   ├── react -> .pnpm/react@19.0.0/node_modules/react
│   ├── react-dom -> .pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom
│   ├── tailwind-merge -> .pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge
│   ├── tailwindcss -> .pnpm/tailwindcss@4.0.9/node_modules/tailwindcss
│   ├── tailwindcss-animate -> .pnpm/tailwindcss-animate@1.0.7_tailwindcss@4.0.9/node_modules/tailwindcss-animate
│   └── typescript -> .pnpm/typescript@5.7.3/node_modules/typescript
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── project-info.md
├── public
│   ├── cursor
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── logo
│   ├── next.svg
│   ├── open-graph
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── styles
│   └── globals.css
├── tsconfig.json
└── tsconfig.tsbuildinfo

57 directories, 29 files
```

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Tailwind Configuration

No `tailwind.config.ts` file found.

## Next.js Configuration

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
  },
}

module.exports = nextConfig
```

## ESLint Configuration

```js
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
```

## Available Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write .",
  "test": "jest",
  "prepare": "husky install",
  "lint:fix": "eslint --fix . && prettier --write .",
  "report": "node _scripts/generate-project-info.js"
}
```

## Git Information

```sh
origin	https://github.com/mossglenn/v0-jubilant-octo-potato.git (fetch)
origin	https://github.com/mossglenn/v0-jubilant-octo-potato.git (push)
```

## Prisma Schema

No Prisma schema found.

## Custom Components (shadcn/ui or others)

```sh
/Users/amosglenn/Dev/v0-jubilant-octo-potato/app/components/component-grid.tsx
/Users/amosglenn/Dev/v0-jubilant-octo-potato/app/components/page.tsx
```

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const packageJson = require('../package.json')

// Utility function to execute shell commands
const runCommand = (command) => {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim()
  } catch (error) {
    console.error(`Error executing command: ${command}`)
    return ''
  }
}

// Paths
const OUTPUT_FILE = path.resolve(__dirname, '../project-info.md')
const ROOT_DIR = path.resolve(__dirname, '../')
const ENV_FILE = path.join(ROOT_DIR, '.env')
const TSCONFIG_FILE = path.join(ROOT_DIR, 'tsconfig.json')
const TAILWIND_CONFIG = path.join(ROOT_DIR, 'tailwind.config.ts')
const NEXT_CONFIG = path.join(ROOT_DIR, 'next.config.ts')
const ESLINT_CONFIG = path.join(ROOT_DIR, 'eslint.config.mjs')
const PRISMA_SCHEMA = path.join(ROOT_DIR, 'prisma/schema.prisma')
const COMPONENTS_DIR = path.join(ROOT_DIR, 'app/components')

// Helper to detect shadcn/ui or custom components
const getCustomComponents = () => {
  if (!fs.existsSync(COMPONENTS_DIR))
    return 'No components directory found.\n\n'

  try {
    const components = runCommand(
      `find ${COMPONENTS_DIR} -type f -name "*.tsx"`
    )
    return components
      ? `\`\`\`sh\n${components}\n\`\`\`\n\n`
      : 'No custom components found.\n\n'
  } catch (error) {
    return 'Error retrieving components list.\n\n'
  }
}

// Main sections
const sections = {
  projectInfo: `# Project Information\n\n## Project Name: ${packageJson.name}\nVersion: ${packageJson.version}\n\n`,
  dependencies: `## Dependencies\n\n\`\`\`json\n${JSON.stringify(packageJson.dependencies, null, 2)}\n\`\`\`\n\n`,
  devDependencies: `## Dev Dependencies\n\n\`\`\`json\n${JSON.stringify(packageJson.devDependencies, null, 2)}\n\`\`\`\n\n`,
  envVariables: fs.existsSync(ENV_FILE)
    ? `## Environment Variables\n\n\`\`\`env\n${fs.readFileSync(ENV_FILE, 'utf-8')}\n\`\`\`\n\n`
    : '## Environment Variables\n\nNo `.env` file found.\n\n',
  projectStructure: `## Project Structure\n\n\`\`\`sh\n${runCommand('tree -L 2')}\n\`\`\`\n\n`,
  tsConfig: fs.existsSync(TSCONFIG_FILE)
    ? `## TypeScript Configuration\n\n\`\`\`json\n${fs.readFileSync(TSCONFIG_FILE, 'utf-8')}\n\`\`\`\n\n`
    : '## TypeScript Configuration\n\nNo `tsconfig.json` file found.\n\n',
  tailwindConfig: fs.existsSync(TAILWIND_CONFIG)
    ? `## Tailwind Configuration\n\n\`\`\`ts\n${fs.readFileSync(TAILWIND_CONFIG, 'utf-8')}\n\`\`\`\n\n`
    : '## Tailwind Configuration\n\nNo `tailwind.config.ts` file found.\n\n',
  nextConfig: fs.existsSync(NEXT_CONFIG)
    ? `## Next.js Configuration\n\n\`\`\`js\n${fs.readFileSync(NEXT_CONFIG, 'utf-8')}\n\`\`\`\n\n`
    : '## Next.js Configuration\n\nNo `next.config.js` file found.\n\n',
  eslintConfig: fs.existsSync(ESLINT_CONFIG)
    ? `## ESLint Configuration\n\n\`\`\`js\n${fs.readFileSync(ESLINT_CONFIG, 'utf-8')}\n\`\`\`\n\n`
    : '## ESLint Configuration\n\nNo `.eslintrc.js` file found.\n\n',
  scripts: `## Available Scripts\n\n\`\`\`json\n${JSON.stringify(packageJson.scripts, null, 2)}\n\`\`\`\n\n`,
  gitInfo: `## Git Information\n\n\`\`\`sh\n${runCommand('git remote -v')}\n\`\`\`\n\n`,
  prismaSchema: fs.existsSync(PRISMA_SCHEMA)
    ? `## Prisma Schema\n\n\`\`\`prisma\n${fs.readFileSync(PRISMA_SCHEMA, 'utf-8')}\n\`\`\`\n\n`
    : '## Prisma Schema\n\nNo Prisma schema found.\n\n',
  customComponents: `## Custom Components (shadcn/ui or others)\n\n${getCustomComponents()}`,
}

// Write to project-info.md
const outputContent = Object.values(sections).join('')
fs.writeFileSync(OUTPUT_FILE, outputContent)

console.log(`✅ Project information written to ${OUTPUT_FILE}`)

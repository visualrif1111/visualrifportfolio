import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
    // Figma exports and unused shadcn kit — not part of the app; removal is scheduled for the performance phase.
    'src/imports/**',
    'src/app/components/ui/**',
    'src/app/components/figma/**',
  ]),
]);

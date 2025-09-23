/**
 * @type {import("eslint").Linter.Config[]}
 */

import js from '@eslint/js';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';
import { qwikEslint9Plugin } from 'eslint-plugin-qwik';
import astroParser from 'astro-eslint-parser';

const ignores = [
  '**/*.log',
  '**/.DS_Store',
  '**/*.',
  '.vscode/settings.json',
  '**/.history',
  '**/.yarn',
  '**/bazel-*',
  '**/bazel-bin',
  '**/bazel-out',
  '**/bazel-qwik',
  '**/bazel-testlogs',
  '**/dist',
  '**/dist-dev',
  '**/lib',
  '**/lib-types',
  '**/etc',
  '**/external',
  '**/node_modules',
  '**/temp',
  '**/tsc-out',
  '**/tsdoc-metadata.json',
  '**/target',
  '**/output',
  '**/rollup.config.js',
  '**/build',
  '**/.cache',
  '**/.vscode',
  '**/.rollup.cache',
  '**/tsconfig.tsbuildinfo',
  '**/vite.config.ts',
  '**/*.spec.tsx',
  '**/*.spec.ts',
  '**/.netlify',
  '**/pnpm-lock.yaml',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/server',
  'eslint.config.mjs',
  '.prettierrc.mjs',
];

const astroConfig = {
  files: ['**/*.astro'],
  languageOptions: {
    parser: astroParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro'],
      sourceType: 'module',
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      console: 'readonly',
      process: 'readonly',
      global: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      module: 'readonly',
      require: 'readonly',
      exports: 'readonly',
      Astro: 'readonly',
    },
  },
  plugins: {
    astro: astro,
  },
  rules: {
    ...astro.configs.recommended.rules,
    'astro/no-conflict-set-directives': 'error',
    'astro/no-unused-define-vars-in-style': 'error',
  },
};

const astroTsConfig = {
  files: ['**/*.astro/*.ts', '*.astro/*.ts'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      sourceType: 'module',
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      navigator: 'readonly',
      console: 'readonly',
    },
  },
  plugins: {
    astro: astro,
  },
  rules: {
    'astro/no-conflict-set-directives': 'error',
    'astro/no-unused-define-vars-in-style': 'error',
  },
};

export const config = [
  {
    ignores,
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...qwikEslint9Plugin.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.serviceworker,
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  astroConfig,
  astroTsConfig,
  {
    rules: {
      indent: 'off',
      '@typescript-eslint/indent': 'off',
    },
  },
];

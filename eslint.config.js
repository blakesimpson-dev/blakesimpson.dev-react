import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig} from 'eslint/config';

import {GOOGLE_TS_RULES} from './eslint.gts.js';

const TS_FILES = ['**/*.{ts,tsx}'];

export default defineConfig([
  {ignores: ['build/']},
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {version: 'detect'},
    },
    rules: {
      // React 19 no longer checks propTypes
      'react/prop-types': 'off',
      // r3f mutates three.js objects by design
      'react-hooks/immutability': 'off',
      // r3f props on three.js JSX elements
      'react/no-unknown-property': [
        'error',
        {
          ignore: [
            'args',
            'attach',
            'geometry',
            'map',
            'material',
            'page',
            'position',
            'raycast',
          ],
        },
      ],
    },
  },
  {
    files: TS_FILES,
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      react.configs.flat['jsx-runtime'],
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {'check-file': checkFile},
    rules: {
      ...GOOGLE_TS_RULES,
      'check-file/filename-naming-convention': [
        'error',
        {'src/**/*.{ts,tsx}': 'SNAKE_CASE'},
        {ignoreMiddleExtensions: true},
      ],
    },
  },
  {
    files: ['vite.config.ts'],
    rules: {
      // Vite reads the config from the default export
      'no-restricted-exports': 'off',
    },
  },
  {
    files: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
]);

import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig} from 'eslint/config';

import {GOOGLE_TS_PLUGINS, GOOGLE_TS_RULES} from './eslint.gts.js';

const TS_FILES = ['**/*.{ts,tsx}'];

// TODO(Blake): Stands in for eslint-plugin-check-file's
// filename-naming-convention, dropped because it depends on micromatch ->
// braces, which has an unpatched high-severity advisory
// (GHSA-vfj7-8cjw-p6xm). Switch back once braces ships a fix.
const SNAKE_CASE = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/;
const fileNaming = {
  rules: {
    'snake-case': {
      meta: {type: 'suggestion'},
      create(context) {
        return {
          Program(node) {
            // Ignores middle extensions: `foo_bar.test.ts` checks `foo_bar`
            const name = context.filename.split(/[\\/]/).pop().split('.')[0];
            if (!SNAKE_CASE.test(name)) {
              context.report({
                node,
                message: `Filename '${name}' must be snake_case.`,
              });
            }
          },
        };
      },
    },
  },
};

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
    plugins: GOOGLE_TS_PLUGINS,
    rules: GOOGLE_TS_RULES,
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {'file-naming': fileNaming},
    rules: {
      'file-naming/snake-case': 'error',
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

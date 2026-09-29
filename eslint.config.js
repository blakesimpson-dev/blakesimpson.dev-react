import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const TS_FILES = ['**/*.{ts,tsx}'];

// Google TypeScript Style Guide rules that ESLint can enforce:
// https://google.github.io/styleguide/tsguide.html
// Formatting (semicolons, quotes, spacing) is left to Prettier.
const GOOGLE_TS_RULES = {
  // Identifiers: UpperCamelCase types, lowerCamelCase values, CONSTANT_CASE
  // allowed only for module-level constants. React components are functions
  // in UpperCamelCase.
  '@typescript-eslint/naming-convention': [
    'error',
    {selector: 'default', format: ['camelCase']},
    {selector: 'import', format: ['camelCase', 'PascalCase']},
    {selector: 'function', format: ['camelCase', 'PascalCase']},
    {
      selector: 'variable',
      modifiers: ['const', 'global'],
      format: ['camelCase', 'UPPER_CASE'],
    },
    {selector: 'variable', modifiers: ['destructured'], format: null},
    {selector: 'typeLike', format: ['PascalCase']},
    {selector: 'enumMember', format: ['UPPER_CASE']},
    // Data keys (page names, glTF node and clip names) and library options
    {selector: 'objectLiteralProperty', format: null},
    {selector: 'typeProperty', format: null},
  ],
  // "Do not use default exports"
  'no-restricted-exports': [
    'error',
    {restrictDefaultExports: {direct: true, named: true, defaultFrom: true}},
  ],
  // "Prefer function declarations over arrow functions" for named functions
  'func-style': ['error', 'declaration'],
  // Interfaces for object types; T[] for simple types, Array<T> otherwise
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
  // "import type" for type-only imports
  '@typescript-eslint/consistent-type-imports': 'error',
  // "Never use the public modifier" (except parameter properties)
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {accessibility: 'no-public'},
  ],
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-namespace': 'error',
  // Braces for every control statement; === except "== null"
  curly: ['error', 'all'],
  eqeqeq: ['error', 'smart'],
  'no-var': 'error',
  'prefer-const': 'error',
  // No #private fields; no const enum
  'no-restricted-syntax': [
    'error',
    {
      selector: 'PrivateIdentifier',
      message: 'Use TypeScript visibility (private) instead of #private.',
    },
    {
      selector: 'TSEnumDeclaration[const=true]',
      message: 'Use a plain enum, not const enum.',
    },
  ],
};

export default tseslint.config(
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
      // Mutating three.js objects (actions, textures, the video element) is
      // idiomatic in react-three-fiber; this React Compiler rule flags all of it
      'react-hooks/immutability': 'off',
      // react-three-fiber props on three.js JSX elements (page is set on
      // selectable meshes and read back in Scene's onClick)
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
      // "File names must be snake_case" (the .d in .d.ts is ignored)
      'check-file/filename-naming-convention': [
        'error',
        {'src/**/*.{ts,tsx}': 'SNAKE_CASE'},
        {ignoreMiddleExtensions: true},
      ],
    },
  },
  {
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
);

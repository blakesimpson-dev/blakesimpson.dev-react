import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const TS_FILES = ['**/*.{ts,tsx}'];

// Google TypeScript Style Guide rules that ESLint can enforce; formatting is Prettier's
const GOOGLE_TS_RULES = {
  '@typescript-eslint/naming-convention': [
    'error',
    {selector: 'default', format: ['camelCase']},
    {selector: 'import', format: ['camelCase', 'PascalCase']},
    {selector: 'function', format: ['camelCase', 'PascalCase']},
    // lazy()/memo() components
    {
      selector: 'variable',
      modifiers: ['const', 'global'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {selector: 'variable', modifiers: ['destructured'], format: null},
    {selector: 'typeLike', format: ['PascalCase']},
    {selector: 'enumMember', format: ['UPPER_CASE']},
    // Data keys: page names, glTF node and clip names
    {selector: 'objectLiteralProperty', format: null},
    {selector: 'typeProperty', format: null},
  ],
  'no-restricted-exports': [
    'error',
    {restrictDefaultExports: {direct: true, named: true, defaultFrom: true}},
  ],
  'func-style': ['error', 'declaration'],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {accessibility: 'no-public'},
  ],
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-namespace': 'error',
  curly: ['error', 'all'],
  eqeqeq: ['error', 'smart'],
  'no-var': 'error',
  'prefer-const': 'error',
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
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
);

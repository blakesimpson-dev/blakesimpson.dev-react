// GTS, see: https://google.github.io/styleguide/tsguide.html
// Copied in from eslint-gts by its sync.sh: edit it there, never here.
export const GOOGLE_TS_RULES = {
  '@typescript-eslint/naming-convention': [
    'error',
    {selector: 'default', format: ['camelCase']},
    {selector: 'import', format: ['camelCase', 'PascalCase']},
    {selector: 'function', format: ['camelCase', 'PascalCase']},
    {
      selector: 'variable',
      modifiers: ['const', 'global'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {selector: 'variable', modifiers: ['destructured'], format: null},
    {selector: 'typeLike', format: ['PascalCase']},
    {selector: 'enumMember', format: ['UPPER_CASE']},
    // Data keys, such as JSON fields, HTML attributes and HTTP headers
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

// Copied in from eslint-gts by its sync.sh: edit it there, never here.

import jsdoc from 'eslint-plugin-jsdoc';

/** Every plugin GOOGLE_TS_RULES uses, to spread into a config's `plugins`. */
export const GOOGLE_TS_PLUGINS = {jsdoc};

/**
 * The Google TypeScript Style Guide rules ESLint can check, for TypeScript
 * files: https://google.github.io/styleguide/tsguide.html. Formatting is
 * Prettier's. Needs GOOGLE_TS_PLUGINS and typescript-eslint's
 * `strictTypeChecked` and `stylisticTypeChecked`.
 */
export const GOOGLE_TS_RULES = {
  // Naming
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

  // Imports and exports
  'no-restricted-exports': [
    'error',
    {restrictDefaultExports: {direct: true, named: true, defaultFrom: true}},
  ],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {fixMixedExportsWithInlineTypeSpecifier: true},
  ],
  '@typescript-eslint/no-namespace': 'error',

  // Language features
  'one-var': ['error', 'never'],
  'no-var': 'error',
  'prefer-const': 'error',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {functions: false, typedefs: false},
  ],
  'no-object-constructor': 'error',
  'guard-for-in': 'error',
  'func-style': ['error', 'declaration'],
  'prefer-arrow-callback': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'no-multi-str': 'error',
  'no-implicit-coercion': ['error', {boolean: false}],
  curly: ['error', 'all'],
  eqeqeq: ['error', 'smart'],
  'default-case': 'error',
  'default-case-last': 'error',
  'no-eval': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-extend-native': 'error',
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
    {
      selector:
        'NewExpression[callee.name="Array"], CallExpression[callee.name="Array"]',
      message:
        'Use an array literal or Array.from, never the Array constructor.',
    },
    {
      selector: 'ExportNamedDeclaration > VariableDeclaration[kind="let"]',
      message: 'Export a const, or a function that reads the value.',
    },
    {
      selector:
        'CallExpression[callee.name="parseFloat"], CallExpression[callee.property.name="parseFloat"]',
      message: 'Parse numbers with Number(), and check the result for NaN.',
    },
    {
      selector:
        'CallExpression[callee.name="parseInt"]:matches([arguments.length=1], [arguments.1.value=10])',
      message:
        'Parse base 10 numbers with Number(), and check the result for NaN.',
    },
  ],

  // Classes
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {accessibility: 'no-public'},
  ],
  '@typescript-eslint/prefer-readonly': 'error',

  // Types
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {assertionStyle: 'as', objectLiteralTypeAssertions: 'never'},
  ],
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {'ts-expect-error': true, 'ts-ignore': true, 'ts-nocheck': true},
  ],

  // Comments: JSDoc on declarations, `//` everywhere else
  'multiline-comment-style': ['error', 'separate-lines'],
  'jsdoc/convert-to-jsdoc-comments': [
    'error',
    {
      lineOrBlockStyle: 'both',
      contexts: [
        'FunctionDeclaration',
        'TSDeclareFunction',
        'ClassDeclaration',
        'MethodDefinition',
        'PropertyDefinition',
        'TSInterfaceDeclaration',
        'TSPropertySignature',
        'TSTypeAliasDeclaration',
        'TSEnumDeclaration',
        'TSModuleDeclaration',
        'Program > VariableDeclaration',
        'ExportNamedDeclaration[declaration.type="VariableDeclaration"]',
      ],
    },
  ],
  'jsdoc/no-types': 'error',
};

import js from '@eslint/js'
import prettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import globals from 'globals'

export default [
  { ignores: ['build/'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React 19 no longer checks propTypes
      'react/prop-types': 'off',
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
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
]

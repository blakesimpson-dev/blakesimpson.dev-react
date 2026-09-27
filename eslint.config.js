import prettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import neostandard from 'neostandard'

export default [
  // Styleguide: neostandard for code rules; Prettier owns formatting (noStyle)
  ...neostandard({ noStyle: true, ignores: ['build/'] }),
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
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
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
]

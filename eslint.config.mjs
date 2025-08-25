// eslint.config.mjs
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactNative from 'eslint-plugin-react-native'

export default [
  // Ignora pastas comuns
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'android',
      'ios',
      '.expo',
      '*.min.js',
    ],
  },

  // JS/JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parser: null,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        __DEV__: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      import: importPlugin,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/react-in-jsx-scope': 'off',

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // React Native
      'react-native/no-unused-styles': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-single-element-style-arrays': 'warn',

      // Imports
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',

      // Prettier
      'prettier/prettier': ['warn'],
    },
  },

  // TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        // se der erro de parsing ou lentidão, remova a linha "project"
        project: ['./tsconfig.json'],
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        ecmaFeatures: { jsx: true },
      },
      globals: { __DEV__: 'readonly' },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        // Se usar "paths" no tsconfig.json:
        // typescript: { project: './tsconfig.json' }
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      import: importPlugin,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // React Native
      'react-native/no-unused-styles': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-single-element-style-arrays': 'warn',

      // TS
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      // Imports
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',

      // Prettier
      'prettier/prettier': ['warn'],
    },
  },

  // Testes
  {
    files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },

  // Configs e scripts Node
  {
    files: ['**/*.config.{js,ts}', 'metro.config.{js,ts}', 'babel.config.{js,ts}', 'scripts/**/*.{js,ts}'],
    languageOptions: { sourceType: 'script' },
    rules: {
      'import/no-commonjs': 'off',
      'no-undef': 'off',
    },
  },
]

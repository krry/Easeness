module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  env: {
    commonjs: true,
    amd: true,
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
  plugins: [
    'prettier',
    'simple-import-sort',
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    '@asbjorn/groq',
  ],
  rules: {
    '@asbjorn/groq/no-syntax-errors': 'error',
    '@asbjorn/groq/no-template-expressions': 'error',
    'prettier/prettier': ['error', {}, {usePrettierrc: true}],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'simple-import-sort/sort': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

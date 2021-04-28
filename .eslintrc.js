module.exports = {
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	plugins: [
		'react',
		'import',
		'prettier',
		'react-hooks',
		'@asbjorn/groq',
		'simple-import-sort',
	],
	rules: {
		indentation: 0,
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@asbjorn/groq/no-syntax-errors': 'error',
		'@asbjorn/groq/no-syntax-errors': 'error',
		'@asbjorn/groq/no-template-expressions': 'error',
		'linebreak-style': ['error', 'unix'],
		'jsx-quotes': ['error', 'prefer-single'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'simple-import-sort/sort': 'error',
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

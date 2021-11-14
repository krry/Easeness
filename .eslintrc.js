module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	plugins: [
		'react',
		'import',
		'jsx-a11y',
		'prettier',
		'react-hooks',
		'@asbjorn/groq',
		'simple-import-sort',
	],
	rules: {
		indentation: 0,
		'linebreak-style': ['error', 'unix'],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'simple-import-sort/sort': 'error',
		'@asbjorn/groq/no-syntax-errors': 'error',
		'@asbjorn/groq/no-syntax-errors': 'error',
		'@asbjorn/groq/no-template-expressions': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
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
};

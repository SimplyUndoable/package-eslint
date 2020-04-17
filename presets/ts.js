module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'./core'
	],
	globals: {
		object: 'readonly',
	},
	parserOptions: {
		warnOnUnsupportedTypeScriptVersion: true,
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-undef': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
	},
}

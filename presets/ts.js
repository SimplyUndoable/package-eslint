const template = require('./core')

const config = {
	files: ['**/*.ts'],
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	globals: {
		object: 'readonly'
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
		'@typescript-eslint/interface-name-prefix': 'off'
	}
}

template.overrides.push(config)

module.exports = template

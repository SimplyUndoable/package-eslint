module.exports = {
	extends: ['eslint:recommended'],
	env: {
		node: true,
		es6: true,
		es2017: true,
		es2020: true,
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		'key-spacing': ['error', { afterColon: true, mode: 'strict' }],
		'eol-last': ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'object-curly-spacing': [
			'error',
			'always',
			{ 'arraysInObjects': false, 'objectsInObjects': false },
		],
		'prefer-arrow-callback': 'error',
		'array-bracket-spacing': [
			'error',
			'never',
			{
				'objectsInArrays': false,
				'singleValue': false,
				'arraysInArrays': false,
			},
		],
		'computed-property-spacing': [
			'error',
			'never',
			{ 'enforceForClassMembers': true },
		],
		'space-infix-ops': 'error',
		'semi-spacing': 'error',
	},
}

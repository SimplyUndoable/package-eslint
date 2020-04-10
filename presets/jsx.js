const template = require('./core')

const config = {
	files: ['**/*.jsx'],
	plugins: ['react'],
	extends: ['plugin:react/recommended']
}

template.overrides.push(config)

module.exports = template


const template = require('./core')
const templateJsx = require('./jsx')
const templateTs = require('./ts')

const config = {
	files: ['**/*.ts?(x)'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	}
}

template.overrides.push(templateJsx.overrides[0], templateTs.overrides[0], config)

module.exports = template

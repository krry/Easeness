const isProd = process.env.NODE_ENV === 'production'

const prodPlugins = {
	tailwindcss: {},
	'postcss-advanced-variables': {},
	'postcss-preset-env': {
		autoprefixer: {
			flexbox: 'no-2009',
		},
		stage: 1,
		features: {
			'custom-properties': false,
		},
	},
}
const devPlugins = {
	tailwindcss: {},
	'postcss-advanced-variables': {},
	'postcss-preset-env': {
		stage: 1,
		features: {
			'custom-properties': false,
		},
	},
}

module.exports = {
	plugins: isProd ? prodPlugins : devPlugins,
}

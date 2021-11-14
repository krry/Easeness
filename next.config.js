const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
	},
	future: {
		webpack5: true,
	},
	images: {
		domains: ['cdn.sanity.io'],
	},
	exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			'/': { page: '/' },
		};
	},
});

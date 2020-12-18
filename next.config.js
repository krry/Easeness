module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    return {
      '/': {page: '/'},
    }
  },
}

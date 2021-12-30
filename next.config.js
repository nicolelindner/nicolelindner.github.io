module.exports = {
  assetPrefix: './',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/exhibitions': { page: '/exhibitions' },
      '/projects': { page: '/projects' }
    }
  },
  reactStrictMode: true,
}

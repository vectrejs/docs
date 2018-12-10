const configureWebpack = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
    },
  },
  
}

module.exports = { configureWebpack, baseUrl: '/docs/', outputDir: 'docs' }
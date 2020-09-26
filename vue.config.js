process.env.VUE_APP_VERSION = require('./package-lock.json').dependencies['@vectrejs/vectre'].version;

const configureWebpack = {
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@vectrejs/vectre$': '@vectrejs/vectre/dist/vectre.esm.js',
    },
  },
};

module.exports = { configureWebpack, publicPath: '/docs/', outputDir: 'docs', productionSourceMap: false };

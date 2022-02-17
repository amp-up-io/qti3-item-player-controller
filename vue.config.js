const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  runtimeCompiler: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/testrunner/'
    : '/',

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'webcomponents'
        }
      ])
    ]
  }
};

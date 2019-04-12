const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  components: 'src/*.vue',
  ribbon: {
    url: 'https://github.com/FEMessage/{{componentName}}'
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.styl(us)?$/,
          loaders: ['vue-style-loader', 'css-loader', 'stylus-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  showUsage: true,
  showCode: true,
  styleguideDir: 'docs'
}

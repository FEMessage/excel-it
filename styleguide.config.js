const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

const demos = glob.sync('docs/*.md')
const demoSections = demos.map(filePath => ({
  name: path.basename(filePath, '.md'),
  content: filePath
}))

module.exports = {
  require: ['./styleguide/global.requires.js'],
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/FEMessage/excel-it'
  },
  sections: demoSections,
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
        },
        {
          test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loaders: 'file-loader'
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
}

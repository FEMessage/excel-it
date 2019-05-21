const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')

const docs = [
  'export-excel',
  'import-excel',
  'import-multiple-sheets',
  'import-header-excel'
]

const demoSections = docs.map(name => ({
  name,
  content: `docs/${name}.md`
}))

module.exports = {
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://gitlab.com/fem-components/export-excel'
  },
  sections: [
    {
      name: 'Demo',
      sections: demoSections
    },
    {
      name: 'Api',
      content: 'docs/api.md'
    }
  ],
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

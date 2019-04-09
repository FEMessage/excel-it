module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.styl(us)?$/,
    loader: 'stylus-loader'
  })

  return config
}

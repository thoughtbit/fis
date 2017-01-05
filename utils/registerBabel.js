require('babel-register')({
  only: /(webpack.config.js|.beerc.js)/,
  presets: [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-0')
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports')
  ],
  babelrc: false
})

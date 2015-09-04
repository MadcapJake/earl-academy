module.exports = {
  entry: {
    app: [ './src/index.eg' ]
  },
  output: {
    path: '../ega-gh-pages/',
    // publicPath: '/assets/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.eg/, loader: "earlgrey-loader?es5=true&sourceMap=compute"}
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "../ega-gh-pages/",
    colors: true,
    quiet: false,
    noInfo: false,
    hot: false
  }
}

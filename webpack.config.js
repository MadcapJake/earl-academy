module.exports = {
  entry: {
    app: [ './src/index.eg' ]
  },
  output: {
    path: './public',
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
    contentBase: "./public",
    colors: true,
    quiet: false,
    noInfo: false,
    hot: false
  }
}

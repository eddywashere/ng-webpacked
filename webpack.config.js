var webpack = require('webpack');

var config = {
  context: __dirname + '/',
  entry: {
    main: './js/app'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');
var rootAssetPath = './build';
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var filename = '[name]';

// if(process.env.NODE_ENV === 'production') {
//   filename = '[name].[hash]';
// }

var config = {
  context: __dirname + '/',
  entry: {
    main: './js/app'
  },
  output: {
    path: __dirname + '/build',
    filename: filename + '.js',
    publicPath: '' || process.env.CDN_URL,
  },
  plugins: [
    new ExtractTextPlugin(filename + '.css', {allChunks: true}),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel'},
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")},
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file?name=' + filename + '.[ext]'}
    ]
  }
};

config.postcss = [
  autoprefixer({
    browsers: ['last 2 version']
  })
];

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({}));
  config.devtool = 'source-map';
}

module.exports = config;
module.exports = {
  context: __dirname + '/',
  entry: {
    main: './js/app'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
    ]
  }
};
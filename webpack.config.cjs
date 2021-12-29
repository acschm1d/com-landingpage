const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  stats: {
    modules: false,
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },
  devtool: 'source-map',
};

const path = require('path');
const HtmlWebpackPlagins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', //точка входа отличная от стандартной
  output: { path: path.resolve(__dirname, 'dist'), filename: 'app.bundle.js' }, // сохранинени отличного от стандартного
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
  },
  plugins: [
    new HtmlWebpackPlagins({
      template: 'src/index.html',
      filename: 'main.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

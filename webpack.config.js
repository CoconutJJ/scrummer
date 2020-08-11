const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/static',
    path: path.resolve(__dirname, 'build', "assets"),
    filename: '[name].[contenthash].js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: './build/public',
    publicPath: './build/assets',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      
      appMountId: 'app',
      template: "public/index.html",
      filename: '../public/index.html'
    })
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle: true,
        output: {
          comments: false
        }
      }
    })],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;
'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')
const _ = require('./utils')

module.exports = {
  entry: {
    client: './app/index.js'
  },
  output: {
    path: _.outputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    alias: {
      'root': path.join(__dirname, '../app'),
      'components': path.join(__dirname, '../app/components'),
      'assets': path.join(__dirname, '../app/assets'),
      'views': path.join(__dirname, '../app/views'),
      'store': path.join(__dirname, '../app/store'),
      'utils': path.join(__dirname, '../app/utils')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.es6$/,
        loaders: ['babel']
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  babel: config.babel,
  postcss: config.postcss,
  vue: {
    loaders: {},
    postcss: config.postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: __dirname + '/index.html',
      filename: _.outputIndexPath
    })
  ],
  target: _.target
}

const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    license: path.join(__dirname, 'src/license.tsx'),
    popup: path.join(__dirname, 'src/popup.tsx'),
    content: path.join(__dirname, 'src/content.ts'),
    background: path.join(__dirname, 'src/background.ts'),
  },
  output: { path: path.join(__dirname, 'extension'), filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './extension',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
}

module.exports = config

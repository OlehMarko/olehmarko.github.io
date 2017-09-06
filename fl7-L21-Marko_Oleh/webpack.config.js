const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.ts', './src/scss/main.scss', './src/scss/variables.scss', './src/index.html'],
  plugins: [
    new CleanWebpackPlugin(['build']),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin({
      syntax: 'scss'
    }),
    new HtmlWebpackPlugin({
        title: 'flL21-Oleh_Marko'
      })
  ],
  module: {
    rules: [{
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: false,
          emitErrors: false,
          typeCheck: true,
          tsConfigFile: 'tsconfig.json'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  }
};

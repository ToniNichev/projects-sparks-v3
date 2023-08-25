const getEnvironmentConstants = require('../getEnvironmentConstants');
const webpack = require('webpack');
// const Loadable  = require('react-loadable/webpack');
const path = require('path');

const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;

// const projectRootPath = path.resolve(__dirname, '../');

console.log(`Assets will be served from: ${process.env.APP_HOST} ${process.env.ASSETS_SERVER_PORT}`);

module.exports = {
  mode: 'production',
  
  // devtool: 'source-map',

  entry: [
    './src/index.js',
  ], 

  output: {
    filename: '[name]-bundle.js',
    sourceMapFilename: 'source-maps/[name].js.map',
    //publicPath,
    publicPath: '/dist/',
  },  

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // SCSS
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]-[local]--[hash:base64:5]',
              },
              importLoaders: 2,              
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true              
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },             
          }
        ],
      },

      // images
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      },
      // Fonts loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      }                    
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env' : getEnvironmentConstants() } ),  

    // hot reload
    new webpack.HotModuleReplacementPlugin() 
  ]
};
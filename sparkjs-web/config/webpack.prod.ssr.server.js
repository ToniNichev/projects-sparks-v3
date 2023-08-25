const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack =require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getEnvironmentConstants = require('../getEnvironmentConstants');

module.exports = {
  mode: 'production',
  target: "node",
  externals: [nodeExternals()],

  entry: {
    server: './ssr-server.js'
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../', 'server-build') 
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
          MiniCssExtractPlugin.loader,
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
              postcssOptions: {
                plugins: () => [require('autoprefixer')()],
              },
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
      //File loader used to load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }                    
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({}),  

    // on the server we still need one bundle
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
    }),    

    new webpack.DefinePlugin({ 'process.env' : getEnvironmentConstants() } ),     
  ]
};
const getEnvironmentConstants = require('../getEnvironmentConstants');
const webpack = require('webpack');
// const Loadable  = require('react-loadable/webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;

// const projectRootPath = path.resolve(__dirname, '../');

console.log(`Assets will be served from: ${process.env.APP_HOST} ${process.env.ASSETS_SERVER_PORT}`);

var config = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    '@babel/polyfill',    
    './src/index.js',
  ],
  output: {
    filename: '[name]-bundle.js',
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
              modules: true,
              importLoaders: 2,
              localIdentName: '[folder]-[local]',
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
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
    new MiniCssExtractPlugin({
      filename: "[name].css", // Optional: Output filename pattern
      chunkFilename: "[id].css", // Optional: Chunk filename pattern
    }),    
    new OptimizeCSSAssetsPlugin({}),  
    new webpack.DefinePlugin({ 'process.env' : getEnvironmentConstants() } ),  
    // hot reload
    new webpack.HotModuleReplacementPlugin() 
  ]
};

config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
config.plugins = [ ... [new MiniCssExtractPlugin({
        // these are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })], 
    new OptimizeCSSAssetsPlugin({}),  
    ... config.plugins
];


module.exports = config;
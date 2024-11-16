const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const BundleTracker = require('webpack-bundle-tracker');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, '../sms-project/sms_postman/static/scripts'), // '../static'
    filename: 'main-[id]-[fullhash].js',
    clean: true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ]

      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: {
              removeComments: false, // comments are not removing
              collapseWhitespace: false, // garps are not remove
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
        ],

      },
    ]
  },



  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.APP_SERVER_PORT': JSON.stringify(process.env.APP_SERVER_PORT),
    //   'process.env.APP_SERVER_HOST': JSON.stringify(process.env.APP_SERVER_HOST),
    //   'process.env.APP_ACCOUNTS_PATHNAME': JSON.stringify(process.env.APP_ACCOUNTS_PATHNAME),
    // }),
    new Dotenv({
      path: ".env"
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({
      fileName: '../dist/manifest.json',
      publicPath: '/',
      writeToFileEmit: true
    }),
    new BundleTracker({
      path: path.join(__dirname, 'src/bundles'),
      filename: 'webpack-stats.json'
    }),

    new SpriteLoaderPlugin(), 

    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: "../../templates/index.html"
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.tsx?$/,
      filename: './dist/maps/[file].map.[query]',
      include: path.resolve(__dirname, 'src/'),
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/scripts'),

    }),

    new MiniCssExtractPlugin({
      filename: '../styles/style.css'
    }),
    new CopyPlugin({
      patterns:[
        { from: "src/public/manifest.json", to: "" }
      ]
    })
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
 

  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".svg"],
    plugins: [new TsconfigPathsPlugin(),],
    modules: [
      path.resolve(__dirname, "./.browserslistrc"),
      path.resolve(__dirname, "node_modules"),
    ],

    alias: {
      // '@cookies': path.resolve(__dirname, 'src/scripts/cookies.ts'),
      // '@interfaces': path.resolve(__dirname, "src/scripts/interfaces.ts"),
      // '@Validaors': path.resolve(__dirname, 'src/scripts/validators'),
    }
  },

};

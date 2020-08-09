const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const config = {
    resolve: {
      extensions: [".js", ".jsx"],
    },
    entry: "./src/index.js",
    output: {
      path: __dirname + "/pages",
      filename: "bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: ["babel-loader"],
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CopyPlugin([{ from: "_redirects", to: "" }])
    );
  }

  return config;
};

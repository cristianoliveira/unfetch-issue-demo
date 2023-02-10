const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  devtool: "source-map",
  entry: {
    main: {
      import: "./src/index.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  mode: isProduction ? "production" : "development",
};

module.exports = config;

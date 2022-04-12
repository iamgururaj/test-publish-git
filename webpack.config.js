const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [{ test: /\.tsx?$/i, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "module",
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
};

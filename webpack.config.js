const path = require("path");

module.exports = {
  entry: {
    "sampe1" : "./src/sample1/index.js",
    "sampe2" : "./src/sample2/index.js",
    "sampe3" : "./src/sample3/index.js",
    "sampe4" : "./src/sample4/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV,
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true,
  },
  // devtool: false,
  devtool: "eval-cheap-module-source-map",
};

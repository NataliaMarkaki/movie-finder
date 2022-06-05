const config = require("./webpack.config");
const path = require("path");

module.exports = {
  ...config,
  mode: "production",
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
};

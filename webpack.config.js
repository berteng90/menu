const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|svg|jpg|gif|jpg)$/i,
      //   use: "asset/resource",
      // },
    ],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

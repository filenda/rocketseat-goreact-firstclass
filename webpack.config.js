const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //   this is the main application file
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public") //  this tells webpack which folder to
    //  monitor in order to update transpiled files
  },
  module: {
    rules: [
      {
        test: /\.js$/, // this regex tells babel to transpile all js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // tells bable to use configs on '.babelrc' file in order to transpile
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};

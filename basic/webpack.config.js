const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./app.js"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/i,
        use: [path.resolve("./my-webpack-loader.js")]
      },
      { 
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}
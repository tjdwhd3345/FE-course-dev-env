const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /.js$/i,
        use: [path.resolve("./myLoader.js")],
      },
      {
        test: /.(jpg|png|gif|svg)$/i,
        use: ["file-loader"],
      },
      {
        test: /.css$/,
        use: ["css-loader"],
      },
    ],
  },
};

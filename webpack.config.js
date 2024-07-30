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
      // {
      //   test: /\.js$/,
      //   use: [path.resolve("./myLoader.js")],
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset", // data URI , file 자동선택
        generator: {
          filename: "[name][ext]?[hash]", // file export 시 이름규칙
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 20kb // 이 값보다 작은 파일은 data URI 로 만듦
          },
        },
      },
    ],
  },
};

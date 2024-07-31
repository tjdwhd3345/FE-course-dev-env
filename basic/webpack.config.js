const path = require("path");
const MyWebPackPlugin = require("./my-webpack-plugin");

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
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset", // data URI , file 로 export할지 webpack이 옵션에 따라 자동선택
        generator: {
          filename: "[name][ext]?[hash]" // file export 시 이름 규칙
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024 // 20kb , 이 값보다 작은 파일은 data URI로 생성함
          }
        }
      }
    ]
  },
  plugins: [
    new MyWebPackPlugin()
  ]
}
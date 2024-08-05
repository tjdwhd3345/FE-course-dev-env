const path = require("path");
const {  execSync } = require("child_process");
const MyWebPackPlugin = require("./my-webpack-plugin");
const { BannerPlugin, DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    // main: "./app.js"
    main: "./babel-test.js"
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
      },
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MyWebPackPlugin(),
    new BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit: ${execSync("git rev-parse --short HEAD")}
      `
    }),
    new DefinePlugin({
      ENV_CUSTOM_1: 1 + 2,
      ENV_CUSTOM_2: `1 + 2`, // 모두 1+2이 계산되어 평가된 값으로 번들파일에 주입된다.
      ENV_CUSTOM_3: JSON.stringify(`1 + 2`), // JSON.stringify 해야 문자열로 변환됨.
      "API.DOMAIN": JSON.stringify(`http://my-api-dev.morgan.com`)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? " (개발용)" : ""
      },
      minify: process.env.NODE_ENV !== "development"
        ? {
          collapseWhitespace: true,
          removeComments: true
        }
        : false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css"})
  ]
}
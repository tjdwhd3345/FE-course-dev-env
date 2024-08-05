module.exports = {
  presets: [
    // "./my-babel-preset.js"
    ["@babel/preset-env", {
      targets: {
        chrome: "60",
        ie:"11"
      },
      useBuiltIns: "usage",
      corejs: {
        version: "3"
      }
    }]
  ]
}
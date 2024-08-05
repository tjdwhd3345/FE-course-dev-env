module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        chrome: "73",
        ie: "11"
      },
      corejs: { version: "3" }, // 폴리필 사용을 위해 core-js 버전명시
      useBuiltIns: "usage" // 폴리필 사용을 위함.
    }]
  ]
}
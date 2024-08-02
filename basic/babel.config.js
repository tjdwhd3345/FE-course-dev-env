module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        chrome: "73",
        ie: "11"
     } 
    }]
  ]
}
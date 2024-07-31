class MyWebPackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("MyPlugin", (stats) => { 
      console.log("MyPlugin done");
    })
  }
}

module.exports = MyWebPackPlugin;

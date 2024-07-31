class MyWebPackPlugin {
  apply(compiler) {
    // 한번만 실행됨
    // compiler.hooks.done.tap("MyPlugin", (stats) => { 
    //   console.log("MyPlugin done");
    // })
    
    compiler.hooks.emit.tapAsync("MyWebPackPlugin", (compilation, callback) => { 
      const source = compilation.assets["main.js"].source();
      // console.log("MyWebPackPlugin", {compilation, source})
      // compilation.assets["main.js"].source = () => { 
      //   const banner = [
      //     "/**",
      //     " * MyWebPackPlugin 적용 결과",
      //     " * Build Date: 2024-07-31",
      //     " */"
      //   ].join("\n");
      //   return banner + "\n\n" + source;
      // }
      callback();
    })
  }
}

module.exports = MyWebPackPlugin;

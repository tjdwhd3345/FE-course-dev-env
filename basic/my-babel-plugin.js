module.exports = function MyBabelPlugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        console.log("MyBabelPlugin Identifier path.node.name", { name })
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
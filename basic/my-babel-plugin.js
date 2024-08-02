module.exports = function MyBabelPlugin() {
  return {
    visitor: {
      // Identifier(path) {
      //   const name = path.node.name;
      //   console.log("MyBabelPlugin Identifier path.node.name", { name })
      //   // reverse the name: JavaScript -> tpircSavaJ
      //   path.node.name = name
      //     .split("")
      //     .reverse()
      //     .join("");
      // },
      VariableDeclaration(path) {
        const kind = path.node.kind;
        console.log("VariableDeclaration", { kind });

        // const 변수를 var로 변환
        if (kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
}
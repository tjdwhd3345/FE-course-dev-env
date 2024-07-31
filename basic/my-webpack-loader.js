module.exports = function MyWebPackLoader(content) {
  console.log("MyWebPackLoader", { content });
  return content;
}
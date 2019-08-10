const { isSharpened } = require("./booleans");
module.exports = pencil => {
  if (isSharpened(pencil)) {
    pencil.point = pencil.maxPoint;
    pencil.length--;
  }
};

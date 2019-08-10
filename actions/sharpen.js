const { isDull, isSharpened, isOutOfLength, isUsable } = require("./booleans");
module.exports = pencil => {
  if (!isSharpened(pencil) && isUsable(pencil)) {
    pencil.point = pencil.maxPoint;
    pencil.length--;
  }
};

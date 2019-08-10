const { isDull, isOutOfLength } = require("./booleans");
module.exports = pencil => {
  if (isDull(pencil) && !isOutOfLength(pencil)) {
    pencil.point = pencil.maxPoint;
    pencil.length--;
  }
};

const { write, erase, sharpen } = require("./actions");
const { isDull, isOutOfLength } = require("./actions/booleans");

module.exports = class PencilSimulator {
  constructor(length, maxPoint, eraser) {
    if (isNaN(length) && length <= 0) {
      throw new Error("pencil length must be a positive integer");
    }

    if (isNaN(maxPoint) && maxPoint <= 0) {
      throw new Error("pencil max point durability must me a positive integer");
    }

    if (isNaN(eraser) && eraser <= 0) {
      throw new Error("eraser durability must me a positive integer");
    }

    this.length = length;
    this.maxPoint = maxPoint;
    this.point = maxPoint;
    this.eraser = eraser;
  }

  write(paper, text) {
    write(this, paper, text);
  }

  erase(paper, text) {
    erase(this, paper, text);
  }

  sharpen() {
    if (!isDull(this)) {
      return `pencil point needs not shaperning`;
    }

    if (isOutOfLength(this)) {
      return `pencil is out of length`;
    }

    if (sharpen(this)) {
      return `successfully sharpened`;
    }

    throw Error("sharpening failed");
  }
};

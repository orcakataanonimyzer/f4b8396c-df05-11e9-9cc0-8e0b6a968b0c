const { write, erase, sharpen } = require("./actions");

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
    if (this.point > 0) {
      throw new Error(`pencil is not dull`);
    }

    if (this.length <= 0) {
      console.log("pencil reaches the end of its life");
    }
    if (sharpen(this)) {
      console.log(`Successfully Sharpened`);
    }
  }
};

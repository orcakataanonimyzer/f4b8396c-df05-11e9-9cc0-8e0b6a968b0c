const { write, erase, sharpen, edit } = require("./actions");
const { isDull, isOutOfLength, isOutOfEraser } = require("./booleans");
const { PencilInitializationError, PencilErasingError } = require("./errors");
module.exports = class PencilSimulator {
  constructor(length, maxPoint, eraser) {
    if (isNaN(length) || length <= 0) {
      throw new PencilInitializationError("length must be a positive int");
    }

    if (isNaN(maxPoint) || maxPoint <= 0) {
      throw new PencilInitializationError(
        "max point durability must me a positive int"
      );
    }

    if (isNaN(eraser) || eraser <= 0) {
      throw new PencilInitializationError(
        "eraser durability must me a positive int"
      );
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
    if (paper.lastErased >= 0) {
      throw new PencilErasingError(
        "can't erase text consecutively on the same paper"
      );
    }
    erase(this, paper, text);
  }

  sharpen() {
    sharpen(this);
  }

  edit(paper, text) {
    if (paper.lastErased === undefined) {
      throw new PencilEdittingError("can't edit paper without erased text");
    }
    edit(this, paper, text);
  }
};

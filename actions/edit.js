const writtenChar = require("../actions/writtenChar");

const edit = (pencil, paper, text) => {
  const { lastErased } = paper;
  if (lastErased >= 0) {
    let edittingContent = paper.content.split("");
    for (let i = 0; i < text.length; i++) {
      const charEdittingContent = edittingContent[lastErased + i];
      if (charEdittingContent === " ") {
        edittingContent[lastErased + i] = writtenChar(pencil, text[i]);
      } else {
        edittingContent[lastErased + i] = "@";
      }
    }
    paper.content = edittingContent.join("");
    paper.lastErased = undefined;
  }
};

module.exports = edit;

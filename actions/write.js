const writtenChar = require("../actions/writtenChar");

const write = (pencil, paper, text) => {
  let writtenContent = "";
  for (let i = 0; i < text.length; i++) {
    writtenContent += writtenChar(pencil, text[i]);
  }
  paper.content += writtenContent;
};

module.exports = write;

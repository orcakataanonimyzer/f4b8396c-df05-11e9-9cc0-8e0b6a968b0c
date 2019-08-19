const { isOutOfEraser } = require("./booleans");
module.exports = (pencil, paper, text) => {
  if (isOutOfEraser(pencil)) {
    return;
  }

  const { content } = paper;
  if (content.length < text.length) {
    return;
  }

  const occurenceIndex = content.lastIndexOf(text);
  if (occurenceIndex < 0) {
    return;
  }
  let lastErased = 0;
  let erasedContent = text.split("");
  const lastIndex = text.length - 1;
  for (let i = lastIndex; i > -1; i--) {
    if (!isOutOfEraser(pencil)) {
      erasedContent[i] = " ";
      pencil.eraser--;
      lastErased = i;
    } else {
      break;
    }
  }

  const contentHead = content.slice(0, occurenceIndex);
  erasedContent = erasedContent.join("");
  const contentTail = content.slice(occurenceIndex + text.length);

  paper.content = contentHead + erasedContent + contentTail;
  paper.lastErased = contentHead.length + lastErased;
};

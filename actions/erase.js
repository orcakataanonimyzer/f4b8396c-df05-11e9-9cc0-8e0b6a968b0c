module.exports = (pencil, paper, text) => {
  if (paper.content.length >= text.length) {
    const occurencePosition = paper.content.lastIndexOf(text);
    if (occurencePosition >= 0) {
      let erasedContent = text.split("");
      for (let i = text.length - 1; i > -1; i--) {
        if (pencil.eraser > 0) {
          erasedContent[i] = " ";
          pencil.eraser--;
        } else {
          break;
        }
      }

      paper.content =
        paper.content.slice(0, occurencePosition) +
        erasedContent.join("") +
        paper.content.slice(occurencePosition + erasedContent.length);
    }
  }
};

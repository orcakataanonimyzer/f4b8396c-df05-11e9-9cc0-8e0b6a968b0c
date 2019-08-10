const {
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace
} = require("./booleans");

const write = (pencil, paper, text) => {
  if (isWhiteSpace(text)) {
    paper.content += text;
    return;
  }

  let newContent = "";
  for (let i = 0; i < text.length; i++) {
    if (!isDull(pencil)) {
      newContent += text[i];
      if (isLowerCase(text[i])) {
        pencil.point--;
      } else if (isUpperCase(text[i])) {
        pencil.point -= 2;
      } else if (!isWhiteSpace(text[i])) {
        pencil.point--;
      }
    } else {
      newContent += " ";
    }
  }

  paper.content += newContent;
};

module.exports = {
  write
};

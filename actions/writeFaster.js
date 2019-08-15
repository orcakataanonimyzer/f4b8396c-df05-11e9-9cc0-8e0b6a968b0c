const {
  isDull,
  isLetterLowerCase,
  isLetterUpperCase,
  isUpperCase,
  isLowerCase,
  isWhiteSpace
} = require("./booleans");

const writtenChar = (pencil, str) => {
  if (isWhiteSpace(str)) {
    return str;
  }

  if (isDull(pencil)) {
    return " ";
  }

  if (isLetterUpperCase(str)) {
    /* 
    when pencil's point durability is not enough 
    for writing uppercase letter,

    replace the letter with '#'
    and degrade one point durability of pencil
    */
    if (pencil.point < 2) {
      pencil.point = 0;
      return "#";
    } else {
      pencil.point -= 2;
    }
  } else {
    pencil.point--;
  }

  return str;
};

const write = (pencil, paper, text) => {
  if (isLowerCase(text) || isUpperCase(text)) {
    const pointPerLetter = isLowerCase(text) ? 1 : 2;
    const pencilHasEnoughPoint = pencil.point >= pointPerLetter * text.length;
    if (pencilHasEnoughPoint) {
      paper.content += text;
      pencil.point -= pointPerLetter * text.length;
      return;
    } else {
      const length = pencil.point / pointPerLetter;
      paper.content += text.substr(0, length);
      text = text.slice(length);
      // check if pencil can write a uppercase letter before going dull
      if (pointPerLetter === 2 && pencil.point % 2 !== 0) {
        paper.content += "#";
        text = text.slice(1);
      }
      pencil.point = 0;
    }
  }

  let writtenContent = "";

  for (let i = 0; i < text.length; i++) {
    writtenContent += writtenChar(pencil, text[i]);
  }
  paper.content += writtenContent;
};

module.exports = write;

if (isWhiteSpace(text)) {
  paper.content += text;
  return;
}

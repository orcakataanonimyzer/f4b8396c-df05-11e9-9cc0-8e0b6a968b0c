const {
  isDull,
  isLetterLowerCase,
  isLetterUpperCase,
  isUpperCase,
  isLowerCase,
  isWhiteSpace
} = require("../booleans");

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
  let writtenContent = "";
  for (let i = 0; i < text.length; i++) {
    writtenContent += writtenChar(pencil, text[i]);
  }
  paper.content += writtenContent;
};

module.exports = write;

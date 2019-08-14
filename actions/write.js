const {
  isDull,
  isLetterLowerCase,
  isLetterUpperCase,
  isWhiteSpace
} = require("./booleans");

const writtenChar = (pencil, character) => {
  if (isWhiteSpace(character)) {
    return character;
  }

  if (isDull(pencil)) {
    return " ";
  }

  if (isLetterUpperCase(character)) {
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

  return character;
};

const write = (pencil, paper, text) => {
  let writtenContent = "";
  for (let i = 0; i < text.length; i++) {
    writtenContent += writtenChar(pencil, text[i]);
  }
  paper.content += writtenContent;
};

module.exports = write;

// --- cases to be considered---
// if (isWhiteSpace(text)) {
//   paper.content += text;
//   return;
// }

// if (isLowerCase(text) || isUpperCase(text)) {
//   const point = isLowerCase(text) ? 1 : 2;
//   if (pencil.point >= point * text.length) {
//     paper.content += text;
//     pencil.point -= point * text.length;
//     return;
//   } else {
//     const length = pencil.point / point;
//     // console.log(index);
//     paper.content += text.substr(0, length);
//     text = text.slice(length);
//     pencil.point = 0;
//   }
// }

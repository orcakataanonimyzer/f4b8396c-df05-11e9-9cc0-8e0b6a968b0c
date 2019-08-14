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

  let newContent = "";
  for (let i = 0; i < text.length; i++) {
    if (!isDull(pencil)) {
      let currentChar = text[i];
      if (isLowerCase(currentChar)) {
        pencil.point--;
      } else if (isUpperCase(currentChar)) {
        // console.log(text[i]);

        if (pencil.point < 2) {
          currentChar = "#";
          pencil.point = 0;
        } else {
          pencil.point -= 2;
        }
      } else if (!isWhiteSpace(currentChar)) {
        pencil.point--;
      }
      newContent += currentChar;
    } else {
      newContent += " ";
    }
  }

  paper.content += newContent;
};

module.exports = write;

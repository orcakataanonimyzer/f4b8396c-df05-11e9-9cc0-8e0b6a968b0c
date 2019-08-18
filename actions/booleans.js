const pointTable = require("./pointTable");
const isOutOfEraser = pencil => {
  return !pencil.eraser;
};
const isLetterLowerCase = char => {
  return pointTable[char] === 1;
};

const isLetterUpperCase = char => {
  return pointTable[char] === 2;
};

const isDull = pencil => {
  return !pencil.point || pencil.point <= 0;
};
const isWhiteSpace = str => {
  return str.trim().length === 0;
};
const isLowerCase = word => {
  return /^[a-z]+$/g.test(word);
};

const isUpperCase = word => {
  return /^[A-Z]+$/g.test(word);
};

const isSharpened = pencil => {
  return pencil.point > 0;
};

const isOutOfLength = pencil => {
  return pencil.length <= 0;
};

const isUsable = pencil => {
  return pencil.length > 0;
};

module.exports = {
  isOutOfEraser,
  isUsable,
  isOutOfLength,
  isSharpened,
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace,
  isLetterLowerCase,
  isLetterUpperCase
};

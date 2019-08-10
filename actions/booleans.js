const isDull = pencil => {
  return !pencil.point;
};
const isWhiteSpace = str => {
  return str.trim().length === 0;
};
const isLowerCase = char => {
  return /[a-z]/g.test(char);
};

const isUpperCase = char => {
  return /[A-Za]/g.test(char);
};

const isSharpened = pencil => {
  return pencil.point > 0;
};

const isOutOfLength = pencil => {
  return pencil.length === 0;
};

const isUsable = pencil => {
  return pencil.length > 0;
};

module.exports = {
  isUsable,
  isOutOfLength,
  isSharpened,
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace
};

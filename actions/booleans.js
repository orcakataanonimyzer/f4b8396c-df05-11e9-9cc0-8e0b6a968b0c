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
  return pencil.point !== pencil.maxPoint;
};

module.exports = {
  isSharpened,
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace
};

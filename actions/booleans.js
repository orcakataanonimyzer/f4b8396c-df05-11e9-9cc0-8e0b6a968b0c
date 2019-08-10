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

module.exports = {
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace
};

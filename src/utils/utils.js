export const nameToColorId = (name) => {
  const char = name[0];
  if (/\W/.test(char)) {
    return 7;
  } else if (/\d/.test(char)) {
    return 6;
  } else {
    return Math.floor((parseInt(char, 36) - 10)/ 5)
  }
};
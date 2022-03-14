//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {string} str
// @returns {string} encoded/decoded string
//

export const encode = (str) => {
  let encodedStr = "";

  for (let i = 1, count = 1; i <= str.length; i++) {
    const currChar = str[i];
    const prevChar = str[i - 1];
    if (currChar === prevChar) {
      count++;
    } else {
      encodedStr += (count === 1 ? "" : count) + prevChar;
      count = 1;
    }
  }

  return encodedStr;
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};

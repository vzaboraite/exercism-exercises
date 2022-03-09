//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {String} str
// @returns {String} reversed string
//

export const reverseString = (str) => {
  if (str === "") {
    return "";
  }

  const splittedStr = str.split("");
  const reversedArr = splittedStr.reverse();
  const reversedStr = reversedArr.join("");

  return reversedStr;
};

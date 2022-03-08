//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {String|null} name
// @returns String `One for [name], one for me.`

export const twoFer = (name) => {
  if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
};

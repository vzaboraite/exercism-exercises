//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {string} phrase
// @returns {string} acronym of phrase

export const parse = (phrase) => {
  const words = phrase.split(/[ _\-,]+/);
  const firstChars = words.map((word) => word.charAt(0).toUpperCase());
  const acronym = firstChars.join("");

  return acronym;
};

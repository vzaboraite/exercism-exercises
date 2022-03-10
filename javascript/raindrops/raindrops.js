//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {number} number
// @returns {string|number} a string depending on factor, or same number in string if doesn't have any factor
//
// factors and strings:
// 3: 'Pling'
// 5: 'Plang'
// 7: 'Plong'
//

const FACTORS = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
};

export const convert = (number) => {
  let result = "";

  for (const factor in FACTORS) {
    if (number % factor === 0) {
      result += FACTORS[factor];
    }
  }

  return result || `${number}`;
};

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const advice = "is clearly the better choice.";

  return option1 < option2 ? `${option1} ${advice}` : `${option2} ${advice}`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const discount80 = originalPrice * 0.8;
  const discount50 = originalPrice * 0.5;
  const discount70 = originalPrice * 0.7;

  if (age < 3) {
    return discount80;
  } else if (age > 10) {
    return discount50;
  } else if (age >= 3 || age <= 10) {
    return discount70;
  } else {
    return originalPrice;
  }
}

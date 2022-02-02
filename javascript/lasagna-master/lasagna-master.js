/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number} time
 * @returns {string} cooking status message
 */

export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (!time) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let numberOfLimes = 0;

  while (wedgesCut < wedgesNeeded && numberOfLimes < limes.length) {
    switch (limes[numberOfLimes]) {
      case "small":
        wedgesCut += 6;
        break;
      case "medium":
        wedgesCut += 8;
        break;
      case "large":
        wedgesCut += 10;
        break;
    }
    numberOfLimes += 1;
  }

  return numberOfLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeSpent = 0;
  let ordersLeft = [...orders];

  while (timeSpent < timeLeft && ordersLeft.length !== 0) {
    const order = ordersLeft.shift();
    timeSpent += timeToMixJuice(order);
  }

  return ordersLeft;
}

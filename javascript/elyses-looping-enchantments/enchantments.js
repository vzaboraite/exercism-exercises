/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let numberOfCards = 0;

  for (const stackCard of stack) {
    if (stackCard === card) {
      numberOfCards += 1;
    }
  }

  return numberOfCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let numberOfCards = 0;
  let odd = [];
  let even = [];

  stack.forEach((stackCard, i) => {
    if (stack[i] % 2 === 0) {
      even.push(stackCard);
    } else {
      odd.push(stackCard);
    }
  });

  if (type) {
    return (numberOfCards = even.length);
  } else {
    return (numberOfCards = odd.length);
  }
}

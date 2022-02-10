/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubleDeck = deck.map((card) => card * 2);

  return doubleDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const threeOfEachThreeDeck = deck.reduce((result, card) => {
    if (card === 3) {
      return [...result, 3, 3, 3];
    } else {
      return [...result, card];
    }
  }, []);

  return threeOfEachThreeDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleDeck = deck.slice(4, 6);

  return middleDeck;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  if (deck.length === 2) {
    return deck.reverse();
  } else {
    const { 0: firstCard, [deck.length - 1]: lastCard } = deck;
    const frontDeck = deck.slice(1, Math.floor(deck.length / 2));
    const backDeck = deck.slice(Math.floor(deck.length / 2), deck.length - 1);

    return [...frontDeck, lastCard, firstCard, ...backDeck];
  }
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const filteredTwos = deck.filter((card) => card === 2);

  return filteredTwos;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  const sortedDeck = [...deck].sort((curr, next) => curr - next);

  return sortedDeck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  throw new Error("Implement the reorder function");
}

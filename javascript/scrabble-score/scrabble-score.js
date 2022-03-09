//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {String} word
// @returns {Number} score of the word
//

export const score = (word) => {
  let result = 0;
  const scores = getScores();
  const letters = getLetters(word);

  if (word === "") {
    return result;
  }

  letters.forEach((letter) => {
    if (scores.hasOwnProperty(letter)) {
      result += scores[letter];
    }
  });

  return result;
};

function getLetters(str) {
  return str.toUpperCase().split("");
}

function getScores() {
  return {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
}

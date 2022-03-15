//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// @param {string} str
// @returns {string} encoded/decoded string
//

export const encode = (str) => {
  let encodedStr = "";

  for (let i = 1, count = 1; i <= str.length; i++) {
    const currChar = str[i];
    const prevChar = str[i - 1];
    if (currChar === prevChar) {
      count++;
    } else {
      encodedStr += (count === 1 ? "" : count) + prevChar;
      count = 1;
    }
  }

  return encodedStr;
};

/**
 * if prev char is number, display current char *number times
 * if prev char is letter or space, display curr char as it is
 *
 */

export const decode = (str) => {
  let decodedStr = "";
  /**
   * Resources about:
   * - matchAll() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
   * - regex explanation => https://regex101.com/r/LpPspa/1
   */
  const matches = [...str.matchAll(/(\d*)(\D)/g)];

  matches.forEach((match) => {
    const count = match[1] !== "" ? +match[1] : 1;
    /**
     * Resource about repeat() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    decodedStr += match[2].repeat(count);
  });

  return decodedStr;
};

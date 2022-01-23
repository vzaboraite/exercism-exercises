export const countWords = (string) => {
  const words = string.trim().split(/[\s,:!&@$%^]+/i);
  const result = {};
  words.forEach((word) => {
    const lowerCasedWord = word.toLowerCase();
    if (lowerCasedWord === "") {
      return;
    }
    if (result.hasOwnProperty(lowerCasedWord)) {
      result[lowerCasedWord] += 1;
    } else {
      result[lowerCasedWord] = 1;
    }
  });
  console.log(result, { words, string });
  return result;
};

export const countWords = (string) => {
  const words = string.trim().split(/'*[\s,.":!&@$%^]+'*|'$/);
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

  return result;
};

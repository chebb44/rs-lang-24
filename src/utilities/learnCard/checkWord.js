export const checkWord = (enteredWord, word) => {
  if (enteredWord.toLowerCase() === word.toLowerCase()) {
    return true;
  } else {
    const enteredWordLetters = enteredWord.toLowerCase().split('');
    const wordLetters = word.toLowerCase().split('');
    let innerHtmlWord = '';
    wordLetters.forEach((item, index) => {
      if (enteredWordLetters[index] === wordLetters[index]) {
        innerHtmlWord += `<span class="success-letter">${item}</span>`;
      } else {
        innerHtmlWord += `<span class="error-letter">${item}</span>`;
      }
    });
    return innerHtmlWord;
  }
};

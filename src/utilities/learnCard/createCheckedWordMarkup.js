export const createCheckedWordMarkup = (enteredWord, word) => {
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
  return { __html: innerHtmlWord };
};

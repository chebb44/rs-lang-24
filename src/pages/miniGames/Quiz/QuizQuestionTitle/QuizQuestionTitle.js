import React from 'react';
import './QuizQuestionTitle.scss';
import { QuizQuestionWordOrStar } from '../QuizQuestionWordOrStar/QuizQuestionWordOrStar';
import { QuizQuestionInput } from '../QuizQuestionInput/QuizQuestionInput';

export const QuizQuestionTitle = ({
  textMeaning,
  setInputValue,
  getTrueAnswer,
  inputValue,
}) => {
  const regexpAll = new RegExp(`<i>(\\w+)<\\/i>`);
  const regexpTags = new RegExp(`<i>|<\\/i>`, 'g');
  const matches = textMeaning.match(regexpAll);
  const word = matches[1];
  const wordMask = word.replace(/\w/g, '_');
  const { index } = matches;
  const hidedText = textMeaning.replace(regexpTags, '').replace(word, wordMask);
  const firstHalf = textMeaning.slice(0, index);
  const secondHalf = hidedText.slice(index + word.length);
  console.log('word', word);

  return (
    <div className="quiz-question-title" id="questionWord">
      <div className="quiz-question-title__text">{firstHalf}</div>
      <div
        className="quiz-question-title__word"
        style={{
          width: `calc(7px + 12px * ${word.length})`,
        }}
      >
        <QuizQuestionWordOrStar word={word} />
        <QuizQuestionInput
          word={word}
          setInputValue={setInputValue}
          getTrueAnswer={getTrueAnswer}
          inputValue={inputValue}
        />
      </div>
      <div className="quiz-question-title__text">{secondHalf}</div>
    </div>
  );
};

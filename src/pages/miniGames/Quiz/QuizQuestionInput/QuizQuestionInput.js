import React from 'react';
import './QuizQuestionInput.scss';

export const QuizQuestionInput = ({
  word,
  setInputValue,
  inputValue,
  inputWordClass,
  checkTrueWordClick,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    checkTrueWordClick(event);
    event.preventDefault();
  };
  const trueAnswerInput = inputWordClass.includes(
    'quiz-question-input__entered-word_success',
  );
  return (
    <form className="quiz-question-input" onSubmit={handleSubmit}>
      {trueAnswerInput ? (
        <input
          disabled
          className={inputWordClass}
          type="text"
          style={{
            width: `calc(6px + 12px * ${word.length})`,
          }}
          autoFocus
          onChange={handleChange}
          value={inputValue}
        />
      ) : (
        <input
          className={inputWordClass}
          type="text"
          style={{
            width: `calc(6px + 12px * ${word.length})`,
          }}
          autoFocus
          onChange={handleChange}
          value={inputValue}
        />
      )}
    </form>
  );
};

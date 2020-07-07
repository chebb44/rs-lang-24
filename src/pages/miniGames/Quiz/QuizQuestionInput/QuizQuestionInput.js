import React from 'react';
import './QuizQuestionInput.scss';

export const QuizQuestionInput = ({
  word,
  setInputValue,
  getTrueAnswer,
  inputValue,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    getTrueAnswer();
    event.preventDefault();
  };
  return (
    <form className="quiz-question-input" onSubmit={(event) => handleSubmit}>
      <input
        className="form-control m-auto quiz-question-input__entered-word"
        type="text"
        style={{
          width: `calc(6px + 12px * ${word.length})`,
        }}
        autoFocus
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};

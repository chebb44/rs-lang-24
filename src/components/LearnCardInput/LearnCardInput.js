import React, { useState, useEffect } from 'react';
import { createCheckedWordMarkup } from '../../utilities/learnCard/createCheckedWordMarkup';
import './LearnCardInput.scss';

export const LearnCardInput = ({ word, isWordSubmitted }) => {
  const [inputWord, setInputWord] = useState('');
  const [isCheckedWordShown, setIsCheckedWordShown] = useState(false);

  const changeIsCheckWordShown = () => {
    if (isWordSubmitted) {
      setIsCheckedWordShown(!isCheckedWordShown);
    }
  };

  useEffect(changeIsCheckWordShown, [isWordSubmitted]);

  const handleCheckedWordClick = () => {
    setIsCheckedWordShown(!isCheckedWordShown);
  };

  return (
    <p className="card-text">
      <input
        className="form-control m-auto entered-word"
        type="text"
        style={{
          width: `calc(4px + 12px * ${word.length})`,
          display: `${isCheckedWordShown ? 'none' : 'inline'}`,
        }}
        autoFocus
        value={inputWord}
        onChange={(event) => setInputWord(event.target.value)}
      />
      <p
        className="checked-word"
        style={{
          display: `${isCheckedWordShown ? 'block' : 'none'}`,
        }}
        dangerouslySetInnerHTML={createCheckedWordMarkup(inputWord, word)}
        onClick={handleCheckedWordClick}
      ></p>
    </p>
  );
};

import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../hooks/usePrevious';
import { createCheckedWordMarkup } from '../../utilities/learnCard/createCheckedWordMarkup';
import './LearnCardInput.scss';

export const LearnCardInput = ({ word, isWordSubmitted }) => {
  const [inputWord, setInputWord] = useState('');
  const [isCheckedWordShown, setIsCheckedWordShown] = useState(false);
  const prevWord = usePrevious(word);

  const changeIsCheckWordShown = () => {
    if (isWordSubmitted) {
      setIsCheckedWordShown(!isCheckedWordShown);
    }
  };
  useEffect(changeIsCheckWordShown, [isWordSubmitted]);

  useEffect(() => {
    if (prevWord !== word) {
      setInputWord('');
      setIsCheckedWordShown(false);
    }
  }, [prevWord, word]);

  const handleCheckedWordClick = () => {
    setIsCheckedWordShown(!isCheckedWordShown);
  };

  return (
    <div className="card-text">
      {!isCheckedWordShown && (
        <input
          className="form-control m-auto entered-word"
          type="text"
          style={{
            width: `calc(4px + 12px * ${word.length})`,
          }}
          autoFocus
          value={inputWord}
          onChange={(event) => setInputWord(event.target.value)}
        />
      )}
      {isCheckedWordShown && (
        <p
          className="checked-word"
          dangerouslySetInnerHTML={createCheckedWordMarkup(inputWord, word)}
          onClick={handleCheckedWordClick}
        ></p>
      )}
    </div>
  );
};

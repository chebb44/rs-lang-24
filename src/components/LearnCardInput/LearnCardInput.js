import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../hooks/usePrevious';
import { createCheckedWordMarkup } from '../../utilities/learnCard/createCheckedWordMarkup';
import './LearnCardInput.scss';

export const LearnCardInput = ({
  originalWord,
  enteredWord,
  isCheckButtonClicked,
  isShowAnswerButtonClicked,
  onInputChange,
}) => {
  const [isCheckedWordDisplayed, setIsCheckedWordDisplayed] = useState(false);
  const prevWord = usePrevious(originalWord);

  const changeIsCheckWordDisplayed = () => {
    if (isCheckButtonClicked) {
      setIsCheckedWordDisplayed(!isCheckedWordDisplayed);
    }
  };
  useEffect(changeIsCheckWordDisplayed, [isCheckButtonClicked]);

  useEffect(() => {
    if (prevWord !== originalWord) {
      onInputChange('');
      setIsCheckedWordDisplayed(false);
    }
  }, [prevWord, originalWord]);

  const handleCheckedWordClick = () => {
    setIsCheckedWordDisplayed(!isCheckedWordDisplayed);
  };

  return (
    <div className="card-text">
      {!isCheckedWordDisplayed && (
        <input
          className="form-control m-auto entered-word"
          type="text"
          style={{
            width: `calc(4px + 12.5px * ${originalWord.length})`,
          }}
          autoFocus
          value={isShowAnswerButtonClicked ? originalWord : enteredWord}
          onChange={(event) => onInputChange(event.target.value)}
        />
      )}
      {isCheckedWordDisplayed && (
        <p
          className="checked-word"
          dangerouslySetInnerHTML={createCheckedWordMarkup(
            enteredWord,
            originalWord,
          )}
          onClick={handleCheckedWordClick}
        ></p>
      )}
    </div>
  );
};

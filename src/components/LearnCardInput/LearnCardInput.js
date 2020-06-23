import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCheckedWordMarkup } from '../../utilities/learnCard/createCheckedWordMarkup';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import {
  actionUpdateEnteredWord,
  actionUpdateCheckDisplaying,
} from '../../reducers/learnCard/learnCardActions';
import './LearnCardInput.scss';

export const LearnCardInput = ({
  originalWord,
  isWordSubmitted,
  isAnswerShown,
}) => {
  const enteredWord = useSelector(learnCardParametersSelector).enteredWord;
  const isCheckDisplayed = useSelector(learnCardParametersSelector)
    .isCheckDisplayed;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isWordSubmitted) {
      dispatch(actionUpdateCheckDisplaying(true));
    }
  }, [isWordSubmitted, dispatch]);

  const removeCheckDisplaying = () => {
    dispatch(actionUpdateCheckDisplaying(false));
  };

  return (
    <div className="card-text">
      {!isCheckDisplayed && (
        <input
          className="form-control m-auto entered-word"
          type="text"
          style={{
            width: `calc(4px + 12.5px * ${originalWord.length})`,
          }}
          autoFocus
          value={isAnswerShown ? originalWord : enteredWord}
          onChange={(event) =>
            dispatch(actionUpdateEnteredWord(event.target.value))
          }
        />
      )}
      {isCheckDisplayed && (
        <p
          className="checked-word"
          dangerouslySetInnerHTML={createCheckedWordMarkup(
            enteredWord,
            originalWord,
          )}
          onClick={removeCheckDisplaying}
        ></p>
      )}
    </div>
  );
};

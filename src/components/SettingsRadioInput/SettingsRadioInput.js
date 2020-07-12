import React from 'react';
import {
  REPEAT_MODE,
  ONLY_HARD_WORDS_MODE,
} from '../../store/defaultAppSettings';
import { isNeedToRepeat } from '../../utilities/repeatLearn/isNeedRepeat';

const SettingsRadioInput = ({ item }) => {
  const {
    id,
    name,
    value,
    text,
    defaultStateValue,
    cardsPerDay,
    wordsPerDay,
    func,
    dictionaryState,
  } = item;

  const handleChange = (event) => {
    return func(event.target.value);
  };

  if (dictionaryState) {
    const { learnedWords, hardWords, nextTrainWords } = dictionaryState;
    const wordsForRepeat = [...learnedWords, ...hardWords].filter((word) =>
      isNeedToRepeat({ word }),
    );

    if (
      (hardWords.length < 1 && value === ONLY_HARD_WORDS_MODE) ||
      (wordsForRepeat.length + nextTrainWords.length < 1 &&
        value === REPEAT_MODE)
    ) {
      return (
        <div className="custom-control custom-radio custom-control-inline mb-1">
          <input
            type="radio"
            id={id}
            name={name}
            className="custom-control-input"
            value={value}
            disabled
            onChange={handleChange}
          ></input>
          <label
            className="custom-control-label"
            htmlFor={id}
            data-toggle="tooltip"
            data-placement="top"
            title="Для начала изучите несколько слов"
          >
            {text}
          </label>
        </div>
      );
    }
  }

  if (
    (cardsPerDay && value > cardsPerDay) ||
    (wordsPerDay && value < wordsPerDay)
  ) {
    return (
      <div className="custom-control custom-radio custom-control-inline mb-1">
        <input
          type="radio"
          id={id}
          name={name}
          className="custom-control-input"
          value={value}
          disabled
          onChange={handleChange}
        ></input>
        <label className="custom-control-label" htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }

  if (defaultStateValue === value) {
    return (
      <div className="custom-control custom-radio custom-control-inline mb-1">
        <input
          type="radio"
          id={id}
          name={name}
          className="custom-control-input"
          value={value}
          defaultChecked
          onChange={handleChange}
        ></input>
        <label className="custom-control-label" htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }

  return (
    <div className="custom-control custom-radio custom-control-inline mb-1">
      <input
        type="radio"
        id={id}
        name={name}
        className="custom-control-input"
        value={value}
        onChange={handleChange}
      ></input>
      <label className="custom-control-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default SettingsRadioInput;

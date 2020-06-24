import React from 'react';

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

  if (
    (dictionaryState &&
      dictionaryState.hardWords.length < 1 &&
      value === 'ONLY_HARD_WORDS_MODE') ||
    (dictionaryState &&
      dictionaryState.hardWords.length +
        dictionaryState.learnedWords.length +
        dictionaryState.nextTrainWords.length <
        1 &&
      value === 'REPEAT_MODE')
  ) {
    return (
      <div className="custom-control custom-radio custom-control-inline">
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
          className="custom-control-label font-italic"
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

  if (
    (cardsPerDay && value > cardsPerDay) ||
    (wordsPerDay && value < wordsPerDay)
  ) {
    return (
      <div className="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id={id}
          name={name}
          className="custom-control-input"
          value={value}
          disabled
          onChange={handleChange}
        ></input>
        <label className="custom-control-label font-italic" htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }

  if (defaultStateValue === value) {
    return (
      <div className="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id={id}
          name={name}
          className="custom-control-input"
          value={value}
          defaultChecked
          onChange={handleChange}
        ></input>
        <label className="custom-control-label font-italic" htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }

  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id={id}
        name={name}
        className="custom-control-input"
        value={value}
        onChange={handleChange}
      ></input>
      <label className="custom-control-label font-italic" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default SettingsRadioInput;

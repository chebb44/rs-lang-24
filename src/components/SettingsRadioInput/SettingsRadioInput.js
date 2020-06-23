import React from 'react';

const SettingsRadioInput = ({ item }) => {
  const { id, name, value, text, defaultStateValue, func } = item;

  const handleChange = (event) => {
    return func(event.target.value);
  };

  if (defaultStateValue == value) {
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

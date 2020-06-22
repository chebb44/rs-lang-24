import React from 'react';

const SettingsRadioInput = ({ item }) => {
  const { id, name, value, defaultChecked } = item;
  if (defaultChecked) {
    return (
      <div className="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id={id}
          name={name}
          className="custom-control-input"
          defaultChecked
        ></input>
        <label className="custom-control-label font-italic" htmlFor={id}>
          {value}
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
      ></input>
      <label className="custom-control-label font-italic" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default SettingsRadioInput;

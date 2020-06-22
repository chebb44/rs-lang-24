import React from 'react';

const SettingsCheckboxInput = ({ item }) => {
  const { id, value, defaultChecked } = item;
  if (defaultChecked) {
    return (
      <div className="custom-control custom-checkbox text-left ml-5">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          defaultChecked
        ></input>
        <label className="custom-control-label font-italic" htmlFor={id}>
          {value}
        </label>
      </div>
    );
  }
  return (
    <div className="custom-control custom-checkbox text-left ml-5">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        defaultChecked
      ></input>
      <label className="custom-control-label font-italic" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default SettingsCheckboxInput;

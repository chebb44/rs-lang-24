import React from 'react';

const SettingsCheckboxInput = ({ item }) => {
  const { id, value, defaultChecked, func } = item;
  if (defaultChecked && func) {
    return (
      <div className="custom-control custom-checkbox text-left ml-5 mb-1">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          defaultChecked
          onChange={func}
        ></input>
        <label className="custom-control-label" htmlFor={id}>
          {value}
        </label>
      </div>
    );
  }
  return (
    <div className="custom-control custom-checkbox text-left ml-5 mb-1">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        onChange={func}
      ></input>
      <label className="custom-control-label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default SettingsCheckboxInput;

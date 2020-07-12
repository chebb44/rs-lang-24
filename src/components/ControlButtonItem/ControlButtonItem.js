import React from 'react';
import './ControlButtonItem.scss';

const ControlButtonItem = ({ item }) => {
  const { icon, func, title } = item;

  return (
    <span data-title={title}>
      <button className="control-buttons__item" onClick={func}>
        <img src={icon} alt="button-learn" />
      </button>
    </span>
  );
};

export default ControlButtonItem;

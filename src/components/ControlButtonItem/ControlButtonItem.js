import React from 'react';
import './ControlButtonItem.scss';

const ControlButtonItem = ({ item }) => {
  const { icon, func } = item;

  return (
    <button className="control-buttons__item" onClick={func}>
      <img src={icon} alt="button-learn" />
    </button>
  );
};

export default ControlButtonItem;

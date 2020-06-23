import React from 'react';
import './LearnCardButton.scss';

const LearnCardButton = ({ icon, func }) => {
  return (
    <button className="button-wrapper__learn" onClick={func}>
      <img src={icon} alt="button-learn" />
    </button>
  );
};

export default LearnCardButton;

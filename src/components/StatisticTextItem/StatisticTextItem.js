import React from 'react';
import './StatisticTextItem.scss';

const StatisticTextItem = ({ text, value, icon }) => {
  return (
    <div className="statistic-item-wrapper">
      <p className="statistic-item">
        <span>{icon}</span>
        {text}&nbsp;
        <span>{value}</span>
      </p>
    </div>
  );
};

export default StatisticTextItem;

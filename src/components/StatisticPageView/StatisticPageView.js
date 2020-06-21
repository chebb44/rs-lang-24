import React from 'react';
import StatisticTextItem from '../StatisticTextItem/StatisticTextItem';
import './StatisticPageView.scss';
import london from './../../assets/img/england_PNG72.png';

export const StatisticPageView = ({ statisticItemList }) => {
  return (
    <div className="statistic-wrapper">
      <div>
        <div className="statistic-today">
          <h5 className="statistic-today__title">Сегодня</h5>
          {statisticItemList.map((item, index) => (
            <StatisticTextItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="statistic-full">
        <h5 className="statistic-today__title">За всё время</h5>
      </div>
      <img
        className="statistic-today__london-image"
        src={london}
        alt="london"
      />
    </div>
  );
};

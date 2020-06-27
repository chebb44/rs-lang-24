import React from 'react';
import './SprintStatistic.scss';
import { SprintStatisticItem } from './../SprintStatisticItem/SprintStatisticItem';
import { UniversalButton } from './../../../../../components/UniversalButton/UniversalButton';
export const SprintStatistic = ({ redirectToStartScreen, gameStat }) => {
  console.log('SprintStatistic -> gameStat', gameStat);
  const statArray = [];
  for (const key in gameStat) {
    if (gameStat.hasOwnProperty(key)) {
      statArray.push({ date: key, data: gameStat[key] });
    }
  }
  console.log('SprintStatistic -> statArray', statArray);

  return (
    <div className="sprint-statistic">
      <div className="sprint-stat-header">
        <h3>Статистика</h3>
        <UniversalButton
          onClickHandler={redirectToStartScreen}
          buttonText="Вернуться"
          extraClasses="m-1 sprint-stat-close-btn"
        />
      </div>
      <div className="sprint-stat-container">
        {statArray.length > 0 ? (
          statArray.map((statArray, i) => {
            return <SprintStatisticItem key={i} dayStat={statArray} />;
          })
        ) : (
          <h4>Статистика пока не собрана</h4>
        )}
      </div>
    </div>
  );
};

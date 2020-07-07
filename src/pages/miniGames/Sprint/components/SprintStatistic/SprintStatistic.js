import React from 'react';
import './SprintStatistic.scss';
import { SprintStatisticItem } from './../SprintStatisticItem/SprintStatisticItem';
import { UniversalButton } from './../../../../../components/UniversalButton/UniversalButton';
import { CSSTransition } from 'react-transition-group';

export const SprintStatistic = ({ redirectToStartScreen, gameStat }) => {
  const statArray = [];
  for (const key in gameStat) {
    if (gameStat.hasOwnProperty(key)) {
      statArray.push({ date: key, data: gameStat[key] });
    }
  }
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="sprint-fade"
      timeout={400}
      unmountOnExit={true}
    >
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
    </CSSTransition>
  );
};

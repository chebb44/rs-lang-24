import React from 'react';
import './SprintStatistic.scss';
import { SprintStatisticItem } from './../SprintStatisticItem/SprintStatisticItem';
import { UniversalButton } from './../../../../../components/UniversalButton/UniversalButton';
export const SprintStatistic = ({ redirectToStartScreen }) => {
  return (
    <div className="sprint-statistic">
      <UniversalButton
        onClickHandler={redirectToStartScreen}
        buttonText="Вернуться"
        extraClasses="m-1 sprint-stat-btn"
      />
      <SprintStatisticItem />
    </div>
  );
};

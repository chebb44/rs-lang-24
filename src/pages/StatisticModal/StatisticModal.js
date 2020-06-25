import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import { actionStatisticModal } from '../../reducers/appState/appStateActions';
import { StatisticModalView } from '../../components/StatisticModalView/StatisticModalView';
import { actionClearAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';

export const StatisticModal = () => {
  const { visibleStatisticModal } = useSelector(appStateSelector);
  const { shortStatistic } = useSelector(statisticStateSelector);
  const dispatch = useDispatch();
  const hideStatisticModal = useCallback(() => {
    dispatch(actionStatisticModal(false));
    dispatch(actionClearAnswerAccuracy());
  }, [dispatch]);

  if (!visibleStatisticModal) return null;

  return (
    <StatisticModalView
      statistic={shortStatistic}
      hideStatisticModal={hideStatisticModal}
    />
  );
};

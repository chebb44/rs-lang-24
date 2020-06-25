import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { statisticStateSelector } from '../../reducers/statisticReducer/statiscticReducer';
import {
  actionSetIsStatisticModalShown,
  actionSetIsMaxCardsModalShown,
} from '../../reducers/appState/appStateActions';
import { StatisticModalView } from '../../components/StatisticModalView/StatisticModalView';
import { actionClearAnswerAccuracy } from '../../reducers/learnSettings/learnSettingsActions';

export const StatisticModal = () => {
  const { isStatisticModalShown } = useSelector(appStateSelector);
  const { shortStatistic } = useSelector(statisticStateSelector);
  const dispatch = useDispatch();
  const hideStatisticModal = useCallback(() => {
    dispatch(actionSetIsStatisticModalShown(false));
    dispatch(actionSetIsMaxCardsModalShown(true));
    //dispatch(actionClearAnswerAccuracy([]));
  }, [dispatch]);

  if (!isStatisticModalShown) return null;

  return (
    <StatisticModalView
      statistic={shortStatistic}
      hideStatisticModal={hideStatisticModal}
    />
  );
};

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearningContainer } from '../../components/LearningContainer/LearningContainer';
import { StatisticModal } from '../StatisticModal/StatisticModal';
import { MaxCardsModal } from '../MaxCardsModal/MaxCardsModal';
import SettingsModal from '../../pages/SettingsModal/SettingsModal';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionSetIsMaxCardsModalShown } from '../../reducers/appState/appStateActions';

export const LearnPage = () => {
  const { lastFinishedLearningDate } = useSelector(learnCardSettingsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      lastFinishedLearningDate &&
      lastFinishedLearningDate.getDate() === new Date().getDate() &&
      lastFinishedLearningDate.getMonth() === new Date().getMonth()
    ) {
      dispatch(actionSetIsMaxCardsModalShown(true));
    } else {
      dispatch(actionSetIsMaxCardsModalShown(false));
    }
  }, [lastFinishedLearningDate, dispatch]);

  return (
    <div className="learn-page">
      <SettingsModal />
      <LearningContainer />
      <StatisticModal />
      <MaxCardsModal />
    </div>
  );
};

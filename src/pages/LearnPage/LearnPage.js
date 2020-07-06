import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearningContainer } from '../../components/LearningContainer/LearningContainer';
import { StatisticModal } from '../StatisticModal/StatisticModal';
import { MaxCardsModal } from '../MaxCardsModal/MaxCardsModal';
import SettingsModal from '../../pages/SettingsModal/SettingsModal';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionSetIsMaxCardsModalShown } from '../../reducers/appState/appStateActions';
import { getDateByString } from '../../utilities/getDateStringByDate';
import './LearnPage.scss';
import london from './../../assets/img/england_PNG72.png';

export const LearnPage = () => {
  const { lastFinishedLearningDate } = useSelector(learnCardSettingsSelector);
  const lastLearningDate =
    getDateByString(lastFinishedLearningDate).getDate() ||
    new Date().setDate(new Date().getDate() - 1);
  const lastLearningMonth =
    getDateByString(lastFinishedLearningDate).getMonth() ||
    new Date().setMonth(new Date().getMonth());
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      lastFinishedLearningDate &&
      lastLearningDate === new Date().getDate() &&
      lastLearningMonth === new Date().getMonth()
    ) {
      dispatch(actionSetIsMaxCardsModalShown(true));
    } else {
      dispatch(actionSetIsMaxCardsModalShown(false));
    }
  }, [lastFinishedLearningDate, lastLearningDate, lastLearningMonth, dispatch]);

  return (
    <div className="learn-page">
      <SettingsModal />
      <LearningContainer />
      <StatisticModal />
      <MaxCardsModal />
      <img className="learn-page__london-image" src={london} alt="london" />
    </div>
  );
};

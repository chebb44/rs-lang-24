import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearningContainer } from '../../components/LearningContainer/LearningContainer';
import { StatisticModal } from '../StatisticModal/StatisticModal';
import { MaxCardsModal } from '../MaxCardsModal/MaxCardsModal';
import SettingsModal from '../../pages/SettingsModal/SettingsModal';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionSetIsMaxCardsModalShown } from '../../reducers/appState/appStateActions';
import { parseLastFinishedLearningDate } from '../../utilities/learnPage/parseLastFinishedLearningDate';
import './LearnPage.scss';
import london from './../../assets/img/england_PNG72.png';
import { CSSTransition } from 'react-transition-group';

export const LearnPage = () => {
  const { lastFinishedLearningDate } = useSelector(learnCardSettingsSelector);
  const [lastLearningDate, lastLearningMonth] = parseLastFinishedLearningDate(
    lastFinishedLearningDate,
  );
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
    <CSSTransition
      in={true}
      appear={true}
      classNames="sprint-fade"
      timeout={400}
      unmountOnExit={true}
    >
      <div className="learn-page">
        <SettingsModal />
        <LearningContainer />
        <StatisticModal />
        <MaxCardsModal />
        <img className="learn-page__london-image" src={london} alt="london" />
      </div>
    </CSSTransition>
  );
};

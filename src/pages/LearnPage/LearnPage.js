import React from 'react';
import { LearningContainer } from '../../components/LearningContainer/LearningContainer';
import { StatisticModal } from '../StatisticModal/StatisticModal';
import { MaxCardsModal } from '../MaxCardsModal/MaxCardsModal';

export const LearnPage = () => {
  return (
    <div className="learn-page">
      <LearningContainer />
      <StatisticModal />
      <MaxCardsModal />
    </div>
  );
};

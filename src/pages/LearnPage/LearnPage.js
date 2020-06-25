import React from 'react';
import { LearningContainer } from '../../components/LearningContainer/LearningContainer';
import { StatisticModal } from '../StatisticModal/StatisticModal';

export const LearnPage = () => {
  return (
    <div className="learn-page">
      <LearningContainer />
      <StatisticModal />
    </div>
  );
};

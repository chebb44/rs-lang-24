import React from 'react';
import { useSelector } from 'react-redux';
import { learnCardSelector } from './../../reducers/learnCard/learnCardReducer';
import { learnSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import './LearnPage.scss';

export const LearnPage = () => {
  const learnCard = useSelector(learnCardSelector);
  const { learnCardSettings } = useSelector(learnSettingsSelector);

  return (
    <div className="learn-page">
      <LearnCard
        learnCardData={learnCard}
        learnCardSettingsData={learnCardSettings}
      />
    </div>
  );
};

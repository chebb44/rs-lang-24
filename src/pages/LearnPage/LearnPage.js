import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardSelector } from './../../reducers/learnCard/learnCardReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const learnCard = useSelector(learnCardSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);

  const handleCheckButtonClick = () => {
    setIsCheckButtonClicked(!isCheckButtonClicked);
  };

  return (
    <div className="learn-page">
      <LearnCard
        learnCardData={learnCard}
        learnCardSettingsData={learnCardSettings}
        isCheckButtonClicked={isCheckButtonClicked}
        handleCheckButtonClick={handleCheckButtonClick}
      />
      <CheckWordButton onCheckButtonClick={handleCheckButtonClick} />
    </div>
  );
};

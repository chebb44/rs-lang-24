import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardSelector } from './../../reducers/learnCard/learnCardReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { LearnCardArrowNext } from '../../components/LearnCardArrows/LearnCardArrowNext';
import { LearnCardArrowPrevious } from '../../components/LearnCardArrows/LearnCardArrowPrevious';
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
      <div className="learn-page__flipping-container">
        <LearnCardArrowPrevious />
        <LearnCard
          learnCardData={learnCard}
          learnCardSettingsData={learnCardSettings}
          isCheckButtonClicked={isCheckButtonClicked}
          handleCheckButtonClick={handleCheckButtonClick}
        />
        <LearnCardArrowNext />
      </div>
      <CheckWordButton onCheckButtonClick={handleCheckButtonClick} />
    </div>
  );
};

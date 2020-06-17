import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { learnCardSelector } from './../../reducers/learnCard/learnCardReducer';
import { learnSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { LearnCard } from '../../components/LearnCard/LearnCard';
import { CheckWordButton } from '../../components/CheckWordButton/CheckWordButton';
import './LearnPage.scss';

export const LearnPage = () => {
  const [isWordSubmitted, setIsWordSubmitted] = useState(false);
  const learnCard = useSelector(learnCardSelector);
  const { learnCardSettings } = useSelector(learnSettingsSelector);

  const wordSubmissionHandler = useCallback(() => {
    setIsWordSubmitted(!isWordSubmitted);
  }, [isWordSubmitted]);

  return (
    <div className="learn-page">
      <LearnCard
        learnCardData={learnCard}
        learnCardSettingsData={learnCardSettings}
        isWordSubmitted={isWordSubmitted}
        onAudiosEnd={wordSubmissionHandler}
      />
      <CheckWordButton onCheckButtonClick={wordSubmissionHandler} />
    </div>
  );
};

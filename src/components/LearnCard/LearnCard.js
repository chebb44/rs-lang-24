import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardInput } from '../LearnCardInput/LearnCardInput';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardAudio } from '../LearnCardAudio/LearnCardAudio';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import {
  actionUpdateSubmissionFlag,
  actionUpdateCurrentAudio,
} from '../../reducers/learnCard/learnCardActions';
import './LearnCard.scss';
import { DescriptionWord } from './../DescriptionWord/DescriptionWord';
import { submitWordFunction } from '../../utilities/learnCard/submitWordFunction';

export const LearnCard = ({ learnCard, learnCardSettings }) => {
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const {
    enteredWord,
    isWordSubmitted,
    isAnswerShown,
    audiosToPlay,
    currentAudio,
    isWordCorrect,
  } = useSelector(learnCardParametersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (learnCard) {
      setLearnCardFormatted(formatLearnCardText(learnCard));
    }
  }, [learnCard]);

  const handleNextAudio = () => {
    const currentAudioIndex = audiosToPlay.indexOf(currentAudio);
    if (currentAudioIndex === audiosToPlay.length - 1) {
      if (isWordSubmitted) {
        dispatch(actionUpdateSubmissionFlag(false));
      }
    } else {
      dispatch(actionUpdateCurrentAudio(audiosToPlay[currentAudioIndex + 1]));
    }
  };

  const handleWordSubmitOnEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch(actionUpdateSubmissionFlag(true));
    }
  };

  const handleWordSubmitOnClick = () => {
    if (isWordSubmitted) {
      submitWordFunction(enteredWord, learnCard, learnCardSettings);
      if (!learnCardSettings.isAudioOn) {
        setTimeout(() => {
          dispatch(actionUpdateSubmissionFlag(false));
        }, 6000);
      }
    }
  };
  useEffect(handleWordSubmitOnClick, [isWordSubmitted, dispatch]);

  if (!learnCardFormatted) return null;
  return (
    learnCardFormatted && (
      <>
        <div className="card learn-card" onKeyPress={handleWordSubmitOnEnter}>
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="card-body">
                <LearnCardImg
                  isImageOn={learnCardSettings.isImageOn}
                  imageSrc={learnCardFormatted.image}
                />
                <LearnCardInput
                  originalWord={learnCardFormatted.word}
                  isWordSubmitted={isWordSubmitted}
                  isAnswerShown={isAnswerShown}
                />
                <LearnCardTranscription
                  isTranscriptionOn={learnCardSettings.isTranscriptionOn}
                  transcription={learnCardFormatted.transcription}
                />
                <LearnCardTranslation
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  translation={learnCardFormatted.wordTranslate}
                  isWordSubmitted={isWordSubmitted}
                />
                <DescriptionWord
                  isOn={learnCardSettings.isExampleOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  text={learnCardFormatted.textExample}
                  textTranslation={learnCardFormatted.textExampleTranslate}
                  isWordSubmitted={isWordSubmitted}
                  isWordCorrect={isWordCorrect}
                  tag="b"
                />
                <DescriptionWord
                  isOn={learnCardSettings.isMeaningOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  text={learnCardFormatted.textMeaning}
                  textTranslation={learnCardFormatted.textMeaningTranslate}
                  isWordSubmitted={isWordSubmitted}
                  isWordCorrect={isWordCorrect}
                  tag="i"
                />
              </div>
            </div>
          </div>
        </div>
        <LearnCardAudio
          currentAudio={currentAudio}
          handleNextAudio={handleNextAudio}
          isAudioOn={learnCardSettings.isAudioOn}
        />
      </>
    )
  );
};

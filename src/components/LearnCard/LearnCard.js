import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardInput } from '../LearnCardInput/LearnCardInput';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardAudio } from '../LearnCardAudio/LearnCardAudio';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import { actionUpdateCurrentAudio } from '../../reducers/learnCard/learnCardActions';
import './LearnCard.scss';
import { DescriptionWord } from './../DescriptionWord/DescriptionWord';
import { submitWordFunction } from '../../utilities/learnCard/submitWordFunction';

export const LearnCard = ({ learnCard, learnCardSettings }) => {
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const {
    enteredWord,
    isTranslationShown,
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
    if (currentAudioIndex <= audiosToPlay.length - 1) {
      dispatch(actionUpdateCurrentAudio(audiosToPlay[currentAudioIndex + 1]));
    }
  };

  const handleWordSubmitOnEnter = (event) => {
    if (event.key === 'Enter') {
      submitWordFunction(enteredWord, learnCard, learnCardSettings);
    }
  };

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
                  isAnswerShown={isAnswerShown}
                />
                <LearnCardTranscription
                  isTranscriptionOn={learnCardSettings.isTranscriptionOn}
                  transcription={learnCardFormatted.transcription}
                />
                <LearnCardTranslation
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  translation={learnCardFormatted.wordTranslate}
                  isTranslationShown={isTranslationShown}
                />
                <DescriptionWord
                  isOn={learnCardSettings.isExampleOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  text={learnCardFormatted.textExample}
                  textTranslation={learnCardFormatted.textExampleTranslate}
                  isTranslationShown={isTranslationShown}
                  isWordCorrect={isWordCorrect}
                  tag="b"
                />
                <DescriptionWord
                  isOn={learnCardSettings.isMeaningOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  text={learnCardFormatted.textMeaning}
                  textTranslation={learnCardFormatted.textMeaningTranslate}
                  isTranslationShown={isTranslationShown}
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

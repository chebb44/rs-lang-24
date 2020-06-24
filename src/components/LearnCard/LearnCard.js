import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardInput } from '../LearnCardInput/LearnCardInput';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardAudio } from '../LearnCardAudio/LearnCardAudio';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateSubmissionFlag,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
} from '../../reducers/learnCard/learnCardActions';
import {
  actionUpdatePrevPageGroupWordNumber,
  actionAddAnswerAccuracy,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionMarkWord } from '../../store/actionsForSaga';
import { LEARNED_WORD } from '../../sagas/constants';
import './LearnCard.scss';
import { DescriptionWord } from './../DescriptionWord/DescriptionWord';

export const LearnCard = ({
  learnCard,
  learnCardSettings,
  learnCardsLength,
}) => {
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const {
    enteredWord,
    isWordSubmitted,
    currentLearnCardIndex,
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
      submitWord();
      if (!learnCardSettings.isAudioOn) {
        setTimeout(() => {
          dispatch(actionUpdateSubmissionFlag(false));
        }, 6000);
      }
    }
  };
  useEffect(handleWordSubmitOnClick, [isWordSubmitted, dispatch]);

  const submitWord = () => {
    if (enteredWord.toLowerCase() === learnCard.word.toLowerCase()) {
      dispatch(actionUpdateWordCorrectFlag(true));
      dispatch(
        actionMarkWord({ wordId: learnCard._id, difficulty: LEARNED_WORD }),
      );
      dispatch(actionAddAnswerAccuracy(true));
      if (currentLearnCardIndex === learnCardsLength - 1)
        dispatch(actionUpdatePrevPageGroupWordNumber());
    } else {
      dispatch(actionAddAnswerAccuracy(false));
    }
    const audiosToPlay = obtainAudiosToPlay(learnCard, learnCardSettings);
    dispatch(actionUpdateAudiosToPlay(audiosToPlay));
    dispatch(actionUpdateCurrentAudio(audiosToPlay[0]));
  };

  if (!learnCardFormatted) return null;
  return (
    learnCardFormatted && (
      <>
        <div
          className="card m-3 learn-card"
          style={{ maxWidth: '540px' }}
          onKeyPress={handleWordSubmitOnEnter}
        >
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

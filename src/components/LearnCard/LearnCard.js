import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardInput } from '../LearnCardInput/LearnCardInput';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardExample } from '../LearnCardExample/LearnCardExample';
import { LearnCardMeaning } from '../LearnCardMeaning/LearnCardMeaning';
import { LearnCardAudio } from '../LearnCardAudio/LearnCardAudio';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import { buttonsFlagsSelector } from '../../reducers/learnCardButtons/learnCardButtonsReducer';
import { actionSetCheckButtonFlag } from '../../reducers/learnCardButtons/learnCardButtonsActions';
import { learnCardParametersSelector } from '../../reducers/learnCard/learnCardReducer';
import {
  actionUpdateWordCorrectFlag,
  actionUpdateSubmissionFlag,
  actionUpdateAudiosToPlay,
  actionUpdateCurrentAudio,
} from '../../reducers/learnCard/learnCardActions';
import './LearnCard.scss';

export const LearnCard = ({
  learnCard,
  learnCardSettings,
  isNextArrowClicked,
  handleNextArrowClick,
}) => {
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const enteredWord = useSelector(learnCardParametersSelector).enteredWord;
  const isWordSubmitted = useSelector(learnCardParametersSelector)
    .isWordSubmitted;
  const audiosToPlay = useSelector(learnCardParametersSelector).audiosToPlay;
  const currentAudio = useSelector(learnCardParametersSelector).currentAudio;
  const isShowAnswerButtonClicked = useSelector(buttonsFlagsSelector)
    .showAnswerButton;
  const dispatch = useDispatch();

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

  const handleWordSubmit = (event) => {
    if (event.key === 'Enter') {
      dispatch(actionUpdateSubmissionFlag(true));
    }
  };

  useEffect(() => {
    if (isWordSubmitted) {
      submitWord();
      dispatch(actionSetCheckButtonFlag(false));
      if (!learnCardSettings.isAudioOn) {
        setTimeout(() => {
          dispatch(actionUpdateSubmissionFlag(false));
        }, 6000);
      }
    }
  }, [isWordSubmitted]);

  const submitWord = () => {
    if (enteredWord.toLowerCase() === learnCard.word.toLowerCase()) {
      dispatch(actionUpdateWordCorrectFlag(true));
    }
    const audiosToPlay = obtainAudiosToPlay(learnCard, learnCardSettings);
    dispatch(actionUpdateAudiosToPlay(audiosToPlay));
    dispatch(actionUpdateCurrentAudio(audiosToPlay[0]));
  };

  useEffect(() => {
    if (learnCard) {
      setLearnCardFormatted(formatLearnCardText(learnCard));
    }
  }, [learnCard]);

  if (!learnCardFormatted) return null;
  return (
    learnCardFormatted && (
      <>
        <div
          className="card m-3 learn-card"
          style={{ maxWidth: '540px' }}
          onKeyPress={handleWordSubmit}
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
                  isShowAnswerButtonClicked={isShowAnswerButtonClicked}
                  isNextArrowClicked={isNextArrowClicked}
                  handleNextArrowClick={handleNextArrowClick}
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
                <LearnCardExample
                  isExampleOn={learnCardSettings.isExampleOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  example={learnCardFormatted.textExample}
                  exampleTranslation={learnCardFormatted.textExampleTranslate}
                  isWordSubmitted={isWordSubmitted}
                />
                <LearnCardMeaning
                  isMeaningOn={learnCardSettings.isMeaningOn}
                  isTranslationOn={learnCardSettings.isTranslationOn}
                  meaning={learnCardFormatted.textMeaning}
                  meaningTranslation={learnCardFormatted.textMeaningTranslate}
                  isWordSubmitted={isWordSubmitted}
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

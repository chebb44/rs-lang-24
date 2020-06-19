import React, { useState, useEffect } from 'react';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardInput } from '../LearnCardInput/LearnCardInput';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardExample } from '../LearnCardExample/LearnCardExample';
import { LearnCardMeaning } from '../LearnCardMeaning/LearnCardMeaning';
import { LearnCardAudio } from '../LearnCardAudio/LearnCardAudio';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import './LearnCard.scss';

export const LearnCard = ({
  learnCard,
  learnCardSettingsData,
  isCheckButtonClicked,
  handleCheckButtonClick,
  handleWordCheck,
}) => {
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const [audiosToPlay, setAudiosToPlay] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isWordSubmitted, setIsWordSubmitted] = useState(false);
  const [enteredWord, setEnteredWord] = useState('');
  const learnCardSettings = learnCardSettingsData;

  const handleInputChange = (input) => {
    setEnteredWord(input);
  };

  const handleAudioEnd = () => {
    const currentAudioIndex = audiosToPlay.indexOf(currentAudio);
    if (currentAudioIndex === audiosToPlay.length - 1) {
      setIsWordSubmitted(!isWordSubmitted);
      if (isCheckButtonClicked) {
        handleCheckButtonClick();
      }
    } else {
      setCurrentAudio(audiosToPlay[currentAudioIndex + 1]);
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') setIsWordSubmitted(!isWordSubmitted);
    if (enteredWord.toLowerCase() === learnCard.word.toLowerCase()) {
      handleWordCheck(true);
    } else {
      handleWordCheck(false);
    }
  };

  useEffect(() => {
    if (learnCard) {
      setLearnCardFormatted(formatLearnCardText(learnCard));
      const audiosToPlay = obtainAudiosToPlay(learnCard, learnCardSettings);
      setAudiosToPlay(audiosToPlay);
    }
  }, [learnCard, learnCardSettings]);

  const changeIsWordSubmitted = () => {
    if (isCheckButtonClicked) {
      setIsWordSubmitted(!isWordSubmitted);
    }
  };
  useEffect(changeIsWordSubmitted, [isCheckButtonClicked]);

  const changeCurrentAudio = () => {
    if (isWordSubmitted) {
      setCurrentAudio(audiosToPlay[0]);
    }
  };
  useEffect(changeCurrentAudio, [isWordSubmitted]);

  if (!learnCardFormatted) return null;
  return (
    learnCardFormatted && (
      <>
        <div
          className="card m-3 learn-card"
          style={{ maxWidth: '540px' }}
          onKeyPress={handleEnterPress}
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
                  enteredWord={enteredWord}
                  isWordSubmitted={isWordSubmitted}
                  onInputChange={handleInputChange}
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
        <LearnCardAudio currentAudio={currentAudio} onEnded={handleAudioEnd} />
      </>
    )
  );
};

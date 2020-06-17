import React, { useState, useEffect } from 'react';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import { obtainAudiosToPlay } from '../../utilities/learnCard/obtainAudiosToPlay';
import './LearnCard.scss';

export const LearnCard = ({
  learnCardData,
  learnCardSettingsData,
  isWordSubmitted,
  onAudiosEnd,
}) => {
  const [inputWord, setInputWord] = useState('');
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);
  const [audiosToPlay, setAudiosToPlay] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const learnCardSettings = learnCardSettingsData.learnCardSettings;

  const onAudioEndHandler = () => {
    const currentAudioIndex = audiosToPlay.indexOf(currentAudio);
    if (currentAudioIndex === audiosToPlay.length - 1) {
      onAudiosEnd();
    } else {
      setCurrentAudio(audiosToPlay[currentAudioIndex + 1]);
    }
  };

  useEffect(() => {
    setLearnCardFormatted(formatLearnCardText(learnCardData.learnCard));
    const audiosToPlay = obtainAudiosToPlay(
      learnCardData.learnCard,
      learnCardSettingsData.learnCardSettings,
    );
    setAudiosToPlay(audiosToPlay);
  }, [learnCardData]);

  useEffect(() => {
    if (isWordSubmitted) {
      setCurrentAudio(audiosToPlay[0]);
    }
  }, [isWordSubmitted]);

  if (!learnCardFormatted) return null;
  return (
    learnCardFormatted && (
      <>
        <div className="card m-3" style={{ maxWidth: '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="card-body">
                {learnCardSettings.isImageOn && (
                  <img
                    src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${learnCardFormatted.image}`}
                    className="card-img h-100 ml-2 mb-4"
                    alt="Word association"
                  />
                )}
                <p className="card-text">
                  <input
                    className="form-control m-auto"
                    type="text"
                    style={{
                      width: `calc(4px + 12.5px * ${learnCardFormatted.word.length})`,
                    }}
                    autoFocus
                    value={inputWord}
                    onChange={(event) => setInputWord(event.target.value)}
                  />
                </p>
                {learnCardSettings.isTranscriptionOn && (
                  <p className="card-text">
                    {learnCardFormatted.transcription}
                  </p>
                )}
                {learnCardSettings.isTranslationOn && isWordSubmitted && (
                  <p className="card-text">
                    {learnCardFormatted.wordTranslate}
                  </p>
                )}
                {learnCardSettings.isExampleOn && (
                  <p className="card-text">{learnCardFormatted.textExample}</p>
                )}
                {learnCardSettings.isExampleOn &&
                  learnCardSettings.isTranslationOn &&
                  isWordSubmitted && (
                    <p className="card-text">
                      {learnCardFormatted.textExampleTranslate}
                    </p>
                  )}
                {learnCardSettings.isMeaningOn && (
                  <p className="card-text">{learnCardFormatted.textMeaning}</p>
                )}
                {learnCardSettings.isMeaningOn &&
                  learnCardSettings.isTranslationOn &&
                  isWordSubmitted && (
                    <p className="card-text">
                      {learnCardFormatted.textMeaningTranslate}
                    </p>
                  )}
              </div>
            </div>
          </div>
        </div>
        <audio
          autoPlay
          src={
            currentAudio &&
            `https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${currentAudio}`
          }
          onEnded={onAudioEndHandler}
        />
      </>
    )
  );
};

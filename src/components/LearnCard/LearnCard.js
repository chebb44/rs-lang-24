import React, { useState, useEffect } from 'react';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import './LearnCard.scss';

export const LearnCard = ({ learnCardData, learnCardSettingsData }) => {
  const [inputWord, setInputWord] = useState('');
  const [learnCardFormatted, setLearnCardFormatted] = useState(null);

  useEffect(() => {
    setLearnCardFormatted(formatLearnCardText(learnCardData.learnCard));
  }, [learnCardData]);

  if (!learnCardFormatted) return null;

  return (
    learnCardFormatted && (
      <div className="card m-3" style={{ maxWidth: '540px' }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              {learnCardSettingsData.learnCardSettings.isImageOn && (
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
              {learnCardSettingsData.learnCardSettings.isTranscriptionOn && (
                <p className="card-text">{learnCardFormatted.transcription}</p>
              )}
              {learnCardSettingsData.learnCardSettings.isTranslationOn && (
                <p className="card-text">{learnCardFormatted.wordTranslate}</p>
              )}
              {learnCardSettingsData.learnCardSettings.isExampleOn && (
                <p className="card-text">{learnCardFormatted.textExample}</p>
              )}
              {learnCardSettingsData.learnCardSettings.isExampleOn && (
                <p className="card-text">
                  {learnCardFormatted.textExampleTranslate}
                </p>
              )}
              {learnCardSettingsData.learnCardSettings.isMeaningOn && (
                <p className="card-text">{learnCardFormatted.textMeaning}</p>
              )}
              {learnCardSettingsData.learnCardSettings.isMeaningOn && (
                <p className="card-text">
                  {learnCardFormatted.textMeaningTranslate}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

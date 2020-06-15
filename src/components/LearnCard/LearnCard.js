import React, { useState } from 'react';
import { formatLearnCardText } from '../../utilities/learnCard/formatLearnCardText';
import './LearnCard.scss';

export const LearnCard = ({ learnCard, learnCardSettings }) => {
  const [inputWord, setInputWord] = useState('');

  const learnCardFormatted = formatLearnCardText(learnCard);

  return (
    <div className="card m-3" style={{ maxWidth: '540px' }}>
      <div className="row no-gutters">
        {learnCardSettings.isImageOn && (
          <div className="col-md-4 m-auto">
            <img
              src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${learnCardFormatted.image}`}
              className="card-img h-100 ml-2"
              alt="Word association"
            />
          </div>
        )}
        <div className={learnCardSettings.isImageOn ? 'col-md-8' : 'col-md-12'}>
          <div className="card-body">
            <p className="card-text">
              <input
                className="form-control"
                type="text"
                style={{
                  width: `calc(24px + 4px * ${learnCardFormatted.word.length})`,
                }}
                autoFocus
                value={inputWord}
                onChange={(event) => setInputWord(event.target.value)}
              />
            </p>
            {learnCardSettings.isTranscriptionOn && (
              <p className="card-text">{learnCardFormatted.transcription}</p>
            )}
            {learnCardSettings.isTranslationOn && (
              <p className="card-text">{learnCardFormatted.wordTranslate}</p>
            )}
            {learnCardSettings.isExampleOn && (
              <p className="card-text">{learnCardFormatted.textExample}</p>
            )}
            {learnCardSettings.isExampleOn && (
              <p className="card-text">
                {learnCardFormatted.textExampleTranslate}
              </p>
            )}
            {learnCardSettings.isMeaningOn && (
              <p className="card-text">{learnCardFormatted.textMeaning}</p>
            )}
            {learnCardSettings.isMeaningOn && (
              <p className="card-text">
                {learnCardFormatted.textMeaningTranslate}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

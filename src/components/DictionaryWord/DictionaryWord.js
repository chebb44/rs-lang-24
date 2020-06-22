import React from 'react';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { formatLearnCardText } from './../../utilities/learnCard/formatLearnCardText';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardExample } from './../LearnCardExample/LearnCardExample';
import { LearnCardImg } from './../LearnCardImg/LearnCardImg';
import { LearnCardMeaning } from './../LearnCardMeaning/LearnCardMeaning';
import { LearnCardLearnWord } from '../LearnCardLearnWord/LearnCardLearnWord';
import './DictionaryWord.scss';
import { UniversalButton } from './../UniversalButton/UniversalButton';
export const DictionaryWord = ({
  word,
  learnCardSettings,
  buttonText,
  buttonCallback,
  wordId,
}) => {
  const formattedCardData = formatLearnCardText(word);
  return (
    <div className="word-card card-body border-top">
      <LearnCardLearnWord word={formattedCardData.word} />
      <div className="d-flex align-items-center justify-content-center">
        <LearnCardImg
          height="h-50"
          isImageOn={learnCardSettings.isImageOn}
          imageSrc={formattedCardData.image}
        />
        <div className="description-block ml-5 mr-5 flex-grow-1">
          <LearnCardTranslation
            isTranslationOn={learnCardSettings.isTranslationOn}
            translation={formattedCardData.wordTranslate}
            isWordSubmitted={true}
            dictionaryMode={true}
          />
          <LearnCardTranscription
            transcription={formattedCardData.transcription}
            isTranscriptionOn={learnCardSettings.isTranscriptionOn}
          />
          <LearnCardExample
            isExampleOn={learnCardSettings.isExampleOn}
            isTranslationOn={learnCardSettings.isTranslationOn}
            example={formattedCardData.textExample}
            exampleTranslation={formattedCardData.textExampleTranslate}
            isWordSubmitted={true}
          />
          <LearnCardMeaning
            isMeaningOn={learnCardSettings.isMeaningOn}
            isTranslationOn={learnCardSettings.isTranslationOn}
            meaning={formattedCardData.textMeaning}
            meaningTranslation={formattedCardData.textMeaningTranslate}
            isWordSubmitted={true}
          />
        </div>
        <UniversalButton
          buttonText={buttonText}
          onClickHandler={buttonCallback(wordId)}
        />
      </div>
    </div>
  );
};

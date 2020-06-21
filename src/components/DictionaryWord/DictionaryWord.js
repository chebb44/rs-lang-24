import React from 'react';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { formatLearnCardText } from './../../utilities/learnCard/formatLearnCardText';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardExample } from './../LearnCardExample/LearnCardExample';
import { LearnCardImg } from './../LearnCardImg/LearnCardImg';
import { LearnCardMeaning } from './../LearnCardMeaning/LearnCardMeaning';
import { LearnCardLearnWord } from '../LearnCardLearnWord/LearnCardLearnWord';

export const DictionaryWord = ({ word, learnCardSettings }) => {
  console.log('DictionaryWord -> word', word);
  const formattedCardData = formatLearnCardText(word);
  console.log('DictionaryWord -> formattedCardData', formattedCardData);
  return (
    <div className="word-card card-body">
      <LearnCardLearnWord word={formattedCardData.word} />
      <LearnCardImg
        isImageOn={learnCardSettings.isImageOn}
        imageSrc={formattedCardData.image}
      />
      <LearnCardTranscription
        transcription={formattedCardData.transcription}
        isTranscriptionOn={learnCardSettings.isTranscriptionOn}
      />
      <LearnCardTranslation
        isTranslationOn={learnCardSettings.isTranslationOn}
        translation={formattedCardData.wordTranslate}
        isWordSubmitted={true}
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
  );
};

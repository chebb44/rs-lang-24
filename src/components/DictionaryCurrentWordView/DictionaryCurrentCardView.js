import React from 'react';
import { FILES_URL } from '../../utilities/network/networkConstants';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { DescriptionWord } from '../DescriptionWord/DescriptionWord';
import './DictionaryCurrentCardView.scss';
import { capitalizeFirstLetter } from '../../pages/miniGames/SpeakIt/SpeakItHepler';

const getWordFromTaggedText = (text, tag) => {
  const regexpAll = new RegExp(`<${tag}>(\\w+)<\\/${tag}>`);
  const regexpTags = new RegExp(`<${tag}>|<\\/${tag}>`, 'g');
  const matches = text.match(regexpAll);
  const word = matches[1];
  const wordMask = word.replace(/\w/g, '_');
  const { index } = matches;
  const hidedText = text.replace(regexpTags, '').replace(word, wordMask);
  const firstHalf = text.slice(0, index);
  const secondHalf = hidedText.slice(index + word.length);
  return [firstHalf, word, secondHalf];
};

const DictionaryCurrentCardView = ({
  currentCard,
  learnCardSettings,
  statistic,
  buttonText,
  buttonCallback,
}) => {
  console.log(currentCard.userWord);
  const textMeaningArray = getWordFromTaggedText(currentCard.textMeaning, 'i');
  const textExampleArray = getWordFromTaggedText(currentCard.textExample, 'b');

  return (
    <div className="dictionary__current-card-view">
      <div className="current-card-view__picture">
        <img src={FILES_URL + currentCard.image} alt="current-word" />
      </div>
      <div className="current-card-view__information">
        <p className="card-text">
          <b>{capitalizeFirstLetter(currentCard.word)}</b>{' '}
          {currentCard.transcription}{' '}
          <b>{capitalizeFirstLetter(currentCard.wordTranslate)}</b>
        </p>
        <p className="card-meaning_title">Meaning</p>
        <div className="card-meaning">
          <p className="card-meaning_english">
            <span>{textMeaningArray[0]}</span>
            <b>{textMeaningArray[1]}</b>
            <span>{textMeaningArray[2]}</span>
          </p>
          <p className="card-meaning_russian">
            {currentCard.textMeaningTranslate}
          </p>
        </div>
        <p className="card-example_title">Example</p>
        <div className="card-example">
          <p className="card-example_english">
            <span>{textExampleArray[0]}</span>
            <b>{textExampleArray[1]}</b>
            <span>{textExampleArray[2]}</span>
          </p>
          <p className="card-example_russian">
            {currentCard.textExampleTranslate}
          </p>
        </div>
        {/*<LearnCardTranslation*/}
        {/*  isTranslationOn={learnCardSettings.isTranslationOn}*/}
        {/*  translation={currentCard.wordTranslate}*/}
        {/*  isWordSubmitted={true}*/}
        {/*  dictionaryMode={true}*/}
        {/*/>*/}
        {/*<LearnCardTranscription*/}
        {/*  transcription={currentCard.transcription}*/}
        {/*  isTranscriptionOn={learnCardSettings.isTranscriptionOn}*/}
        {/*/>*/}
        {/*<DescriptionWord*/}
        {/*  isOn={learnCardSettings.isMeaningOn}*/}
        {/*  isTranslationOn={learnCardSettings.isTranslationOn}*/}
        {/*  text={currentCard.textMeaning}*/}
        {/*  textTranslation={currentCard.textMeaningTranslate}*/}
        {/*  isWordSubmitted={true}*/}
        {/*  isWordCorrect={true}*/}
        {/*  tag="i"*/}
        {/*/>*/}
        {/*<DescriptionWord*/}
        {/*  isOn={learnCardSettings.isExampleOn}*/}
        {/*  isTranslationOn={learnCardSettings.isTranslationOn}*/}
        {/*  text={currentCard.textExample}*/}
        {/*  textTranslation={currentCard.textExampleTranslate}*/}
        {/*  isWordSubmitted={true}*/}
        {/*  isWordCorrect={true}*/}
        {/*  tag="b"*/}
        {/*/>*/}
        {/*<WordStat stat={word.userWord} />*/}
      </div>
    </div>
  );
};

export default DictionaryCurrentCardView;

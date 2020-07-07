import React from 'react';
import { FILES_URL } from '../../utilities/network/networkConstants';
import './DictionaryCurrentCardView.scss';
import { capitalizeFirstLetter } from '../../pages/miniGames/SpeakIt/SpeakItHepler';
import { getPlanRepeatDate } from '../../utilities/repeatLearn/getPlanRepeatDate';

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

const DictionaryCurrentCardView = ({ currentCard }) => {
  const {
    transcription,
    textMeaningTranslate,
    textExampleTranslate,
    userWord,
    textMeaning,
    textExample,
  } = currentCard;
  const textMeaningArray = getWordFromTaggedText(textMeaning, 'i');
  const textExampleArray = getWordFromTaggedText(textExample, 'b');
  return (
    <div className="dictionary__current-card-view">
      <div className="current-card-view__picture">
        <img src={FILES_URL + currentCard.image} alt="current-word" />
      </div>
      <div className="current-card-view__information">
        <p className="card-text">
          <b>{capitalizeFirstLetter(currentCard.word)}</b> {transcription}{' '}
          <b>{capitalizeFirstLetter(currentCard.wordTranslate)}</b>
        </p>
        <p className="card-meaning_title">Значение</p>
        <div className="card-meaning">
          <p className="card-meaning_english">
            <span>{textMeaningArray[0]}</span>
            <b>{textMeaningArray[1]}</b>
            <span>{textMeaningArray[2]}</span>
          </p>
          <p className="card-meaning_russian">{textMeaningTranslate}</p>
        </div>
        <p className="card-example_title">Пример</p>
        <div className="card-example">
          <p className="card-example_english">
            <span>{textExampleArray[0]}</span>
            <b>{textExampleArray[1]}</b>
            <span>{textExampleArray[2]}</span>
          </p>
          <p className="card-example_russian">{textExampleTranslate}</p>
        </div>
        <div className="card-statistics">
          <span>Повторов: {userWord.optional.sumOfRepeats}</span>{' '}
          {userWord.difficulty !== 'DELETED_WORD' &&
            userWord.difficulty !== 'NEXT_TRAIN_WORD' && (
              <span>
                Следующий:{' '}
                {getPlanRepeatDate({
                  difficulty: userWord.difficulty,
                  lastRepeatDate: userWord.optional.lastRepeatDate,
                }).toLocaleDateString()}
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default DictionaryCurrentCardView;

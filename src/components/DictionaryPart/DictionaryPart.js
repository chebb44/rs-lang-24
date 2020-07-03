import React, { useCallback, useEffect, useState } from 'react';
import './DictionaryPart.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { LearnCardImg } from '../LearnCardImg/LearnCardImg';
import { LearnCardTranslation } from '../LearnCardTranslation/LearnCardTranslation';
import { LearnCardTranscription } from '../LearnCardTranscription/LearnCardTranscription';
import { DescriptionWord } from '../DescriptionWord/DescriptionWord';
import { WordStat } from '../WordStat/WordStat';
import DictionaryCurrentCardView from '../DictionaryCurrentWordView/DictionaryCurrentCardView';
import DictionaryAllWordsList from '../DictionaryAllWordsList/DictionaryAllWordsList';
import { searchCardIndexInArray } from '../../pages/miniGames/SpeakIt/SpeakItHepler';

export const DictionaryPart = ({
  words,
  header,
  learnCardSettings,
  buttonText,
  buttonCallback,
}) => {
  const [currentCardDictionary, setCurrentCardDictionary] = useState(null);

  const onWordClick = useCallback(
    (event) => {
      const currentCardIndex = searchCardIndexInArray(
        event.currentTarget.dataset.wordid,
        words,
      );
      console.log('click on the word');
      buttonCallback(currentCardDictionary);
      setCurrentCardDictionary(words[currentCardIndex]);
    },
    [buttonCallback, currentCardDictionary, words],
  );

  return (
    <div className="dictionary-block">
      <h3 className="mt-3 mb-3">{header}</h3>
      {currentCardDictionary && (
        <DictionaryCurrentCardView
          currentCard={currentCardDictionary}
          learnCardSettings={learnCardSettings}
        />
      )}
      <DictionaryAllWordsList
        onWordClick={onWordClick}
        words={words}
        buttonText={buttonText}
        buttonCallback={buttonCallback}
      />
    </div>
  );
};

// {words.length > 0 ? (
//   <div className="words-container">
//     <TransitionGroup className="word-list">
//       {words.map((word) => (
//         <CSSTransition
//           appear={true}
//           key={word._id}
//           classNames="slide"
//           timeout={800}
//         >
//           <DictionaryWord
//             // key={word.id}
//             wordId={word._id}
//             word={word}
//             learnCardSettings={learnCardSettings}
//             header={header}
//             buttonText={buttonText}
//             buttonCallback={buttonCallback}
//           />
//         </CSSTransition>
//       ))}
//     </TransitionGroup>
//   </div>
// ) : (
//   <p>Слова отсутствуют</p>
// )}

//
// {audio: "files/05_0085.mp3"
//   audioExample: "files/05_0085_example.mp3"
//   audioMeaning: "files/05_0085_meaning.mp3"
//   group: 0
//   image: "files/05_0085.jpg"
//   page: 4
//   textExample: "A good <b>balance</b> between work and fun helps keep you healthy."
//   textExampleTranslate: "Хороший баланс между работой и весельем помогает поддерживать здоровье"
//   textMeaning: "<i>Balance</i> is when two or more things are equal."
//   textMeaningTranslate: "Баланс - это когда две или более вещи равны"
//   transcription: "[bǽləns]"
//   userWord: {difficulty: "LEARNED_WORD", optional: {…}}
//   word: "balance"
//   wordTranslate: "баланс"
//   wordsPerExampleSentence: 11
//   _id: "5e9f5ee35eb9e72bc21af4f2"}

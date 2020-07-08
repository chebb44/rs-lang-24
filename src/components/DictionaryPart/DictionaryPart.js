import React, { useCallback, useEffect, useState } from 'react';
import './DictionaryPart.scss';
import DictionaryCurrentCardView from '../DictionaryCurrentCardView/DictionaryCurrentCardView';
import DictionaryAllWordsList from '../DictionaryAllWordsList/DictionaryAllWordsList';
import {
  searchCardIndexInArray,
  setActiveCardInArray,
} from '../../pages/miniGames/SpeakIt/SpeakItHepler';
import DictionaryDummyCard from '../DictionaryDummyCard/DictionaryDummyCard';
import { CSSTransition } from 'react-transition-group';

export const DictionaryPart = ({
  words,
  header,
  buttonText,
  buttonCallback,
  pageInitialise,
}) => {
  const [currentCardDictionary, setCurrentCardDictionary] = useState(null);
  const [wordsDictionary, setWordsDictionary] = useState(words);
  const [pageInit, setPageInit] = useState(pageInitialise);
  const [lastHeader, setLastHeader] = useState('');
  const [dummyMessage, setDummyMessage] = useState('');

  const findRemovedWordIndex = useCallback((wordsDictionary, words) => {
    return wordsDictionary.findIndex((wordCard, index) => {
      return !!(words[index] && wordCard._id !== words[index]._id);
    });
  }, []);

  const removeCardFromLocalDictionary = useCallback((array, indexToDelete) => {
    const resultArray = [...array];
    resultArray.splice(indexToDelete, 1);
    setWordsDictionary(resultArray);
  }, []);

  useEffect(() => {
    if (lastHeader !== header) {
      setWordsDictionary(words);
      setPageInit(true);
      setLastHeader(header);
      setCurrentCardDictionary(null);
      setDummyMessage(
        words.length > 0
          ? 'Выберите слово для отображения подробной информациии'
          : 'В этом разделе словаря слов нет',
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header]);

  useEffect(() => {
    if (lastHeader === header && wordsDictionary.length !== words.length) {
      const indexToDelete = findRemovedWordIndex(wordsDictionary, words);
      removeCardFromLocalDictionary(wordsDictionary, indexToDelete);
    }
  }, [
    findRemovedWordIndex,
    header,
    lastHeader,
    pageInit,
    removeCardFromLocalDictionary,
    words,
    wordsDictionary,
  ]);

  const onWordClick = useCallback(
    (event) => {
      const currentCardIndex = searchCardIndexInArray(
        event.currentTarget.dataset.wordid,
        wordsDictionary,
      );
      setCurrentCardDictionary(wordsDictionary[currentCardIndex]);
      setWordsDictionary((wordsArray) =>
        setActiveCardInArray(currentCardIndex, wordsArray),
      );
    },
    [wordsDictionary],
  );

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="sprint-fade"
      timeout={400}
      unmountOnExit={true}
    >
      <div className="dictionary-block">
        <h3 className="mt-2 mb-2">{header}</h3>
        {currentCardDictionary ? (
          <DictionaryCurrentCardView currentCard={currentCardDictionary} />
        ) : (
          <DictionaryDummyCard message={dummyMessage} />
        )}
        <DictionaryAllWordsList
          onWordClick={onWordClick}
          words={wordsDictionary}
          buttonText={buttonText}
          buttonCallback={buttonCallback}
        />
      </div>
    </CSSTransition>
  );
};

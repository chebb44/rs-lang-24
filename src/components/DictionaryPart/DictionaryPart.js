import React from 'react';
import './DictionaryPart.scss';
import { DictionaryWord } from './../DictionaryWord/DictionaryWord';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const DictionaryPart = ({
  words,
  header,
  learnCardSettings,
  buttonText,
  buttonCallback,
}) => {
  return (
    <div className="dictionary-block">
      <h3 className="mt-3 mb-3"> {header}</h3>
      {words.length > 0 ? (
        <div className="words-container">
          <TransitionGroup className="word-list">
            {words.map((word) => (
              <CSSTransition
                appear={true}
                key={word._id}
                classNames="slide"
                timeout={800}
              >
                <DictionaryWord
                  // key={word.id}
                  wordId={word._id}
                  word={word}
                  learnCardSettings={learnCardSettings}
                  header={header}
                  buttonText={buttonText}
                  buttonCallback={buttonCallback}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ) : (
        <p>Слова отсутствуют</p>
      )}
    </div>
  );
};

import React from 'react';
import './SpeakItModalWindow.scss';

const SpeakItModalWindow = ({ onCloseModal, answers, endGame = false }) => {
  return (
    <div className="speak-it-modal__wrapper">
      <div className="speak-it-modal__background">
        <div className="speak-it-modal__window">
          {endGame && (
            <MarkupEndTheGame answers={answers} onCloseModal={onCloseModal} />
          )}
          {!endGame && <MarkupError onCloseModal={onCloseModal} />}
        </div>
      </div>
    </div>
  );
};

export default SpeakItModalWindow;

const MarkupEndTheGame = ({ onCloseModal, answers }) => {
  return (
    <React.Fragment>
      <p className="modal_title">Игра закончена</p>
      <p className="modal_text">Ваш результат:</p>
      <p className="modal_result">
        Угаданных слов: {answers.right}
        <br />
        Нераспознанных слов: {answers.wrong}
      </p>
      <button className="btn btn_modal" onClick={onCloseModal}>
        Закрыть
      </button>
    </React.Fragment>
  );
};

const MarkupError = ({ onCloseModal }) => {
  return (
    <React.Fragment>
      <p className="modal_title">Ошибка</p>
      <p className="modal_text">
        Ваш браузер не поддерживает распознавание речи
        <br />
        Для корректной работы игры используйте Google Chrome
      </p>
      <button className="btn btn_modal" onClick={onCloseModal}>
        Закрыть
      </button>
    </React.Fragment>
  );
};

import React from 'react';
import './SpeakItModalWindow.scss';

const SpeakItModalWindow = ({ onCloseModal, answers }) => {
  return (
    <div className="speak-it-modal__wrapper">
      <div className="speak-it-modal__background">
        <div className="speak-it-modal__window">
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
        </div>
      </div>
    </div>
  );
};

export default SpeakItModalWindow;

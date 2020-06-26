import React from 'react';
import './SpeakItModalWindow.scss';

const SpeakItModalWindow = ({ onCloseModal }) => {
  return (
    <div className="speak-it-modal__wrapper">
      <div className="speak-it-modal__background">
        <div className="speak-it-modal__window">
          <p className="modal_title">Заголовок модалки</p>
          <p className="modal_text">Ваш результат в этой игре:</p>
          <p className="modal_result">3 очка против 4 очков</p>
          <button className="btn btn_modal" onClick={onCloseModal}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default SpeakItModalWindow;

import React, { useEffect } from 'react';
import './AudioCallEndGameStatisticModal.scss';
import { AudioCallEndGameStatisticModalItem } from '../AudioCallEndGameStatisticModalItem/AudioCallEndGameStatisticModalItem';

export const AudioCallEndGameStatisticModal = ({
  trueAnswerStatistic,
  falseAnswerStatistic,
  redirectToStartScreen,
  saveStatistic,
  markWordsToNextTrain,
}) => {
  useEffect(() => {
    saveStatistic();
    markWordsToNextTrain();
  }, [markWordsToNextTrain, saveStatistic, trueAnswerStatistic]);
  return (
    <div className="modal-overlay">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable settings-modal">
        <div className="modal-content modal-content_audio-call">
          <div className="modal-body">
            <h6 className="text-left audio-call-end-game-statistic-modal-title mb-2">
              Ошибок
              <span className="audio-call-end-game-statistic-modal-title__value audio-call-end-game-statistic-modal-title__value_false">
                {falseAnswerStatistic.length}
              </span>
            </h6>
            {falseAnswerStatistic.map((item, index) => (
              <AudioCallEndGameStatisticModalItem item={item} key={index} />
            ))}
            <hr className="audio-call-end-game-statistic-modal-title__horizontal-line"></hr>
            <h6 className="text-left audio-call-end-game-statistic-modal-title mb-2">
              Знаю
              <span className="audio-call-end-game-statistic-modal-title__value audio-call-end-game-statistic-modal-title__value_true">
                {trueAnswerStatistic.length}
              </span>
            </h6>
            {trueAnswerStatistic.map((item, index) => (
              <AudioCallEndGameStatisticModalItem item={item} key={index} />
            ))}
          </div>
          <button
            className="btn audio-call-end-game-statistic-modal__button"
            onClick={redirectToStartScreen}
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

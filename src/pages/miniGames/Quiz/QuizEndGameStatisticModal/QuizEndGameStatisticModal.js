import React, { useEffect } from 'react';
import './QuizEndGameStatisticModal.scss';
import { QuizEndGameStatisticModalItem } from '../QuizEndGameStatisticModalItem/QuizEndGameStatisticModalItem';

export const QuizEndGameStatisticModal = ({
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
        <div className="modal-content modal-content_quiz">
          <div className="modal-body">
            <h6 className="text-left quiz-end-game-statistic-modal-title mb-2">
              Ошибок
              <span className="quiz-end-game-statistic-modal-title__value quiz-end-game-statistic-modal-title__value_false">
                {falseAnswerStatistic.length}
              </span>
            </h6>
            {falseAnswerStatistic.map((item, index) => (
              <QuizEndGameStatisticModalItem item={item} key={index} />
            ))}
            <hr className="quiz-end-game-statistic-modal-title__horizontal-line"></hr>
            <h6 className="text-left quiz-end-game-statistic-modal-title mb-2">
              Знаю
              <span className="quiz-end-game-statistic-modal-title__value quiz-end-game-statistic-modal-title__value_true">
                {trueAnswerStatistic.length}
              </span>
            </h6>
            {trueAnswerStatistic.map((item, index) => (
              <QuizEndGameStatisticModalItem item={item} key={index} />
            ))}
          </div>
          <button
            className="btn quiz-end-game-statistic-modal__button"
            onClick={redirectToStartScreen}
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

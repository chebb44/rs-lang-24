import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  actionShowStatisticModal,
  actionHideStatisticModal,
} from '../../reducers/appState/appStateActions';

const StatisticModal = ({ visibleModal, statistic }) => {
  const dispatch = useDispatch();

  const {
    endCards,
    correctAnswer,
    newWords,
    longestSeriesCorrectAnswer,
  } = statistic;

  if (visibleModal === false) {
    return null;
  }

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Серия завершена</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => dispatch(actionHideStatisticModal())}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body text-left">
          <p className="border-bottom d-flex justify-content-between">
            Карточек завершено:&nbsp;<span>{endCards}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Правильные ответы:&nbsp;<span>{correctAnswer}%</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Новые слова:&nbsp;<span>{newWords}</span>
          </p>
          <p className="border-bottom d-flex justify-content-between">
            Самая длинная серия ответов:&nbsp;
            <span>{longestSeriesCorrectAnswer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const getStateToProps = (state) => {
  return {
    visibleModal: state.appState.visibleModal,
    statistic: state.appState.statistic,
  };
};

const mapDistatchToProps = {
  actionShowStatisticModal,
};

export default connect(getStateToProps, mapDistatchToProps)(StatisticModal);

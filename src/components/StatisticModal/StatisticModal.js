import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  actionShowStatisticModal,
  actionHideStatisticModal,
} from '../../reducers/appState/appStateActions';
import { SuccessSvg } from './success.js';
import './StatisticModal.scss';

const StatisticModal = ({ visibleStatisticModal, statistic }) => {
  const dispatch = useDispatch();

  const {
    endCards,
    correctAnswer,
    newWords,
    longestSeriesCorrectAnswer,
  } = statistic;

  if (visibleStatisticModal === false) {
    return null;
  }

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content modal_color">
        <div className="modal-header modal-header__statistic d-block">
          <div>
            <SuccessSvg />
          </div>
          <h5 className="modal-title text-center">Серия завершена</h5>
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
        <button
          type="button"
          className="btn button_continue"
          onClick={() => dispatch(actionHideStatisticModal())}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

const getStateToProps = (state) => {
  return {
    visibleStatisticModal: state.appState.visibleStatisticModal,
    statistic: state.appState.statistic,
  };
};

const mapDistatchToProps = {
  actionShowStatisticModal,
};

export default connect(getStateToProps, mapDistatchToProps)(StatisticModal);

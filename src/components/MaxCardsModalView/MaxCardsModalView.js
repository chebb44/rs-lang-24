import React from 'react';
import './MaxCardsModalView.scss';

export const MaxCardsModalView = ({ hideMaxCardsModal, showSettings }) => {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content modal_max-cards">
        <div className="modal-body text-center">
          {/* <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hideMaxCardsModal}
          > */}
          <h5 className="modal-title mb-3">Ура, на сегодня все!</h5>
          <p className="mb-2">
            Дневной лимит исчерпан. Вы можете увеличить лимит карточек и слов в
            настройках. Данный лимит начнет действовать с завтрашнего дня.
            Также, пожалуйста, имейте в виду, что, чем больше новых слов вы
            изучаете ежедневно, тем больше вам надо будет повторять в ближайшее
            время.
          </p>
          {/* <p className="mb-2">
            Для обучения сверх обычного расписания, нажмите кнопку 'Перейти в
            настройки' и увеличьте лимит карточек.
          </p> */}
        </div>
        <button
          type="button"
          className="btn button_settings"
          onClick={showSettings}
        >
          Перейти в настройки
        </button>
      </div>
    </div>
  );
};

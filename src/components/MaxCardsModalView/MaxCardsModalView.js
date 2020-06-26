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
          <h5 className="modal-title mb-3">Ура! На сегодня все.</h5>
          <p className="mb-2">
            Есть ещё новые карточки, но дневной лимит исчерпан. Вы можете
            увеличить лимит в настройках, но, пожалуйста, имейете в виду, что
            чем больше новых карточек вы посмотрите, тем больше вам надо будет
            повторять в ближайшее время.
          </p>
          <p className="mb-2">
            Для обучения сверх обычного расписания, нажмите кнопку 'Перейти в
            настройки' и увеличьте лимит карточек.
          </p>
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

import React from 'react';
import './SettingsModalView.scss';
import SettingsRadioInput from '../SettingsRadioInput/SettingsRadioInput';
import SettingsCheckboxInput from '../SettingsCheckboxInput/SettingsCheckboxInput';

const SettingsModalView = ({
  question1,
  question2,
  question3,
  question4,
  question5,
  hideSettingsModal,
}) => {
  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable settings-modal">
      <div className="modal-content modal-content_settings">
        <div className="modal-header text-center">
          <h5 className="modal__title">Настройки обучения:</h5>
          <button
            type="button"
            className="close btn-modal_close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hideSettingsModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="ml-2">
            <h6 className="text-left ml-3">Количество карточек в день:</h6>
            {question2.map((item, index) => (
              <SettingsRadioInput item={item} key={index} />
            ))}

            <h6 className="text-left ml-3">Количество новых слов в день:</h6>
            {question1.map((item, index) => (
              <SettingsRadioInput item={item} key={index} />
            ))}

            <h6 className="text-left ml-3">Что изучать:</h6>
            <div className="text-left ml-5 wrapper_width">
              {question3.map((item, index) => (
                <SettingsRadioInput item={item} key={index} />
              ))}
            </div>

            <h6 className="text-left ml-3">Что включить в карточку:</h6>
            {/* Хотя бы один пункт из первых 3 должен быть отмечен.*/}
            {question4.map((item, index) => (
              <SettingsCheckboxInput item={item} key={index} />
            ))}

            <h6 className="text-left ml-3">Действия с карточкой:</h6>
            {question5.map((item, index) => (
              <SettingsCheckboxInput item={item} key={index} />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsModalView;

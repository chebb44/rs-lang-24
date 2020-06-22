import React, { useCallback } from 'react';
import './SettingsModalView.scss';
import SettingsRadioInput from '../SettingsRadioInput/SettingsRadioInput';
import SettingsCheckboxInput from '../SettingsCheckboxInput/SettingsCheckboxInput';
import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
} from '../../App/constants/SettingsList';

const SettingsModalView = () => {
  return (
    <div className="" id="exampleModal">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content settings-modal">
          <button
            type="button"
            className="close btn-modal_close"
            data-dismiss="modal"
            aria-label="Close"
            // onClick={hideSettingsModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <form className="ml-3">
              <h5 className="text-left mt-1">Обучение:</h5>
              {/* /question 1 */}
              <p className="text-left ml-4 font-italic">
                Количество новых слов, которые планируете изучать в день:
              </p>
              {question1.map((item, index) => (
                <SettingsRadioInput item={item} key={index} />
              ))}
              {/* /question 2 */}
              <p className="text-left ml-4 font-italic">
                Максимальное количество карточек для изучения в день:
              </p>
              {question2.map((item, index) => (
                <SettingsRadioInput item={item} key={index} />
              ))}
              {/* /question 3 */}
              <p className="text-left ml-4 font-italic">Слова для изучения:</p>
              {question3.map((item, index) => (
                <SettingsRadioInput item={item} key={index} />
              ))}
              {/* Карточка */}
              <h5 className="text-left mt-1">Карточка:</h5>
              <p className="text-left ml-4 font-italic">
                Какую информацию добавить на карточку?
              </p>
              {/* Хотя бы один пункт из первых 3 должен быть отмечен.*/}
              {question4.map((item, index) => (
                <SettingsCheckboxInput item={item} key={index} />
              ))}
              {/* кнопки  на карточке */}
              <p className="text-left ml-4 font-italic">
                Какие кнопки добавить на карточку?
              </p>
              {question5.map((item, index) => (
                <SettingsCheckboxInput item={item} key={index} />
              ))}
              {/* пользовательские */}
              <h5 className="text-left mt-1">Пользовательские настройки:</h5>
              {question6.map((item, index) => (
                <SettingsCheckboxInput item={item} key={index} />
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModalView;

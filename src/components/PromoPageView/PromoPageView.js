import React, { useState } from 'react';
import './PromoPageView.scss';
import arrow from './assets/arrow.png';
import london from './../../assets/img/england_PNG72.png';
import { whyUsItems } from './constants';
import { WhyUsItem } from '../WhyUsItem/WhyUsItem';
import { PageFooterView } from '../PageFooterView/PageFooterView';

export const PromoPageView = () => {
  const visibility = {
    expanded: 'expanded',
    collapsed: 'collapsed',
  };

  const [addInfoVisibility, setAddInfoVisibility] = useState(
    visibility.collapsed,
  );

  const handleExpandButtonClick = () => {
    if (addInfoVisibility === 'expanded') {
      setAddInfoVisibility(visibility.collapsed);
    } else {
      setAddInfoVisibility(visibility.expanded);
    }
  };

  return (
    <>
      <main className="promo-page">
        <div className="promo__wrapper">
          <div className="why-us">
            <h2 className="heading">Почему RS Lang?</h2>
            <div className="why-us__container">
              {whyUsItems.map((item, index) => (
                <WhyUsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="promo__wrapper">
          <div className="interval-repeating">
            <h2 className="heading">Методика интревального повторения</h2>
            <p className="interval-repeating__heading">
              Позволяет выучить большой объем информации за короткое время.
            </p>
            <h4 className="description">Как это работает?</h4>
            <div className="interval-repeating__container">
              <div className="interval-repeating__item">
                <p>
                  Ты устанавливаешь количество новых и повторяемых слов в день,
                  режим обучения, а также индивидуальную сложность слов.
                </p>
                <button
                  className="interval-repeating__expand-button"
                  onClick={handleExpandButtonClick}
                >
                  Смотреть режимы обучения
                </button>
                <ul
                  className={
                    addInfoVisibility === 'expanded'
                      ? 'learning-modes learning-modes_expanded'
                      : 'learning-modes learning-modes_collapsed'
                  }
                >
                  <li className="learning-modes__item">
                    Только новые слова
                    <p className="learning-modes__description">
                      в обучении участвуют только новые, ранее не изученные
                      слова
                    </p>
                  </li>
                  <li className="learning-modes__item">
                    Только изученные слова
                    <p className="learning-modes__description">
                      в обучении участвуют только ранее изученные слова
                    </p>
                  </li>
                  <li className="learning-modes__item">
                    Новые и изученные слова
                    <p className="learning-modes__description">
                      в обучении участвуют как ранее изученные, так и новые
                      слова (соотношение новых и повторяемых слов можно выбрать
                      в настройках)
                    </p>
                  </li>
                  <li className="learning-modes__item">
                    Только сложные слова
                    <p className="learning-modes__description">
                      в обучении участвуют слова, отмеченные как "сложные"
                    </p>
                  </li>
                </ul>
              </div>
              <img
                src={arrow}
                alt="Arrow"
                className="interval-repeating__arrow"
              />
              <div className="interval-repeating__item">
                RS Lang создает для тебя индивидуальный урок на день в
                зависимости от установленных предпочтений.
              </div>
            </div>
          </div>
        </div>
        <img className="promo-page__london-image" src={london} alt="london" />
      </main>
      <PageFooterView />
    </>
  );
};

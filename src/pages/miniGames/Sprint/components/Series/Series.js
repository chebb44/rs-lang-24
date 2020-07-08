import React from 'react';
import './SeriesStyles.scss';
import { CSSTransition } from 'react-transition-group';
export const Series = ({ number }) => {
  return (
    <div className="sprint-series">
      <div className="sprint-series-stars">
        {number > 0
          ? Array(Math.min(number, 5))
              .fill('')
              .map((item, index) => {
                return (
                  <CSSTransition
                    key={index}
                    in={true}
                    appear={true}
                    timeout={2000}
                    classNames="star"
                  >
                    <div key={index} className="sprint-star"></div>
                  </CSSTransition>
                );
              })
          : null}
        {Array(5 - Math.min(number, 5))
          .fill('')
          .map((item, index) => {
            return (
              <div key={index} className="sprint-star sprint-empty-star"></div>
            );
          })}
      </div>
    </div>
  );
};

import React from 'react';
import './SeriesStyles.scss';
export const Series = ({ number }) => {
  return (
    <div className="sprint-series">
      <p> Серия: </p>
      <div className="sprint-series-stars">
        {number > 0 ? (
          Array(Math.min(number, 4))
            .fill('')
            .map((item, index) => {
              return <div key={index} className="sprint-star"></div>;
            })
        ) : (
          <div className="sprint-star sprint-empty-star"></div>
        )}
      </div>
    </div>
  );
};

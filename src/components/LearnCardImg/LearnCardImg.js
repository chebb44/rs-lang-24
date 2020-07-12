import React from 'react';
import './LearnCardImg.scss';

export const LearnCardImg = ({ isImageOn, imageSrc, height = 'h-100' }) => {
  return (
    isImageOn && (
      <div className="learn-card__img-container">
        <img
          src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${imageSrc}`}
          className={`card-img ${height} mb-4 learn-card__img`}
          alt="Word association"
        />
      </div>
    )
  );
};

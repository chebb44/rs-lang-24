import React from 'react';
import './LearnCardImg.scss';

export const LearnCardImg = ({ isImageOn, imageSrc }) => {
  return (
    isImageOn && (
      <img
        src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${imageSrc}`}
        className="card-img h-100 mb-4 learn-card__img"
        alt="Word association"
      />
    )
  );
};

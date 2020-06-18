import React from 'react';

export const LearnCardImg = ({ isImageOn, imageSrc }) => {
  return (
    isImageOn && (
      <img
        src={`https://raw.githubusercontent.com/veronika-martinovich/rslang-data/master/${imageSrc}`}
        className="card-img h-100 ml-2 mb-4"
        alt="Word association"
      />
    )
  );
};

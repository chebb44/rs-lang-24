import React, { useState } from 'react';
import './QuizQuestionImg.scss';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { Loader } from './assets/Loader';

export const QuizQuestionImg = ({ image }) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(true);

  const img = new Image();
  img.src = `${FILES_URL}${image}`;

  img.onload = () => {
    setImgIsLoaded(false);
  };
  return (
    <div className="quiz-question-image">
      {imgIsLoaded ? (
        <Loader />
      ) : (
        <img
          src={`${FILES_URL}${image}`}
          alt="question"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

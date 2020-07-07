import React from 'react';
import './LoginIntroInfo.scss';
import { BulbImage } from '../../components/SvgImages/SvgImages';

export const LoginIntroInfo = function () {
  return (
    <div className="container login-intro__wrapper">
      <h2>RS Lang</h2>
      <p>
        Приложение для изучения иностранных слов с методикой интервального
        повторения, отслеживанием индивидуального прогресса и мини-играми.
      </p>
      <BulbImage />
    </div>
  );
};

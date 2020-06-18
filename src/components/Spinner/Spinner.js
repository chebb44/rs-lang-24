import React from 'react';
import './Spinner.scss';
import { Spin } from './assets/Spin.js';
import london from '../../assets/img/england_PNG721.png';

export const Spinner = () => {
  return (
    <div className="spinner">
      <Spin />
      <img className="london-image" src={london} alt="london"></img>
    </div>
  );
};

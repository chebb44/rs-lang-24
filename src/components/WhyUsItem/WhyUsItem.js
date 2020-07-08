import React from 'react';
import './WhyUsItem.scss';

export const WhyUsItem = ({ title, description, img }) => {
  return (
    <div className="why-us__item">
      <div className="why-us__img-container">
        <img src={img} alt="Why choose us" className="why-us__img" />
      </div>
      <h5 className="why-us__heading">{title}</h5>
      <p className="why-us__deacription">{description}</p>
    </div>
  );
};

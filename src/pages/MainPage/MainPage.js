import React from 'react';
import './MainPage.scss';
import { sections } from './constants';
import london from './../../assets/img/england_PNG72.png';
import { MainPageSection } from '../../components/MainPageSection/MainPageSection';
import { CSSTransition } from 'react-transition-group';

export const MainPage = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="sprint-fade"
      timeout={400}
      unmountOnExit={true}
    >
      <div className="main-page">
        <div className="main-page__sections-container">
          {sections.map((item, index) => (
            <MainPageSection
              key={index}
              title={item.title}
              path={item.path}
              svgClass={item.svgClass}
            />
          ))}
        </div>
        <img className="main-page__london-image" src={london} alt="london" />
      </div>
    </CSSTransition>
  );
};

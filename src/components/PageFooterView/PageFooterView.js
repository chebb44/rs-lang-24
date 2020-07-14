import React from 'react';
import './PageFooterView.scss';
import { GitHubIcon } from '../../components/SvgImages/SvgImages';
import { gitHubLink } from '../../App/constants/github';

export const PageFooterView = () => {
  return (
    <footer className="footer">
      <div className="github">
        <a href={gitHubLink}>
          <GitHubIcon
            width={'27px'}
            height={'27px'}
            color={'rgba(0, 0, 0, 0.8)'}
          />
        </a>
        <a href={gitHubLink} className="github__link">
          <p className="github__title">RS Lang</p>
        </a>
      </div>
    </footer>
  );
};

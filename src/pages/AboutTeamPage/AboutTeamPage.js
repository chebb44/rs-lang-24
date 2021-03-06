import React from 'react';
import './AboutTeamPage.scss';
import { teamMembers } from '../../App/constants/teamMembers';
import AboutTeamMemberView from '../../components/AboutTeamMemberView/AboutTeamMemberView';

import london from '../../assets/img/england_PNG723.png';

export const AboutTeamPage = () => {
  return (
    <section className="about-team__wrapper">
      <h2 className="about-team__title">Наша команда</h2>
      <ul className="about-team__members">
        {teamMembers.map((member) => (
          <AboutTeamMemberView member={member} key={member.id} />
        ))}
      </ul>
      <img className="about-team__footer-image" src={london} alt="london" />
    </section>
  );
};

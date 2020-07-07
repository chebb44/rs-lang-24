import React from 'react';
import './AboutTeamPage.scss';
import { teamMembers } from '../../App/constants/teamMembers';
import AboutTeamMemberView from '../../components/AboutTeamMemberView/AboutTeamMemberView';

export const AboutTeamPage = () => {
  return (
    <div className="container about-team__wrapper">
      <h2 className="about-team__title">Наша команда</h2>
      {teamMembers.map((member) => (
        <AboutTeamMemberView member={member} key={member.id} />
      ))}
    </div>
  );
};

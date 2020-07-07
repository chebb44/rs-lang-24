import React from 'react';
import './AboutTeamMemberView.scss';

const AboutTeamMemberView = ({ member }) => {
  console.log();
  const { id, firstName, lastName, role, photo, github } = member;
  return (
    <div className="about-team-member-view__wrapper">
      <img src={'/img' + photo} alt={lastName} />
    </div>
  );
};

export default AboutTeamMemberView;

import React from 'react';
import './AboutTeamMemberView.scss';
import {GitHubIcon} from '../SvgImages/SvgImages';

const AboutTeamMemberView = ({ member }) => {
  console.log();
  const { firstName, lastName, role, photo, github } = member;
  return (
    <li className="about-team-member-view__wrapper">
      <img src={'/img' + photo} alt={lastName} />
      <p className="about-team-member-view__name">
        {firstName} {lastName}
      </p>
      <p className="about-team-member-view__role">{role}</p>
      <div className="about-team-member-view__github-wrapper">
        <GitHubIcon width={'15px'} color={'rgba(0, 0, 0, 0.61)'} />
        <p className="member-role__github-title">{github}</p>
      </div>
    </li>
  );
};

export default AboutTeamMemberView;

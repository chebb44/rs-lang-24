import React from 'react';
import './AudioCallQuestionTitle.scss';

export const AudioCallQuestionTitle = ({ word = 'example' }) => {
  return <div className="audio-call-question-title">{word}</div>;
};

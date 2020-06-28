import React from 'react';
import './AudioCallExitBtn.scss';

export const AudioCallExitBtn = ({ func }) => {
  return (
    <button
      type="button"
      className="audio-call-exit-btn"
      data-dismiss="modal"
      aria-label="Close"
      onClick={func}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

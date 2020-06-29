import React from 'react';

export const Buttons = ({
  onClickSpeakButton,
  onClickResetButton,
  onClickStatsButton,
}) => {
  return (
    <div className="speak-it__buttons">
      <button
        className="btn btn_speak-it btn_small button__reset active"
        onClick={onClickResetButton}
      >
        Сброс
      </button>
      <button
        className="btn btn_speak-it btn_wide button__speak-please"
        onClick={onClickSpeakButton}
      >
        SPEAK IT
      </button>
      <button
        className="btn btn_speak-it btn_small button__result"
        onClick={onClickStatsButton}
      >
        Статистика
      </button>
    </div>
  );
};

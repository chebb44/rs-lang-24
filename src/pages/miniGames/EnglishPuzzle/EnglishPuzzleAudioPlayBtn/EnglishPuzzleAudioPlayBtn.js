import React, { useState } from 'react';
import volumeSvg from './assets/volume.svg';
import speakerSvg from './assets/speaker.svg';
import { FILES_URL } from '../../../../utilities/network/networkConstants';

export const EnglishPuzzleAudioPlayBtn = ({ gameWord, disabled }) => {
  const { audioMeaning } = gameWord;
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  const audioPlay = new Audio();
  audioPlay.src = `${FILES_URL}${audioMeaning}`;

  const playTextMeaningSound = () => {
    setIsAudioPlay(!isAudioPlay);
    audioPlay.play();
    audioPlay.onended = () => setIsAudioPlay(false);
  };

  return disabled ? (
    isAudioPlay ? (
      <button
        className="english-puzzle-control-btn__item english-puzzle-control-btn__item_audio"
        onClick={playTextMeaningSound}
        title="Прослушать"
        disabled
      >
        <img src={speakerSvg} alt="button-control" />
      </button>
    ) : (
      <button
        className="english-puzzle-control-btn__item english-puzzle-control-btn__item_audio"
        onClick={playTextMeaningSound}
        title="Прослушать"
      >
        <img src={volumeSvg} alt="button-control" />
      </button>
    )
  ) : (
    <button
      className="english-puzzle-control-btn__item english-puzzle-control-btn__item_audio english-puzzle-control-btn__item_hide"
      onClick={playTextMeaningSound}
      title="Прослушать"
    >
      <img src={volumeSvg} alt="button-control" />
    </button>
  );
};

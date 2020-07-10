import React from 'react';
import volumeSvg from './assets/volume.svg';
import speakerSvg from './assets/speaker.svg';
import { FILES_URL } from '../../../../utilities/network/networkConstants';
import { EnglishPuzzleControlBtnItem } from '../EnglishPuzzleControlBtnItem/EnglishPuzzleControlBtnItem';

export const EnglishPuzzleAudioPlayBtn = ({ gameWord }) => {
  const { audioMeaning } = gameWord;

  const playTextMeaningSound = () => {
    const audioPlay = new Audio();
    audioPlay.src = `${FILES_URL}${audioMeaning}`;
    audioPlay.play();
  };

  const playAudioBtnData = {
    title: 'Автовоспроизведение',
    icon: volumeSvg,
    func: playTextMeaningSound,
  };

  return <EnglishPuzzleControlBtnItem data={playAudioBtnData} />;
};

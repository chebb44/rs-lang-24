import React from 'react';
import './LearnCardButtonsBlock.scss';
import LearnCardButton from '../LearnCardButton/LearnCardButton';
import {
  getColorSettingsIcon,
  getColorAudioIcon,
  getColorTranslateIcon,
} from '../../utilities/learnCard/getColorIcon';

import settingsGreen from './assets/settings-green.svg';
import settingsRed from './assets/settings-red.svg';
import audioGreen from './assets/audio-green.svg';
import audioRed from './assets/audio-red.svg';
import translateGreen from './assets/translate-green.svg';
import translateRed from './assets/translate-red.svg';

const LearnCardButtonsBlock = ({
  learnCardSettingsData,
  changeAutoAudioPlay,
  changeAutoTranslate,
}) => {
  return (
    <div className="buttons-wrapper">
      <LearnCardButton icon={settingsGreen} />
      <LearnCardButton
        icon={getColorAudioIcon(
          learnCardSettingsData.isAudioOn,
          audioGreen,
          audioRed,
        )}
        func={changeAutoAudioPlay}
      />
      <LearnCardButton
        icon={getColorTranslateIcon(
          learnCardSettingsData.isTranslationOn,
          translateGreen,
          translateRed,
        )}
        func={changeAutoTranslate}
      />
    </div>
  );
};

export default LearnCardButtonsBlock;

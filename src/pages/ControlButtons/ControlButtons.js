import React, { useCallback } from 'react';
import './ControlButtons.scss';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
} from '../../reducers/learnSettings/learnSettingsActions';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
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
import { useSelector, useDispatch } from 'react-redux';
import ControlButtonItem from '../../components/ControlButtonItem/ControlButtonItem';

const ControlButtons = () => {
  const dispatch = useDispatch();
  const appState = useSelector(appStateSelector);
  const learnCardSettings = useSelector(learnCardSettingsSelector);

  const changeAutoAudioPlay = useCallback(() => {
    dispatch(actionSetAutoAudio(!learnCardSettings.isAudioOn));
  }, [dispatch, learnCardSettings.isAudioOn]);

  const changeAutoTranslate = useCallback(() => {
    dispatch(actionSetAutoTranslate(!learnCardSettings.isTranslationOn));
  }, [dispatch, learnCardSettings.isTranslationOn]);

  const changeVisibleSettingsModal = useCallback(() => {
    dispatch(actionSettingsModal(!appState.visibleSettingsModal));
  }, [dispatch, appState.visibleSettingsModal]);

  const iconSettings = getColorSettingsIcon(
    appState.visibleSettingsModal,
    settingsGreen,
    settingsRed,
  );

  const iconAutoAudio = getColorAudioIcon(
    learnCardSettings.isAudioOn,
    audioGreen,
    audioRed,
  );

  const iconTranslate = getColorTranslateIcon(
    learnCardSettings.isTranslationOn,
    translateGreen,
    translateRed,
  );

  const controlBtnsList = [
    {
      icon: iconSettings,
      func: changeVisibleSettingsModal,
    },
    {
      icon: iconAutoAudio,
      func: changeAutoAudioPlay,
    },
    {
      icon: iconTranslate,
      func: changeAutoTranslate,
    },
  ];

  return (
    <div className="control-buttons">
      {controlBtnsList.map((item, index) => (
        <ControlButtonItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ControlButtons;

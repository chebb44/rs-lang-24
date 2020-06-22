import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import SettingsModalView from '../../components/SettingsModalView/SettingsModalView';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
  actionSetImage,
  actionSetTranscriptionWord,
  actionSetExampleWord,
  actionSetMeaningWord,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const { visibleSettingsModal } = useSelector(appStateSelector);
  const settings = useSelector(learnCardSettingsSelector);
  const appState = useSelector(appStateSelector);

  const changeVisibleSettingsModal = useCallback(() => {
    dispatch(actionSettingsModal(!appState.visibleSettingsModal));
  }, [dispatch, appState.visibleSettingsModal]);

  const changeAutoTranslate = useCallback(() => {
    dispatch(actionSetAutoTranslate(!settings.isTranslationOn));
  }, [dispatch, settings.isTranslationOn]);

  const changeMeaningWord = useCallback(() => {
    dispatch(actionSetMeaningWord(!settings.isMeaningOn));
  }, [dispatch, settings.isMeaningOn]);

  const changeExampleWord = useCallback(() => {
    dispatch(actionSetExampleWord(!settings.isExampleOn));
  }, [dispatch, settings.isExampleOn]);

  const changeTranscriptionWord = useCallback(() => {
    dispatch(actionSetTranscriptionWord(!settings.isTranscriptionOn));
  }, [dispatch, settings.isTranscriptionOn]);

  const changeSetImage = useCallback(() => {
    dispatch(actionSetImage(!settings.isImageOn));
  }, [dispatch, settings.isImageOn]);

  const changeAutoAudioPlay = useCallback(() => {
    dispatch(actionSetAutoAudio(!settings.isAudioOn));
  }, [dispatch, settings.isAudioOn]);

  const question4 = [
    {
      id: 'customCheck1',
      value: 'Перевод',
      defaultChecked: settings.isTranslationOn,
      func: changeAutoTranslate,
    },
    {
      id: 'customCheck2',
      value: 'Объяснение слова',
      defaultChecked: settings.isMeaningOn,
      func: changeMeaningWord,
    },
    {
      id: 'customCheck3',
      value: 'Пример использования  слова',
      defaultChecked: settings.isExampleOn,
      func: changeExampleWord,
    },
    {
      id: 'customCheck4',
      value: 'Транскрипция',
      defaultChecked: settings.isTranscriptionOn,
      func: changeTranscriptionWord,
    },
    {
      id: 'customCheck5',
      value: 'Картинка-ассоциация',
      defaultChecked: settings.isImageOn,
      func: changeSetImage,
    },
    {
      id: 'customCheck7',
      value: 'Аудио',
      defaultChecked: settings.isAudioOn,
      func: changeAutoAudioPlay,
    },
  ];

  if (visibleSettingsModal === false) {
    return null;
  }

  return (
    <SettingsModalView
      question4={question4}
      hideSettingsModal={changeVisibleSettingsModal}
    />
  );
};

export default SettingsModal;

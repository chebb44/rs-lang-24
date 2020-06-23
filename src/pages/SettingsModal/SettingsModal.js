import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import {
  learnCardSettingsSelector,
  learnSettingsSelector,
} from '../../reducers/learnSettings/learnSettingsReducer';
import SettingsModalView from '../../components/SettingsModalView/SettingsModalView';
import {
  actionSetAutoAudio,
  actionSetAutoTranslate,
  actionSetImage,
  actionSetTranscriptionWord,
  actionSetExampleWord,
  actionSetMeaningWord,
  actionSetWordsPerDay,
  actionSetLearnMode,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const { visibleSettingsModal } = useSelector(appStateSelector);
  const learnSettings = useSelector(learnSettingsSelector);
  const settings = useSelector(learnCardSettingsSelector);
  const appState = useSelector(appStateSelector);

  // question 1
  const changeWordsPerDay = useCallback(
    (wordsNumber) => {
      dispatch(actionSetWordsPerDay(wordsNumber));
    },
    [dispatch],
  );

  const question1 = [
    {
      id: 'customRadioInline1-1',
      name: 'customRadioInline1',
      value: 20,
      text: 20,
      defaultStateValue: learnSettings.wordsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-2',
      name: 'customRadioInline1',
      value: 30,
      text: 30,
      defaultStateValue: learnSettings.wordsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-3',
      name: 'customRadioInline1',
      value: 40,
      text: 40,
      defaultStateValue: learnSettings.wordsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-4',
      name: 'customRadioInline1',
      value: 50,
      text: 50,
      defaultStateValue: learnSettings.wordsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-5',
      name: 'customRadioInline1',
      value: 60,
      text: 60,
      defaultStateValue: learnSettings.wordsPerDay,
      func: changeWordsPerDay,
    },
  ];
  // /question 1

  // question 3
  const changeGameMode = useCallback(
    (wordsNumber) => {
      dispatch(actionSetLearnMode(wordsNumber));
    },
    [dispatch],
  );

  const question3 = [
    {
      id: 'customRadioInline3-1',
      name: 'customRadioInline3',
      text: 'Только новые слова',
      value: 'NEW_WORDS_MODE',
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
    },
    {
      id: 'customRadioInline3-2',
      name: 'customRadioInline3',
      text: 'Только изученные слова',
      value: 'REPEAT_MODE',
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
    },
    {
      id: 'customRadioInline3-3',
      name: 'customRadioInline3',
      text: 'Новые и изученные слова',
      value: 'STANDARD_MODE',
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
    },
    {
      id: 'customRadioInline3-4',
      name: 'customRadioInline3',
      text: 'Только сложные слова',
      value: 'DIFFICULT_MODE',
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
    },
  ];
  // /question 3

  // question 4
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
  // /question 4

  if (visibleSettingsModal === false) {
    return null;
  }

  return (
    <SettingsModalView
      question1={question1}
      question3={question3}
      question4={question4}
      hideSettingsModal={changeVisibleSettingsModal}
    />
  );
};

export default SettingsModal;

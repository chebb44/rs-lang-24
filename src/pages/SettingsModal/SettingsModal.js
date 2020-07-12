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
  actionSetCardsPerDay,
  actionSetShowAnswerBtn,
  actionSetDeleteBtn,
  actionSetMarkDifficultyBtns,
} from '../../reducers/learnSettings/learnSettingsActions';
import { actionSettingsModal } from '../../reducers/appState/appStateActions';
import { dictionaryStateStateSelector } from '../../reducers/dictionaryReducer/dictionaryReducer';
import {
  NEW_WORDS_MODE,
  REPEAT_MODE,
  STANDARD_MODE,
  ONLY_HARD_WORDS_MODE,
} from '../../store/defaultAppSettings';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const { visibleSettingsModal } = useSelector(appStateSelector);
  const learnSettings = useSelector(learnSettingsSelector);
  const settings = useSelector(learnCardSettingsSelector);
  const appState = useSelector(appStateSelector);
  const dictionaryState = useSelector(dictionaryStateStateSelector);

  const changeVisibleSettingsModal = useCallback(() => {
    dispatch(actionSettingsModal(!appState.visibleSettingsModal));
  }, [dispatch, appState.visibleSettingsModal]);

  // question 1
  const changeWordsPerDay = useCallback(
    (wordsNumber) => {
      dispatch(actionSetWordsPerDay(+wordsNumber));
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
      cardsPerDay: settings.cardsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-2',
      name: 'customRadioInline1',
      value: 30,
      text: 30,
      defaultStateValue: learnSettings.wordsPerDay,
      cardsPerDay: settings.cardsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-3',
      name: 'customRadioInline1',
      value: 40,
      text: 40,
      defaultStateValue: learnSettings.wordsPerDay,
      cardsPerDay: settings.cardsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-4',
      name: 'customRadioInline1',
      value: 50,
      text: 50,
      defaultStateValue: learnSettings.wordsPerDay,
      cardsPerDay: settings.cardsPerDay,
      func: changeWordsPerDay,
    },
    {
      id: 'customRadioInline1-5',
      name: 'customRadioInline1',
      value: 60,
      text: 60,
      defaultStateValue: learnSettings.wordsPerDay,
      cardsPerDay: settings.cardsPerDay,
      func: changeWordsPerDay,
    },
  ];
  // /question 1

  // question 2
  const changeCardPerDay = useCallback(
    (cardPerDay) => {
      dispatch(actionSetCardsPerDay(+cardPerDay));
    },
    [dispatch],
  );

  const question2 = [
    {
      id: 'customRadioInline2-1',
      name: 'customRadioInline2',
      value: 30,
      text: 30,
      defaultStateValue: settings.cardsPerDay,
      wordsPerDay: learnSettings.wordsPerDay,
      func: changeCardPerDay,
    },
    {
      id: 'customRadioInline2-2',
      name: 'customRadioInline2',
      value: 40,
      text: 40,
      defaultStateValue: settings.cardsPerDay,
      wordsPerDay: learnSettings.wordsPerDay,
      func: changeCardPerDay,
    },
    {
      id: 'customRadioInline2-3',
      name: 'customRadioInline2',
      value: 50,
      text: 50,
      defaultStateValue: settings.cardsPerDay,
      wordsPerDay: learnSettings.wordsPerDay,
      func: changeCardPerDay,
    },
    {
      id: 'customRadioInline2-4',
      name: 'customRadioInline2',
      value: 60,
      text: 60,
      defaultStateValue: settings.cardsPerDay,
      wordsPerDay: learnSettings.wordsPerDay,
      func: changeCardPerDay,
    },
    {
      id: 'customRadioInline2-5',
      name: 'customRadioInline2',
      value: 70,
      text: 70,
      defaultStateValue: settings.cardsPerDay,
      wordsPerDay: learnSettings.wordsPerDay,
      func: changeCardPerDay,
    },
  ];
  // /question 2

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
      value: NEW_WORDS_MODE,
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
      dictionaryState: dictionaryState,
    },
    {
      id: 'customRadioInline3-2',
      name: 'customRadioInline3',
      text: 'Только изученные слова',
      value: REPEAT_MODE,
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
      dictionaryState: dictionaryState,
    },
    {
      id: 'customRadioInline3-3',
      name: 'customRadioInline3',
      text: 'Новые и изученные слова',
      value: STANDARD_MODE,
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
      dictionaryState: dictionaryState,
    },
    {
      id: 'customRadioInline3-4',
      name: 'customRadioInline3',
      text: 'Только сложные слова',
      value: ONLY_HARD_WORDS_MODE,
      defaultStateValue: settings.learnMode,
      func: changeGameMode,
      dictionaryState: dictionaryState,
    },
  ];
  // /question 3

  // question 4
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

  // question 5
  const changeShowAnswerBtn = useCallback(() => {
    dispatch(actionSetShowAnswerBtn(!settings.isShowAnswerBtnOn));
  }, [dispatch, settings.isShowAnswerBtnOn]);

  const changeDeleteBtn = useCallback(() => {
    dispatch(actionSetDeleteBtn(!settings.isDeleteBtnOn));
  }, [dispatch, settings.isDeleteBtnOn]);

  const changeMarkDifficultyBtns = useCallback(() => {
    dispatch(actionSetMarkDifficultyBtns(!settings.isMarkDifficultyBtnsOn));
  }, [dispatch, settings.isMarkDifficultyBtnsOn]);

  const question5 = [
    {
      id: 'customCheck8',
      value: `"Показать ответ"`,
      defaultChecked: settings.isShowAnswerBtnOn,
      func: changeShowAnswerBtn,
    },
    {
      id: 'customCheck9',
      value: `"Удалить"`,
      defaultChecked: settings.isDeleteBtnOn,
      func: changeDeleteBtn,
    },
    {
      id: 'customCheck10',
      value: `"Снова", "Трудно", "Хорошо", "Легко"`,
      defaultChecked: settings.isMarkDifficultyBtnsOn,
      func: changeMarkDifficultyBtns,
    },
  ];
  // /question 5

  if (visibleSettingsModal === false) {
    return null;
  }

  return (
    <SettingsModalView
      question1={question1}
      question2={question2}
      question3={question3}
      question4={question4}
      question5={question5}
      hideSettingsModal={changeVisibleSettingsModal}
    />
  );
};

export default SettingsModal;

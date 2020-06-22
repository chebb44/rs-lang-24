import React, { useCallback } from 'react';
import { Switch, Route } from 'react-router';
import { routes } from './../../App/constants/routes';
import { dictionaryStateStateSelector } from './../../reducers/dictionaryReducer/dictionaryReducer';
import { DictionaryPart } from '../../components/DictionaryPart/DictionaryPart';
import { useSelector, useDispatch } from 'react-redux';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionMarkWord } from '../../store/actionsForSaga';
import { DELETED_WORD, LEARNED_WORD } from './../../sagas/constants';

export const DictionaryPage = () => {
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const { learnedWords, hardWords, deletedWords } = useSelector(
    dictionaryStateStateSelector,
  );
  const dispatch = useDispatch();
  const moveToDeleted = useCallback(
    (wordId) => () => {
      dispatch(actionMarkWord({ wordId, wordType: DELETED_WORD }));
    },
    [dispatch],
  );
  const moveToLearned = useCallback(
    (wordId) => () => {
      dispatch(actionMarkWord({ wordId, wordType: LEARNED_WORD }));
    },
    [dispatch],
  );
  return (
    <Switch>
      <Route path={routes.dictionaryLearn}>
        <DictionaryPart
          words={learnedWords}
          learnCardSettings={learnCardSettings}
          header="Изученные"
          buttonText="Удалить"
          buttonCallback={moveToDeleted}
        />
      </Route>
      <Route path={routes.dictionaryHard}>
        <DictionaryPart
          words={hardWords}
          learnCardSettings={learnCardSettings}
          header="Сложные"
          buttonText="Восстановить"
          buttonCallback={moveToLearned}
        />
      </Route>
      <Route path={routes.dictionaryDeleted}>
        <DictionaryPart
          words={deletedWords}
          learnCardSettings={learnCardSettings}
          header="Удаленные"
          buttonText="Восстановить"
          buttonCallback={moveToLearned}
        />
      </Route>
    </Switch>
  );
};

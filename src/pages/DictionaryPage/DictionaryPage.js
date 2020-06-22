import React from 'react';
import { Switch, Route } from 'react-router';
import { routes } from './../../App/constants/routes';
import { dictionaryStateStateSelector } from './../../reducers/dictionaryReducer/dictionaryReducer';
import { DictionaryPart } from '../../components/DictionaryPart/DictionaryPart';
import { useSelector } from 'react-redux';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';

export const DictionaryPage = () => {
  const learnCardSettings = useSelector(learnCardSettingsSelector);
  const { learnedWords, hardWords, deletedWords } = useSelector(
    dictionaryStateStateSelector,
  );
  return (
    <Switch>
      <Route path={routes.dictionaryLearn}>
        <DictionaryPart
          words={learnedWords}
          learnCardSettings={learnCardSettings}
          header="Изученные"
        />
      </Route>
      <Route path={routes.dictionaryHard}>
        <DictionaryPart
          words={hardWords}
          learnCardSettings={learnCardSettings}
          header="Сложные"
        />
      </Route>
      <Route path={routes.dictionaryDeleted}>
        <DictionaryPart
          words={deletedWords}
          learnCardSettings={learnCardSettings}
          header="Удаленные"
        />
      </Route>
    </Switch>
  );
};

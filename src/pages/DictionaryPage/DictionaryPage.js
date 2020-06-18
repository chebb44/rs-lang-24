import React from 'react';
import { Switch, Route } from 'react-router';
import { routes } from './../../App/constants/routes';
import { dictionaryStateStateSelector } from './../../reducers/dictionaryReducer/dictionaryReducer';
import { DictionaryPart } from '../../components/DictionaryPart/DictionaryPart';
import { useSelector } from 'react-redux';

export const DictionaryPage = () => {
  const { learnedWords, hardWords, deletedWords } = useSelector(
    dictionaryStateStateSelector,
  );
  return (
    <div className="dictionary-block">
      <Switch>
        <Route path={routes.dictionaryLearn}>
          <DictionaryPart words={learnedWords} header="Изученные" />
        </Route>
        <Route path={routes.dictionaryHard}>
          <DictionaryPart words={hardWords} header="Сложные" />
        </Route>
        <Route path={routes.dictionaryDeleted}>
          <DictionaryPart words={deletedWords} header="Удаленные" />
        </Route>
      </Switch>
    </div>
  );
};

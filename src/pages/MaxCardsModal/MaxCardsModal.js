import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionSetIsMaxCardsModalShown } from '../../reducers/appState/appStateActions';
import { MaxCardsModalView } from '../../components/MaxCardsModalView/MaxCardsModalView';

export const MaxCardsModal = () => {
  const { isMaxCardsModalShown } = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const hideStatisticModal = useCallback(() => {
    dispatch(actionSetIsMaxCardsModalShown(false));
  }, [dispatch]);

  if (!isMaxCardsModalShown) return null;

  return <MaxCardsModalView hideStatisticModal={hideStatisticModal} />;
};

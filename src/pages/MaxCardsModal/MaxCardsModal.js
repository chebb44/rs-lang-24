import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import {
  actionSetIsMaxCardsModalShown,
  actionSettingsModal,
} from '../../reducers/appState/appStateActions';
import { MaxCardsModalView } from '../../components/MaxCardsModalView/MaxCardsModalView';

export const MaxCardsModal = () => {
  const { isMaxCardsModalShown, isStatisticModalShown } = useSelector(
    appStateSelector,
  );
  const dispatch = useDispatch();
  const hideMaxCardsModal = useCallback(() => {
    dispatch(actionSetIsMaxCardsModalShown(false));
  }, [dispatch]);
  const showSettings = useCallback(() => {
    dispatch(actionSettingsModal(true));
  }, [dispatch]);

  if (!isMaxCardsModalShown || isStatisticModalShown) return null;

  return (
    <MaxCardsModalView
      hideMaxCardsModal={hideMaxCardsModal}
      showSettings={showSettings}
    />
  );
};

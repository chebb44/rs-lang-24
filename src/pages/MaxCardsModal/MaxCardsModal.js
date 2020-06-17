import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { actionMaxCardsModal } from '../../reducers/appState/appStateActions';
import MaxCardsModalView from '../../components/MaxCardsModalView/MaxCardsModalView';

const MaxCardsModal = () => {
  const { visibleMaxCardsModal } = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const hideStatisticModal = useCallback(() => {
    dispatch(actionMaxCardsModal(false));
  }, [dispatch]);

  if (visibleMaxCardsModal === false) {
    return null;
  }

  return <MaxCardsModalView hideStatisticModal={hideStatisticModal} />;
};

export default MaxCardsModal;

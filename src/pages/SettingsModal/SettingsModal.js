import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
import { actionStatisticModal } from '../../reducers/appState/appStateActions';
import SettingsModalView from '../../components/SettingsModalView/SettingsModalView';

const StatisticModal = () => {
  // const { visibleSettingsModal } = useSelector(appStateSelector);
  const { visibleStatisticModal } = useSelector(appStateSelector);
  const settings = useSelector(learnCardSettingsSelector);
  const dispatch = useDispatch();
  const hideStatisticModal = useCallback(() => {
    dispatch(actionStatisticModal(false));
  }, [dispatch]);

  // if (visibleSettingsModal === false) {
  //   return null;
  // }
  if (visibleStatisticModal === false) {
    return null;
  }

  return (
    <SettingsModalView
    // hideStatisticModal={hideStatisticModal}
    />
  );
};

export default StatisticModal;

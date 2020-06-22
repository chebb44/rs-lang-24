import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateSelector } from '../../reducers/appState/appStateReducer';
import { learnCardSettingsSelector } from '../../reducers/learnSettings/learnSettingsReducer';
// import { actionStatisticModal } from '../../reducers/appState/appStateActions';
import SettingsModalView from '../../components/SettingsModalView/SettingsModalView';

const SettingsModal = () => {
  const { visibleSettingsModal } = useSelector(appStateSelector);
  const settings = useSelector(learnCardSettingsSelector);

  // const dispatch = useDispatch();
  // const hideSettingsModal = useCallback(() => {
  //   dispatch(actionStatisticModal(false));
  // }, [dispatch]);

  if (visibleSettingsModal === false) {
    return null;
  }

  return (
    <SettingsModalView
    // hideSettingsModal={hideSettingsModal}
    />
  );
};

export default SettingsModal;

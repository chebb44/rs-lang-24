import { store } from '../store/store';
import { actionSetAlertMessage } from '../reducers/appState/appStateActions';

const NOTIFICATION_TIMEOUT = 2000;

export const showPopUpNotification = async (text) => {
  store.dispatch(actionSetAlertMessage(text));
  setTimeout(
    () => store.dispatch(actionSetAlertMessage('')),
    NOTIFICATION_TIMEOUT,
  );
};

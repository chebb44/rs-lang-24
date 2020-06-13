const defaultData = {
  loading: true,
  backgroundURL: '',
  timezoneOffset: 0,
};

export const selectorAppState = state => state.appState;

export default function appState(state = defaultData, action) {
  switch (action.type) {

    default:
      return state;
  }
}

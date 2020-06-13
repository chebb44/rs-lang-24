import { START_PAGE } from './PAGES';

const defaultData = {
  page: START_PAGE,
};

export const selectorPageSelector = (state) => state.pageSelector;

export default function pageSelector(state = defaultData, action) {
  switch (action.type) {
    default:
      return state;
  }
}

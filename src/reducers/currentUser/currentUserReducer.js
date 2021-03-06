import {
  SET_USER_TOKEN_AND_ID,
  SET_USER_LOGIN_DATA,
} from './currentUserActions';
import { TOKEN, USER_ID } from '../../sagas/constants';

const defaultData = {
  user: {
    email: '',
    password: '',
  },
  token: localStorage.getItem(TOKEN) || '',
  id: localStorage.getItem(USER_ID) || '',
};

export const currentUserSelector = (state) => state.currentUser;

export const currentUser = (state = defaultData, action) => {
  switch (action.type) {
    case SET_USER_TOKEN_AND_ID:
      const { token, id } = action.payload;
      return {
        ...state,
        token,
        id,
      };
    case SET_USER_LOGIN_DATA:
      const { email, password } = action.payload;
      return {
        ...state,
        user: {
          email,
          password,
        },
      };
    default:
      return state;
  }
};

import { WORD_EXIST, WORD_CREATED_SUCCESSFULLY } from './networkConstants';
import { BACKEND_URL } from './networkConstants';

export const getWordsByPageAndGroup = async ({ page, group }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/words?page=${page}&group=${group}`,
    );
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('getWordsByPageAndGroup -> error', error);
    return null;
  }
};

export const getWordDataById = async ({ wordId }) => {
  try {
    const rawResponse = await fetch(`${BACKEND_URL}/words/${wordId}`);
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return null;
  }
};
export const createUserWord = async ({ userId, wordId, data, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/words/${wordId}`,
      {
        method: 'POST',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (rawResponse.status === 417) {
      return WORD_EXIST;
    }
    if (rawResponse.status === 200) {
      return WORD_CREATED_SUCCESSFULLY;
    }
  } catch (error) {
    console.log('createUserWord -> error', error);
    return null;
  }
};

export const updateUserWord = async ({ userId, wordId, data, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/words/${wordId}`,
      {
        method: 'PUT',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (rawResponse.ok) return true;
  } catch (error) {
    console.log('createUserWord -> error', error);
    return null;
  }
};

export const deleteUserWord = async ({ userId, wordId, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/words/${wordId}`,
      {
        method: 'DELETE',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    if (rawResponse.ok) {
      return true;
    }
  } catch (error) {
    console.log('deleteUserWord -> error', error);
    return null;
  }
};

export const getAllUserWords = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(`${BACKEND_URL}/users/${userId}/words`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log('getAllUserWords -> error', error);
    return null;
  }
};

export const getUserWordById = async ({ userId, wordId, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/words/${wordId}`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('getUserWordById -> error', error);
    return null;
  }
};

export const getAggregateUserWordById = async ({ userId, wordId, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/aggregatedWords/${wordId}`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    const [content] = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('getAggregateUserWordById -> error', error);
    return null;
  }
};

export const getAllAggregateUserWords = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/aggregatedWords`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('getAllAggregateUserWords -> error', error);
    return null;
  }
};

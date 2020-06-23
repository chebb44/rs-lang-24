import { TOKEN_OUTDATED } from './../../sagas/constants';
export const getUserSettings = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    if (rawResponse.status === 401) return TOKEN_OUTDATED;
    const content = await rawResponse.json();
    console.log('get settings: ', content); //{id: "5ee846f3e0f08ce8479a2ff7", wordsPerDay: 100}
    return content;
  } catch (error) {
    console.log('Failed get settings for this user', error);
    return null;
  }
};

export const putUserSettings = async ({ userId, token, data }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`,
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
    const content = await rawResponse.json();
    console.log('send settings: ', content); //{id: "5ee846f3e0f08ce8479a2ff7", wordsPerDay: 100}
  } catch (error) {
    console.log('Send setting error: ' + error);
  }
};

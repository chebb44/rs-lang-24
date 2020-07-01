import { TOKEN_OUTDATED } from './../../sagas/constants';
import { BACKEND_URL } from './networkConstants';

export const getUserSettings = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(`${BACKEND_URL}/users/${userId}/settings`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (rawResponse.status === 401) return TOKEN_OUTDATED;
    if (rawResponse.ok) return await rawResponse.json();
    console.log('Failed get settings for this user');
  } catch (error) {
    console.log('Failed get settings for this user', error);
    return null;
  }
};

export const putUserSettings = async ({ userId, token, data }) => {
  try {
    const rawResponse = await fetch(`${BACKEND_URL}/users/${userId}/settings`, {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!rawResponse) console.log('no response put settings');
  } catch (error) {
    console.log('Send setting error: ' + error);
  }
};

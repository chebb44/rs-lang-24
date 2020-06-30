import { BACKEND_URL } from './networkConstants';

export const getUserStatistic = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/statistics`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    return await rawResponse.json();
  } catch (error) {
    console.log('Failed get statistic for this user');
    return null;
  }
};

export const putUserStatistic = async ({ userId, token, data }) => {
  try {
    const rawResponse = await fetch(
      `${BACKEND_URL}/users/${userId}/statistics`,
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
    if (!rawResponse) console.log('no response put statistic');
  } catch (error) {
    console.log('Send statistic error: ' + error);
  }
};

export const getUserStatistic = async ({ userId, token }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`,
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
    console.log('Failed get statistic for this user');
    return null;
  }
};

export const putUserStatistic = async ({ userId, token, data }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`,
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

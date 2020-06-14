export const getUserWords = async ({ userId, token }) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words`,
    {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  const content = await rawResponse.json();

  console.log(content);
};

export const getAllWords = async ({ page, group }) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`,
  );
  const content = await rawResponse.json();
  console.log(content);
};

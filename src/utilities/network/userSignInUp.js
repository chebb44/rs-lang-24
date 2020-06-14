export const createUser = async (user) => {
  const rawResponse = await fetch(
    'https://afternoon-falls-25894.herokuapp.com/users',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return {
      success: true,
      payload: content,
    };
  }
  const regError = await rawResponse.text();
  return {
    success: false,
    payload: regError,
  };
};

export const loginUser = async (user) => {
  const rawResponse = await fetch(
    'https://afternoon-falls-25894.herokuapp.com/signin',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return {
      success: true,
      payload: content,
    };
  }
  const regError = await rawResponse.text();
  return {
    success: false,
    payload: regError,
  };
};

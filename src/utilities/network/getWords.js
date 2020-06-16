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

export const createUserWord = async ({ userId, wordId, word, token }) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    },
  );
  const content = await rawResponse.json();

  console.log(content);
};

// createUserWord({
//   userId: '5ec993df4ca9d600178740ae',
//   wordId: '5e9f5ee35eb9e72bc21af716',
//   word: {
//     difficulty: 'weak',
//     optional: { testFieldString: 'test', testFieldBoolean: true },
//   },
// });

export const getAllUserWords = async ({ userId, token }) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words`,
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

  console.log(content);
};

export const getUserWordById = async ({ userId, wordId, token }) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`,
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

  console.log(content);
};

export const getUserStatistic = async ({ userId, token }) => {
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

  console.log(content); // {id: "5ede95c1f566156e205342d0", learnedWords: 1}
};

export const putUserStatistic = async ({ userId, token, data }) => {
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
  const content = await rawResponse.json();

  console.log(content); // {id: "5ede95c1f566156e205342d0", learnedWords: 1}
};

export const getUserSettings = async ({ userId, token }) => {
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
  const content = await rawResponse.json();

  console.log(content); //{id: "5ee846f3e0f08ce8479a2ff7", wordsPerDay: 100}
};

export const putUserSettings = async ({ userId, token, data }) => {
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

  console.log(content); //{id: "5ee846f3e0f08ce8479a2ff7", wordsPerDay: 100}
};

// https://afternoon-falls-25894.herokuapp.com/words?page=2&group=0
// {
//   "id": "5e9f5ee35eb9e72bc21af4c8",
//   "group": 0,
//   "page": 2,
//   "word": "alien",
//   "image": "files/03_0041.jpg",
//   "audio": "files/03_0041.mp3",
//   "audioMeaning": "files/03_0041_meaning.mp3",
//   "audioExample": "files/03_0041_example.mp3",
//   "textMeaning": "An <i>alien</i> is a creature from a different world.",
//   "textExample": "The <b>alien</b> came in peace.",
//   "transcription": "[éiljən]",
//   "textExampleTranslate": "пришелец пришел с миром",
//   "textMeaningTranslate": "Инопланетянин - это существо из другого мира",
//   "wordTranslate": "инопланетянин",
//   "wordsPerExampleSentence": 5
// },

import { WORD_EXIST, WORD_CREATED_SUCCESSFULLY } from './networkConstants';

export const getWordsByPageAndGroup = async ({ page, group }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`,
    );
    const content = await rawResponse.json();
    console.log('getWordsByPageAndGroup -> content', content);
    return content;
  } catch (error) {
    console.log('getWordsByPageAndGroup -> error', error);
    return null;
  }
};

export const getWordDataById = async ({ wordId }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words/${wordId}`,
    );
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return null;
  }
};
export const createUserWord = async ({ userId, wordId, data, token }) => {
  try {
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
        body: JSON.stringify(data),
      },
    );
    if (rawResponse.status === 417) {
      console.log(`Error: Word exist! id: ${wordId}`);
      console.log('Word create successfully', wordId);
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

// createUserWord({
//   userId: '5ec993df4ca9d600178740ae',
//   wordId: '5e9f5ee35eb9e72bc21af716',
//   data: {
//     difficulty: 'weak',
//     optional: { testFieldString: 'test', testFieldBoolean: true },
//   },
// });

export const updateUserWord = async ({ userId, wordId, data, token }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`,
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
    console.log('updateUserWord -> content', content);
    return true;
  } catch (error) {
    console.log('createUserWord -> error', error);
    return null;
  }
};

export const deleteUserWord = async ({ userId, wordId, token }) => {
  try {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`,
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
      console.log('deleteUserWord -> wordId', wordId);
      return true;
    }
  } catch (error) {
    console.log('deleteUserWord -> error', error);
    return null;
  }
};

export const getAllUserWords = async ({ userId, token }) => {
  try {
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
    return content;
  } catch (error) {
    console.log('getAllUserWords -> error', error);
    return null;
  }
};

export const getUserWordById = async ({ userId, wordId, token }) => {
  try {
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
    console.log('getUserWordById -> content', content);
    return content;
  } catch (error) {
    console.log('getUserWordById -> error', error);
    return null;
  }
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

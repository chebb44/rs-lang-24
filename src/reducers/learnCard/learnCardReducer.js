import { UPDATE_LEARN_CARD } from './learnCardActions';

const defaultData = {
  learnCard: {
    id: '5e9f5ee35eb9e72bc21af4c8',
    group: 0,
    page: 2,
    word: 'alien',
    image: 'files/03_0041.jpg',
    audio: 'files/03_0041.mp3',
    audioMeaning: 'files/03_0041_meaning.mp3',
    audioExample: 'files/03_0041_example.mp3',
    textMeaning: 'An <i>alien</i> is a creature from a different world.',
    textExample: 'The <b>alien</b> came in peace.',
    transcription: '[éiljən]',
    textExampleTranslate: 'пришелец пришел с миром',
    textMeaningTranslate: 'Инопланетянин - это существо из другого мира',
    wordTranslate: 'инопланетянин',
    wordsPerExampleSentence: 5,
  },
};

export const learnCardSelector = (state) => state.learnCard;

export const learnCard = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_LEARN_CARD:
      return {
        ...state,
        learnCard: action.learnCard,
      };
    default:
      return state;
  }
};

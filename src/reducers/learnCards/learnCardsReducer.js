import { SET_LEARN_CARDS, ADD_LEARN_CARDS } from './learnCardsActions';

const defaultData = {
  cards: [
    {
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
    {
      word: 'agree',
      image: 'files/01_0001.jpg',
      audio: 'files/01_0001.mp3',
      audioMeaning: 'files/01_0001_meaning.mp3',
      audioExample: 'files/01_0001_example.mp3',
      textMeaning:
        'To agree is to have the same opinion or belief as another person',
      textExample: 'The students agree they have too much homework',
      transcription: '[əgríː]',
      wordTranslate: 'согласна',
      textMeaningTranslate:
        'Согласиться - значит иметь то же мнение или убеждение, что и другой человек',
      textExampleTranslate:
        'Студенты согласны, что у них слишком много домашней работы',
      id: 1,
    },
    {
      word: 'alcohol',
      image: 'files/01_0002.jpg',
      audio: 'files/01_0002.mp3',
      audioMeaning: 'files/01_0002_meaning.mp3',
      audioExample: 'files/01_0002_example.mp3',
      textMeaning: 'Alcohol is a type of drink that can make people drunk',
      textExample:
        'A person should not drive a car after he or she has been drinking alcohol',
      transcription: '[ǽlkəhɔ̀ːl]',
      wordTranslate: 'алкоголь',
      textMeaningTranslate:
        'Алкоголь - это тип напитка, который может сделать людей пьяными',
      textExampleTranslate:
        'Человек не должен водить машину после того, как он выпил алкоголь',
      id: 2,
    },
    {
      word: 'arrive',
      image: 'files/01_0003.jpg',
      audio: 'files/01_0003.mp3',
      audioMeaning: 'files/01_0003_meaning.mp3',
      audioExample: 'files/01_0003_example.mp3',
      textMeaning: 'To arrive is to get somewhere',
      textExample: 'They arrived at school at 7 a.m',
      transcription: '[əráiv]',
      wordTranslate: 'прибыть',
      textMeaningTranslate: 'Приехать значит попасть куда-то',
      textExampleTranslate: 'Они прибыли в школу в 7 часов утра',
      id: 3,
    },
  ],
};

export const learnCardsSelector = (state) => state.learnCards.cards;

export const learnCards = (state = defaultData, action) => {
  switch (action.type) {
    case SET_LEARN_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    case ADD_LEARN_CARDS:
      const stateCards = state.cards.slice();
      const newStateCards = [...stateCards, ...action.cards];
      return {
        ...state,
        cards: newStateCards,
      };
    default:
      return state;
  }
};

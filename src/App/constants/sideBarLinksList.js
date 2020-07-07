import { routes } from './routes';
export const sideBarLinksList = [
  {
    head: 'Обучение',
    headLink: routes.learn,
    items: null,
  },
  {
    head: 'Мини игры',
    headLink: null,
    items: [
      { name: 'Спринт', link: routes.sprint },
      { name: 'Cпик Ит', link: routes.speakIt },
      { name: 'Саванна', link: routes.savanna },
      { name: 'Аудиовызов', link: routes.audioCall },
      { name: 'Квиз', link: routes.quiz },
    ],
  },
  {
    head: 'Словарь',
    headLink: null,
    items: [
      { name: 'Изученные', link: routes.dictionaryLearn },
      { name: 'Повторные', link: routes.dictionaryForNextTrain },
      { name: 'Сложные', link: routes.dictionaryHard },
      { name: 'Удаленные', link: routes.dictionaryDeleted },
    ],
  },
  {
    head: 'Статистика',
    headLink: routes.stats,
    items: null,
  },
  {
    head: 'О команде',
    headLink: routes.aboutTeam,
    items: null,
  },
  {
    head: 'Промо',
    headLink: routes.promo,
    items: null,
  },
];

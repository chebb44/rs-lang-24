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
      { name: 'Speak It', link: routes.speakit },
      { name: 'Саванна', link: routes.savanna },
    ],
  },
  {
    head: 'Словарь',
    headLink: null,
    items: [
      { name: 'Изучаемые', link: routes.dictionaryLearn },
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

export const sideBarLinksList = [
  {
    head: 'Обучение',
    headLink: '/app/main-game',
    items: [{ name: 'Интервальное повторение', link: '/app' }],
  },
  {
    head: 'Мини игры',
    headLink: null,
    items: [
      { name: 'Speak It', link: '/app/speakit' },
      { name: 'Саванна', link: '/app/savanna' },
    ],
  },
  {
    head: 'Словарь',
    headLink: null,
    items: [
      { name: 'Изучаемые', link: '/dictionary/learn' },
      { name: 'Сложные', link: '/dictionary/hard' },
      { name: 'Удаленные', link: '/dictionary/deleted' },
    ],
  },
  {
    head: 'Статистика',
    headLink: '/app/stats',
    items: [],
  },
  {
    head: 'О команде',
    headLink: '/app/about-team',
    items: [],
  },
  {
    head: 'Промо',
    headLink: '/app/promo',
    items: [],
  },
];

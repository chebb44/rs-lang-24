// export const getBeginDayTimeStamp = (date) => {
//   date.setHours(0, 0, 0, 0);
//   return Date.parse(date);
// };

export const getDateStringByDate = (date) => {
  return `${date.getFullYear()},${date.getMonth()},${date.getDate()}`;
};

export const getDateByString = (string) => {
  if (string) {
    const [year, month, day] = string.split(',');
    return new Date(year, month, day);
  }
  return null;
};

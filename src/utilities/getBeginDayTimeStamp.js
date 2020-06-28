export const getBeginDayTimeStamp = (date) => {
  date.setHours(0, 0, 0, 0);
  return Date.parse(date);
};

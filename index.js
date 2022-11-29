const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 2020), days);
  return `${newDate.getDate()} - ${newDate.getMonth()} - ${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;

//* Створення нової дати

// const date = new Date('1992 06 25');
// console.log(date);

// TODO: Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.

// const date = new Date('2022-09-10T03:12:00');
// console.log(date);

// TODO: Напишіть функцію isWeekend(date), яка перевіряє, чи є даний день вихідним (субота або неділя).

// const isWeekend = date => {
//   if (date.getDay() === 0 || date.getDay() === 6) {
//     console.log('Weekend day');
//   } else {
//     console.log('Work day');
//   }
//   console.log(date.getDay());
// };
// const date = new Date('2026-06-27T03:12:00');
// isWeekend(date);

/*
TODO: Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
TODO: 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/

// const getWeekDay = date => {
//   const weekDay = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return weekDay[date.getDay()];
// };
// console.log(getWeekDay(new Date()));

/*
TODO: Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
TODO: Параметри:
TODO: year – рік з чотирьох цифр, наприклад, 2012.
TODO: month – місяць від 0 до 11.
TODO: Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/

// const getLastDayOfMonth = (year, month) => {
//   const currentDate = new Date(year, month + 1, 0).getDate();
//   return currentDate;
// };

// console.log(getLastDayOfMonth(2012, 1));

// TODO: Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
const intervalId = setInterval(() => {
  const dateNow = new Date();
  const dateTomorrow = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate() + 1
  );
  const secondToTommorow = (dateTomorrow - dateNow) / 1000;
  console.log(Math.floor(secondToTommorow));
}, 1000);

addEventListener('click', () => {
  clearInterval(intervalId);
});
/*
TODO: Напишіть функцію isDateInRange(date, startDate, endDate), яка перевіряє,
TODO: чи поточна дата потрапляє в заданий діапазон дат.
*/

const isDateInRange = (date, startDate, endDate) => {
  return date - startDate >= 0 && endDate - date <= 0;
};

const date = new Date('2025-03-11T00:00:00'); // 11 березня 2025
const startDate = new Date('2025-03-01T00:00:00'); // 1 березня 2025
const endDate = new Date('2025-03-10T00:00:00'); // 10 березня 2025
console.log(isDateInRange(date, startDate, endDate)); // true
console.log('Hello');

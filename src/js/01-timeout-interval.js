/*
 * Синхронний vs Асинхронний JS
 *
 * Стек виклику функцій (http://latentflip.com/loupe/)
 * window.setTimeout(callback, delay);
 * window.setInterval(callback, delay);
 * Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
 */

// console.log('Start');

// const timeoutId = setTimeout(() => {
//   console.log('Hello from setTimeout');
// }, 5000);

// addEventListener('click', () => {
//   clearTimeout(timeoutId);
// });
// console.log('End');

console.log('Start');

const intervalId = setInterval(() => {
  console.log('Hello from setInterval');
}, 1000);

addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    clearInterval(intervalId);
  }
});

console.log('End');

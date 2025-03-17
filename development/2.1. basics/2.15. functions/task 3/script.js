// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

("use strict");

function pow(x, n) {
  let result;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

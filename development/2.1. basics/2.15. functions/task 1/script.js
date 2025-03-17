// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае, она задаёт вопрос и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return readlineSync.question("Родители разрешили?");
//   }
// }

("use strict");

const readlineSync = require("readline-sync");

// 1st.
function checkAge(age) {
  return age > 18 ? true : readlineSync.question("Родители разрешили?");
}

// 2nd.
function checkAge(age) {
  return age > 18 || readlineSync.question("Родители разрешили?");
}

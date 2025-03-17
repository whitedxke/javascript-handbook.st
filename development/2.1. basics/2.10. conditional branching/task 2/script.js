// Используя конструкцию if..else, напишите код, который получает число через, а затем выводит:
// 1, если значение больше нуля;
// -1, если значение меньше нуля;
// 0, если значение равно нулю.

"use strict";

const readlineSync = require("readline-sync");

let question;

question = readlineSync.question("Введите число, пожалуйста.");

if (question > 0) {
  console.log("1");
} else if (question < 0) {
  console.log("-1");
} else {
  console.log("0");
}

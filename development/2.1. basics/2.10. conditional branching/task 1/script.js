// Используя конструкцию if..else, напишите код, который будет спрашивать:
// "Какое официальное название у JavaScript"?

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!».

"use strict";

const readlineSync = require("readline-sync");

let question;

question = readlineSync.question("Какое официально название у JavaScript?");

if (question == "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}

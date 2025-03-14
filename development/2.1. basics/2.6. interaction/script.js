// Спросите имя у пользователя, и выводит его.

"use strict";

const readlineSync = require("readline-sync");

let name;

name = readlineSync.question("Как вас зовут, друг?");

console.log(`Ваше имя ${name}.`);

// Замените код стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

("use strict");

const readlineSync = require("readline-sync");

const ask = (question, yes, no) => {
  if (readlineSync.keyInYN(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);

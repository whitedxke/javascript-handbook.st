// Перепишите код с использованием одной конструкции switch:

// if (number === 0) {
//   console.log("Вы ввели число 0.");
// }

// if (number === 1) {
//   console.log("Вы ввели число 1.");
// }

// if (number === 2 || number === 3) {
//   console.log("Вы ввели число 2, а может и 3.");
// }

("use strict");

let number = 4;

switch (number) {
  case 0:
    console.log("Вы ввели число 0.");
    break;
  case 1:
    console.log("Вы ввели число 1.");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3.");
    break;
  default:
    console.log("Вы ввели другое число.");
}

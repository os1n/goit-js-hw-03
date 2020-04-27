// Напиши скрипт со следующим функционалом:

//     При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//     Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
//     После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// ====---- Task 06 Start
console.log("TASK 06");

let numEntered;
const numbers = [];
let total = 0;

const sumOfInput = function () {
  let counter = 0;
  do {
    numEntered = prompt("Enter number or press ESC to exit.");

    if (isNaN(numEntered)) {
      alert("Введено не число, попробуйте еще раз!");
      continue;
    }
    
    if (numEntered === null) {break;}
    numbers[counter] = parseInt(numEntered);
    counter += 1;
  } while(1);

  for (let number of numbers) {
    total += number;
    console.log(number);
  }
};

console.log(numbers);

console.log(sumOfInput(), `Общая сумма чисел равна ${total}`);


//  const arr = ['Bobby', 'John', 'Chris', 'Admin'];
//  for (let name of arr) {
//    if (name === 'John') {
//      continue;
//    }
//    console.log(name);
//  }
//  console.log(arr);
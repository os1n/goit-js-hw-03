// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// ====---- Task 01 Start

const namesArray = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Konger"];
console.log(namesArray);

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1)
  {
    console.log(i, ' - ', array[i]);
  }
};
logItems(namesArray);

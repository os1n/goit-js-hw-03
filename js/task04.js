// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

//     Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
//     Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// ====---- Task 04 Start
console.log("TASK 04");

const formatString = function (string) {
  let resultString = "";
  if (string.length > 40) {
    console.log(
      `Length of the string (${string}) is (${string.length}) MORE than 40`
    );
    // for (let i = 0; i <= 39; i += 1) {
    //   resultString += string[i];
    // }
    // return console.log(resultString, `(Length = ${resultString.length})`);
    resultString = string.substring(0, 40);
    return console.log(resultString, `(Length = ${resultString.length})`);
  } else {
    return console.log(
      `Length of the string (${string}) is (${string.length}) LESS than 40`
    );
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

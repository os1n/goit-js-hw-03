// ===--- Task Description

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// ====---- Task 03 Start
console.log("TASK 03");

const findLongestWord = function (string) {
  const countArray = Array.from(string.split(" "));
  console.log(countArray);
  
  let longestWord = countArray[0];
  
  for (let i = 1; i < countArray.length; i += 1) {
    // console.log(
    //   longestWord,
    //   `(${longestWord.length}) <`,
    //   countArray[i],
    //   ` (${countArray[i].length}) => Result =`,
    //   longestWord.length < countArray[i].length
    // );

    if (longestWord.length < countArray[i].length) {
      longestWord = countArray[i];
    }
  }
  // console.log(countArray);
  // console.log(longestWord);
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

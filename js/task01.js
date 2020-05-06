// ===--- Task Description

// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле mood со значением 'happy'
//     заменяет значение hobby на 'skydiving'
//     заменяет значение premium на false
//     выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// ====---- HW3 Task 01 Start
console.log("TASK 01 start");

// const namesArray = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Konger"];
// console.log(namesArray);

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1)
//   {
//     console.log(i, ' - ', array[i]);
//   }
// };
// logItems(namesArray);

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

// for (const key in user) {
//   console.log('Key: ', key);
// }

// const keys = Object.keys(user); //

// for (const key of keys) {
//   console.log('Key Value: ', user[key]);
// }

const entries = Object.entries(user);


for (const entry of entries) {
  // const key = entry[0];
  // const value = entry[1];

  // console.log(`${key}: ${value}`);
  console.log(`${entry[0]}: ${entry[1]}`);
}

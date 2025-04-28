// function normalizeInput(input, to) {
//     if (to = "upper") {
//       return input.toUpperCase();
//     }else if(to = "lower") {
//         console.log(normalizeInput("This ISN'T SpaM", "lower"));
//       return input.toLowerCase();
//     }
//   }
//   normalizeInput(lower);



  
// function calculateTotal(number) {
//     let total = 0;
    
//     for (let i = 1; i <= number; i += 1) {
//       total += i;
//       console.log(total);
//     }
//     return total
    
//   }
//   calculateTotal(24);
//   calculateTotal(18);

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//       if (i % 2 === 0) {
//             total += i;
//       }
//       console.log(total);
      
//     }
//     return total
//   }
  
//   calculateEvenTotal(6)
  

// for (let i = 0; i < 10; i+=1) {
//     console.log(i);
  
//     if (i === 5) {
//       console.log('Met the number 5, interrupt the execution of the cycle');
//       break;
//     }
//   }
  
//   console.log('Log after cycle');
  

// const start = 6;
// const end = 17;
// let number;
// for (i = start; i <= end; i++) {
// if (i % 5 === 0) {
//     number = i;
//     break;
// }
// }
// console.log(number);

// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");

// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++){
//     i %   divisor === 0;
//     }
//   }

//   findNumber(2, 6, 5);


// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));


// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastValue = array[lastIndex]
//   return [lastIndex, lastValue];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement]
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));  [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); ["Earth", "Venus"]


// function getLength(array) {
// const str = array.join("");

// return str.length

// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));



// function calculateEngravingPrice(message, pricePerWord) {
//   const word = message.split(" ");
//   return word.length*pricePerWord

// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));  50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); 100




// function getSlice(array, value) {
// const result = array.indexOf(value);

// if (result === -1) {
//   return [];
// }else{
//    return array.slice(0, result + 1);
// }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); ["Mango", "Poly"]


// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]



// function createArrayOfNumbers(min, max) {
//   const number = [];
//   for(let i = min; i <= max; i += 1) {
//     number.push(i)
//   }
//   return number
// }

// console.log(createArrayOfNumbers(14, 17)); [14, 15, 16, 17]


// const planets = ["Earth", "Mars", "Venus"];

// planets.unshift("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.unshift("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]



// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
// return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// парні числа
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
// for (let i = start; i <= end; i++ ) {
//  if (i % 2 === 0) {
//   evenNumbers.push(i);
//  }
// }
// return evenNumbers;
// }

// console.log(getEvenNumbers(3, 11));


// function checkStorage(storage, item) {
//  const str = item.toLowerCase();
//  if (storage.includes(str)) {
//   return `${str} is available to order!`;
//  }else{
//   return "Sorry! We are out of stock!";
//  }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")); "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));


// function getCommonElements(array1, array2) {
//   const array = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   return array;
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//  для підрахунку суми чисел, на потрібно спочатку створювати змінну, в якій буде зберігатися сума чисел, а потім дадавати її в змінну цикла фор


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//      total += number;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); 138

// function foo() {
//   const args = Array.from(arguments);
// 	return args.join("-");
// }
// console.log(foo(1, 2, 3));

// function createReversedArray() {
//  const args = Array.from(arguments);
//  return args.toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4));


// // ✅ Працює виклик перед оголошенням
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// const key = "nickname";
// const value = "SuperHenry";

// const profile = {
//   [key]: value,
// };


// console.log(profile.nickname); // SuperHenry


// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));





// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//    for (const value of values) {
//     totalSalary += value;
//    }
//    return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));     
// //330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// console.log(countTotalSalary({}));



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const nameToSearch = productName;  
//   for (const product of products) {
//     if (product.name === nameToSearch){
//       return product.price;
//     } 
//   }
//   return null;
// }
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Radar"));



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const ress = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (key === propName) {
//         ress.push(product[key]);
//       }
//     }
//   }
//   return ress;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   } 
//   return `Product ${productName} not found!`
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));

// function findProductQuantity(productName) {
//   const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//        ];
//        for (const product of products) {
//         if (product.name === productName) {
//           return product.quantity;
//         }
//        }
//                return `Sorry, ${productName} is not in stock!`
// }
// console.log(findProductQuantity("Scanner"));



// function getProductInfo(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   for (const product of products) {
//     if (product.name === productName) {
//       return `Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`;
//     }
//   }
// return `Product ${productName} not found`;
// }

// console.log(getProductInfo("Scanner"));


// const atTheOldToad = {
//   potions : [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   }
// }

// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7
// console.log(bookShelf.getAvarageRating());


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let total = 0;
//     for (const potion of this.potions) {
//       total += potion.price;
//     }
//     return total;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions){
//       if (potion.name === oldName){
//         potion.name = newName;
//       }
//     }
//   },
// };

// function add(...args) {
// let total = 0;
// for (const i = 0; i <= args; i++) {
//   total += i;
// }
//   return total;
  
// }


// function add(...args) {
//   let sum = 0;
//   for (let num of args) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(add(12, 4, 11, 48));  // 75

// function multiply(...args) {
// let total = 1;
// for ( const num of args) {
//   total *= num;
// }
// return total;
// }
// console.log(multiply(2, 3, 4)); //24


// function addOverNum(value, ...args) {
// let total = 0;
// for (const num of args) {
//   if (num > value) {
//     total += num
//   }
// }
// return total;
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218


// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores)
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// const objA = { 
// 	x: 1, 
// 	y: 2, 
// };

// const objB = { 
// 	y: 3, 
// };

// const result = {
// 	x: 5, ...objA,
// 	y: 10, ... objB,
// 	z: 15
// }

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings,...overrideSettings};


// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     callback(pizzaName);
//     return callback(pizzaName);
//   }
  

//   console.log(makeMessage("Royal Grand", makePizza)); //"Pizza Royal Grand is being prepared, please wait..."
  


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", );







// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));






// function filterArray(numbers, value) {
//   let filterNum = [];

//   numbers.forEach(function(number) {

//     if (number > value) {
//       filterNum.push(number);
//     }
//   });
//   return filterNum;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));





// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));




// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// const changeEven = (numbers, value) => {
//   const newArray = []; 
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     }else{ 
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]











//В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);


//Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map (book => book.title);

// console.log(titles);



// const numbers = [5, 10, 15, 20, 25];
// const newNumbers = numbers.map(number => number * 2);

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// const newUserName = users.map(user => user.name);

// const letters = ['A', 'B', 'C', 'D'];
// const newIndex = letters.map((letter, index) => letter = index)

// const words = ['apple', 'banana', 'cherry', 'date'];
// const wordsInUpperCase = words.map(word => word.toUpperCase());


//Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => !(number % 2 === 0));


// console.log(oddNumbers);


//Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:
//У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
//У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);


  // const getUsersWithFriend = (users, friendName) => {
  //   return users.filter(user => user.friends.includes(friendName));
  // }

  // const allUsers = [
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"]
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"]
  //   },
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"]
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ];
  
  // console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // // [
  // //   {
  // //     name: "Sharlene Bush",
  // //     friends: ["Briana Decker", "Sharron Pace"]
  // //   },
  // //   {
  // //     name: "Sheree Anthony",
  // //     friends: ["Goldie Gentry", "Briana Decker"]
  // //   }
  // // ]
  
  // console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // // [
  // //   {
  // //     name: "Elma Head",
  // //     friends: ["Goldie Gentry", "Aisha Tran"]
  // //   },
  // //   {
  // //     name: "Sheree Anthony",
  // //     friends: ["Goldie Gentry", "Briana Decker"]
  // //   }
  // // ]
  
  // console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  



  //Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
//Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((playtime, number) => {
//  return playtime + number
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);


// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// Поради:
// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + (player.playtime / player.gamesPlayed);
// }, 0);
// console.log(totalAveragePlaytimePerGame);


//Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
//Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .toSorted((a,b) => a.localeCompare(b));


// console.log(names);//["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

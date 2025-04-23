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



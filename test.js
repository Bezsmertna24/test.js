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


// ✅ Працює виклик перед оголошенням
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);

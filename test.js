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

function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++){
    i %   divisor === 0;
    }
  }

  findNumber(2, 6, 5);
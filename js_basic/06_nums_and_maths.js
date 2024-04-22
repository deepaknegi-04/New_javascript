// const score = 400

// // define explicitly 
// const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString());
// // console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Usecase : Ecommerce websites

// const otherNumber = 23.9484
// const otherNumber = 13253.5484
// //Note : Use carefully
// console.log(otherNumber.toPrecision(5));// Return: String

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++ Maths ++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4)); //Max value
// console.log(Math.floor(4.4));// Min value

// console.log(Math.min(2,3,4,5)); // get the lowest value
// console.log(Math.max(2,3,45,5));// get highst value

// console.log(Math.random());// between 0 and 1
// console.log(Math.floor(Math.random()*10)+ 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // Usecase : Roll the dice and see what number you get 
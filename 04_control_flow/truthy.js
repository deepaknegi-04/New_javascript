// const userEmail = []

// if(userEmail) {
//     console.log("Got usr email");
// }
// else{
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, null, undefined, NaN, ""

// truthy values

// "0", "false", " ", [], {}, function(){}


// if (userEmail.length === 0) { //check if array is empty
//     console.log("Array is empty");
// }

// const emptyObj ={}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// console.log(Object.keys(emptyObj));//return array

// false == 0 // true
// false == '' //true
// 0 == '' //true

//Nullish coalescing Operator (??): null, undefined
// ex- uses with database values

// let val1;
// val1 = 6 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 
// console.log(val1);


//Terniary Operator

// condition ? true : false
const price = 100
price >= 200 ? console.log("less than 100") : console.log("more than 80");
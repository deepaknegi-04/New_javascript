// Array 

const myArr = [0,1,2,3,4,5] 
const myHero = ["john", "shawn"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// // Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // insert value in the beginning
// myArr.shift() // delete from beginning


// console.log(myArr.includes(4)) // Return Boolean value
// console.log(myArr.indexOf(8));

// const newArr = myArr.join() //convert into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

//slice , splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);


//Splice //change into real array

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn1);



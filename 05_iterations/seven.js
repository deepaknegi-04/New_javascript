const myNumbers = [1,2,3,4,5,6]

// const newNums =  myNumbers.map((num) => { return num + 10}) // alternative forEach()

// return new array can return value, index and array

//chaining
const newNums = myNumbers
        .map((num) =>  num * 10)
        .map((num) => num + 1)
        .filter((num)=> num >= 40)

console.log(newNums);

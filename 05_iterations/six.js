// const code = ["js", "ruby", "java", "python"]

// const values = code.forEach((item) => { //forEach don't return values
//     console.log(item);
//     return item
// })

// console.log(values);

//filter

const myNums = [1,2,3,4,5,6,7,8]

//NOTE - both filter funcs are same below but in case of { } we have to write return because of scope

// let newNums = myNums.filter((num) => num > 4) 

// let newNums = myNums.filter((num) => {
//    return num > 4
// }) 
// console.log(newNums);

// same work with forEach

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//filter method example

 const books = [
    { title: "1984", author: "George Orwell", yearPublished: 1949, genre: "Fantasy" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, genre: "Southern Gothic Fiction" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, genre: "Tragedy" },
    { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1925, genre: "Classic Regency Novel" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937, genre: "Fantasy" }
  ];
  
//   const userBooks = books.filter((bk) => bk.yearPublished == 1925 )

const userBooks = books.filter((bk) =>{ 
    return bk.yearPublished >= 1930 && bk.genre === 'Fantasy'})
  console.log(userBooks);
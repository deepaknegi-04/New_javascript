//singleton object ***

// const tinderUser = new Object() // Singleton object
const tinderUser = {} // same but non singleton object 

tinderUser.id ="123abc"
tinderUser.name="johnson"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { // nested objects
    email:"soem@gmail.come", 
    fullname:{
    usernamefullname: {
        firstname:"john",
        lastname:"doe"
    }
    }
}

// console.log(regularUser.fullname.usernamefullname.firstname); 

//combining  objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2} // wrong way
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign( {} , obj1, obj2, obj4) //good practice to use {}

//spread operator
const obj3 = {...obj1,...obj2}

// console.log(obj3);
 

const users = [
    {
        id:1,
        email: "12@gmail.com"
    },
    {
        id:2,
        email: "12@gmail.com"
    },
    {
        id:3,
        email: "12@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //Return array
// console.log(Object.values(tinderUser)); //Return array
// console.log(Object.entries(tinderUser));// Array inside array
// console.log(tinderUser.hasOwnProperty("id"));// check if given property is in object

//DeStructuring in object 

const course = {
    coursename:"js Hindi",
    price:"999",
    crouseInstructor:"John"
}

//course.courseInstructro  //basic syntax to access 

//another syntax
// const {crouseInstructor} = course  

const {crouseInstructor: instructor} = course //if we want to change its name to make is more accessible

console.log(instructor);


//API Brief Introduction

// Object Format
// {
//     "name":"Johnson",
//     "coursename":"Js in hindi",
//     "price":"free"
// }

//Array Format
[
    {},
    {}
]
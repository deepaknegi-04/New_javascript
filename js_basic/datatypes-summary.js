// Primitive : mean these are call by value.

// 7 types : number, string, boolean, null, undefined,symbol, bigint.

// const score = 100
// const val = 100.3

// const isloggedin = false
// const temp = null

// let useremail;

// const id = Symbol('123')
// const anotherid = Symbol('123')


// console.log(id == anotherid);

const bignum = 34674783746547838n

// reference type [non-primitive]

// arryay, Objects, Functions

const heros = ["Shaktiman" ,"nagraj"]; // Array

let obj = {
    name: "shakti",
    age : 22
}

 let myfunc = function () {
    console.log("hello");
}

// console.log(obj.name);
//console.log(typeof (myfunc)); // called object function
//console.log(typeof (heros)); // object 


// +++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap (Non-Primitive)

// Stack ex-
let myname = "name";

let anothername = myname
anothername = "john"

// console.log(myname);
// console.log(anothername);

// Heap ex-

let user1 = {
    email:"user.google.com",
    id:123
}

let user2 = user1

user2.id = 90

console.log(user1.id);
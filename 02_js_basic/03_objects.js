// singleton <<<---- when using constructor
// Ex --- Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"john", // name is string by default
    "full name": "John Doe", 
    [mySym]:"mykey1", //  use [ ] when using as a symbol
    age:18,
    location:"London",
    isLoggedIN:false,
    lastLoginDays:["Monday", "Saturday"]

}

// access 
// console.log(JsUser.age);

//another way to access
// console.log(JsUser["age"]);  //Right way
// console.log(JsUser[age]);  //wrong way

// console.log(JsUser["full name"]);// can't access without [ ]

// console.log(JsUser[mySym]); // can't access without [ ]
console.log(typeof JsUser[mySym]);// can't access without [ ]
// console.log(typeof mySym);

JsUser.age = 30;

// Object.freeze(JsUser) //can't change JsUser values
// JsUser.age = 20
// console.log(JsUser);

//Function in object
JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); //string interpolation //NOTE --> this
}

console.log(JsUser.greeting); //out -> [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

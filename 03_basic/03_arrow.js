const user ={
    username:"Alisa",
    price:999,

    //this keyword for current context
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="john"
// user.welcomeMessage()

// console.log(this); // this return {} in node environment but not in browser

//NOTE - window is global objec in browser

/*Arrow function */

// function code(){
//     let username = "johnson"
//     console.log(this.username); // can't use this here because it works only with objects
// }
// code()


// const code = function(){
//     let username = "alison"
//     console.log(this.username); //(this) don't work here also
// }

const code = () => {  //Arrow Function
    let username = "alison"
    console.log(this); // (this) don't work here also
}
// code()

// Arrow function syntax

// () => {}

// Holding arrow function in a variable

// const addTwo = (num1, num2) => {  //Basic syntax for Arrow function
//     return num1+num2  //NOTE ->  return keyword required with { }
// }


//Implicit return syntax for arrow function

// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2) //NOTE -> no need to write (return) keyword with ( )
                                                                                /* || */
const addTwo = (num1, num2) => ({username:"johnson"}) //But with object there is change in scenario

// console.log(addTwo(2,3));}
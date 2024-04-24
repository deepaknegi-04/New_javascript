// function Name(){
//     console.log("john");
// }
// Name()


// function addTwoNumber(number1, number2)//Parameters
// {
//     console.log(number1 + number2); 
// }
// const result = addTwoNumber(2, 2)//Arguments
// console.log("Result:",result); //Undefinned

// function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result;

// return number1 + number2;
//    console.log("john"); // will not execute after return
// }

//NOTE - Empty string considered as false value

// function loginUserMessage(username="sam") // default value is sam and if user pass any parameter then it will be overwrite
function loginUserMessage(username){
    // if( username === undefined)
    if(!username) { //if argument is not passed
        console.log("please enter username");
        return 
     }
        return `${username} just logged in`
}

loginUserMessage("johnson")// NOTE - will not print return statement

// console.log(loginUserMessage("johnson"));
//NOTE - if no argument is passed -> undefine

//****************************************

function calculateCartPrice(val1, val2, ...num1) { // (...) is rest operator
return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000)); 


const user ={
    username:"johnson",
    price:199
}

//passing object to function
function handleObject(anyObject){ 
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) //function call

handleObject({  //object can pass directly into function like this
    username:"sam",
    price:299
})

const myNewArray =[200, 300, 400]

function returnSecondValue(getArray){
 return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000, 3444, 5000])); // passing array directly into function
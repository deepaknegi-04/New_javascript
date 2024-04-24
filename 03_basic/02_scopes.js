// var c = 300 //Ignore using var   

let a = 300
if (true) { // block scope
    let a = 10
    const b = 20
    // console.log("Inner:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);



//Nested Scope

function one(){
    const username = "Raj"

    function two(){
        const website ="youtube"
        console.log(username); //child function can access parent variable
    }
    console.log(website);

    two()
}
// one()


if(true){
    const username = "Cherry"
    if(username === "Cherry"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++++++++++++++ interesting +++++++++++++++++++

//Hoisting
console.log(addone(5));
function addone(num){
return num + 1
}

// console.log(addTwo(5)); //can't access before in this case
const addTwo = function(num){
    return num + 2
}

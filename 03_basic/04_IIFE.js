// (IIFE) --> Immediately Invoked Function Expressions 

//named iife
(function code(){
    console.log(`DB CONNECTED`);
})();  //  NOTE -> (;)semicolon should always use after function because without ; it  will give an error in some cases for (context)

// ()()  --> syntax
//first () for fucntion definition and second () for execution

//Why iife used ?
// iife use for immediate function execution
// IMP -> To prevent from global scope pollution


//unnamed iife
( (name) => { //argument
    console.log(`DB CONNECTED TWO ${name}`)
} )('sql')   //parameter
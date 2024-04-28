// const code = ["js", "rb", "py"]

//for each loop for array
// code.forEach(function  (i) { //no name of function
//     console.log(i);
// })

//  code.forEach( (item)=> {
//     console.log(item);
//  })


// function printMe(item){
//     console.log(item);
// }
// code.forEach(printMe)//passin only reference


// code.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCode =[
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
]
myCode.forEach( (object) => {
    console.log(object.languageName);
})  //usecase: Databese (data)
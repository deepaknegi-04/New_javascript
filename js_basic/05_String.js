// const name = "john"
// const repocount = 50

// console.log(name + " " +repocount);//not a good practice
//String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


//Another way to declare string
const newname = new String('hallyjohn')
console.log(newname.length);

// console.log(newname[0]);
// console.log(newname.__proto__);
// console.log(newname.length);
// console.log(newname.toUpperCase());
// console.log(newname.charAt([1]));
// console.log(newname.indexOf('l'));

//  const newstring =newname.substring(0, 4)
// console.log(newstring);



// const anotherstring = newname.slice(-9,7);
// console.log(anotherstring);

// const str = " hitesh  "
// console.log(str);
// console.log(str.trim()); 

const url ="https://google.com/google%20com"

console.log(url.replace('%20', '-'));
console.log(url.includes('google'))

console.log(newname.split('-'));
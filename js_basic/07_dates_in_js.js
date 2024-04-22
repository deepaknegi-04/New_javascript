// let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let newdate = new Date(2023, 0, 23) // month start with 0 in js
// let newdate = new Date(2023, 0, 23, 3,5,35) 
//  let newdate = new Date("2023-01-23") 
//  let newdate = new Date("01-23-2024") 

// console.log(newdate.toString());
// console.log(newdate.toLocaleString());
// console.log(newdate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newdate.getTime());

// console.log(Math.floor(Date.now()/1000)); // Time in seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1); 
// console.log(newDate.getDay()); // Starts from Monday

// ` the day is ${newDate.getDay()}`
console.log( newDate.toLocaleString('default', {weekday:"long"}));


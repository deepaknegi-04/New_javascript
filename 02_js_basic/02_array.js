const marvel_heros = ["Thor", "Ironman","Spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



const allHeros = marvel_heros.concat(dc_heros) // Return new array
// console.log(allHeros);

//spread operator
const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// multiple array 
// const another_array = [1,2,3, [4,5,6], 7, [6,7 , [4,5]]];
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log( Array.isArray("john"))
console.log(Array.from("john"));

//interesting case
console.log(Array.from({name:"johnson"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
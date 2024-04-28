//reduce()

const myNums = [1,2,3,4,5]

// const myTotal =  myNums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and currval:${curval}`);
//     return acc + curval
// }, 0)

// in arrow function

const myTotal = myNums.reduce((acc, currval) => acc+currval,0)

// console.log(myTotal);

// another example

const shoppingCart = [
    {
        itemName:"js course",
        price:4599
    },
    {
        itemName:"py course",
        price:5699
    },
    {
        itemName:"data science course",
        price:10599
    }
]


// total by self
// const totalPrice = shoppingCart.map((SC)=>  SC.price)
// const finalPrice = totalPrice.reduce((a,c)=> a+c,0)
// console.log(finalPrice);

//by sir 
const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price),0)
 
console.log(totalPrice);